module.exports = function(url) {

    var route = app.express.Router();

    route.get('/:id', function(req, res, next) {
        API.jobs.vacancy(req.params.id, function(err, data){
            if (err) next();
            else app.errHandler(res, null, data);
        });
	});

    route.get('/similary/:id', function(req, res, next) {
        API.jobs.vacancySimilary(req.params.id, function(err, data){
            if (err) next();
            else app.errHandler(res, null, data);
        });
	});

    app.use(url, route);
};
