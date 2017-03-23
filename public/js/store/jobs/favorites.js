(function(){

    $store.jobs = $store.jobs || {};

    $store.jobs.favorites = {
        get: {
            items: function(sort){
                var items = Store.get("vacancyFavorites");

                if (sort == "dateDesc"){
                    return _.sortByDate(items, "dateAdd", "desc");
                }
                else if (sort == "salaryDesc"){
                    return _.sortBy(items, function(item){
                        return $.get.salary(item);
                    }).reverse();
                }
                else if (sort == "salaryAsc"){
                    return _.sortBy(items, function(item){
                        return $.get.salary(item);
                    });
                }
                else {
                    return items;
                }
            },
            salary: function(item){
                if (item.salary){
                    if (item.salary.to){
                        return $.get.oneFormat(item.salary.to, item.salary.currency);
                    }
                    else {
                        return $.get.oneFormat(item.salary.from, item.salary.currency);
                    }
                }
                else {
                    return "0";
                }
            },
            oneFormat: function(salary, code){
                return salary * (1 / _.findWhere($store.jobs.dictionary.get("currency"), {"code": code}).rate);
            }
        },
        add: function(item){
            if (item && !$.isFavorite(item.id)){
                item.dateAdd = moment().format();
                Store.set("vacancyFavorites",
                    Store.get("vacancyFavorites").concat([item])
                );
            }
            $.trigger("update");
        },
        remove: function(id){
            if (id && $.isFavorite(id)){
                var items = Store.get("vacancyFavorites"),
                    index = null;

                _.each(items, function(item, i){
                    if (item.id == id) index = i;
                })
                items.splice(index, 1);

                Store.set("vacancyFavorites", items);
            }
            $.trigger("update");
        },
        isFavorite: function(id){
            if (id){
                return !_.isEmpty(_.findWhere(Store.get("vacancyFavorites"), {"id": id}));
            }
        },
        dropMenu: [
            {
                _id: "dateDesc",
                title: "по дате добавления"
            },
            {
                _id: "salaryDesc",
                title: "по убыванию зарплаты"
            },
            {
                _id: "salaryAsc",
                title: "по возрастанию зарплаты"
            }
        ]
    }

    _.extend($store.jobs.favorites, new app.commons.EventEmitterMicro());

    var $ = $store.jobs.favorites;

})();
