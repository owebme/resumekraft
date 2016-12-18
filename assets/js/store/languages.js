$store.languages = _.extend(new Baobab([
    {
        _id: "native",
        title: "Родной язык"
    },
    {
        _id: "en",
        title: "Английский"
    },
    {
        _id: "de",
        title: "Немецкий"
    },
    {
        _id: "fr",
        title: "Французский"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.languages.get(), {"_id": id}).title;
        }
    }
);

$store.languages.select = _.extend(new Baobab([
    {
        _id: "1",
        title: "Не владею"
    },
    {
        _id: "2",
        title: "Базовые знания"
    },
    {
        _id: "3",
        title: "Читаю литературу"
    },
    {
        _id: "4",
        title: "Могу проходить интервью"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.languages.select.get(), {"_id": id}).title;
        }
    }
);

$store.languages.native = _.extend(new Baobab([
    {
        _id: "1",
        title: "Абазинский"
    },
    {
        _id: "2",
        title: "Абхазский"
    },
    {
        _id: "3",
        title: "Аварский"
    },
    {
        _id: "4",
        title: "Русский"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.languages.native.get(), {"_id": id}).title;
        }
    }
);
