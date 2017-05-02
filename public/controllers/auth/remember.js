var generate = require("password-generator");

module.exports = function(url) {

    var route = app.express.Router();

	route.post('/', function(req, res) {
		if (req.body && req.body.login){

            app.db.collection('accounts').findOne({
				"login": req.body.login.toLowerCase()
			},
            function(err, data){
                if (!err && data){

                    var login = data.login,
                        hash = app.utils.md5(login + ":" + app.config.get("session:secret"));

                    API.mailer.send({
                        to: login,
                        subject: 'Восстановление доступа к аккаунту',
                        html: {
                            cover: "password",
                            title: "Нужно сбросить пароль?",
                            text: "Мы получили запрос на сброс пароля. Вы можете изменить свой пароль, нажав кнопку ниже.",
                            button: "Сбросить пароль",
                            link: app.config.public.get('domain') + "/remember/" + data._id + "/" + hash
                        }
                    })

                    res.send({status: 'OK'});
                }
                else {
                    res.send({status: 'error'});
                }
			});
		}
		else {
			app.errHandler(res);
		}
	});

    route.get('/:id/:hash', function(req, res) {
        if (!req.params.id || req.params.id && !app.utils.isObjectId(req.params.id) || !req.params.hash){
            next();
        }
        else {
            var id = req.params.id,
                hash = req.params.hash;

            app.db.collection('accounts').findOne({
				"_id": app.utils.ObjectId(id)
			},
            function(err, isUser){
                if (!err && isUser && isUser.activate.hash == app.utils.md5(isUser.login + ":" + app.config.get("session:secret"))){

                    var login = isUser.login,
                        password = generate();

                    app.db.collection('accounts').update({
                        "_id": app.utils.ObjectId(id)
                    },{
                        $set: {
                            "activate.reset": app.utils.moment().format(),
                            "password": app.utils.cryptoPass(password)
                        },
                        $push: {
                            "history.events": {
                                name: "profileResetPassword",
                                device: req.device.type,
                                date: app.utils.moment().format()
                            }
                        }
    				},
    				function(err, data){
                        if (!err && data){

                            API.auth.init(req, isUser);

                            API.mailer.send({
                                to: login,
                                subject: 'Сброс пароля к аккаунту',
                                html: {
                                    template: 'password',
                                    title: 'Ваш новый пароль:',
                                    password: password,
                                    text: "В целях безопасности его можно изменить в своем кабинете, для входа в аккаунт нажмите кнопку ниже.",
                                    button: "Войти в аккаунт",
                                    link: app.config.public.get('domain') + "/?signin"
                                }
                            });

                            res.render('simple', {
                                title: "Ваш пароль сброшен",
                                text: "В целях безопасности его можно изменить в своем кабинете, через 5 секунд вы попадете в свой кабинет.",
                                redirect: "/private"
                            })
                        }
                        else {
                            next();
                        }
    				});
                }
                else {
                    next();
                }
            });
        }
    });

	app.use(url, route);
};
