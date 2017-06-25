(function(app, $, $dom, EV, _){

    app.define("features.samples");

    app.features.samples = {

        init: function(el){
            WD.el = el;

            WD.waves();
        },

        waves: function(){
            Waves.attach('[data-ripple]');
            Waves.init();
        }
    };

    var WD = app.features.samples;

})(app, $, app.$dom, app.events, app.utils);
