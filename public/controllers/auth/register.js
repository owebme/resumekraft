module.exports = function(app) {

	return function(req, res, next){

		var name = req.body.name,
			login = req.body.login,
			password = req.body.password,
			logined = req.body.logined;

		if (!name || !login || !password) return res.sendStatus(401);

		var inUsed = function(logined){
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
					if (logined && user.password === app.utils.cryptoPass(password)){
						user.accountID = user._id;
						req.session.user = user;
						req.session.user.hash = app.utils.cryptoHash(user.login, user.password, user.accountID);
						res.redirect('/private/');
					}
					else {
						inUsed(logined);
					}
				}
				else if (!logined){

					app.db.collection('accounts').insert({
						_id: app.utils.newId,
						name: name,
						login: login,
						password: app.utils.cryptoPass(password),
						balance: 4750.00
					});

					res.send({status: 'OK'});
				}
				else {
					inUsed(logined);
				}
			}
		});
	}
};
