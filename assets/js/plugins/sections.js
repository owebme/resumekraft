(function(app, $, $dom, EV, _){

    app.define("plugins.sections");

    app.plugins.sections = function(scope, options){
        this.scope = scope;
        this.options = options || {};
        this.content = this.options.content || this.scope;
    };

    app.plugins.sections.prototype = {

        show: function(options){
            var _this = this,
                options = options || {};

            if (options.debug){
                $(this.content).addClass("transition-none");
                this.scope.setAttribute("data-inner", "show");
                this.scope.setAttribute("data-open", true);
                if (options.scroll){
                    options.scroll.refresh();
                    options.scroll.scrollTop();
                }                
                return;
            }

            this.scope.setAttribute("data-open", true);
            this.scope.setAttribute("data-loading", true);

            if (options.beforeShow){
                options.beforeShow();
            }
            _.onEndTransition(this.content, function(){
                if (options.update && options.tag){
                    options.tag.update(options.update);

                    options.tag.one("updated", function(){
                        _this._afterShow(options);
                    });
                }
                else {
                    _this._afterShow(options);
                }
            });
        },

        _afterShow: function(options){
            var _this = this,
                options = options || {};

            this.scope.setAttribute("data-inner", "show");

            $afterlag.run(function(){
                if (options.scroll){
                    options.scroll.refresh();
                    options.scroll.scrollTop();
                }
                _this.scope.setAttribute("data-loading", false);

                if (options.afterShow){
                    options.afterShow();
                }
            });
        },

        hide: function(options){
            var _this = this,
                options = options || {};

            this.scope.setAttribute("data-open", false);

            if (options.beforeHide){
                options.beforeHide();
            }
            _.onEndTransition(this.content, function(){
                _this.scope.setAttribute("data-inner", "hidden");

                if (options.afterHide){
                    options.afterHide();
                }
            });
        }
    };

})(app, $, app.$dom, app.events, app.utils);
