module.exports = function(){

    return function(req, res, next){
        var countsAll = app.config.get('hh:vacancy:counter');

        app.redis.get("jobsCountsAll", function(err, data) {
            if (!err && data) countsAll = data;
        });

        app.async.parallel({
            employer: function(callback){
                API.jobs.employer(req.params.alias, function(err, data){
                    app.errHandler(res, err, data, callback);
                });
            },
            vacancies: function(callback){
                API.jobs.employerVacancies(req.params.alias, function(err, data){
                    app.errHandler(res, err, data, callback);
                });
            }
        },
        function(err, results){
            if (results.employer && results.employer.id) {
                var employer = results.employer;
                req.appClient.section = "employer";
                req.appClient.item = employer;
                req.appClient.items = results.vacancies.items;
                req.appClient.countsAll = countsAll;
                req.appClient.currency = app.store.jobs.currency;

                res.render('jobs', {
                    title: "Вакансии компании «" + employer.name + "», работа в компании в " + employer.area.name,
                    device: req.device.type,
                    content: app.riot.render(app.tags("employer", req.device), req.appClient)
                    .replace(/<raw-content content=".+?">/, "")
                    .replace(/<\/raw-content>/, "")
                    .replace(/<employer-content/, "<employer-content-side")
                    .replace(/<\/employer-content>/, "</employer-content-side>")
                    .replace(/<employer-vacancies-mobile/, "<employer-vacancies-mobile-side")
                    .replace(/<\/employer-vacancies-mobile>/, "</employer-vacancies-mobile-side>")
                });
            }
            else {
                next();
            }
        });
    }
}
