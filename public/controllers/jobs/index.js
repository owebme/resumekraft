module.exports = function(){

    return function(req, res, next){

        var output = app.riot.render(app.tags("jobs", req.device), req.appClient);
        res.render('index', {
            title: app.config.public.get('title:jobs'),
            content: output
        });

    };
}
