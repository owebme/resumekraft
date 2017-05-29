(function(){

    var start = new Date().getTime();
    console.time("process");

    riot.compile(function(){
        riot.mount("*");

        console.timeEnd("process");
        var elapsed = new Date().getTime() - start;
        //alert(elapsed + "ms");
    });

})();
