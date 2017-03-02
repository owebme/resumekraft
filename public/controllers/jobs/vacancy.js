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

            // var content = req.appClient.item.description;
            //
            // content = content.replace(/<[^\/]>[\s|\r|\n]{0,}<\/.+?>/gi, "");
            //
            // content = content.replace(/(&nbsp;)+/gi, " ");
            // content = content.replace(/\s+/gi, " ");
            //
            // content = content.replace(/<p><br \/><strong>/gi, "<p><strong>");
            // content = content.replace(/<strong>(.+?)<\/strong>:/gi, "<strong>$1:</strong>");
            // content = content.replace(/<em><strong>(.+?)<\/strong><\/em>/gi, "<strong>$1</strong>");
            // content = content.replace(/<strong><em>(.+?)<\/em><\/strong>/gi, "<strong>$1</strong>");
            // content = content.replace(/<\/(\w+)>\s+<(\w+)/gi, "</$1><$2");
            //
            // content = content.replace(/<p><strong>([a-zа-яё]+):[\s|\r|\n]?<\/strong><\/p>/gi, "<p class='h'>$1:</p>");
            // content = content.replace(/<strong>(.+?):[\s|\r|\n]?<\/strong>/gi, "<p class='h'>$1:</p>");
            // content = content.replace(/<p class='h'>(.+?):<\/p>/gi, "<p class='h'><strong>$1:</strong></p>");
            //
            // content = content.replace(/<li>[\s|\r|\n]?<strong>(.+?)<\/strong>[\s|\r|\n]?<\/li>/gi, "<li class='s'><strong>$1</strong></li>");
            //
            // content = content.replace(/<li>[\s|\r|\n]?<p>(.+?)<\/p>[\s|\r|\n]?<\/li>/gi, "<li>$1</li>");
            //
            // req.appClient.item.description = content;

            var output = app.riot.render(app.tags("vacancy"), req.appClient);

            output = output.replace(/<raw-content content=".+?">/, "").replace(/<\/raw-content>/, "");

            res.render('jobs', {
                title: "Вакансия на должность «" + results.vacancy.name + "» в " + results.vacancy.area.name + ", работа в компании " + results.vacancy.employer.name,
                content: output
            });
		});
    }
}
