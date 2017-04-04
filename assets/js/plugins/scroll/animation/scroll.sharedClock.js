(function(app, $, $dom, EV, _){

    app.define("plugins.scroll.sharedClock");

    var h = app.plugins.scroll.clock,
        a;

    function b() {
        var c = new h();
        return c
    }

    app.plugins.scroll.sharedClock = {
        getInstance: function() {
            if (!a) {
                a = b()
            }
            return a
        }
    }

})(app, $, app.$dom, app.events, app.utils);
