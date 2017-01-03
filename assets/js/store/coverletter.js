$store.coverletter = _.extend(new Baobab([
    {
        _id: "1",
        color: "black",
        title: "Белым по черному"
    },
    {
        _id: "2",
        color: "white",
        title: "Черным по белому"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.coverletter.get(), {"_id": id}).title;
        },
        getColorById: function(id){
            return _.findWhere($store.coverletter.get(), {"_id": id}).color;
        }
    }
);
