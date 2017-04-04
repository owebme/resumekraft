$store.languages = _.extend(new Baobab([
    {
        _id: "native",
        title: {
            en: "Native language",
            ru: "Родной язык"
        }
    },
    {
        _id: "eng",
        title: {
            en: "English",
            ru: "Английский"
        }
    },
    {
        _id: "deu",
        title: {
            en: "German",
            ru: "Немецкий"
        }
    },
    {
        _id: "fra",
        title: {
            en: "French",
            ru: "Французский"
        }
    }
    ]),
    {
        getItems: function(lang){
            return _.map($store.languages.get(), function(item){
                return {
                    _id: item._id,
                    title: item.title[lang || $store.resume.get("lang")]
                }
            });
        },
        getTitleById: function(id, lang){
            return $store.languages.get({"_id": id}, "title", lang || $store.resume.get("lang"));
        }
    }
);

$store.languages.select = _.extend(new Baobab([
    {
        _id: "not",
        title: {
            en: "No knowledge",
            ru: "Не владею"
        }
    },
    {
        _id: "basic",
        title: {
            en: "Basic knowledge",
            ru: "Базовые знания"
        }
    },
    {
        _id: "can_read",
        title: {
            en: "I read literature",
            ru: "Читаю литературу"
        }
    },
    {
        _id: "can_pass_interview",
        title: {
            en: "Can attend an interview",
            ru: "Могу проходить интервью"
        }
    },
    {
        _id: "fluent",
        title: {
            en: "I am a fluent speaker",
            ru: "Свободно владею"
        }
    }
    ]),
    {
        getItems: function(){
            return _.map($store.languages.select.get(), function(item){
                return {
                    _id: item._id,
                    title: item.title[$store.resume.get("lang")]
                }
            });
        },
        getTitleById: function(id){
            return $store.languages.select.get({"_id": id}, "title", $store.resume.get("lang"));
        }
    }
);

$store.languages.native = _.extend(new Baobab([
{"_id":"ron","title":"Румынский"},{"_id":"oss","title":"Осетинский"},{"_id":"mns","title":"Мансийский"},{"_id":"kbd","title":"Кабардино-черкесский"},{"_id":"ita","title":"Итальянский"},{"_id":"nld","title":"Голландский"},{"_id":"ell","title":"Греческий"},{"_id":"hrv","title":"Хорватский"},{"_id":"nor","title":"Норвежский"},{"_id":"fin","title":"Финский"},{"_id":"eus","title":"Баскский"},{"_id":"amh","title":"Амхарский"},{"_id":"dag","title":"Дагестанский"},{"_id":"fas","title":"Персидский"},{"_id":"dan","title":"Датский"},{"_id":"nog","title":"Ногайский"},{"_id":"ces","title":"Чешский"},{"_id":"mon","title":"Монгольский"},{"_id":"dar","title":"Даргинский"},{"_id":"vls","title":"Фламандский"},{"_id":"hin","title":"Хинди"},{"_id":"crs","title":"Креольский (Сейшельские острова)"},{"_id":"hye","title":"Армянский"},{"_id":"zlm","title":"Малазийский"},{"_id":"pan","title":"Панджаби"},{"_id":"bak","title":"Башкирский"},{"_id":"aze","title":"Азербайджанский"},{"_id":"ara","title":"Арабский"},{"_id":"est","title":"Эстонский"},{"_id":"abk","title":"Абхазский"},{"_id":"kur","title":"Курдский"},{"_id":"abq","title":"Абазинский"},{"_id":"kum","title":"Кумыкский"},{"_id":"nep","title":"Непальский"},{"_id":"tur","title":"Турецкий"},{"_id":"fra","title":"Французский"},{"_id":"tuk","title":"Туркменский"},{"_id":"rus","title":"Русский"},{"_id":"lez","title":"Лезгинский"},{"_id":"pus","title":"Пушту"},{"_id":"tly","title":"Талышский"},{"_id":"bos","title":"Боснийский"},{"_id":"gle","title":"Ирландский"},{"_id":"srp","title":"Сербский"},{"_id":"krl","title":"Карельский"},{"_id":"isl","title":"Исландский"},{"_id":"krc","title":"Карачаево-балкарский"},{"_id":"bod","title":"Тибетский"},{"_id":"vie","title":"Вьетнамский"},{"_id":"por","title":"Португальский"},{"_id":"uzb","title":"Узбекский"},{"_id":"chm","title":"Марийский"},{"_id":"pol","title":"Польский"},{"_id":"tgk","title":"Таджикский"},{"_id":"tyv","title":"Тувинский"},{"_id":"tgl","title":"Тагальский"},{"_id":"mke","title":"Македонский"},{"_id":"kom","title":"Коми"},{"_id":"che","title":"Чеченский"},{"_id":"swa","title":"Суахили"},{"_id":"swe","title":"Шведский"},{"_id":"ukr","title":"Украинский"},{"_id":"heb","title":"Иврит"},{"_id":"kor","title":"Корейский"},{"_id":"chv","title":"Чувашский"},{"_id":"hun","title":"Венгерский"},{"_id":"bul","title":"Болгарский"},{"_id":"bua","title":"Бурятский"},{"_id":"udm","title":"Удмуртский"},{"_id":"ben","title":"Бенгальский"},{"_id":"bel","title":"Белорусский"},{"_id":"slv","title":"Словенский"},{"_id":"deu","title":"Немецкий"},{"_id":"cat","title":"Каталанский"},{"_id":"slk","title":"Словацкий"},{"_id":"lbe","title":"Лакский"},{"_id":"zho","title":"Китайский"},{"_id":"tat","title":"Татарский"},{"_id":"sah","title":"Якутский"},{"_id":"san","title":"Санскрит"},{"_id":"uig","title":"Уйгурский"},{"_id":"jpn","title":"Японский"},{"_id":"ind","title":"Индонезийский"},{"_id":"inh","title":"Ингушский"},{"_id":"khm","title":"Кхмерский (Камбоджийский)"},{"_id":"tam","title":"Тамильский"},{"_id":"mya","title":"Бирманский"},{"_id":"spa","title":"Испанский"},{"_id":"ava","title":"Аварский"},{"_id":"som","title":"Сомалийский"},{"_id":"eng","title":"Английский"},{"_id":"lit","title":"Литовский"},{"_id":"afr","title":"Африкаанс"},{"_id":"lao","title":"Лаосский"},{"_id":"kir","title":"Кыргызский"},{"_id":"kas","title":"Кашмирский"},{"_id":"sqi","title":"Албанский"},{"_id":"kat","title":"Грузинский"},{"_id":"lat","title":"Латинский"},{"_id":"kaz","title":"Казахский"},{"_id":"lav","title":"Латышский"},{"_id":"urd","title":"Урду"},{"_id":"epo","title":"Эсперанто"},{"_id":"tha","title":"Тайский"}
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.languages.native.get(), {"_id": id}).title;
        }
    }
);
