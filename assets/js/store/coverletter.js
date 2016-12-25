$store.coverletter = _.extend(new Baobab([
    {
        _id: "1",
        title: "Белым по черному"
    },
    {
        _id: "2",
        title: "Черным по белому"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.coverletter.get(), {"_id": id}).title;
        }
    }
);
