module.exports = function() {

	return function(req, res, next){

		var $ = req.body,
            label = $.label,
            success = null,
            secret = app.config.public.get('payment:yamoney:secret'),
            sha1Hash = app.utils.sha1Hex($.notification_type + "&" + $.operation_id + "&" + $.amount + "&" + $.currency + "&" + $.datetime + "&" + $.sender + "&" + $.codepro + "&" + secret + "&" + $.label);

		if (sha1Hash == $["sha1_hash"] && $.amount > 0 && label){
			var arr = label.split(":"),
				accountId = arr[0] && app.utils.ObjectId(arr[0]),
				typePay = arr[1],
				period = arr[2],
				months = 0,
				amount = parseInt($.withdraw_amount || $.amount),
				pay = {
	                id: $.operation_id,
	                type: $.notification_type,
	                amount: $.amount,
	                withdraw_amount: $.withdraw_amount,
	                sender: $.sender,
	                datetime: $.datetime,
					create: app.utils.moment().format()
	            }

			if (period == "month1" && amount > 300 || period == "month3" && amount > 800 || period == "month6" && amount > 1300 || period == "year1" && amount > 1700 || period == "year2" && amount > 3500){
				success = true;
			}
			if (success){

				if (period == "month1") months = 1;
				else if (period == "month3") months = 3;
				else if (period == "month6") months = 6;
				else if (period == "year1") months = 12;
				else if (period == "year2") months = 24;

				app.db.collection('accounts').findOne({
                    "_id": accountId
                },
                function(err, account){
					if (!err && account){
						var paid = app.utils.moment(account.paid || new Date())
						.add(months, 'months');

						app.db.collection('accounts').update({
			                "_id": accountId
			            },{
							$set: {
								"plan": "premium",
								"paid": paid.format()
							},
			                $inc: {
			                    "balance": amount
			                },
			                $push: {
			                    "payment": pay,
								"history.events": {
				                    name: "payBalance",
				                    device: req.device,
				                    date: app.moment().format()
				            	}
			                }
			            });
					}
                });
			}
			app.db.collection('payment').insert({
				"accountId": accountId,
				"type": typePay,
				"amount": $.amount
			});
        }
        else {
            success = false;
        }
        if (sha1Hash){
			res.statusCode = 200;
            res.send(
                {
                    sha1Hash: sha1Hash,
                    success: success
                }
            );
        }
        else {
            next();
        }
    }
}
