$store.education = _.extend(new Baobab([
    {
        _id: "1",
        parent: "0",
        title: "Высшее"
    },
    {
        _id: "2",
        parent: "1",
        title: "Бакалавр"
    },
    {
        _id: "3",
        parent: "1",
        title: "Магистр"
    },
    {
        _id: "4",
        parent: "1",
        title: "Кандидат наук"
    },
    {
        _id: "5",
        parent: "1",
        title: "Доктор наук"
    },
    {
        _id: "6",
        parent: "0",
        title: "Неоконченное высшее"
    },
    {
        _id: "7",
        parent: "0",
        title: "Среднее специальное"
    },
    {
        _id: "8",
        parent: "0",
        title: "Среднее"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.education.get(), {"_id": id}).title;
        }
    }
);
