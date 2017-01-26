module.exports = function(app, url){

	var route = app.express.Router();

	var handlerUpdate = function(req, res, id, data){

        if (data._id) delete data._id;
        if (data.accountId) delete data.accountId;

		app.db.collection('resumes').update({
			"_id": app.ObjectId(id),
			"accountId": app.accountId
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

    route.post('/', function(req, res) {
		if (req.body.data._id) delete req.body.data._id;
        req.body.data.accountId = app.accountId;

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

	route.delete('/', function(req, res) {
		app.db.collection('resumes').remove(
        {
            "_id": app.ObjectId(req.body.id),
			"accountId": app.accountId
		},
		function(err, data){
			app.errHandler(res, err, data);
		});
	});

	app.use(url, app.checkAuth(), route);
};
