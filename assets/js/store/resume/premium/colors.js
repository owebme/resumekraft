$store.colors = _.extend(new Baobab([
    {
        _id: "#0084ff",
        title: "blueLight"
    },
    {
        _id: "#265cdc",
        title: "blue"
    },
    {
        _id: "#74b027",
        title: "green"
    },
    {
        _id: "#0bb5b7",
        title: "emerald"
    },
    {
        _id: "#ff7272",
        title: "pink"
    },
    {
        _id: "#d93663",
        title: "red"
    },
    {
        _id: "#c1a16b",
        title: "brown"
    },
    {
        _id: "#ea7f07",
        title: "orange"
    },
    {
        _id: "#ab81cd",
        title: "violetLight"
    },
    {
        _id: "#5856d6",
        title: "violet"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.colors.get(), {"_id": id}).title;
        }
    }
);
