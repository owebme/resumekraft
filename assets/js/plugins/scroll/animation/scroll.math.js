(function(app, $, $dom, EV, _){

    app.define("plugins.scroll.math");

    app.plugins.scroll.math = {
        lerp: function(b, a, c) {
            return a + (c - a) * b
        },
        map: function(a, b, j, c, k) {
            return this.lerp(this.norm(a, b, j), c, k)
        },
        norm: function(a, b, c) {
            return (a - b) / (c - b)
        },
        clamp: function(a, b, c) {
            return Math.max(b, Math.min(c, a))
        },
        randFloat: function(a, b) {
            return (Math.random() * (b - a)) + a
        },
        randInt: function(a, b) {
            return Math.floor((Math.random() * (b - a)) + a)
        }
    };

})(app, $, app.$dom, app.events, app.utils);
