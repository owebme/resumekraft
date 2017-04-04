$store.langs = _.extend(new Baobab([
    {
        _id: "ru",
        title: "Русский"
    },
    {
        _id: "en",
        title: "Английский"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.langs.get(), {"_id": id}).title;
        }
    }
);
