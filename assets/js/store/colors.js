$store.colors = _.extend(new Baobab([
    {
        color: "#0084ff",
        title: "blueLight"
    },
    {
        color: "#265cdc",
        title: "blue"
    },    
    {
        color: "#74b027",
        title: "green"
    },
    {
        color: "#0bb5b7",
        title: "emerald"
    },
    {
        color: "#ff7272",
        title: "pink"
    },
    {
        color: "#d93663",
        title: "red"
    },
    {
        color: "#c2a36f",
        title: "brown"
    },
    {
        color: "#ea7f07",
        title: "orange"
    },
    {
        color: "#ab81cd",
        title: "violetLight"
    },
    {
        color: "#5c0bb7",
        title: "violet"
    }
    ]),
    {
        getTitleByColor: function(color){
            return _.findWhere($store.colors.get(), {"color": color}).title;
        }
    }
);
