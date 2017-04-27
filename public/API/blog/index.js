module.exports = function(url){

	var route = app.express.Router();

	route.post('/subscribe', function(req, res) {
        if (req.body && req.body.email){
			var email = req.body.email.toLowerCase();

            app.db.collection('subscribe').update({
                "email": email
            },{
                "email": email,
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
