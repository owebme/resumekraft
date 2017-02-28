module.exports = function(){

    return function(req, res, next){
        var countsAll = app.config.get('hh:vacancy:counter');

        app.redis.get("jobsCountsAll", function(err, data) {
            if (!err && data) countsAll = data;
        });

        API.jobs.vacancy(req.params.alias, function(err, data){
            if (data && data.id) {
                req.appClient.section = "vacancy";
                req.appClient.item = data;
                req.appClient.countsAll = countsAll;
                req.appClient.currency = app.store.jobs.currency;

                var output = app.riot.render(app.tags("vacancy"), req.appClient);

                output = output.replace(/<vacancy-content-raw content=".+?">/, "").replace(/<\/vacancy-content-raw>/, "");

                res.render('jobs', {
                    title: "Вакансия на должность «" + data.name + "» в " + data.area.name + ", работа в компании " + data.employer.name,
                    content: output
                });
            }
            else {
                next();
            }
        });
    }
}
