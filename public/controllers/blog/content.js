module.exports = function(app){

    return function(req, res, next){
        app.async.waterfall([

			function(callback){
                app.mysql.query("SELECT * FROM blog WHERE alias ='" + req.params.alias + "' LIMIT 1", function(err, data){
                    if (err || !data.length){
                        next();
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
                             app.errHandler(res, err, data, callback);
                        });
        			},
                    function(callback){
                        app.mysql.query("SELECT name, image, alias FROM blog WHERE id > '" + item.id + "' ORDER BY id ASC LIMIT 1", function(err, data){
                             app.errHandler(res, err, data, callback);
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
                    app.errHandler(res, err, data, callback);
                });
    		},
		],

		function(err, data){
            if (err){
                next();
            }
            else {
                data.item.date = app.appClient.moment(data.item.date_update).format("D/MM, YYYY в HH:MM");
                app.appClient.data = data;
                var output = app.riot.render(app.tags.blogContent, app.appClient);
                res.render('index', {content: output});
            }
        });
    }
}
