(function(){
    $store.inbox = _.extend(new Baobab([]),
        {
            counterAll: function(){
                return _.where(
                    $.get(), { "new": true }
                ).length;
            },
            getCounterNewByResumeId: function(id){
                return _.where(
                    $.get(), { "resumeId": id, "new": true }
                ).length;
            },
            getCounterByResumeId: function(id){
                return _.where(
                    $.get(), { "resumeId": id }
                ).length;
            },
            getItemByResumeId: function(id){
                return $store.inbox.select({
                    "resumeId": id,
                    "new": true
                })
                .get("_id");
            },
            getItemsByResumeId: function(id){
                return _.where(
                    $.get(), { "resumeId": id }
                );
            },
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
