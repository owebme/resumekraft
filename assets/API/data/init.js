module.exports = function(app) {

	return function(req, res, next){

		app.async.waterfall([

			function(callback){
                app.db.collection('accounts').findOne({
                    "_id": app.ObjectId('58785acdfabeed550a9b8b65')
                },
                function(err, account){
                    callback(null, account);
                });
			},

			function(account, callback){
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
                    },
        		},
                function(err, results){
					result.data = results.data;
					result.inbox = results.inbox;

                    app.errHandler(res, err, result, callback);
                });
			}
		],

		function(err, results){
			app.errHandler(res, err, results);
		});
	}
};
