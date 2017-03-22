(function(){

    app.fetch("getDataInit").then(function(){
        riot.mount("*", {
            renderClient: true
        });
    });

})();
