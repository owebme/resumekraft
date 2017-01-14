(function(app, $, $dom, EV, _){

    app.define("plugins.scroll.animate");

    app.plugins.scroll.animate = function(options){

        if (!options || options && !options.scroll) return;

        this.ready = false;
        this.delay = options.delay;
        this.elems = options.elems ? options.elems : ".anim";
        this.scroll = $(options.scroll);
        this.scope = options.container ? $(options.container) : this.scroll;
        this.delta = options.delta ? this.deltaValues.getValueByTitle(options.delta) : null;
        this.scenario = options.scenario;
        this.items = [];
    };

    app.plugins.scroll.animate.prototype = {

        start: function(render){
            var _this = this;

            if (!this.ready || render) this.render();

            var _onScroll = _.throttle(this.onScroll, 100);

            if (this.items.length){
                this.scroll.on("scroll.animate", function(){
                    _onScroll(_this);
                });
            }
        },

        render: function(){
            var _this = this;

            this.items = [];

            this.scope.find(this.elems).each(function(){
                _this.each(this);
            });

            if (this.scenario){
                _.each(this.scenario, function(item){
                    _this.scope.find(item.elem).each(function(){
                        _this.each(this, item.callback);
                    });
                });
            }

            this.ready = true;
        },

        each: function(elem, callback){
            var _this = this,
                $elem = $(elem),
                delta = elem.getAttribute("data-delta");

            if (delta) delta = _this.deltaValues.getValueByTitle(delta);
            else delta = _this.delta ? _this.delta : 0.55;

            _this.items.push({
                elem: $elem,
                anim: false,
                offset: $elem.offset(),
                delta: delta,
                callback: callback ? callback : null
            });
        },

        onScroll: function(_this){
            var scroll = _this.scroll[0].scrollTop || _this.scroll[0].scrollY;
            _this.items.forEach(function(item, i){
                if (!item.anim && (scroll + app.sizes.height * item.delta) > item.offset.top){
                    item.anim = true;
                    if (item.callback) item.callback(item.elem);
                    else item.elem.addClass("animated");
                }
            });
        },

        destroy: function(){
            this.scroll.off("scroll.animate");
            this.items.forEach(function(item, i){
                if (item.anim){
                    item.anim = false;
                    item.elem.removeClass("animated");
                }
            });
            this.ready = false;
        },

        deltaValues: {

            items: [
                {
                    title: "xs",
                    value: 1
                },
                {
                    title: "s",
                    value: 0.7
                },
                {
                    title: "m",
                    value: 0.55
                },
                {
                    title: "l",
                    value: 0.38
                },
                {
                    title: "xl",
                    value: 0.25
                }
            ],

            getValueByTitle: function(title){
                return _.findWhere(this.items, {"title": title}).value;
            }
        }
    };

})(app, $, app.$dom, app.events, app.utils);
