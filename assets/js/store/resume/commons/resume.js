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
            premium: function(mode){
                if (mode == "editing"){
                    $store.resume.set(_.deepExtend({
                        tags: null,
                        appeal: null,
                        works: null,
                        skills: null,
                        education: null,
                        courses: null,
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
                                short: "Зарплата",
                                control: true,
                                active: true
                            },
                            {
                                name: "tags",
                                title: "Ключевые навыки",
                                short: "Навыки",
                                control: true,
                                active: true
                            },
                            {
                                name: "appeal",
                                title: "Заголовок-обращение",
                                short: "Обращение",
                                control: true,
                                active: true
                            },
                            {
                                name: "about",
                                title: "О себе текст",
                                short: "О себе",
                                control: true,
                                active: true
                            },
                            {
                                name: "social",
                                title: "Аккаунты в соц. сетях",
                                short: "Соц. ссылки",
                                control: true,
                                active: true
                            },
                            {
                                name: "works",
                                title: "Мои проекты",
                                short: "Проекты",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "skills",
                                title: "Основные компетенции",
                                short: "Навыки",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "education",
                                title: "Образование",
                                short: "Учеба",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "courses",
                                title: "Курсы",
                                short: "Курсы",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "languages",
                                title: "Владение языками",
                                short: "Языки",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "jobs",
                                title: "Работа в компаниях",
                                short: "Карьера",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "hobby",
                                title: "Мои хобби",
                                short: "Хобби",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "contacts",
                                title: "Контакты",
                                short: "Контакты",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "feedback",
                                title: "Обратная связь",
                                short: "Обратная связь",
                                screen: true,
                                control: true,
                                active: true
                            },
                            {
                                name: "coverletter",
                                title: "Сопроводительное письмо",
                                short: "Письмо",
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
                                noise: false
                            },
                            likes: {
                                active: true,
                                count: true
                            }
                        }
                    }, $store.resume.get()));
                }

                return $store.resume.get();
            }
        },
        default: {
            resume: function(params){
                return {
                    accountId: params.ACCOUNT_ID,
                    public: true,
                    plan: params.plan,
                    template: params.template ? params.template : "1",
                    lang: "ru",
                    post: null,
                    photo: params.photo,
                    create: moment().format(),
                    update: moment().format(),
                    commons: {
                        name: params.name,
                        surname: params.surname,
                        gender: params.gender,
                        birthday: params.birthday,
                        contacts: params.contacts
                    },
                    salary: params.plan == "free" ? $store.resume.default.salary() : null,
                    about: null,
                    social: null,
                    education: null,
                    languages: null,
                    jobs: null,
                    percent: 0,
                    config: {
                        photo: {
                            minWidth: 440,
                            maxHeight: 620
                        },
                        pdf: {
                            logotype: params.plan == "free" ? true : false
                        },
                        stat: false
                    }
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
        take: {
            relocate: function(){
                if ($store.resume.get('commons', 'contacts', 'relocate')){
                    var gender = $store.resume.get('commons', 'gender');
                    if (gender == "male"){
                        return '\nготов к переезду,';
                    }
                    else if (gender == "female"){
                        return '\nготова к переезду,';
                    }
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
                text: "Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa."
            },
            skills: {
                title: function(){
                    return $i18n("resume.premium.template.Main skills");
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
                text: "Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa. Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa."
            },
            courses: {
                title: function(){
                    return $i18n("resume.premium.template.Courses");
                },
                text: "Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa. Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa."
            },
            languages: {
                title: function(){
                    return $i18n("resume.premium.template.Languages");
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
                text: "Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa."
            },
            hobby: {
                title: function(){
                    return $i18n("resume.premium.template.My hobby");
                },
                text: "Vivamus eu neque ut sem malesuada consectetur sed sed felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. ullam et eros ornare, porttitor urna sed, auctor lacus. Morbi viverra lorem at neque tincidunt consequat. Aenean massa."
            }
        }
    }
);
