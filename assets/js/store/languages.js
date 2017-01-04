$store.languages = _.extend(new Baobab([
    {
        _id: "native",
        title: {
            en: "Native language",
            ru: "Родной язык"
        }
    },
    {
        _id: "en",
        title: {
            en: "English",
            ru: "Английский"
        }
    },
    {
        _id: "de",
        title: {
            en: "German",
            ru: "Немецкий"
        }
    },
    {
        _id: "fr",
        title: {
            en: "French",
            ru: "Французский"
        }
    }
    ]),
    {
        getItems: function(){
            return _.map($store.languages.get(), function(item){
                return {
                    _id: item._id,
                    title: item.title[$store.resume.get("lang")]
                }
            });
        },
        getTitleById: function(id){
            return $store.languages.get({"_id": id}, "title", $store.resume.get("lang"));
        }
    }
);

$store.languages.select = _.extend(new Baobab([
    {
        _id: "1",
        title: {
            en: "No knowledge",
            ru: "Не владею"
        }
    },
    {
        _id: "2",
        title: {
            en: "Basic knowledge",
            ru: "Базовые знания"
        }
    },
    {
        _id: "3",
        title: {
            en: "I read literature",
            ru: "Читаю литературу"
        }
    },
    {
        _id: "4",
        title: {
            en: "Can attend an interview",
            ru: "Могу проходить интервью"
        }
    },
    {
        _id: "5",
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
    {
        _id: "1",
        title: "Абазинский"
    },
    {
        _id: "2",
        title: "Абхазский"
    },
    {
        _id: "3",
        title: "Аварский"
    },
    {
        _id: "4",
        title: "Русский"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.languages.native.get(), {"_id": id}).title;
        }
    }
);
