module.exports = function() {

	return function(req, res, next){

		var login = req.body.login,
			password = req.body.password,
			plan = req.body.plan,
			location = {
				country: req.body.country,
				city: req.body.city,
				region: req.body.region,
				ip: req.clientIP
			},
			referer = req.body.referer,
			logined = req.body.logined;

		if (!login || !password) return res.sendStatus(401);

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
				if (!user){
					if (logined){
						app.db.collection('accounts').insertOne(getAccount({
							_id: req.accountId,
							login: login,
							password: password,
							init: {
								plan: plan,
								device: req.device && req.device.type,
								location: location,
							}
						}), function(err, data){
							if (err) {
								return next(err);
							}
							else if (data && data.ops && data.ops.length){

								var user = data.ops[0];
								user.accountID = user._id;
								req.session.user = user;
								req.session.user.hash = app.utils.cryptoHash(user.login, user.password, user.accountID);

								res.redirect('/private/');
							}
							else {
								return next();
							}
						});
					}
					else {
						res.send({status: 'OK'});
					}
				}
				else if (user.password === app.utils.cryptoPass(password)){
					inUsed(logined);
				}
			}
		});

		var getAccount = function(options){
			return {
				_id: options.id,
				plan: "free",
		        balance: 0,
				login: options.login,
		        password: app.utils.cryptoPass(options.password),
				init: options.init,
				commons: {
					photo: null,
					name: "",
					surname: "",
					gender: "male",
					birthday: {
			            day: "1",
			            month: "1",
			            year: "1990",
			            hidden: false
			        },
					citizenship: null,
					businessTrip: null,
					relocation: null,
					travelTime: null,
					specialization: [],
					employments: [],
					schedules: [],
					contacts: {
						city: null,
						metro: null,
						email: options.login,
						phone: "",
						primary: null,
						site: "",
						skype: ""
			        }
				},
				history: {
					events: [],
					visits: [{
						device: req.device,
						location: options.init.location,
						date: app.moment().format()
					}]
				},
				payment: [],
				metrika: [],
				log: [],
				visits: 1,
				paid: null,
				create: app.moment().format(),
				update: app.moment().format(),
				visite: app.moment().format()
			}
		}
	}
};
