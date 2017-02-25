module.exports = function(){

    return function(req, res, next){

        app.utils.fs.readFile(process.cwd() + '/public/json/vacancy.json', "utf8", function(err, data){
            if (!err) {
                var data = JSON.parse(data);
                req.appClient.items = data.items;

                var output = app.riot.render(app.tags("jobsSearch"), req.appClient);
                res.render('jobs', {
                    title: app.config.get('title:jobsSearch'),
                    clusters: JSON.stringify(data.clusters),
                    content: output
                });
            } else {
                next();
            }
        });

    };
}
