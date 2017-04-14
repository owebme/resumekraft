module.exports = function(url){

	var route = app.express.Router();

	route.post('/writing', function(req, res) {
        API.orders.writing(req, function(err, data){
            app.errHandler(res, err, data);
        });
	});

	app.use(url, app.checkAuth(), route);
};
