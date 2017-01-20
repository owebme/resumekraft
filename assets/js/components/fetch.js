app.fetch.API = function(method){
    return app.fetch.API[method]();
};

app.fetch.API.getDataInit = function(){
    return new Promise(function(resolve, reject){
        app.request('getDataInit').then(function(res){

            $account = new Baobab(res.account ? res.account : {});
            $store.data = new Baobab(res.data ? res.data : []);
            $store.inbox = new Baobab(res.inbox ? res.inbox : []);

            app.metrika = new app.plugins.metrika({
                key: "private",
                data: app.metrics.private
            });

            resolve(res);
        });
    });
};
