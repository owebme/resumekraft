module.exports = function(){

    return function(req, res, next){

        API.blog.article(req, function(err, data){
            if (!err && data){

                req.appClient.data = data;

                var output = app.riot.render(app.tags("blogContent", req.device), req.appClient);

                res.render('index', {
                    title: data.item.name,
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
