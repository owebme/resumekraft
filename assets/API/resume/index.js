module.exports = function(url){

	var route = app.express.Router();

	var handlerUpdate = function(req, res, id, data){

        if (data._id) delete data._id;
        if (data.accountId) delete data.accountId;

		app.db.collection('resumes').update({
			"_id": app.utils.ObjectId(id),
			"accountId": req.accountId
		},{
			$set: data
		},
		function(err, data){
			app.errHandler(res, err, data);
		});
	};

	route.put('/', function(req, res) {
		handlerUpdate(req, res, req.body.data._id, req.body.data);
	});

	route.put('/public', function(req, res) {
		handlerUpdate(req, res, req.body.id, {
			public: req.body.public
		});
	});

	route.put('/color', function(req, res) {
		handlerUpdate(req, res, req.body.id, {
			"config.color": req.body.color
		});
	});

	route.put('/template', function(req, res) {
		handlerUpdate(req, res, req.body.id, {
			template: req.body.template
		});
	});

    route.post('/', function(req, res) {
		if (req.body.data._id) delete req.body.data._id;
		if (req.body.data.likes) req.body.data.likes = null;
        req.body.data.accountId = req.accountId;

        app.db.collection('resumes').insert(req.body.data,
        function(err, data){
            if (data && data.ops && data.ops.length){
                data = {
                    id: data.ops[0]._id
                }
            }
            app.errHandler(res, err, data);
        });
	});

	route.post('/sendmail', function(req, res) {
		app.errHandler(res, false, "ok");
	});

	route.put('/photo', function(req, res, next) {
		if (req.body && req.body.id && req.body.image){

			var id = req.body.id,
				base64Data = req.body.image.replace(/^data:image\/jpeg;base64,/,""),
                pathImage = app.config.get('path:photo') + id + '.jpg';

            app.utils.fs.writeFile(process.cwd() + pathImage, base64Data, 'base64', function(err){
				if (!err){
					app.db.collection('resumes').update({
						"_id": app.utils.ObjectId(id),
						"accountId": req.accountId
					},{
						$set: {
							"photo": pathImage
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
			next();
		}
	});

	route.delete('/', function(req, res) {
		app.db.collection('resumes').remove(
        {
            "_id": app.utils.ObjectId(req.body.id),
			"accountId": req.accountId
		},
		function(err, data){
			app.errHandler(res, err, data);
		});
	});

	app.use(url, app.checkAuth(), route);
};
