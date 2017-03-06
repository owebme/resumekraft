module.exports = function(){

    return function(req, res, next){
        var countsAll = app.config.get('hh:vacancy:counter');

        app.redis.get("jobsCountsAll", function(err, data) {
            if (!err && data) countsAll = data;
        });

        app.async.waterfall([

			function(callback){
                API.jobs.vacancy(req.params.alias, function(err, data){
                    app.errHandler(res, err, data, callback);
                });
			},

            function(vacancy, callback){
                if (vacancy && vacancy.id) {
                    app.async.parallel({
                        vacancies: function(callback){
                            API.jobs.vacancySimilary(vacancy.id, function(err, data){
                                app.errHandler(res, err, data, callback);
                            });
                        }
	        		},
	                function(err, results){
                        results.vacancy = vacancy;
	                    app.errHandler(res, err, results, callback);
	                });
                }
                else {
                    next();
                }
            }
		],

		function(err, results){
            req.appClient.section = "vacancy";
            req.appClient.item = results.vacancy;
            req.appClient.items = results.vacancies.items;
            req.appClient.countsAll = countsAll;
            req.appClient.currency = app.store.jobs.currency;

            res.render('jobs', {
                title: "Вакансия на должность «" + results.vacancy.name + "» в " + results.vacancy.area.name + ", работа в компании " + results.vacancy.employer.name,
                device: req.device.type,
                content: app.riot.render(app.tags("vacancy", req.device), req.appClient)
                .replace(/<raw-content content=".+?">/, "")
                .replace(/<\/raw-content>/, "")
                .replace(/<vacancy-content/, "<vacancy-content-side")
                .replace(/<\/vacancy-content>/, "</vacancy-content-side>")
                .replace(/<vacancy-similary/, "<vacancy-similary-side")
                .replace(/<\/vacancy-similary>/, "</vacancy-similary-side>")
            });
		});
    }
}
