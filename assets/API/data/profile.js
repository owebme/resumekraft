module.exports = function() {

	return function(req, res, next){
		if (req.body){
			app.db.collection('accounts').update({
				"_id": req.accountId
			},{
				$set: req.body,
				$push: {
					"history.events": {
	                    name: "profileUpdate",
	                    device: req.device,
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
