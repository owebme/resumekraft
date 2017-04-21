module.exports = function() {

	return function(req, res, next){
        var data = API.auth.prepare(req),
			AUTH = req.body.auth,
            LOGINED = data.logined,
			LOGIN = data.login,
			PASSWORD = data.password,
			OAUTH = data.oauth,
			query = {};

        if (OAUTH){
            query["oauth." + OAUTH.channel] = OAUTH.profileId;
        }
        else {
			query["login"] = LOGIN;
        }

        if (!OAUTH && (!AUTH || !LOGIN || !PASSWORD)) return res.sendStatus(401);

		var unAuth = function(logined){
			if (logined) res.sendStatus(401);
			else res.send({status: 'error'});
		};

        app.db.collection('accounts').findOne(query,
        function(err, isUser){
			if (err) {
				next(err);
			}
            else {
                if (isUser){
                    if (!OAUTH && (AUTH == "signin" && isUser.password !== app.utils.cryptoPass(PASSWORD) || AUTH == "signup" && isUser.password === app.utils.cryptoPass(PASSWORD))){
                        unAuth(LOGINED);
                    }
                    else {
                        if (LOGINED){

							var user = API.auth.init(req, isUser, OAUTH);

                            var setQuery = {};
                            setQuery.visite = app.moment().format();

                            if (OAUTH){
                                setQuery["oauth." + OAUTH.channel] = OAUTH.profileId;
                            }

							app.db.collection('accounts').update({
				                "_id": app.utils.ObjectId(user.accountID)
				            },{
								$set: setQuery,
				                $inc: {
				                    "visits": 1
				                },
								$push: {
				                    "history.visits": {
										device: req.device,
										location: data.location,
										date: app.moment().format()
									}
				                }
				            });

							res.redirect('/private/');
						}
						else {
							res.send({
								status: 'OK',
								auth: "signin",
								user: {
									photo: isUser.commons.photo,
									name: isUser.commons.name,
									surname: isUser.commons.surname
								}
							});
						}
                    }
                }
                else {
                    if (OAUTH || AUTH == "signup"){
                        API.auth.register(data, req, res, next);
                    }
                    else {
                        unAuth(LOGINED);
                    }
                }
            }
        });
    }

};
