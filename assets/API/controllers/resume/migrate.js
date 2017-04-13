module.exports = function(){

	var API = {},
		ids = [];

	API.accounts = function(){
		setTimeout(function(){
	        var accounts = [],
				resumes = [];

	        app.utils.each([app.store.migrate.users[0]], function(item, i){
				var ObjectId = app.utils.ObjectId(item.apl_id);
				ids.push({
					id: item.apl_id,
					ObjectId: ObjectId,
				})
	            accounts.push(accountBuild.get(ObjectId, item));
	        })
			app.utils.each([app.store.migrate.resumes[0]], function(item, i){
	            resumes.push(resumesBuild.get(app.utils.findWhere(ids, {"id": item.uid}).ObjectId, item));
	        })

			app.db.collection('accounts').drop();
			app.db.collection('resumes').drop();
			app.db.collection('accounts').insert(accounts);
			app.db.collection('resumes').insert(resumes);

		}, 1000);
    };

	var resumesBuild = {
		get: function(id, item){
			return {
				accountId: id,
				public: true,
				plan: "free",
				template: item.r_maket && String(item.r_maket - 1000) || "7",
				lang: "ru",
				post: item.r_name,
				create: app.moment(item.r_date_create).format(),
				update: app.moment().format(),
				commons: {
					photo: null,
                    name: item.r_name_i || null,
                    surname: item.r_name_f || null,
                    gender: item.r_gender || "male",
                    birthday: accountBuild.birthday(item.r_birthday, item.r_birthday_hide),
                    citizenship: null,
                    businessTrip: null,
                    relocation: null,
                    relocationCity: null,
                    travelTime: null,
                    specialization: [],
                    employments: [],
                    schedules: [],
                    contacts: {
                        city: accountBuild.city(item.r_city),
                        metro: null,
                        email: item.r_email,
                        phone: item.r_phone || null,
                        primary: null,
                        site: null,
                        skype: item.r_skype || null
                    }
				},
				salary: {
					amount: item.r_salary || "50000",
					currency: "1",
					worktime: "1",
					active: item.r_salary ? true : false
				},
				tags: null,
				about: item.r_about_me,
				social: null,
				education: resumesBuild.education(item.r_id),
				courses: null,
				languages: resumesBuild.languages(item.r_id),
				jobs: resumesBuild.jobs(item.r_id),
				percent: String(item.r_percent)
			}
		},
		education: function(id){
			var items = app.utils.where(app.store.migrate.resumesEducation, {"rid": id});
			if (!app.utils.isEmpty(items)){
				return {
					title: null,
					text: null,
					level: app.utils.findWhere(items, {"r_educationMain": 1}).r_education,
					items: app.utils.map(items, function(item, i){
						if (item.r_education == "secondary"){
							return {
								id: String(i + 1),
								title: item.r_secondaryEducation_name,
								faculty: null,
								speciality: null,
								year: item.r_secondaryEducation_year

							}
						}
						else {
							return {
								id: String(i + 1),
								title: item.r_primaryEducation_name,
								faculty: item.r_primaryEducation_faculty,
								speciality: null,
								year: item.r_primaryEducation_year

							}
						}
					})
				}
			}
			else {
				return null;
			}
		},
		languages: function(id){
			var item = app.utils.findWhere(app.store.migrate.resumesLanguage, {"rid": id});
			if (!app.utils.isEmpty(item)){
				var native = app.utils.isNumber(item.r_lang_native) && item.r_lang_native < 107 && app.utils.findWhere(app.store.migrate.langList, {"id": item.r_lang_native}) || null;
				if (native){
					native = app.utils.findWhere(resumesBuild.languagesNative, {"title": native.lang})._id;
				}
				if (!native) native = "rus";
				return {
					title: null,
					text: null,
					items: [
						{
							title: "native",
							value: native
						},
						{
							title: "eng",
							value: resumesBuild.languagesList[item.r_lang_en - 1]
						},
						{
							title: "deu",
							value: resumesBuild.languagesList[item.r_lang_de - 1]
						},
						{
							title: "fra",
							value: resumesBuild.languagesList[item.r_lang_fr - 1]
						}
					]
				}
			}
			else {
				return null;
			}
		},
		jobs: function(id){
			var items = app.utils.where(app.store.migrate.resumesJob, {"rid": id});
			if (!app.utils.isEmpty(items)){
				return {
					title: null,
					text: null,
					experience: String(resumesBuild.experience(items)),
					items: app.utils.map(items, function(item, i){
						return {
							id: String(i + 1),
							title: item.r_job_company,
							city: item.r_job_city,
							post: item.r_job_post,
							from: {
								month: item.r_job_month_from,
								year: item.r_job_year_from
							},
							to: {
								month: item.r_job_month_to,
								year: item.r_job_year_to
							},
							text: item.r_job_desc,
							last: !!item.r_jobLast
						}
					})
				}
			}
			else {
				return null;
			}
		},
		experience: function(items){
			var day = new Date().getDate();

			return app.utils.reduce(items, function(memo, item){
				var months = 0;

				if (item.r_jobLast){
					months = app.moment().diff(item.r_job_year_from + '-' + (item.r_job_month_from < 10 ? '0' + item.r_job_month_from : item.r_job_month_from) + '-' + (day < 10 ? '0' + day : day), 'month');
				}
				else {
					months = app.moment(item.r_job_year_to + '-' + (item.r_job_month_to < 10 ? '0' + item.r_job_month_to : item.r_job_month_to) + '-' + (day < 10 ? '0' + day : day)).diff(item.r_job_year_from + '-' + (item.r_job_month_from < 10 ? '0' + item.r_job_month_from : item.r_job_month_from) + '-' + (day < 10 ? '0' + day : day), 'month');
				}

				return memo + (months > 0 ? months : 0);
			}, 0);
		},
		languagesList: ['not', 'basic', 'can_read', 'can_pass_interview'],
		languagesNative: [
		{"_id":"ron","title":"Румынский"},{"_id":"oss","title":"Осетинский"},{"_id":"mns","title":"Мансийский"},{"_id":"kbd","title":"Кабардино-черкесский"},{"_id":"ita","title":"Итальянский"},{"_id":"nld","title":"Голландский"},{"_id":"ell","title":"Греческий"},{"_id":"hrv","title":"Хорватский"},{"_id":"nor","title":"Норвежский"},{"_id":"fin","title":"Финский"},{"_id":"eus","title":"Баскский"},{"_id":"amh","title":"Амхарский"},{"_id":"dag","title":"Дагестанский"},{"_id":"fas","title":"Персидский"},{"_id":"dan","title":"Датский"},{"_id":"nog","title":"Ногайский"},{"_id":"ces","title":"Чешский"},{"_id":"mon","title":"Монгольский"},{"_id":"dar","title":"Даргинский"},{"_id":"vls","title":"Фламандский"},{"_id":"hin","title":"Хинди"},{"_id":"crs","title":"Креольский (Сейшельские острова)"},{"_id":"hye","title":"Армянский"},{"_id":"zlm","title":"Малазийский"},{"_id":"pan","title":"Панджаби"},{"_id":"bak","title":"Башкирский"},{"_id":"aze","title":"Азербайджанский"},{"_id":"ara","title":"Арабский"},{"_id":"est","title":"Эстонский"},{"_id":"abk","title":"Абхазский"},{"_id":"kur","title":"Курдский"},{"_id":"abq","title":"Абазинский"},{"_id":"kum","title":"Кумыкский"},{"_id":"nep","title":"Непальский"},{"_id":"tur","title":"Турецкий"},{"_id":"fra","title":"Французский"},{"_id":"tuk","title":"Туркменский"},{"_id":"rus","title":"Русский"},{"_id":"lez","title":"Лезгинский"},{"_id":"pus","title":"Пушту"},{"_id":"tly","title":"Талышский"},{"_id":"bos","title":"Боснийский"},{"_id":"gle","title":"Ирландский"},{"_id":"srp","title":"Сербский"},{"_id":"krl","title":"Карельский"},{"_id":"isl","title":"Исландский"},{"_id":"krc","title":"Карачаево-балкарский"},{"_id":"bod","title":"Тибетский"},{"_id":"vie","title":"Вьетнамский"},{"_id":"por","title":"Португальский"},{"_id":"uzb","title":"Узбекский"},{"_id":"chm","title":"Марийский"},{"_id":"pol","title":"Польский"},{"_id":"tgk","title":"Таджикский"},{"_id":"tyv","title":"Тувинский"},{"_id":"tgl","title":"Тагальский"},{"_id":"mke","title":"Македонский"},{"_id":"kom","title":"Коми"},{"_id":"che","title":"Чеченский"},{"_id":"swa","title":"Суахили"},{"_id":"swe","title":"Шведский"},{"_id":"ukr","title":"Украинский"},{"_id":"heb","title":"Иврит"},{"_id":"kor","title":"Корейский"},{"_id":"chv","title":"Чувашский"},{"_id":"hun","title":"Венгерский"},{"_id":"bul","title":"Болгарский"},{"_id":"bua","title":"Бурятский"},{"_id":"udm","title":"Удмуртский"},{"_id":"ben","title":"Бенгальский"},{"_id":"bel","title":"Белорусский"},{"_id":"slv","title":"Словенский"},{"_id":"deu","title":"Немецкий"},{"_id":"cat","title":"Каталанский"},{"_id":"slk","title":"Словацкий"},{"_id":"lbe","title":"Лакский"},{"_id":"zho","title":"Китайский"},{"_id":"tat","title":"Татарский"},{"_id":"sah","title":"Якутский"},{"_id":"san","title":"Санскрит"},{"_id":"uig","title":"Уйгурский"},{"_id":"jpn","title":"Японский"},{"_id":"ind","title":"Индонезийский"},{"_id":"inh","title":"Ингушский"},{"_id":"khm","title":"Кхмерский (Камбоджийский)"},{"_id":"tam","title":"Тамильский"},{"_id":"mya","title":"Бирманский"},{"_id":"spa","title":"Испанский"},{"_id":"ava","title":"Аварский"},{"_id":"som","title":"Сомалийский"},{"_id":"eng","title":"Английский"},{"_id":"lit","title":"Литовский"},{"_id":"afr","title":"Африкаанс"},{"_id":"lao","title":"Лаосский"},{"_id":"kir","title":"Кыргызский"},{"_id":"kas","title":"Кашмирский"},{"_id":"sqi","title":"Албанский"},{"_id":"kat","title":"Грузинский"},{"_id":"lat","title":"Латинский"},{"_id":"kaz","title":"Казахский"},{"_id":"lav","title":"Латышский"},{"_id":"urd","title":"Урду"},{"_id":"epo","title":"Эсперанто"},{"_id":"tha","title":"Тайский"}]
	};

    var accountBuild = {
		get: function(id, user){
            return {
                _id: id,
                isOld: true,
                plan: "free",
                balance: 0,
                login: user.apl_login.toLowerCase(),
                password: user.apl_pass,
                init: {
                    plan: "free",
                    device: "desktop",
                    location: null
                },
                commons: {
                    photo: null,
                    name: user.apl_name_i || null,
                    surname: user.apl_name_f || null,
                    gender: user.apl_gender || "male",
                    birthday: accountBuild.birthday(user.apl_birthday, user.apl_birthday_hide),
                    citizenship: null,
                    businessTrip: null,
                    relocation: null,
                    relocationCity: null,
                    travelTime: null,
                    specialization: [],
                    employments: [],
                    schedules: [],
                    contacts: {
                        city: accountBuild.city(user.apl_city),
                        metro: null,
                        email: user.apl_login,
                        phone: user.apl_phone || null,
                        primary: null,
                        site: null,
                        skype: user.apl_skype || null,
						socialProfile: user.apl_soc_profile || null
                    }
                },
                history: {
                    events: [],
                    visits: []
                },
                payment: [],
                metrika: [],
                log: [],
                visits: 0,
                paid: null,
                create: app.moment(user.apl_date_create).format(),
                update: app.moment().format(),
                visite: null
            }
        },
        city: function(value){
            if (value){
                var city = value;
                if (app.utils.isNumber(value)){
                    var item = app.utils.deepFindWhere(app.store.migrate.city, "id", value);
                    if (item) city = item.city
                }
                var item = app.utils.deepFindWhere(app.store.jobs.area, "name", city);
                if (item){
                    return {
                        id: item.id,
                        name: item.name
                    }
                }
                else {
                    return null;
                }
            }
			else {
				return null;
			}
        },
        birthday: function(value, hidden){
            if (value && value.match(/\d+-\d+-\d+/)){
	            return {
	                day: parseInt(value.match(/(\d+)-(\d+)-(\d+)/)[3]),
	                month: parseInt(value.match(/(\d+)-(\d+)-(\d+)/)[2]),
	                year: parseInt(value.match(/(\d+)-(\d+)-(\d+)/)[1]),
	                hidden: !!hidden
	            }
			}
			else {
				return {
	                day: "1",
	                month: "1",
	                year: "1990",
	                hidden: true
	            }
			}
        }
    };

    return API;
};
