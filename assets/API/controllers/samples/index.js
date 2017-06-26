module.exports = function(){

	var API = {},
		baseUrl = "/samples/",
		alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х'];

	var handlerReturn = function(url, handler, callback){
		var hash = app.utils.md5(url);

		if (app.config.public.get('samples:cache')){
			app.redis.get(hash, function(err, data) {
				if (err) callback(true, data);
				else if (data) {
					console.log("GET STORE REDIS: " + url);
					callback(null, JSON.parse(data));
				}
				else {
					console.log("API REQUEST: " + url);
					handler(function(err, data){
						if (!err && data){
							saveRedis(hash, data);
						}
						callback(err, data);
					});
				}
			});
		}
		else {
			console.log("API REQUEST (cache off): " + url);
			handler(function(err, data){
				callback(err, data);
			});
		}
	};

	var saveRedis = function(hash, data){
		app.redis.set(hash, JSON.stringify(data));
		app.redis.expireat(hash, parseInt((+new Date)/1000) + app.config.public.get('samples:cacheLife'));
	};

	API.items = function(limit, callback){
		handlerReturn(baseUrl, function(callback){
			app.db.collection('samples').find({
				_status: "public"
			},
			{
				post: 1
			})
			.sort({post: 1})
			.limit(limit || 10000)
			.toArray(function(err, data){
				callback(err, data);
			});
        },
        function(err, data){
			callback(err, data);
		});
    };

	API.cluster = function(id, callback){
		if (!app.utils.isObjectId(id)){
			return callback(true, null);
		}
		handlerReturn(baseUrl + "clusters/" + id, function(callback){
			app.db.collection('samples').find({
				_clusterId: app.utils.ObjectId(id)
			})
			.sort({title: 1})
			.toArray(function(err, data){
				callback(err, data);
			});
        },
        function(err, data){
			callback(err, data);
		});
    };

	API.clusters = function(callback){
		handlerReturn(baseUrl + "clusters/", function(callback){
			app.db.collection('samplesClusters').find({})
			.sort({title: 1})
			.toArray(function(err, data){
				if (data){
					var size = data.length,
						counts = 0;

					app.utils.each(data, function(item, i){
						app.db.collection('samples').find({
							_status: "public",
							_clusterId: item._id
						})
						.count(function(err, count){
							counts++;
							if (count) item.counts = count;
							if (size == counts){
								callback(err, data);
							}
						});
					})
				}
				else {
					callback(err, data);
				}
			});
        },
        function(err, data){
			callback(err, data);
		});
    };

	API.alpha = function(alpha, callbackReturn){
		handlerReturn(baseUrl + "alpha/" + alpha, function(callback){
			app.db.collection('samples').find({
				_status: "public"
			},
			{
				post: 1
			})
			.sort({post: 1})
			.toArray(function(err, data){
				var array = [];
				app.utils.each(data, function(item){
					if (item.post[0] === alpha){
						array.push(item);
					}
				});
				callback(err, array);
			});
		},
		function(err, data){
			callbackReturn(err, data);
		});
	};

    API.content = function(id, callbackReturn){
		if (!app.utils.isObjectId(id)){
			return callbackReturn(true, null);
		}
		handlerReturn(baseUrl + id, function(callback){

			app.db.collection('samples').findOne({
				_id: app.utils.ObjectId(id),
				_status: "public"
			},
			function(err, data){
				if (err || !data){
					callbackReturn(true, null);
				}
				else {
					callback(err, data);
				}
			});
        },
        function(err, data){
            callbackReturn(err, data);
        });
    };

    return API;
};
