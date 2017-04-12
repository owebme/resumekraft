$store.fonts = _.extend(new Baobab([
    {
        _id: "futura",
        title: {
            en: "Basic",
            ru: "Базовый"
        }
    },
    {
        _id: "avant",
        title: {
            en: "Classic",
            ru: "Классический"
        }
    },
    {
        _id: "gotham",
        title: {
            en: "Modern",
            ru: "Современный"
        }
    },
    {
        _id: "proxima",
        title: {
            en: "Respectable",
            ru: "Респектабельный"
        }
    },
    {
        _id: "myriad",
        title: {
            en: "Intelligent",
            ru: "Интеллигентный"
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
