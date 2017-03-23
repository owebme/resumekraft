module.exports = function(url){

	var route = app.express.Router();

	route.post('/votes', function(req, res) {
        API.jptest.votes(req, function(err, data){
            app.errHandler(res, err, data);
        });
	});

	app.use(url, route);
};
