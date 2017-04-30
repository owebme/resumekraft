module.exports = function(){

	var API = {};

	API.writing = function(req, callback){
        if (req.body && req.body.data){
			app.db.collection('orders').insert({
                accountId: req.accountId,
				data: req.body.data,
				status: "new",
				device: req.device.type,
				ua: req.device.ua,
				ip: req.clientIP,
				create: app.utils.moment().format()
			},
			function(err, data){
                callback(err, data);
            });
        }
        else {
            callback();
        }
    };

    return API;
};
