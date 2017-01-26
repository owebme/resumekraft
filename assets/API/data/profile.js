module.exports = function(app) {

	return function(req, res, next){
		if (req.body){
			if (req.body._id) delete req.body._id;

			app.db.collection('accounts').update({
				"_id": app.accountId
			},{
				$set: req.body,
				$push: {
					"history.events": {
	                    name: "profileUpdate",
	                    device: app.device,
	                    date: app.moment().format()
	            	}
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
