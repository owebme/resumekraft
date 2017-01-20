(function(app, $, $dom, EV, _){

    app.define("plugins.metrika");

    app.plugins.metrika = function(options){
        this.state = options.data;
        this.previousState = options.previousData;
        this.key = options.key;
        this.init();
    };

    app.plugins.metrika.prototype = {

        init: function(){
            if (this.active) return;

            var _this = this,
                state = this.state || this.previousState,
                key = this.key,
                ver = Store.get(key) && Store.get(key).ver;

            if (ver && ver == state.ver){
                if (Store.get(key)){
                    _.deepExtend(state, Store.get(key));
                }
            }
            else {
                Store.set(key, {
                    'ver': state.ver
                });
            }

            this.state = new Baobab(state, { autoCommit: true });

            this.state.on("write", function(e){
                Store.set(key, _this.state.get());
            });
            Store.set(key, this.state.get());

            this.active = true;
        },

        set: function(path, value, action){
            if (!path || !this.active) return;
            if (!action){
                this.state.select(path.split(".")).set(value);
            }
            else if (action == "inc") {
                var val = this.state.get(path.split(".")) + value;
                this.state.select(path.split(".")).set(val);
            }
            else if (action == "dec") {
                var val = this.state.get(path.split(".")) - value;
                this.state.select(path.split(".")).set(val);
            }
        },

        get: function(path){
            if (!path || !this.active) return;
            return this.state.get(path.split("."));
        }
    };

})(app, $, app.$dom, app.events, app.utils);
