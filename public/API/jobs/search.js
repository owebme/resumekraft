module.exports = function(url) {

    var route = app.express.Router();

    route.get('/:url', function(req, res, next) {
        API.jobs.search(req.params.url, function(err, data){
            app.errHandler(res, err, data);
        });
	});

    app.use(url, route);
};
