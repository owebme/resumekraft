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
	                    device: req.device.type,
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
								device: req.device.type,
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
	                    device: req.device.type,
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

	route.put('/login', function(req, res) {
		if (req.body && req.body.login && req.body.password && req.body.password.length > 5){
			var login = req.body.login.toLowerCase();

			app.db.collection('accounts').findOne({
				login: login
			},
	        function(err, isUser){
				if (isUser){
					isUser.isUser = true;
					app.errHandler(res, err, isUser);
				}
				else if (!err && !isUser){
					var password = req.body.password,
						activate = app.utils.md5(login + ":" + app.config.get("session:secret")),
						body = {
							to: login,
							subject: 'Активация входа',
							html: {
								title: "Активация входа по паролю",
								text: "Для завершения активации нажмите кнопку ниже.",
								button: "Подтвердить активацию",
								link: app.config.public.get('domain') + "/activate/" + req.accountId + "/" + activate
							}
						};

					API.mailer.send(body, function(err, data){
						if (err && !data){
							app.errHandler(res, err, data);
						}
						else {
							app.db.collection('accounts').update({
								"_id": req.accountId
							},{
								$set: {
									activate: {
										active: false,
										hash: activate
									},
									login: login,
									password: app.utils.cryptoPass(password)
								},
								$push: {
									"history.events": {
					                    name: "profileLoginCreate",
					                    device: req.device.type,
					                    date: app.moment().format()
					            	}
								}
							},
							function(err, data){
								app.errHandler(res, err, data);
							});
						}
					});
				}
				else {
					app.errHandler(res, err, data);
				}
			})
		}
		else {
			app.errHandler(res);
		}
	});

	app.use(url, app.checkAuth(), route);
};
