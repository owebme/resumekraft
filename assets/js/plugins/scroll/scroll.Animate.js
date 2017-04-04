(function(app, $, $dom, EV, _){

    app.define("plugins.scroll.animate");

    app.plugins.scroll.animate = function(options){
        this.ready = false;
        this.delay = options.delay;
        this.elems = options.elems ? options.elems : ".anim";
        this.scroll = options.scroll ? $(options.scroll) : $dom.window;
        this.scope = options.container ? $(options.container) : this.scroll;
        this.delta = options.delta ? this.deltaValues.getValueByTitle(options.delta) : null;
        this._items = options.items;
        this.onlyItems = options.onlyItems;
        this.items = [];
    };

    app.plugins.scroll.animate.prototype = {

        start: function(render){
            var _this = this;

            if (!this.ready || render) this.render();

            if (this.items.length){
                this.scroll.on("scroll.animate", function(){
                    if (!_this.scrolling){
                        _this.scrolling = true;
                        _this.raf = _.raf(function(){
                            _this.onScroll.call(_this);
                        });
                    }
                });
            }
        },

        render: function(){
            var _this = this;

            this.items = [];

            this.scrollTop = this.getScrollY.call(this);

            if (this._items){
                var i = 0;
                _.each(this._items, function(item){
                    (function(item){
                        _this.scope.find(item.elem).each(function(){
                            _this.each({
                                elem: this,
                                index: i,
                                delta: item.delta,
                                callback: item.callback
                            })
                            i++;
                        });
                    })(item);
                });
            }

            if (!this.onlyItems){
                this.scope.find(this.elems).each(function(){
                    _this.each({
                        elem: this
                    })
                });
            }

            this.ready = true;
        },

        each: function(options){
            var $elem = $(options.elem),
                delta = options.delta || options.elem.getAttribute("data-delta");

            if (delta) delta = this.deltaValues.getValueByTitle(delta);
            else delta = this.delta ? this.delta : this.deltaValues.getValueByTitle("m");

            var data = {
                elem: $elem,
                anim: false,
                offset: $elem.offset(),
                delta: delta,
                callback: options.callback ? options.callback : null
            };

            if (!this.iteration(this.scrollTop, data, options.index)){
                this.items.push(data);
            }
        },

        onScroll: function(){
            var _this = this,
                scroll = this.getScrollY.call(this);

            this.items.forEach(function(item, i){
                _this.iteration(scroll, item, i);
            });
            this.scrolling = false;
        },

        getScrollY: function(){
            return this.scroll[0].scrollTop || this.scroll[0].scrollY;
        },

        iteration: function(scroll, item, i){
            if (!item.anim && (scroll + app.sizes.height * item.delta) > item.offset.top){
                item.anim = true;
                if (item.callback) item.callback(item.elem, i);
                else item.elem.addClass("animated");
                return true;
            }
            else {
                return false;
            }
        },

        destroy: function(){
            this.scroll.off("scroll.animate");
            _.caf(this.raf);
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
                    title: "xxs",
                    value: 1.25
                },
                {
                    title: "xs",
                    value: 1
                },
                {
                    title: "s",
                    value: 0.733
                },
                {
                    title: "m",
                    value: 0.54
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
