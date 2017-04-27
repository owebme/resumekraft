module.exports = function(){

	var API = {};

    var handlerRequest = function(callback){
        app.db.collection('informers').find().toArray(function(err, data){
            callback(err, data);
        });
    }

    API.get = function(callback){
		var hash = "informers:cache";

		if (app.config.public.get('informers:cache')){
			app.redis.get(hash, function(err, data) {
				if (err) callback(true, data);
				else if (data) {
					console.log("GET STORE REDIS: informers");
					callback(null, JSON.parse(data));
				}
				else {
					console.log("MONGO REQUEST: informers");
                    handlerRequest(function(err, data){
                        if (!err && data){
							saveRedis(hash, data);
						}
        				callback(err, data);
        			});
				}
			});
		}
		else {
			console.log("MONGO REQUEST (cache off): informers");
            handlerRequest(function(err, data){
				callback(err, data);
			});
		}
	}

    var saveRedis = function(hash, data){
		app.redis.set(hash, JSON.stringify(data));
		app.redis.expireat(hash, parseInt((+new Date)/1000) + app.config.public.get('informers:cacheLife'));
	}

    API.prepare = function(data){
        if (data && !app.utils.isEmpty(data)){
            var currency = app.utils.findWhere(data, {'_id': 'currency'}) || null,
                weather = app.utils.findWhere(data, {'_id': 'weather'}),
                traffic = app.utils.findWhere(data, {'_id': 'traffic'}) || null;

            if (currency){
                currency = currency.items || null;
                if (currency){
                    currency = {
                        usd: app.utils.findWhere(currency, {'code': 'USD'}).value,
                        euro: app.utils.findWhere(currency, {'code': 'EUR'}).value,
                        date: app.utils.findWhere(currency, {'code': 'USD'}).date
                    }
                }
            }

            return {
                weather: weather && weather.now || null,
                traffic: traffic,
                currency: currency
            }
        }
        else {
            return null;
        }
    }

    return API;

};
