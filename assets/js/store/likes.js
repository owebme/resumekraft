$store.likes = _.extend(new Baobab([]),
    {
        counterAll: function(){
            return _.flatten(_.pluck($store.likes.get(), 'likes')).length;
        }
    }
);
