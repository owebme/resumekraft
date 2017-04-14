module.exports = function(url){

	var route = app.express.Router();

	route.post('/result', function(req, res) {
        API.jptest.result(req, function(err, data){
            app.errHandler(res, err, data);
        });
	});

	route.post('/votes', function(req, res) {
        API.jptest.votes(req, function(err, data){
            app.errHandler(res, err, data);
        });
	});

	app.use(url, app.checkAuth(), route);
};
