$store.coverletter = _.extend(new Baobab([
    {
        _id: "1",
        title: "Белый текст на темном"
    },
    {
        _id: "2",
        title: "Черный текст на светлом"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.coverletter.get(), {"_id": id}).title;
        }
    }
);
