module.exports = function(){

    return function(req, res, next){

        // app.mysql.query("ALTER TABLE `blog` ADD COLUMN `color` int(11) NULL AFTER `image`");

        // app.mysql.query("SELECT id FROM blog", function(err, data){
        //     app.utils.each(data, function(item){
        //         var color = app.utils.random(1, 16);
        //         app.mysql.query("UPDATE blog SET `color` = " + color + " WHERE id = '" + item.id + "'");
        //     });
        // });

        API.blog.index(req, function(err, data){
            if (!err && data){

                req.appClient.data = data;

                var output = app.riot.render(app.tags("blog", req.device), req.appClient);

                res.render('index', {
                    title: app.config.public.get('title:blog'),
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
