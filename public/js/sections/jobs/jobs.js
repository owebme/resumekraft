(function(app, $, $dom, EV, _){

    app.define("sections.jobs");

    app.sections.jobs = {

        init: function(){

            if (app.device.isPhone) return;

            this.el = $dom.body.children(".section.jobs");

            if (this.el.length) this.render();
        },

        render: function(){

            $dom.root = this.el;

            $Sections = new app.plugins.define("$Sections");
        }
    };

    var WD = app.sections.jobs;

})(app, $, app.$dom, app.events, app.utils);
