module.exports = function(){

	var API = {};

	API.result = function(req, callback){
        if (req.body && req.body.result){
			app.db.collection('jptestStat').update({
				"ua": req.headers['user-agent'],
				"ip": req.clientIP
			},
			{
				result: req.body.result,
				site: req.body.site,
				device: req.device && req.device.type,
				ua: req.headers['user-agent'],
				ip: req.clientIP,
				create: app.utils.moment().format()
			},
			{
				upsert: true
			},
			function(err, data){
                callback(err, data);
            });
        }
        else {
            callback();
        }
    };

	API.votes = function(req, callback){
        if (req.body && req.body.score){
			app.db.collection('jptestStat').update({
				"ua": req.headers['user-agent'],
				"ip": req.clientIP
			},
			{
				$set: {
					score: req.body.score
				}
			},
			function(err, data){
                callback(err, data);
            })
        }
        else {
            callback();
        }
    };

    return API;
};
