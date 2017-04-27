module.exports = function(){

	var API = {};

	var handlerReturn = function(url, handler, callback){
		var hash = app.utils.md5(url);

		if (app.config.public.get('blog:cache')){
			app.redis.get(hash, function(err, data) {
				if (err) callback(true, data);
				else if (data) {
					console.log("GET STORE REDIS: " + url);
					callback(null, JSON.parse(data));
				}
				else {
					console.log("MYSQL REQUEST: " + url);
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
			console.log("MYSQL REQUEST (cache off): " + url);
			handler(function(err, data){
				callback(err, data);
			});
		}
	};

	var saveRedis = function(hash, data){
		app.redis.set(hash, JSON.stringify(data));
		app.redis.expireat(hash, parseInt((+new Date)/1000) + app.config.public.get('blog:cacheLife'));
	};

	API.index = function(req, callback){
		handlerReturn(req.url + ":" + req.device.type, function(callback){
            var page = req.params.page,
                perPage = app.config.public.get('blog:perPage');

            if (!page) page = 1;

            app.async.parallel({

                items: function(callback){
                    if (req.device.type == "phone"){
                        var query = "name, keywords, image, color, date_update AS date, alias";
                    }
                    else {
                        var query = "name, keywords, image, text_sm, date_update AS date, alias";
                    }
                    app.mysql.query("SELECT " + query + " FROM blog ORDER BY date_create DESC" + (req.device.type != "phone" ? " LIMIT " + ((page - 1) * perPage) + ", " + perPage : ""),
                    function(err, data){
                        callback(err, data);
                    });
                },

                size: function(callback){
                    app.mysql.query("SELECT id FROM blog", function(err, data){
                        callback(err, data);
                    });
                }
            },

            function(err, data){
                if (data){
                    var pages = 1, count = data.size.length;
                    if (count) pages = parseInt(Math.floor(count / perPage));

                    var data = {
                        headers: app.utils.copyArray(data.items).slice(0, 4),
                        items: data.items,
                        pages: pages,
                        page: page ? parseInt(page) : 1
                    };

                    data.headers = app.utils.map(data.headers, function(item, i){
                        var date = item.date;
                        if (i == 0) item.date = app.utils.moment(date).format("MMMM D, YYYY");
                        else item.date = app.utils.moment(date).format("D/MM, YYYY");
                        item.time = app.utils.moment(date).format("HH:MM");
                        return item;
                    });

                    data.items = app.utils.map(data.items, function(item){
                        item.dateShort = app.utils.moment(item.date).format("D/MM");
                        item.date = app.utils.moment(item.date).format("MMMM D, YYYY, HH:MM");
                        return item;
                    });

                    callback(err, data);
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

    API.article = function(req, callbackReturn){
		handlerReturn(req.url, function(callback){

            app.async.waterfall([

    			function(callback){
                    app.mysql.query("SELECT * FROM blog WHERE alias ='" + req.params.alias + "' LIMIT 1", function(err, data){
                        if (err || !data.length){
                            callbackReturn(true, null);
                        }
                        else {
                            callback(null, data[0]);
                        }
                    });
    			},

                function(item, callback){
                    app.async.parallel([
            			function(callback){
                            app.mysql.query("SELECT name, image, alias FROM blog WHERE id < '" + item.id + "' ORDER BY id DESC LIMIT 1", function(err, data){
                                 callback(err, data);
                            });
            			},
                        function(callback){
                            app.mysql.query("SELECT name, image, alias FROM blog WHERE id > '" + item.id + "' ORDER BY id ASC LIMIT 1", function(err, data){
                                 callback(err, data);
                            });
                        },
            		],
                    function(err, result){
                        var data = {
                            item: item
                        }
            			if (result && result.length){
                            data.prevItem = result[0][0];
                            data.nextItem = result[1][0];
                        }
                        callback(err, data);
                    });
        		},
    		],

    		function(err, data){
                if (!err && data){
                    data.item.date = app.utils.moment(data.item.date_update).format("D/MM, YYYY в HH:MM");
                    callback(err, data);
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
