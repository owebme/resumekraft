module.exports = function(url) {

    var route = app.express.Router();

    route.get('/:url', function(req, res, next) {
        API.jobs.search(req.params.url, function(err, data){
            if (err) next();
            else app.errHandler(res, null, data);
        });
	});

    app.use(url, route);
};
