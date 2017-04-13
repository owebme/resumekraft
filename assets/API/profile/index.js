module.exports = function(url){

	var route = app.express.Router();

	route.put('/', function(req, res) {
		if (req.body){
			app.db.collection('accounts').update({
				"_id": req.accountId
			},{
				$set: req.body,
				$push: {
					"history.events": {
	                    name: "profileUpdate",
	                    device: req.device,
	                    date: app.moment().format()
	            	}
				}
			},
			function(err, data){
				app.errHandler(res, err, data);
			});
		}
		else {
			app.errHandler(res);
		}
	});

	route.put('/photo', function(req, res) {
		if (req.body && req.body.image){

			var base64Data = req.body.image.replace(/^data:image\/jpeg;base64,/,""),
                pathImage = app.config.public.get('path:photo') + req.accountId + '.jpg';

            app.utils.fs.writeFile(process.cwd() + pathImage, base64Data, 'base64', function(err){
				if (!err){
					app.db.collection('accounts').update({
						"_id": req.accountId
					},{
						$set: {
							"commons.photo": pathImage
						},
						$push: {
							"history.events": {
								name: "profileUploadPhoto",
								device: req.device,
								date: app.moment().format()
							}
						}
					});
                    res.statusCode = 200;
                    res.send({
                        image: pathImage
                    });
                }
                else {
                    res.statusCode = 404;
                    res.send(err);
                }
	        })
		}
		else {
			app.errHandler(res);
		}		
	});

	route.put('/password', function(req, res) {
		if (req.body && req.body.password && req.body.password.length > 5){
			app.db.collection('accounts').update({
				"_id": req.accountId
			},{
				$set: {
					password: app.utils.cryptoPass(req.body.password)
				},
				$push: {
					"history.events": {
	                    name: "profilePasswordUpdate",
	                    device: req.device,
	                    date: app.moment().format()
	            	}
				}
			},
			function(err, data){
				app.errHandler(res, err, data);
			});
		}
		else {
			app.errHandler(res);
		}
	});

	app.use(url, app.checkAuth(), route);
};
