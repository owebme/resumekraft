module.exports = function(url) {

    var route = app.express.Router();

    route.get('/', function(req, res, next) {
        if (!req.session.user || !req.accountId){
            res.render('simple', {
                title: "Вы не авторизованы",
                text: "Через 5 секунд вы перейдете к окну авторизации.",
                redirect: "/?signin"
            })
        }
        else {
            var data = {
                "accountId": req.accountId,
				"ua": req.device.ua,
				"ip": req.clientIP,
                "hash": app.utils.md5(app.utils.moment().format("YYMMDD"))
            }
            app.db.collection('tickets').update(data, Object.assign(Object.create(data), {
                status: "new",
                create: app.utils.moment().format()
            }),
			{
				upsert: true
			})
            res.render('simple', {
                title: "Ваша заявка отправлена",
                text: "Через 5 секунд вы " + (req.headers['referer'] ? "вернетесь на страницу с которой вы перешли." : "перейдете в свой кабинет."),
                redirect: req.headers['referer'] || "/private"
            })
        }
    });

	app.use(url, route);
};
