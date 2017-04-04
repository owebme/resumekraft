module.exports = function(url){

	var route = app.express.Router();

	route.post('/inbox', function(req, res) {
        if (req.body && app.utils.isObjectId(req.body.id) && !app.utils.isEmpty(req.body.data)){
            app.db.collection('inbox').insert({
                resumeId: app.utils.ObjectId(req.body.id),
				accountId: app.utils.ObjectId(req.body.accountId),
				new: true,
				title: req.body.data.name.value,
				from: req.body.data.email.value,
				text: req.body.data.text.value,
				color: app.utils.shuffle(app.config.public.get('inbox:colors').split(","))[0],
				device: req.device && req.device.type,
                ua: req.headers['user-agent'],
                ip: req.clientIP,
				create: app.utils.moment().format()
            },
            function(err, data){
                app.errHandler(res, err, data);
            });
        }
        else {
            app.errHandler(res);
        }
	});

	route.post('/like', function(req, res) {
        if (req.body && app.utils.isObjectId(req.body.id)){

            app.db.collection('resumes').update({
                "_id": app.utils.ObjectId(req.body.id)
            },{
                $addToSet: {
                    likes: req.clientIP
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

	app.use(url, route);
};
