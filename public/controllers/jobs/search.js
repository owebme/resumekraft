module.exports = function(){

    return function(req, res, next){
        var params = app.utils.url.parse(req.url, true).query,
            query = req.url.replace(/\/jobs\/search\//, ""),
            isEmptyParams = app.utils.isEmpty(params),
            url = app.config.get('hh:api') + "/vacancies/" + (!isEmptyParams ? query + "&clusters=true" : '?clusters=true'),
            countsAll = app.config.get('hh:vacancy:counter');

        app.redis.get("jobsCountsAll", function(err, data) {
            if (!err && data) countsAll = data;
        });

        API.jobs.search(url, function(err, data){
            if (err) next();
            else {
                var state = {};

                if (isEmptyParams && data.found && countsAll != data.found){
                    app.redis.set('jobsCountsAll', data.found);
                }
                req.appClient.section = "search";
                req.appClient.items = data && data.items;
                req.appClient.page = data && data.page;
                req.appClient.pages = data && data.pages;
                req.appClient.countsAll = countsAll;
                req.appClient.modeView = req.cookies && req.cookies.jobsSearchList;
                req.appClient.currency = app.store.jobs.currency;

                if (!app.utils.isEmpty(params) && app.store.jobs){
                    app.utils.each(params, function(id, name){
                        if (app.store.jobs[name]){
                            var item = app.utils.deepFindWhere(app.store.jobs[name], "id", id);
                            if (item){
                                state[name] = {
                                    id: id,
                                    name: item.name
                                }
                            }
                        }
                    })
                }

                res.render('jobs', {
                    title: app.config.get('title:jobsSearch'),
                    clusters: data ? JSON.stringify(data.clusters) : null,
                    items: data ? JSON.stringify(data.items) : null,
                    found: data && data.found,
                    pages: data && data.pages,
                    state: state ? JSON.stringify(state) : null,
                    device: req.device.type,
                    content: app.riot.render(app.tags("jobsSearch", req.device), req.appClient)
                    .replace(/<jobs-search-list-item/gi, "<jobs-search-list-item-side")
                    .replace(/<\/jobs-search-list-item>/gi, "</jobs-search-list-item-side>")
                    .replace(/<jobs-search-list-favorite/gi, "<jobs-search-list-favorite-side")
                    .replace(/<\/jobs-search-list-favorite>/gi, "</jobs-search-list-favorite-side>")

                });
            }
        });

        // app.utils.fs.readFile(process.cwd() + '/public/json/vacancy.json', "utf8", function(err, data){
        //
        // });

    };
}