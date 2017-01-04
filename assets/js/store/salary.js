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
        title: {
            en: "full-time",
            ru: "full-time"
        }
    },
    {
        _id: "2",
        title: {
            en: "part-time",
            ru: "Частичная"
        }
    },
    {
        _id: "3",
        title: {
            en: "project work",
            ru: "Проектная"
        }
    }
    ]),
    {
        getItems: function(){
            return _.map($store.worktime.get(), function(item){
                return {
                    _id: item._id,
                    title: item.title[$store.resume.get("lang")]
                }
            });
        },
        getTitleById: function(id){
            return $store.worktime.get({"_id": id}, "title", $store.resume.get("lang"));
        }
    }
);
