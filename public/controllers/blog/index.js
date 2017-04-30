module.exports = function(){

    return function(req, res, next){

        // app.mysql.query("ALTER TABLE `blog` ADD COLUMN `color` int(11) NULL AFTER `image`");

        // app.mysql.query("SELECT id FROM blog", function(err, data){
        //     app.utils.each(data, function(item){
        //         var color = app.utils.random(1, 16);
        //         app.mysql.query("UPDATE blog SET `color` = " + color + " WHERE id = '" + item.id + "'");
        //     });
        // });

        app.async.parallel({
            data: function(callback){
                API.blog.index(req, function(err, data){
                    app.errHandler(res, err, data, callback);
                });
            },
            informers: function(callback){
                API.informers.get(function(err, data){
                    app.errHandler(res, err, data, callback);
                });
            }
        }, function(err, results){
            if (!err && results){

                req.appClient.data = results.data;

                var informers = API.informers.prepare(results.informers);

                if (informers){
                    app.utils.extend(req.appClient.data, informers);
                }

                var output = app.riot.render(app.tags("blog", req.device), req.appClient);

                res.render('index', {
                    title: app.config.public.get('title:blog'),
                    image: app.config.public.get('domain') + "/public/images/popup/blog.png",
                    content: output,
                    device: req.device.type,
                    isMobile: req.device.isMobile
                });
            }
            else {
                next();
            }
        });
    }
}
