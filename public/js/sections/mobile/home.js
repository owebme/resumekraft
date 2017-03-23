(function(app, $, $dom, EV, _){

    app.define("sections.home");

    app.sections.home = {

        theme: "blue",

        init: function(){

            this.el = $dom.body.children("section-home-mobile");

            if (this.el.length) this.render();
        },

        render: function(){

            app.sections.trigger("endLoading");

            WD.screens = new app.plugins.screens(WD.el, {
                static: true,
                dataAttr: "section"
            });

            WD.screens.init();

            var $screen = WD.el.find(".screen");

            $screen.on('show', function(e){
                var theme = $(this).data("theme"),
                    theme = theme ? theme : "blue";

                if (WD.theme != theme){
                    WD.el.attr("data-theme", theme);
                    WD.theme = theme;
                }
            });

            this.slider();
            this.buttons();
            this.plans();

            $afterlag.run(function(){
                app.sections.trigger("ready");
            });

            app.metrika.set("views.home", 1, {
                action: "inc"
            })
        },

        buttons: function(){
            var $intro = WD.el.find('.screen[data-section="intro"]'),
                $community = WD.el.find('.screen[data-section="community"]');

            $intro.find(".btn").on("click", function(){
                app.tag("section-auth").open("signup");
            });

            $community.find(".btn").on("click", function(){
                app.tag("section-auth").open("signup");
            });
        },

        plans: function(){
            var $section = WD.el.find(".screen[data-section='plans']"),
                $controls = $section.find(".plan__controls"),
                $planItems = $section.find(".plan__items"),
                $pricePremium = $section.find(".plan__item[data-item='premium']"),
                $button = $section.find(".plan__button");

            $controls.on("click", ".plan__control__item", function(){
                var $item = $(this),
                    period = $item.attr("data-period");

                $item.attr("data-active", true)
                .siblings()
                .attr("data-active", false);

                $pricePremium.find(".plan__price__value")
                .text($pricePremium.attr("data-" + period));

                $section.attr("data-period", period);
                app.metrika.set("plan.period", period);
            });

            $planItems.on("click", ".plan__item", function(){
                var $item = $(this),
                    plan = $item.attr("data-item");

                $item.attr("data-active", true)
                .siblings()
                .attr("data-active", false);

                $section.attr("data-plan", plan);
                app.metrika.set("plan.name", plan);
            });

            $button.on("click", function(){
                var plan = $section.attr("data-plan");
                app.tag("section-auth").open("signup", plan);
                app.metrika.set("plan.name", plan);
            });
        },

        slider: function(){
            WD.sliderElastic = new app.plugins.sliderElastic(WD.el.find(".sliderElastic"));

            WD.sliderElastic.init();

            var stopSlider = function(){
                WD.sliderElastic.isScrolling = true;
            },
            startSlider = function(){
                WD.sliderElastic.isScrolling = false;
            },
            _startSlider = _.debounce(startSlider, 100),
            _stopSlider = _.debounce(stopSlider, 20, true);

            WD.screens.get("scroll").on("scroll", function(){
                _stopSlider();
                _startSlider();
            });
        },

        video: function(){
            var video = document.getElementById('video'),
                play = false;

            document.addEventListener('touchstart', function(event) {
                if (!play) {
                    play = true;
                    video.play();
                }
            }, false);
        }
    };

    var WD = app.sections.home;

})(app, $, app.$dom, app.events, app.utils);
