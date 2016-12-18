$store.currency = _.extend(new Baobab([
    {
        _id: "1",
        title: "₽"
    },
    {
        _id: "2",
        title: "$"
    },
    {
        _id: "3",
        title: "€"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.currency.get(), {"_id": id}).title;
        }
    }
);

$store.worktime = _.extend(new Baobab([
    {
        _id: "1",
        title: "full-time"
    },
    {
        _id: "2",
        title: "Частичная"
    },
    {
        _id: "3",
        title: "Проектная"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.worktime.get(), {"_id": id}).title;
        }
    }
);
