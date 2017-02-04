module.exports = function(){

    return function(req, res, next){
        var page = req.params.page;

        if (!page) page = 1;

        app.async.parallel([

            function(callback){
                app.mysql.query("SELECT name, keywords, image, text_sm, date_update AS date, alias FROM blog ORDER BY date_create DESC LIMIT " + ((page - 1) * 7) + ",7", function(err, data){
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
                if (count) pages = parseInt(Math.floor(count / 7));

                var currency = app.utils.findWhere(data[2], {'_id': 'currency'}).items;

                app.appClient.data = {
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
                app.appClient.data.headers = app.utils.map(app.appClient.data.headers, function(item, i){
                    var date = item.date;
                    if (i == 0) item.date = app.appClient.moment(date).format("MMMM D, YYYY");
                    else item.date = app.appClient.moment(date).format("D/MM, YYYY");
                    item.time = app.appClient.moment(date).format("HH:MM");
                    return item;
                });
                app.appClient.data.items = app.utils.map(app.appClient.data.items, function(item){
                    item.date = app.appClient.moment(item.date).format("MMMM D, YYYY, HH:MM");
                    return item;
                });

                var output = app.riot.render(app.tags("blog"), app.appClient);
                res.render('index', {content: output});
            }
        });
    }
}
