module.exports = function(){

    return function(req, res, next){
        var params = app.utils.url.parse(req.url, true).query,
            query = req.url.replace(/\/jobs\/search\//, ""),
            url = app.config.get('hh:api') + "/vacancies/" + (!app.utils.isEmpty(params) ? query + "&clusters=true" : '?clusters=true');

        app.redis.get(app.utils.md5(url), function(err, data) {
            if (err){
                next();
            }
            else if (data){
                console.log("1111111");
                onReturn(res, JSON.parse(data));
            }
            else {
                API.jobs.search(url, function(data){
                    console.log("22222222");
                    app.redis.set(app.utils.md5(url), JSON.stringify(data));
                    onReturn(res, data);
                })
            }
        });

        var onReturn = function(res, data){
            var state = {};

            req.appClient.items = data.items;
            req.appClient.countsAll = "331187";

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
                clusters: JSON.stringify(data.clusters),
                found: data.found,
                state: state ? JSON.stringify(state) : null,
                content: app.riot.render(app.tags("jobsSearch"), req.appClient)
            });
        }

        // app.utils.fs.readFile(process.cwd() + '/public/json/vacancy.json', "utf8", function(err, data){
        //
        // });

    };
}
