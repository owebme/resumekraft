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

	var handlerReturn = function(url, prop, callback){
		var hash = app.utils.md5(url);

		app.redis.get(hash, function(err, data) {
			if (err) callback(true, data);
			else if (data) {
				console.log("GET STORE REDIS: " + url);
				callback(null, JSON.parse(data));
			}
			else {
				console.log("API REQUEST: " + url);
				handlerRequest(url, function(err, data){
					if (!err && data){
						if (prop == "items" && !app.utils.isEmpty(data.items) || prop != "items" && data[prop]){
							saveRedis(hash, data);
						}
					}
					callback(err, data);
				});
			}
		});
	};

	var saveRedis = function(hash, data){
		app.redis.set(hash, JSON.stringify(data));
		app.redis.expireat(hash, parseInt((+new Date)/1000) + 60 * 60 * 24);
	};

	API.search = function(url, callback){
		handlerReturn(url, "items", function(err, data){
			callback(err, data);
		});
    };

	API.vacancy = function(id, callback){
		handlerReturn(app.config.get('hh:api') + "/vacancies/" + id, "id", function(err, data){
			callback(err, data);
		});
    };

	API.vacancySimilary = function(id, callback){
		handlerReturn(app.config.get('hh:api') + "/vacancies/" + id + "/similar_vacancies", "items", function(err, data){
			callback(err, data);
		});
    };

	API.employer = function(id, callback){
		handlerReturn(app.config.get('hh:api') + "/employers/" + id, "id", function(err, data){
			callback(err, data);
		});
    };

	API.employerVacancies = function(id, callback){
		handlerReturn(app.config.get('hh:api') + "/vacancies?employer_id=" + id, "items", function(err, data){
			callback(err, data);
		});
    };

    return API;
};
