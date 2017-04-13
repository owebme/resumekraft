module.exports = function() {

	return function(req, res, next){

		var login = req.body.login && req.body.login.toLowerCase(),
			password = req.body.password,
			location = {
				country: req.body.country,
				city: req.body.city,
				region: req.body.region,
				ip: req.clientIP
			},
			logined = req.body.logined;

		if (!login || !password) return res.sendStatus(401);

		var unAuth = function(logined){
			if (logined) res.sendStatus(401);
			else res.send({status: 'error'});
		};

		app.db.collection('accounts').findOne({
			"login": login
		}, function(err, user){
			if (err) {
				return next(err);
			}
			else {
				if (user){
					if (user.password !== app.utils.cryptoPass(password)){
						unAuth(logined);
					}
					else {
						if (logined){
							user.accountID = user._id;
							req.session.user = user;
							req.session.user.hash = app.utils.cryptoHash(user.login, user.password, user.accountID);

							app.db.collection('accounts').update({
				                "_id": app.utils.ObjectId(user._id)
				            },{
								$set: {
									"visite": app.moment().format()
								},
				                $inc: {
				                    "visits": 1
				                },
								$push: {
				                    "history.visits": {
										device: req.device,
										location: location,
										date: app.moment().format()
									}
				                }
				            });

							res.redirect('/private/');
						}
						else {
							res.send({status: 'OK'});
						}
					}
				}
				else {
					unAuth(logined);
				}
			}
		});
	}
};
