app.fetch.API = function(method){
    return app.fetch.API[method]();
};

app.fetch.API.getDataInit = function(){
    return new Promise(function(resolve, reject){
        app.request('getDataInit').then(function(res){

            $account = new Baobab(res.account ? res.account : {});
            $store.data = new Baobab(res.data ? res.data : []);
            $store.inbox = new Baobab(res.inbox ? res.inbox : []);

            if (app.config.metrika && app.config.metrika.active){
                var report = false;

                if (app.config.metrika.report){
                    report = {
                        method: app.config.metrika.report.method,
                        interval: app.config.metrika.report.interval
                    }
                }
                app.metrika = new app.plugins.metrika({
                    key: "private",
                    data: app.metrics.private,
                    previousData: res.metrika,
                    visits: $account.get("visits"),
                    report: report
                });
            }

            resolve(res);
        });
    });
};
