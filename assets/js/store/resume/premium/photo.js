$store.photoFilter = _.extend(new Baobab([
    {
        _id: "off",
        title: "Отключен"
    },
    {
        _id: "grayscale",
        title: "Grayscale"
    },
    {
        _id: "sepia",
        title: "Sepia"
    },
    {
        _id: "noir",
        title: "Noir"
    },
    {
        _id: "fade",
        title: "Fade"
    },
    {
        _id: "chrome",
        title: "Chrome"
    },
    {
        _id: "process",
        title: "Process"
    },
    {
        _id: "transfer",
        title: "Transfer"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.photoFilter.get(), {"_id": id}).title;
        }
    }
);
