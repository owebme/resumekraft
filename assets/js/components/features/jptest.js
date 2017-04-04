(function(app, $, $dom, EV, _){

    app.define("features.jptest");

    app.features.jptest = {

        active: false,

        init: function(options){
            var options = options || {};

            if (this.active || !options.button) return;

            options.button.on("click", function(){
                $Sections.jptest.test.show();
            });
            
            $afterlag.run(function(){
                if (location.hash.match(/run/)){
                    $Sections.jptest.test.show();
                }
                else if (location.hash.match(/#.{32}$/)){
                    $Sections.jptest.result.show(location.hash.replace(/#/, ""));
                }
                $Sections.jptest.result.one("show", function(data){
                    location.hash = data.link;
                });
                $Sections.jptest.result.one("hide", function(data){
                    location.hash = "";
                });
                if (_.isFunction(options.callback)) options.callback();
            });

            this.active = true;
        }
    };

    var WD = app.features.jptest;

})(app, $, app.$dom, app.events, app.utils);
