module.exports = function(){

	var API = {};

    var handlerRequest = function(url, callback){
        app.req({
            url: url,
            headers: {
                'User-Agent': 'request'
            },
            timeout: 3000,
        }, function (err, response, data) {
            callback(err, data ? JSON.parse(data) : null);
        })
	};

	API.search = function(url, callback){
		var hash = app.utils.md5(url);

		app.redis.get(hash, function(err, data) {
            if (err){
                callback(true, data);
            }
            else if (data){
                console.log("TAKEN FROM THE CACHE REDIS");
				callback(null, JSON.parse(data));
            }
            else {
                handlerRequest(url, function(err, data){
                    console.log("API GET REQUEST");
					if (!err && data && !app.utils.isEmpty(data.items)){
	                    app.redis.set(hash, JSON.stringify(data));
						app.redis.expireat(hash, parseInt((+new Date)/1000) + 60 * 60 * 24);
					}
					callback(err, data);
                })
            }
        });
    };

	API.vacancy = function(id, callback){
		var url = app.config.get('hh:api') + "/vacancies/" + id,
			hash = app.utils.md5(url);

		app.redis.get(hash, function(err, data) {
            if (err) callback(true, data);
            else if (data) callback(null, JSON.parse(data));
            else {
				handlerRequest(url, function(err, data){
					if (!err && data && data.id){
	                    app.redis.set(hash, JSON.stringify(data));
						app.redis.expireat(hash, parseInt((+new Date)/1000) + 60 * 60 * 24);
					}
					callback(err, data);
		        });
            }
        });
    };

    return API;
};
