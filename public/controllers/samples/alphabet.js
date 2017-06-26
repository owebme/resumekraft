module.exports = function(){

    return function(req, res, next){

        app.async.parallel({

            items: function(callback){
                API.samples.alpha(req.params.alpha, function(err, data){
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
                    alpha: req.params.alpha,
                    items: data.items
                };
                var output = app.riot.render(app.tags("samples", req.device), req.appClient);

                res.render('index', {
                    title: "Образцы резюме на букву «" + req.params.alpha + "»",
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
