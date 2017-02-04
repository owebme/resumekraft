(function(){

    riot.compile(function(){
        if (app.demo){
            riot.mount("*");
        }
        else {
            $store.resume.set(app.json.resume ? app.json.resume : {});

            if (app.json.ip && _.indexOf($store.resume.get("likes"), app.json.ip) != "-1"){
                app.isLiked = true;
            }

            riot.mount("*");
        }
    });

})();
