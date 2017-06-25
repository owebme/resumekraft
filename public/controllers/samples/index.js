module.exports = function(){

    return function(req, res, next){

        API.samples.items(app.config.public.get('samples:limit'), function(err, data){

            req.appClient.data = {
                items: data
            };
            var output = app.riot.render(app.tags("samples", req.device), req.appClient);

            res.render('index', {
                title: app.config.public.get('title:samples'),
                samples: JSON.stringify(data),
                content: output,
                device: req.device.type,
                isMobile: req.device.isMobile
            });
        });
    }
}
