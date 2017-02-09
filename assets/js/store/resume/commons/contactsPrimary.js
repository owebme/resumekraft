$store.contactsPrimary = _.extend(new Baobab([
    {
        _id: "any",
        title: "Любой"
    },
    {
        _id: "email",
        title: "Электронная почта"
    },
    {
        _id: "phone",
        title: "Мобильный телефон"
    },
    {
        _id: "skype",
        title: "Skype"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.contactsPrimary.get(), {"_id": id}).title;
        }
    }
);
