module.exports = function(){

    return function(req, res, next){

        var output = app.riot.render(app.tags("samples", req.device), req.appClient);

        res.render('index', {
            title: app.config.public.get('title:samples'),
            image: "",
            content: output,
            device: req.device.type,
            isMobile: req.device.isMobile
        });
    }
}
