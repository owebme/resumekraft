module.exports = function(){

    return function(req, res, next){

        API.samples.alpha(req.params.alpha, function(err, data){

            req.appClient.data = {
                alpha: req.params.alpha,
                items: data
            };
            var output = app.riot.render(app.tags("samples", req.device), req.appClient);

            res.render('index', {
                title: "Образцы резюме на букву «" + req.params.alpha + "»",
                samples: JSON.stringify(data),
                content: output,
                device: req.device.type,
                isMobile: req.device.isMobile
            });
        });
    }
}
