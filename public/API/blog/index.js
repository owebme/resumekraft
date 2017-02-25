module.exports = function(url){

	var route = app.express.Router();

	route.post('/subscribe', function(req, res) {
        if (req.body && req.body.email){

            app.db.collection('subscribe').update({
                "email": req.body.email
            },{
                "email": req.body.email,
				"device": req.device.type
            },{
                upsert: true
            },
            function(err, data){
                app.errHandler(res, err, data);
            });
        }
        else {
            app.errHandler(res);
        }
	});

	app.use(url, route);
};
