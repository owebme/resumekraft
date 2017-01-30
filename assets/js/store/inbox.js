(function(){
    $store.inbox = _.extend(new Baobab([]),
        {
            onViewed: function(list, id){
                var item = $.select({"_id": id});

                if (item.get("new")){
                    item.select("new").set(false);
                    list.push(id);
                }
            }
        }
    );

    var $ = $store.inbox;

})();
