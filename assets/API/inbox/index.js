module.exports = function(url){

	var route = app.express.Router();

	route.put('/viewed', function(req, res) {
        app.db.collection('inbox').update({
            "_id": {
				$in: req.body.ids.map(app.utils.ObjectId)
			},
			"accountId": req.accountId
		},{
			$set: {
                "new": false
            }
        },{
			multi: true
		},
		function(err, data){
			app.errHandler(res, err, data);
		});
	});

	app.use(url, app.checkAuth(), route);
};
