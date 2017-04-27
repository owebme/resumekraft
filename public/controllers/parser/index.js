var validator = require('validator');
var to_json = require('xmljson').to_json;

module.exports = function(){

    return function(req, res, next){
        try {
            app.async.parallel([

                function(callback){
                    app.req.get({
                	    uri: app.config.public.get('parser:weather:url'),
                		encoding: 'utf8'
                	},
                	function(error, response, xml){
                		if (!error && response.statusCode == 200) {

                			to_json(xml, function (error, data) {
                				if (!error){
                                    if (data.info && data.info.traffic && data.info.traffic.region){
                    					var traffic = {
                    						_id: "traffic",
                    						level: data.info.traffic.region.level,
                    						status: {
                    							ru: data.info.traffic.region.hint[0]._,
                    							en: data.info.traffic.region.hint[0]._
                    						}
                    					};
                                    }
                                    else {
                                        var traffic = {
                    						_id: "traffic"
                    					};
                                    }

                					var weather = {
                						now: {
                                            from: null,
                                            to: null
                                        }
                					};

                					for (var i=0; i < 5; i++){
                						if (!weather.now.from && data.info.weather.day.day_part[i].temperature){
                							weather.now.from = data.info.weather.day.day_part[i].temperature._;
                						}
                						if (!weather.now.to && data.info.weather.day.day_part[i].temperature_to){
                							weather.now.to = data.info.weather.day.day_part[i].temperature_to._;
                						}
                						if (data.info.weather.day.day_part[i].weather_code){
                							weather.now.code = data.info.weather.day.day_part[i].weather_code;
                							weather.now.type = data.info.weather.day.day_part[i].weather_type;
                							weather.now.humidity = data.info.weather.day.day_part[i].dampness;
                							weather.now.pressure = data.info.weather.day.day_part[i].pressure;
                						}
                					}

                					weather._id = "weather";
                					weather.now.date = validator.toDate(data.info.weather.day.date.$.date);

                					app.db.collection('informers').remove({
                						"_id": "traffic",
                					});
                					app.db.collection('informers').insert(traffic);

                					app.db.collection('informers').remove({
                						"_id": "weather",
                					});
                					app.db.collection('informers').insert(weather);

                                    callback(null, {
                						traffic: traffic,
                						weather: weather
                					});
                				}
                			});
                		}
                	});
                },

                function(callback){
                    app.req.get({
                	    uri: app.config.public.get('parser:currency:url'),
                		encoding: 'binary'
                	},
                	function(error, response, xml){
                		if (!error && response.statusCode == 200) {

                			xml = app.utils.convert(xml, 'win1251', 'utf8');

                			to_json(xml, function (error, data) {
                				if (!error){

                					var currency = [],
                						date = data.ValCurs.$.Date,
                						valuta = app.config.public.get('parser:currency:valuta');

                					for (var i=0; i < 100; i++){
                						if (data.ValCurs.Valute[i] && valuta.indexOf(data.ValCurs.Valute[i].CharCode) > -1){
                							var value = String(data.ValCurs.Valute[i].Value).replace(/,/g, '.');
                							currency.push({
                								code: data.ValCurs.Valute[i].CharCode,
                								title: data.ValCurs.Valute[i].Name,
                								value: parseFloat(value).toFixed(3),
                								date: date
                							});
                						}
                					}

                					currency = {
                						_id: "currency",
                						items: currency
                					};

                					app.db.collection('informers').remove({
                						"_id": "currency",
                					});
                					app.db.collection('informers').insert(currency);

                                    callback(null, currency);
                				}
                			});
                		}
                	});
                },
            ],

            function(err, data){
                if (data && data.length){
                    var informers = JSON.stringify({
                        traffic: data[0].traffic,
                        weather: data[0].weather,
                        currency: data[1]
                    })
                    if (app.config.public.get('informers:cache')){
                        var hash = "informers:cache";
                        app.redis.set(hash, informers);
                		app.redis.expireat(hash, parseInt((+new Date)/1000) + app.config.public.get('informers:cacheLife'));
                        console.log("REDIS SAVE: informers");
                    }
                    return res.send(informers);
                }
                else {
                    res.send(null);
                }
            });
        }
        catch(e){
            res.send(e);
        }
    }
}
