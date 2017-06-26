(function(app, $, $dom, EV, _){

    app.define("sections.samples");

    app.sections.samples = {

        section: null,

        init: function(){

            this.el = $dom.body.children(".samples");

            if (this.el.length) this.render();
        },

        router: {

            base: "/samples/",

            init: function(){
                window.$Router = new Navigo(location.origin + this.base);

                $Router.base = this.base;
                $Router.set = this.set;

                $Router
                .on(function() {
                    WD.mode("samples");
                })
                .on({
                    'alpha/:alpha': function(params) {
                        app.request("getSamplesAlpha", params.alpha, {
                            notify: false
                        })
                        .then(function(data){
                            var section = riot.mount("samples-items", {
                                items: data,
                                alpha_: params.alpha
                            })[0];
                            section.one("updated", function(){
                                WD.$clusters.clear();
                                WD.mode("samples");
                            });
                            section.update();
                        });
                    },
                    'clusters/:alias/:name': function(params) {
                        app.request("getSamplesCluster", params.alias, {
                            notify: false
                        })
                        .then(function(data){
                            var section = riot.mount("samples-items", {
                                items: data
                            })[0];
                            section.one("updated", function(){
                                WD.$alphabet.clear();
                                WD.mode("samples");
                            });
                            section.update();
                        });
                    },
                    ':alias/:name': function(params) {
                        app.request("getSamples", params.alias, {
                            notify: false
                        })
                        .then(function(data){
                            var section = riot.mount("sample-content", {
                                item: data
                            })[0];
                            section.one("updated", function(){
                                WD.mode("sample");
                            });
                            section.update();
                        });
                    }
                });
            },

            set: function(url, title) {
                $Router.navigate(url.replace($Router.base, "").replace(/^\//, ""));
                document.title = title || document.title;
            }
        },

        render: function(){

            WD.section = !_.isEmpty($store.resume.get()) ? "sample" : "samples";

            WD.router.init();

            WD.sample = app.sections.sample;

            app.sections.on("afterMounted", function(){
                WD.$clusters = WD.el.find("samples-clusters")[0]._tag;
                WD.$alphabet = WD.el.find("samples-alphabet")[0]._tag;
                app.features.samples.init(WD.el);
            });

            WD.nav();

            WD.search();

            app.sections.trigger("ready");

            app.metrika.set("views.samples", 1, {
                action: "inc"
            })
        },

        nav: function(){
            WD.el.find("btn-arrow-back").on("click", function(e){
                e.preventDefault();
                $Router.set(e.currentTarget.getAttribute("url"), "Образцы резюме");
            });

            WD.el.find("btn-arrow-top").on("click", function(){
                WD.scrollTop();
            });
        },

        search: function(){
            var $input = WD.el.find('.main__nav__search__input'),
                suggest = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('post'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                prefetch: '/public/api/samples/suggest'
            });

            $input.typeahead({
                hint: true,
                highlight: true,
                minLength: 1,
                limit: 10
            },
            {
                name: 'samples',
                display: 'post',
                source: suggest
            });

            $input.on('typeahead:select', function(e, item){
                //$input.typeahead('val', "");
                $Router.set("/samples/" + item._id + "/" + item.post, "Образец резюме «" + item.post + "»");
            });
        },

        mode: function(section){
            if (section && WD.section !== section){
                WD.section = section;
                WD.el.attr("data-section", section);
            }
            if (section === "sample"){
                if (!WD.sample.offer.tracker){
                    WD.sample.offer();
                }
                else {
                    WD.sample.offer.render();
                }
            }
            WD.scrollTop(0, 0);
        },

        scrollTop: function(top, dur){
            var scrollTop = $dom.document.scrollTop(),
            duration = scrollTop / 5;
            duration = duration < 500 ? 500 : duration;

            $dom.body.animate({scrollTop: top !== undefined ? top : 0}, dur !== undefined ? dur : duration);
        }
    };

    var WD = app.sections.samples;

})(app, $, app.$dom, app.events, app.utils);
