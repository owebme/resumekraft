module.exports = function(){

    return function(req, res, next){

        app.async.parallel({

            items: function(callback){
                API.samples.cluster(req.params.alias, function(err, data){
                    callback(err, data);
                })
            },

            clusters: function(callback){
                API.samples.clusters(function(err, data){
                    callback(err, data);
                })
            }
        },

        function(err, data){
            if (!err && data){

                req.appClient.data = {
                    cluster: req.params.alias,
                    items: data.items
                };
                var output = app.riot.render(app.tags("samples", req.device), req.appClient);

                res.render('index', {
                    title: app.config.public.get('title:samples'),
                    clusters: JSON.stringify(data.clusters),
                    samples: JSON.stringify(data.items),
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
