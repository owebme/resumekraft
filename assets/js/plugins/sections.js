(function(app, $, $dom, EV, _){

    app.define("plugins.sections");

    app.plugins.sections = function(scope, options){
        this.scope = scope;
        this.active = false;
        this.options = options || {};
        this.content = this.options.content || this.scope;
    };

    app.plugins.sections.prototype = {

        show: function(options){
            if (this.active) return;

            var _this = this,
                options = options || {};

            if (options.forceShow){
                this.active = true;
                var $content = $(this.content);
                $content.addClass("transition-none");
                this.scope.setAttribute("data-inner", "show");
                this.scope.setAttribute("data-open", true);
                if (options.scroll){
                    options.scroll.refresh();
                    options.scroll.scrollTop();
                }
                if (_.isFunction(options.beforeShow)){
                    options.beforeShow();
                }
                if (options.update && options.tag){
                    options.tag.update(options.update);

                    options.tag.one("updated", function(){
                        if (_.isFunction(options.afterShow)){
                            options.afterShow();
                        }
                    });
                }
                else {
                    if (_.isFunction(options.afterShow)){
                        options.afterShow();
                    }
                }
                $afterlag.run(function(){
                    $content.removeClass("transition-none");
                });
                return;
            }

            this.scope.setAttribute("data-open", true);
            this.scope.setAttribute("data-loading", true);

            if (_.isFunction(options.beforeShow)){
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
                _this.active = true;
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

                if (_.isFunction(options.afterShow)){
                    options.afterShow();
                }
            });
        },

        loading: function(show){
            var _this = this;

            if (show){
                this.scope.setAttribute("data-inner", "hidden");
                this.scope.setAttribute("data-loading", true);
            }
            else {
                this.scope.setAttribute("data-inner", "show");

                $afterlag.run(function(){
                    _this.scope.setAttribute("data-loading", false);
                });
            }
        },

        hide: function(options){
            if (!this.active) return;

            var _this = this,
                options = options || {};

            this.scope.setAttribute("data-open", false);

            if (_.isFunction(options.beforeHide)){
                options.beforeHide();
            }
            _.onEndTransition(this.content, function(){
                _this.scope.setAttribute("data-inner", "hidden");

                if (_.isFunction(options.afterHide)){
                    options.afterHide();
                }
                _this.active = false;
            });
        }
    };

})(app, $, app.$dom, app.events, app.utils);
