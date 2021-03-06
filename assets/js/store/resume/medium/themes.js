$store.themes = _.extend(new Baobab([
    {
        _id: "colorful",
        title: {
            en: "Chameleon",
            ru: "Хамелеон"
        }
    },
    {
        _id: "colorsoft",
        strict: true,
        title: {
            en: "Gentle",
            ru: "Нежный"
        }
    },
    {
        _id: "white",
        strict: true,
        title: {
            en: "Clear white",
            ru: "Белокипельный"
        }
    },
    {
        _id: "cosmo",
        strict: true,
        title: {
            en: "Space",
            ru: "Космо"
        }
    },
    {
        _id: "gray",
        strict: true,
        title: {
            en: "Space gray",
            ru: "Космо cерый"
        }
    },
    {
        _id: "fire",
        title: {
            en: "Fire",
            ru: "Огонь"
        }
    },
    {
        _id: "color",
        title: {
            en: "Select color",
            ru: "Выбрать цвет"
        }
    }
    ]),
    {
        getItems: function(lang){
            return _.map($store.themes.get(), function(item){
                return {
                    _id: item._id,
                    title: item.title[lang || $store.resume.get("lang")]
                }
            });
        },
        getTitleById: function(id, lang){
            return $store.themes.get({"_id": id}, "title", lang || $store.resume.get("lang"));
        }
    }
);
