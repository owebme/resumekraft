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
            return _.findWhere($store.contactsPrimary.get(), {"_id": id}).title;
        }
    }
);