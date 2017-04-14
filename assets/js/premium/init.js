(function(){

    var start = new Date().getTime();
    console.time("process");

    riot.compile(function(){
        if (app.demo){
            riot.mount("*");
        }
        else {
            if (!app.json || app.json && !app.json.resume) return;

            $store.resume.set(app.json.resume ? app.json.resume : {});

            if (app.json.ip){
                if (app.json.ip && _.indexOf($store.resume.get("likes"), app.json.ip) != "-1"){
                    app.isLiked = true;
                }
            }
            riot.mount("*");
        }
        console.timeEnd("process");
        var elapsed = new Date().getTime() - start;
        //alert(elapsed + "ms");
    });

})();
