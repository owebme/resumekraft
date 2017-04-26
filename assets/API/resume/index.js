var fs = require('fs');
var pdf = require('html-pdf');

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
		if (!app.utils.isEmpty(req.body.data.likes)) req.body.data.likes = [];
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
		if (!req.body.from) app.errHandler(res, true, null);

		app.db.collection('accounts').findOne({
			"_id": req.accountId,
		},
		function(err, account){
			if (account){
				if (API.utils.overlimit(account.history.events, app.config.private.get("resume:sendmailLimit:" + account.plan), "resumeSendmail")){
					app.errHandler(res, err, "overlimit");
				}
				else {
					var title = req.body.title || req.body.lang == "en" ? "My resume" : "Моё резюме";
						body = {
							from: {
								name: req.body.from.name
								// email: req.body.from.email
							},
							to: req.body.to,
							subject: title,
							html: {
								cover: "resume",
								title: title,
								text: req.body.lang == "en" ? 'Hello, look at my resume' : 'Преветствую, посмотрите моё резюме',
								button: req.body.lang == "en" ? 'Go to resume' : 'Перейти к резюме',
								link: app.config.public.get('domain') + '/resume/' + req.body.id
							}
						};

					if (req.body.pdf){
						body.attach = [
							{
								filename: title + '.pdf',
								path: '.' + app.config.public.get('path:pdf') + req.body.id + '.pdf'
							}
						]
					}

					API.mailer.send(body, function(err, data){
						app.db.collection('accounts').update({
							"_id": req.accountId
						},{
							$push: {
								"history.events": {
									name: "resumeSendmail",
									device: req.device,
									data: body,
									date: app.moment().format()
								}
							}
						});
						app.errHandler(res, err, data);
					});
				}
			}
			else {
				app.errHandler(res, err, account);
			}
		});
	});

	route.post('/import', function(req, res) {
		app.db.collection('accounts').findOne({
			"_id": req.accountId,
		},
		function(err, account){
			if (account){
				if (API.utils.overlimit(account.history.events, app.config.private.get("resume:importLimit:" + account.plan), "resumeImportHH")){
					app.errHandler(res, err, "overlimit");
				}
				else {
					API.resume.gethh(req.body.id, function(err, resume){
						if (resume){
							app.db.collection('accounts').update({
								"_id": req.accountId
							},{
								$push: {
									"history.events": {
										name: "resumeImportHH",
										device: req.device,
										data: {
											idhh: resume.idhh,
											post: resume.post
										},
										date: app.moment().format()
									}
								}
							});
							app.errHandler(res, err, resume);
						}
						else {
							app.errHandler(res, err, resume);
						}
					});
				}
			}
			else {
				app.errHandler(res, err, account);
			}
		});
	});

	route.post('/pdf', function(req, res, next) {
		var id = req.body.id,
			pathPdf = app.config.public.get('path:pdf') + id + '.pdf',
			options = app.config.private.get('resume:pdf'),
			output = app.swig.renderFile(process.cwd() + app.config.public.get('path:template:basic'), {
				num: req.body.template,
				stamp: req.body.stamp !== undefined ? req.body.stamp : true,
				width: options.width,
				content: req.body.content
			});

		options.base = app.config.public.get('domain');
		options.width = options.width + "px";

		pdf.create(output, options).toFile(process.cwd() + pathPdf, function(err, data) {
			if (!err) {
				app.db.collection('accounts').update({
					"_id": req.accountId
				},{
					$push: {
						"history.events": {
							name: "resumeConvertPdf",
							device: req.device,
							date: app.moment().format()
						}
					}
				});
				res.statusCode = 200;
				res.send({
					pdf: pathPdf
				});
			}
			else {
				res.statusCode = 404;
				res.send(err);
			}
		});
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
							"commons.photo": pathImage
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

	route.get('/visits/:id', function(req, res, next) {
		app.async.parallel({
			visits: function(callback){

				// var date = new Date();
				// date.setDate(date.getDate() - 14);

				app.db.collection('resumesVisits').aggregate([
				{
					$unwind: "$visits"
				},
				{
					$match: { _id: app.utils.ObjectId(req.params.id) }
				},
				{
					$project: { "visits.ua": 1, "visits.ip": 1, day: {$dateToString: { format: "%Y-%m-%d", date: "$visits.date" }}}
				},
				{
					$group: { _id: {day: "$day", ip: "$visits.ip", ua: "$visits.ua"}, hits: {$sum: 1}}
				},
				{
					$group: { _id: "$_id.day", hits: {$max: "$hits"}, counts: {$sum: 1}}
				},
				{
					$sort: { _id: 1 }
				}
				]).toArray(function(err, data){
					app.errHandler(res, err, data, callback);
				});
			},
			devices: function(callback){

				app.db.collection('resumesVisits').findOne({
					_id: app.utils.ObjectId(req.params.id)
				},
				function(err, data){
					if (data){

						var total = data.visits.length;

						app.db.collection('resumesVisits').aggregate([
							{
								$unwind: "$visits"
							},
							{
								$match: { _id: app.utils.ObjectId(req.params.id) }
							},
						    {
						        $group: { _id: "$visits.device", count: {$sum: 1} }
						    },
						    {
						        $project: { percentage: {$multiply: ["$count", 100 / total]} }
						    },
						    {
						        $sort: { percentage: -1 }
						    }
						]).toArray(function(err, data){
							app.errHandler(res, err, data, callback);
						});
					}
					else {
						app.errHandler(res, err, data, callback);
					}
				});
			}
		},
		function(err, results){
			app.errHandler(res, err, results);
		});
	});

	app.use(url, app.checkAuth(), route);
};
