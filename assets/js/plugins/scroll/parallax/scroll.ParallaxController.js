(function(app, $, $dom, EV, _){

    app.define("plugins.scroll.ParallaxController");

    var o = $dom.window;
    var r = app.plugins.scroll.ParallaxElement;
    var x = 0.65;

    var s = function(a) {
        if (app.device.isMobile) {
            return
        }
        this.els = [];
        this._multiplierEls = [];
        a.forEach(this._initializeElement.bind(this));
        this._translateMultiplier = 1;
        this._updateTranslateMultiplier();
        o.on("resize orientationchange", this._updateTranslateMultiplier.bind(this))
    };
    var t = s.prototype;
    t._updateTranslateMultiplier = function() {
        var a = (o.width() <= 1068) ? x : 1;
        var b;
        if (o.width() <= 735) {
            this.reset();
            return
        }
        if (!this._translateMultiplier || this._translateMultiplier !== a) {
            this._translateMultiplier = a;
            for (b = this._multiplierEls.length - 1; b >= 0; b--) {
                this._multiplierEls[b].setTranslateMultiplier(a)
            }
        }
    };
    t._initializeElement = function(f) {
        var d;
        var c;
        var b;
        var a;
        if (!f.selector && !f.elem) {
            return
        }
        if (f.selector){
            d = document.querySelector(f.selector);
        }
        else if (f.elem){
            d = _.isElement(f.elem) ? f.elem : f.elem[0];
        }
        if (!d) {
            return
        }
        c = f.clipOptions || {};
        b = f.scrollOptions || f.clockOptions || {};
        if (!c.propsTo && "to" in f) {
            c.propsTo = {
                translateY: f.to
            };
            c.propsFrom = {
                translateY: f.from || 0
            };
            c.propsOff = {
                translateY: f.off || 0
            };
            c.units = {
                translateY: "px"
            };
            if (f.hasOwnProperty("z")) {
                c.z = f.z
            }
        }
        if (f.scrollTracker) {
            c.scrollTracker = f.scrollTracker
        }
        a = new r(d, c.propsTo, c.propsOff, c, b);
        this.els.push(a);
        if (f.useMediumMultiplier !== false) {
            this._multiplierEls.push(a)
        }
    };
    t.start = function() {
        var a;
        for (a = 0; a < this.els.length; a++) {
            this.els[a].start()
        }
    };
    t.stop = function() {
        var a;
        for (a = 0; a < this.els.length; a++) {
            this.els[a].stop()
        }
    };
    t.reset = function() {
        var a;
        for (a = 0; a < this.els.length; a++) {
            this.els[a].reset()
        }
    };

    app.plugins.scroll.ParallaxController = s;

})(app, $, app.$dom, app.events, app.utils);
