module.exports = function() {

	return function(req, res, next){

		app.async.waterfall([

			function(callback){
                app.db.collection('accounts').findOne({
                    "_id": app.accountId
                },
                function(err, account){
                    callback(null, account);
                });
			},

			function(account, callback){
				if (account){
					var result = {
	                    account: account
	                }
					app.async.parallel({
	        			data: function(callback){
							app.db.collection('resumes').find({
			                    "accountId": account._id
			                })
			                .toArray(function(err, data){
			                    app.errHandler(res, err, data, callback);
			                });
	        			},
	                    inbox: function(callback){
							app.db.collection('inbox').find({
			                    "accountId": account._id
			                })
			                .toArray(function(err, data){
			                    app.errHandler(res, err, data, callback);
			                });
	                    }
	        		},
	                function(err, results){
						result.data = results.data;
						result.inbox = results.inbox;

						if (result.account.metrika && result.account.metrika.length){
							result.metrika = app.utils.copyArray(result.account.metrika[result.account.metrika.length - 1]);
						}

						delete result.account.metrika;
						delete result.account.log;

	                    app.errHandler(res, err, result, callback);
	                });
				}
				else {
					app.errHandler(res, false, false, callback);
				}
			}
		],

		function(err, results){
			app.errHandler(res, err, results);
		});
	}
};
