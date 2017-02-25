module.exports = function(){

    return function(req, res, next){
        var page = req.params.page,
            perPage = app.config.get('blog:perPage');

        if (!page) page = 1;

        // app.mysql.query("ALTER TABLE `blog` ADD COLUMN `color` int(11) NULL AFTER `image`");

        // app.mysql.query("SELECT id FROM blog", function(err, data){
        //     app.utils.each(data, function(item){
        //         var color = app.utils.random(1, 16);
        //         app.mysql.query("UPDATE blog SET `color` = " + color + " WHERE id = '" + item.id + "'");
        //     });
        // });

        // if (req.device.type == "phone" && app.cache.blog){
        //     req.appClient.data = app.cache.blog;
        //     result(res, req.appClient);
        //     return;
        // }

        app.async.parallel([

            function(callback){
                if (req.device.type == "phone"){
                    var query = "name, keywords, image, color, date_update AS date, alias";
                }
                else {
                    var query = "name, keywords, image, text_sm, date_update AS date, alias";
                }
                app.mysql.query("SELECT " + query + " FROM blog ORDER BY date_create DESC" + (req.device.type != "phone" ? " LIMIT " + ((page - 1) * perPage) + ", " + perPage : ""), function(err, data){
                     app.errHandler(res, err, data, callback);
                });
            },

            function(callback){
                app.mysql.query("SELECT id FROM blog", function(err, data){
                    app.errHandler(res, err, data, callback);
                });
            },

            function(callback){
                app.db.collection('informers').find().toArray(function(err, data){
                    app.errHandler(res, err, data, callback);
                });
            },
        ],

        function(err, data){
            if (data && data.length){

                var pages = 1, count = data[1].length;
                if (count) pages = parseInt(Math.floor(count / perPage));

                var currency = app.utils.findWhere(data[2], {'_id': 'currency'}).items;

                var data = {
                    headers: app.utils.copyArray(data[0]).slice(0, 4),
                    items: data[0],
                    pages: pages,
                    page: page ? parseInt(page) : 1,
                    weather: app.utils.findWhere(data[2], {'_id': 'weather'}).now,
                    traffic: app.utils.findWhere(data[2], {'_id': 'traffic'}),
                    currency: {
                        usd: app.utils.findWhere(currency, {'code': 'USD'}).value,
                        euro: app.utils.findWhere(currency, {'code': 'EUR'}).value,
                        date: app.utils.findWhere(currency, {'code': 'USD'}).date
                    }
                };
                data.headers = app.utils.map(data.headers, function(item, i){
                    var date = item.date;
                    if (i == 0) item.date = req.appClient.moment(date).format("MMMM D, YYYY");
                    else item.date = req.appClient.moment(date).format("D/MM, YYYY");
                    item.time = req.appClient.moment(date).format("HH:MM");
                    return item;
                });
                data.items = app.utils.map(data.items, function(item){
                    item.dateShort = req.appClient.moment(item.date).format("D/MM");
                    item.date = req.appClient.moment(item.date).format("MMMM D, YYYY, HH:MM");
                    return item;
                });

                req.appClient.data = data;

                // if (req.device.type == "phone"){
                //     app.cache.blog = data;
                // }

                result(res, req.appClient);
            }
        });

        function result(res, data){
            var output = app.riot.render(app.tags("blog", req.device), data);
            res.render(req.device.type == "phone" ? 'index-mobile' : 'index', {
                title: app.config.get('title:blog'),
                content: output
            });
        }
    }
}
