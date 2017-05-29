$store.fonts = _.extend(new Baobab([
    {
        _id: "helvetica",
        title: {
            en: "Basic",
            ru: "Базовый"
        }
    },
    {
        _id: "myriad",
        title: {
            en: "Intelligent",
            ru: "Интеллигентный"
        }
    },
    {
        _id: "museo",
        title: {
            en: "Graceful",
            ru: "Изящный"
        }
    },
    {
        _id: "futura",
        title: {
            en: "Futuristic",
            ru: "Футуристичный"
        }
    },
    {
        _id: "gotham",
        title: {
            en: "Massive",
            ru: "Массивный"
        }
    },
    {
        _id: "proxima",
        title: {
            en: "Respectable",
            ru: "Респектабельный"
        }
    }
    ]),
    {
        getItems: function(lang){
            return _.map($store.fonts.get(), function(item){
                return {
                    _id: item._id,
                    title: item.title[lang || $store.resume.get("lang")]
                }
            });
        },
        getTitleById: function(id, lang){
            return $store.fonts.get({"_id": id}, "title", lang || $store.resume.get("lang"));
        }
    }
);
