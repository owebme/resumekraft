module.exports = function() {

	return function(req, res, next){

		var $ = req.body,
            id = $.label,
            success = null,
            secret = app.config.public.get('payment:yamoney:secret');
            md5 = app.utils.sha1Hex($.notification_type + "&" + $.operation_id + "&" + $.amount + "&" + $.currency + "&" + $.datetime + "&" + $.sender + "&" + $.codepro + "&" + $.secret + "&" + $.label);

		if (md5 == $["sha1_hash"] && $.amount > 0 && id){
            var pay = {
                id: $.operation_id,
                type: $.notification_type,
                amount: $.amount,
                withdraw_amount: $.withdraw_amount,
                sender: $.sender,
                datetime: $.datetime
            }
            app.db.collection('accounts').update({
                "_id": app.utils.ObjectId(id)
            },{
                $inc: {
                    "balance": $.amount
                },
                $push: {
                    "payment": pay
                }
            });

            success = true;
        }
        else {
            success = false;
        }
        if (md5){
            res.send(
                {
                    md5: md5,
                    success: success
                }
            );
        }
        else {
            next();
        }
    }
}
