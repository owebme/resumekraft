module.exports = function(url) {

    var route = app.express.Router();

    route.get('/:url', function(req, res, next) {
        if (req.params.url){
            var url = req.params.url;
            app.redis.get(app.utils.md5(url), function(err, data) {
                if (err){
                    next();
                }
                else if (data){
                    console.log("1111111");
                    app.errHandler(res, null, JSON.parse(data));
                }
                else {
                    API.jobs.search(url, function(data){
                        console.log("22222222");
                        app.redis.set(app.utils.md5(url), JSON.stringify(data));
                        app.errHandler(res, null, data);
                    })
                }
            });
        }
        else {
            next();
        }
	});

    app.use(url, route);
};
