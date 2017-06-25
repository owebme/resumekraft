module.exports = function(){

    return function(req, res, next){

        app.async.parallel({

            items: function(callback){
                API.samples.items(app.config.public.get('samples:limit'), function(err, data){
                    callback(err, data);
                })
            },

            clusters: function(callback){
                API.samples.clusters(function(err, data){
                    callback(err, data);
                })
            },

            item: function(callback){
                API.samples.content(req.params.alias, function(err, data){
                    if (err || !data){
                        next();
                    }
                    else {
                        callback(err, data);
                    }
                })
            },
        },

        function(err, data){
            if (!err && data){

                req.appClient.data = data;
                var output = app.riot.render(app.tags("samples", req.device), req.appClient);

                res.render('index', {
                    title: 'Образец резюме «' + data.item.post + '»',
                    clusters: JSON.stringify(data.clusters),
                    samples: JSON.stringify(data.items),
                    sample: JSON.stringify(data.item),
                    content: output,
                    device: req.device.type,
                    isMobile: req.device.isMobile
                });
            }
            else {
                next();
            }
        });
    }
}
