module.exports = function(){

    return function(req, res, next){

        var output = app.riot.render(app.tags("jobs", req.device), req.appClient);
        res.render(req.device.type == "phone" ? 'index-mobile' : 'index', {
            title: app.config.get('title:jobs'),
            content: output
        });

    };
}
