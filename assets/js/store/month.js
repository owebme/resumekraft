$store.month = _.extend(new Baobab([
    {
        _id: "1",
        title: "Январь"
    },
    {
        _id: "2",
        title: "Февраль"
    },
    {
        _id: "3",
        title: "Март"
    },
    {
        _id: "4",
        title: "Апрель"
    },
    {
        _id: "5",
        title: "Май"
    },
    {
        _id: "6",
        title: "Июнь"
    },
    {
        _id: "7",
        title: "Июль"
    },
    {
        _id: "8",
        title: "Август"
    },
    {
        _id: "9",
        title: "Сентябрь"
    },
    {
        _id: "10",
        title: "Октябрь"
    },
    {
        _id: "11",
        title: "Ноябрь"
    },
    {
        _id: "12",
        title: "Декабрь"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.month.get(), {"_id": String(id)}).title;
        }
    }
);
