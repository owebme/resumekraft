module.exports = function() {

	return function(req, res, next){
		if (req.body){
			req.body.date = app.moment().format();

			app.db.collection('accounts').update({
				"_id": app.accountId
			},{
				$pull: {
					"metrika": {
						"visits": req.body.visits
					}
				}
			});

			app.db.collection('accounts').update({
				"_id": app.accountId
			},{
				$push: {
					"metrika": req.body
				}
			},
			function(err, data){
				app.errHandler(res, err, data);
			});
		}
		else {
			app.errHandler(res);
		}
	}
};
