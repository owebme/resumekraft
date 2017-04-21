module.exports = function(){

	var API = {};

	API.passport = {
		callback: function(channel, req, res){
			req.user.channel = channel;
			res.send('<script>' +
				'window.opener.postMessage({user: ' + JSON.stringify(req.user) + '}, "*");' +
				'window.opener.focus();' +
				'window.close();' +
			'</script>');
		},
		fail: function(req, res){
			res.send('<script>' +
				'window.opener.postMessage({error: true}, "*");' +
				'window.opener.focus();' +
				'window.close();' +
			'</script>');
		},
		serializeUser: function(user){
			if (user.birthday && user.birthday.length){
	            if (parseInt(user.birthday[1]) > 0) {
	                user.birthday = {
	    	            day: parseInt(user.birthday[3]),
	    	            month: parseInt(user.birthday[2]),
	    	            year: parseInt(user.birthday[1]),
	    	            hidden: true
	    	        }
	            }
	            else {
	                user.birthday = null;
	            }
	        }
			return user;
		}
	};

	API.init = function(req, isUser, OAUTH){
		var user = {
			accountID: isUser._id,
			oauth: OAUTH,
			photo: isUser.commons.photo,
			login: isUser.login,
			password: isUser.password,
			name: isUser.commons.name,
			surname: isUser.commons.surname
		}
		if (user.photo && OAUTH){
			user.oauth.avatar = user.photo;
		}
		req.session.user = user;
		req.session.user.hash = app.utils.cryptoHash(user.password, user.accountID);

		return user;
	};

	API.prepare = function(req){
		return {
			logined: req.body.logined,
			oauth: req.body.oauth && JSON.parse(req.body.oauth) || null,
			login: req.body.login && req.body.login.toLowerCase() || null,
			password: req.body.password,
			location: {
				country: req.body.country,
				city: req.body.city,
				region: req.body.region,
				ip: req.clientIP
			},
			plan: req.body.plan || "free",
			referer: req.body.referer
		}
	};

	API.register = function(data, req, res, next){
		if (data.logined){
			var oauth = data.oauth ? {} : null;
			if (data.oauth){
				oauth[data.oauth.channel] = data.oauth.profileId;
				data.name = data.oauth.name;
				data.surname = data.oauth.surname;
				data.birthday = data.oauth.birthday;
				data.login = null;
				data.email = data.oauth.email;
				data.password = data.oauth.profileId;
			}
			else {
				data.email = data.login;
			}
			app.db.collection('accounts').insertOne(API.getAccount({
				oauth: oauth,
				device: req.device && req.device.type,
				login: data.login,
				password: data.password,
				name: data.name,
				surname: data.surname,
				email: data.email,
				birthday: data.birthday,
				init: {
					plan: data.plan,
					device: req.device && req.device.type,
					location: data.location,
					referer: data.referer
				}
			}), function(err, isUser){
				if (err) {
					next(err);
				}
				else if (isUser && isUser.ops && isUser.ops.length){
					API.init(req, isUser.ops[0], data.oauth);
					res.redirect('/private/');
				}
				else {
					next();
				}
			});
		}
		else {
			res.send({
				status: 'OK',
				auth: "signup"
			});
		}
	};

    API.getAccount = function(data){
		return {
			active: data.oauth ? true : false,
			activate: data.login && {
				hash: app.utils.md5(data.login + ":" + app.config.get("session:secret")),
				sendmail: false
			} || {},
			oauth: data.oauth || {},
			plan: "free",
	        balance: 0,
			login: data.login || null,
	        password: data.password && app.utils.cryptoPass(data.password) || null,
			init: data.init || null,
			commons: {
				photo: null,
				name: data.name || null,
				surname: data.surname || null,
				gender: data.gender || "male",
				birthday: data.birthday || {
		            day: "1",
		            month: "1",
		            year: "1990",
		            hidden: true
		        },
				citizenship: null,
				businessTrip: null,
				relocation: null,
				relocationCity: null,
				travelTime: null,
				specialization: [],
				employments: [],
				schedules: [],
				contacts: {
					city: null,
					metro: null,
					email: data.email || null,
					phone: null,
					primary: null,
					site: null,
					skype: null,
					socialProfile: data.oauth && data.oauth.url || null
		        }
			},
			history: {
				events: [],
				visits: [{
					device: data.device,
					location: data.init && data.init.location || null,
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

	return API;
};
