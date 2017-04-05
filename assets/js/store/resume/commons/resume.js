$store.resume = _.extend(new Baobab({},
    {
        autoCommit: true
    }),
    {
        prepare: {
            demo: function(){
                if ($store.demo) $store.resume.set($store.demo);
                return $store.resume.get();
            },
            import: function(data){
                if (data && data.resume){
        			var options = data.options || {},
                        resume = data.resume,
                        account = data.account;

                    resume.public = options.public ? true : false;
                    resume.plan = options.plan || "free";
                    resume.template = "1";
                    resume.commons.photo = options.photo || resume.commons.photo;

        			if (account){
        				resume.accountId = account._id;
        				resume.commons.name = account.commons.name;
        				resume.commons.surname = account.commons.surname;
        				resume.commons.contacts = account.commons.contacts;
        				resume.commons.birthday.hidden = account.commons.birthday.hidden;
        			}
                    if (resume.plan == "premium"){
                        resume = $store.resume.prepare.premium(resume);
                        resume.percent = $store.resume.percentage.calc("premium", resume);
                    }
                    else {
                        resume.percent = $store.resume.percentage.calc("free", resume);
                    }

        			return resume;
        		}
        		else {
        			return data;
        		}
            },
            premium: function(data, update){
                if (data){
                    var resume = _.deepExtend({
                        appeal: null,
                        works: null,
                        skills: null,
                        hobby: null,
                        coverletter: {
                            text: null,
                            color: "1"
                        },
                        likes: [],
                        sections: [
                            {
                                name: "salary",
                                title: "Желаемая зарплата",
                                control: true,
                                active: true
                            },
                            {
                                name: "tags",
                                title: "Ключевые навыки",
                                control: true,
                                active: true
                            },
                            {
                                name: "appeal",
                                title: "Заголовок-обращение",
                                control: true,
                                active: true
                            },
                            {
                                name: "about",
                                title: "О себе текст",
                                control: true,
                                active: true
                            },
                            {
                                name: "social",
                                title: "Аккаунты в соц. сетях",
                                control: true,
                                active: true
                            },
                            {
                                name: "works",
                                title: "Мои проекты",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "skills",
                                title: "Основные компетенции",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "education",
                                title: "Образование",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "courses",
                                title: "Курсы",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "languages",
                                title: "Владение языками",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "jobs",
                                title: "Работа в компаниях",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "hobby",
                                title: "Мои хобби",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "contacts",
                                title: "Контакты",
                                screen: true,
                                control: false,
                                active: true
                            },
                            {
                                name: "more",
                                title: "Командировки",
                                screen: true,
                                control: false,
                                active: true
                            },
                            {
                                name: "feedback",
                                title: "Обратная связь",
                                screen: true,
                                control: false,
                                active: true
                            },
                            {
                                name: "coverletter",
                                title: "Сопроводительное письмо",
                                screen: true,
                                control: false,
                                active: false
                            }
                        ],
                        config: {
                            color: "#0084ff",
                            font: "futura",
                            photo: {
                                minWidth: 440,
                                maxHeight: 620,
                                noise: false,
                                filter: "off"
                            },
                            likes: {
                                active: true,
                                count: true
                            },
                            animate: false
                        }
                    }, data);

                    if (update){
                        $store.resume.set(resume);
                        return $store.resume.get();
                    }
                    else {
                        return resume;
                    }
                }
                else {
                    return data;
                }
            }
        },
        default: {
            resume: function(data){
                return {
                    accountId: data.ACCOUNT_ID || null,
                    public: true,
                    plan: data.plan || "free",
                    template: data.template || "1",
                    lang: "ru",
                    post: null,
                    create: moment().format(),
                    update: moment().format(),
                    commons: data.commons || null,
                    salary: $store.resume.default.salary(),
                    tags: null,
                    about: null,
                    social: null,
                    education: null,
                    courses: null,
                    languages: null,
                    jobs: null,
                    percent: $store.resume.percentage.calc(data.plan || "free", {
                        commons: data.commons
                    })
                }
            },
            salary: function(){
                return {
                    amount: "50000",
                    currency: "1",
                    worktime: "1",
                    graph: {
                        active: false,
                        items: ["50000", "50000", "50000", "50000", "50000", "50000"]
                    },
                    active: true
                }
            }
        },
        percentage: {
            keys: {
                free: [
                    { name: "post", points: 3 },
                    { name: "commons.photo", points: 5 },
                    { name: "commons.name", points: 3 },
                    { name: "commons.surname", points: 3 },
                    { name: "commons.citizenship", points: 3 },
                    { name: "commons.contacts.city", points: 3 },
                    { name: "commons.contacts.email", points: 3 },
                    { name: "commons.contacts.phone", points: 3 },
                    { name: "commons.contacts.skype", points: 3 },
                    { name: "salary.active", points: 5 },
                    { name: "about", points: 10 },
                    { name: "jobs", items: 5, points: 15 },
                    { name: "education", items: 5, points: 10 },
                    { name: "courses", items: 2, points: 4 },
                    { name: "tags", points: 10 },
                    { name: "languages", points: 10 }
                ],
                premium: [
                    { name: "post", points: 3 },
                    { name: "commons.photo", points: 5 },
                    { name: "commons.name", points: 3 },
                    { name: "commons.surname", points: 3 },
                    { name: "commons.citizenship", points: 3 },
                    { name: "commons.contacts.city", points: 3 },
                    { name: "commons.contacts.email", points: 3 },
                    { name: "commons.contacts.phone", points: 3 },
                    { name: "commons.contacts.skype", points: 3 },
                    { name: "salary", section: true, points: 5 },
                    { name: "about", section: true, points: 5 },
                    { name: "appeal", section: true, points: 3 },
                    { name: "tags", section: true, points: 10 },
                    { name: "social", section: true, points: 5 },
                    { name: "works", section: true, points: 8 },
                    { name: "works.text", section: true, points: 2 },
                    { name: "jobs", section: true, points: 8 },
                    { name: "jobs.text", section: true, points: 2 },
                    { name: "skills", section: true, points: 6 },
                    { name: "skills.header", section: true, points: 2 },
                    { name: "skills.text", section: true, points: 2 },
                    { name: "education", section: true, points: 8 },
                    { name: "education.text", section: true, points: 2 },
                    { name: "courses", section: true, points: 8 },
                    { name: "courses.text", section: true, points: 2 },
                    { name: "languages", section: true, points: 8 },
                    { name: "languages.text", section: true, points: 2 },
                    { name: "hobby", section: true, points: 4 },
                    { name: "hobby.text", section: true, points: 1 },
                    { name: "coverletter.text", section: true, points: 5 }
                ]
            },
            calc: function(plan, data, fn){
                if (!data) return 0;

                var store = !data._cursors ? new Baobab(data) : data,
                    p = 0;

                if (plan == "free"){
                    var keys = $store.resume.percentage.keys.free,
                        all = _.reduce(_.pluck(keys, 'points'), function(memo, num){ return memo + num; }, 0);

                    _.each(keys, function(item){
                        if (store.get(item.name.split("."))){
                            if (item.items){
                                var items = store.get(item.name, "items");
                                if (items && items.length){
                                    if (item.items + 1 > items.length){
                                        p += items.length * item.points;
                                    }
                                    else {
                                        p += item.items * item.points;
                                    }
                                }
                            }
                            else {
                                p += item.points;
                            }
                        }
                    });
                }
                else if (plan == "premium"){
                    var keys = $store.resume.percentage.keys.premium,
                        all = _.reduce(_.pluck(keys, 'points'), function(memo, num){ return memo + num; }, 0);

                    _.each(keys, function(item){
                        if (store.get(item.name.split("."))){
                            if (item.section && !item.name.match(/\./)){
                                if (store.get("sections", {"name": item.name}, "active")){
                                    p += item.points;
                                }
                            }
                            else {
                                p += item.points;
                            }
                        }
                    });
                }

                var result = Math.floor((p / all) * 100);

                result = result > 100 ? 100 : result;

                if (fn){
                    fn(result);
                }
                else {
                    return result;
                }
            }
        },
        take: {
            color: function(data){
                var data = data || $store.resume.get();
                if (data && data.config && data.config.color){
                    return data.config.color;
                }
                else {
                    return "#0084ff";
                }
            },
            relocation: function(){
                var lang = $store.resume.get("lang"),
                    value = $store.resume.get('commons', 'relocation'),
                    gender = $store.resume.get('commons', 'gender');

                if (lang == "ru"){
                    if (value == "no_relocation"){
                        if (gender == "female"){
                            return 'не готова к переезду';
                        }
                        else {
                            return 'не готов к переезду';
                        }
                    }
                    else if (value == "relocation_possible"){
                        if (gender == "female"){
                            return 'готова к переезду';
                        }
                        else {
                            return 'готов к переезду';
                        }
                    }
                    else {
                        return $store.dictionary.getTitleById(value, "relocation");
                    }
                }
                else {
                    return $store.dictionary.getTitleById(value, "relocation");
                }
            },
            birthday: {
                date: function(){
                    var b = $store.resume.get('commons', 'birthday'),
                        month = b.month < 10 ? "0" + b.month : b.month,
                        day = b.day < 10 ? "0" + b.day : b.day;

                    return moment(b.year + "-" + month + "-" + day).format('D MMMM YYYY');
                },
                age: function(){
                    var lang = $store.resume.get("lang"),
                        b = $store.resume.get('commons', 'birthday'),
                        month = b.month < 10 ? "0" + b.month : b.month,
                        day = b.day < 10 ? "0" + b.day : b.day,
                        years = moment().diff(moment(b.year + "-" + month + "-" + day), 'years');

                    if (years == "1") years = years + (lang == "ru" ? " год" : " year");
                    else if (years > 1 && years < 5) years = years + (lang == "ru" ? " года" :  "year");
                    else years = years + (lang == "ru" ? " лет" : " year");

                    return years;
                }
            },
            salary: {
                amount: function(salary){
                    return _.numberFormat(salary || $store.resume.get('salary', 'amount'), 0, ".", ".");
                },
                currency: function(currency){
                    return $store.currency.getTitleById(currency || $store.resume.get('salary', 'currency'));
                },
                worktime: function(worktime, lang){
                    return $store.worktime.getTitleById(worktime || $store.resume.get('salary', 'worktime'), lang);
                }
            },
            education: {
                items: function(){
                    return _.sortArray($store.resume.get('education', 'items'), "year", "desc");
                }
            },
            courses: {
                items: function(){
                    return _.sortArray($store.resume.get('courses', 'items'), "year", "desc");
                }
            },
            jobs: {
                items: function(){
                    return $store.resume.take.jobs.sort($store.resume.get('jobs', 'items'));
                },
                period: function(item, short){
                    var lang = $store.resume.get("lang"),
                        day = new Date().getDate(),
                        months = 0,
                        years = 0,
                        f = $store.month.getTitleById(item.from.month) + " " + item.from.year;

                    if (item.last){
                        var t = (lang == "ru" ? 'по настоящее время' : 'Until Now'),
                        months = moment().diff(item.from.year + '-' + (item.from.month < 10 ? '0' + item.from.month : item.from.month) + '-' + (day < 10 ? '0' + day : day), 'month');
                    }
                    else {
                        var t = $store.month.getTitleById(item.to.month) + " " + item.to.year;
                        months = moment(item.to.year + '-' + (item.to.month < 10 ? '0' + item.to.month : item.to.month) + '-' + (day < 10 ? '0' + day : day)).diff(item.from.year + '-' + (item.from.month < 10 ? '0' + item.from.month : item.from.month) + '-' + (day < 10 ? '0' + day : day), 'month');
                    }

                    if (months > 0){
                        years = Math.floor(months / 12);
                        if (years == "1") years = years + (lang == "ru" ? ' год' : ' year');
                        else if (years > 1 && years < 5) years = years + (lang == "ru" ? ' года' : ' year');
                        else if (years < 1) years = "";
                        else years = years + (lang == "ru" ? ' лет' : ' year');
                    }
                    if (months){
                        months = months - Math.floor(months / 12) * 12;
                        if (months == "1") months = months + (lang == "ru" ? ' месяц' : ' month');
                        else if (months > 1 && months < 5) months = months + (lang == "ru" ? ' месяца' : ' months');
                        else months = months + (lang == "ru" ? ' месяцев' : ' months');
                    }
                    if (years){
                        if (short){
                            return years + (parseInt(months) > 0 ? ", " + months : "");
                        }
                        else {
                            return f + " — " + t + " (" + years + (parseInt(months) > 0 ? ", " + months : "") + ")";
                        }
                    }
                    else if (months){
                        if (short) return months;
                        else return f + " — " + t + " (" + months + ")";
                    }
                    else {
                        if (!short){
                            return f + " — " + t;
                        }
                    }
                },
                year: function(item){
                    if (item.last){
                        return new Date().getFullYear();
                    }
                    else {
                        return item.to.year;
                    }
                },
                sort: function(items){
                    return _.sortBy(items, function(item){
                        return $store.resume.take.jobs.year(item);
                    }).reverse();
                }
            },
            coverletter: {
                color: function(){
                    return $store.coverletter.getColorById($store.resume.get('coverletter', 'color'));
                }
            }
        },
        placeholder: {
            name: "Александр Иванов",
            post: "Web-Designer, Art-director, Illustrator",
            salary: {
                amount: "125000",
                currency: "1",
                worktime: "1"
            },
            tags: [
                'Adobe Photoshop', 'Ajax', 'Bootstrap', 'CSS3', 'Gulp', 'HTML5', 'JavaScript', 'jQuery', 'JSON', 'Less', 'MySQL'
            ],
            appeal: "Award winning interdisciplinary Designer & Art director. Currently pursuing a perfect blend of style and function for a wide range of interactive product design.",
            about: "Your brand is how your customers see your business. It’s shaped by the way you represent yourself – professionally, socially and visually. It’s what makes you unique. It’s what makes you desirable. It’s shorthand for everything that brings your business together.",
            social: {
                title: function(){
                    return $i18n("resume.premium.template.I am in social media");
                }
            },
            works: {
                title: function(){
                    return $i18n("resume.premium.template.My projects");
                },
                shortname: {
                    en: "Projects",
                    ru: "Проекты"
                },
                text: "Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa."
            },
            skills: {
                title: function(){
                    return $i18n("resume.premium.template.Main skills");
                },
                shortname: {
                    en: "Skills",
                    ru: "Навыки"
                },
                header: "We’re full service which means we’ve got you covered on design and content right through to digital.",
                text: "Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa.",
                items: [
                    {
                        title: "Development",
                        value: "90"
                    },
                    {
                        title: "Design",
                        value: "95"
                    },
                    {
                        title: "Marketing",
                        value: "79"
                    },
                    {
                        title: "WordPress",
                        value: "86"
                    }
                ]
            },
            education: {
                title: function(){
                    return $i18n("resume.premium.template.Education");
                },
                shortname: {
                    en: "Education",
                    ru: "Учеба"
                },
                text: "Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa. Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa."
            },
            courses: {
                title: function(){
                    return $i18n("resume.premium.template.Courses");
                },
                shortname: {
                    en: "Courses",
                    ru: "Курсы"
                },
                text: "Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa. Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa."
            },
            languages: {
                title: function(){
                    return $i18n("resume.premium.template.Languages");
                },
                shortname: {
                    en: "Langs",
                    ru: "Языки"
                },
                text: "Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
                items: [
                    {
                        title: "native",
                        value: "4"
                    },
                    {
                        title: "en",
                        value: "2"
                    },
                    {
                        title: "de",
                        value: "1"
                    },
                    {
                        title: "fr",
                        value: "1"
                    }
                ],
                help: {
                    text: 'Здесь вы можете более подробно написать уровень владения языком и/или указать сертификаты и баллы за них.'
                }
            },
            jobs: {
                title: function(){
                    return $i18n("resume.premium.template.Experience");
                },
                shortname: {
                    en: "Jobs",
                    ru: "Карьера"
                },
                text: "Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa."
            },
            hobby: {
                title: function(){
                    return $i18n("resume.premium.template.My hobby");
                },
                shortname: {
                    en: "Hobby",
                    ru: "Хобби"
                },
                text: "Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa."
            },
            contacts: {
                shortname: {
                    en: "Contacts",
                    ru: "Контакты"
                },
            }
        }
    }
);
