(function(app, $, $dom, EV, _){

    app.define("sections.home");

    app.sections.home = {

        init: function(){

            this.el = $dom.body.children("section-home");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.header();

            WD.content();

            WD.writing();

            WD.slider();

            WD.createAccount();

            app.metrika.set("views.home", 1, {
                action: "inc"
            })
        },

        slider: function(){
            WD.navSlider = WD.el.find("home-sticky-nav");

            WD.step = 1;

            app.sections.once("afterMounted", function(){

                WD.updateSlider();

                WD.navSlider.on("click", ".sticky__nav__button", function(e){
                    var $item = $(e.currentTarget),
                        step = $item.data("step");

                    if (step) WD.onScrollTo(step.num == 0 ? 0 : step.offsetTop + 1);
                });

                var onScroll = _.debounce(WD.onScroll, 10),
                    onResize = _.debounce(WD.updateSlider, 300);

                app.$dom.window.on("scroll", function(){
                    _.raf(onScroll);
                });

                app.$dom.window.on("resize", function(){
                    _.raf(onResize);
                });
            })
        },

        updateSlider: function(){
            WD.steps = [];

            WD.navSlider.find(".sticky__nav__button").each(function(i){
                var $button = $(this),
                    section = this.getAttribute("data-scrollto"),
                    $section = WD.el.find(section);

                if ($section.length){
                    var item = {
                        num: i,
                        offsetTop: i == 0 ? 0 : $section.offset().top - 95,
                        offsetBottom: parseInt($section.offset().top + $section.height()) - 95,
                        button: $button
                    };
                    $button.data("step", item);
                    WD.steps.push(item);
                }
            });
        },

        onScrollTo: function(offset){
            var delta = Math.abs(offset - app.$dom.document.scrollTop()),
            duration = delta / 5;
            duration = duration < 500 ? 500 : duration;

            $('html, body').animate({scrollTop: offset}, duration);
        },

        onScroll: function(){
            var step = null,
                scroll = app.$dom.document.scrollTop();

            _.each(WD.steps, function(item){
                if (scroll > item.offsetTop && scroll < item.offsetBottom) {
                    step = item;
                }
            });

    		if (step && WD.step.num != step.num) {
                WD.step = step;
                WD.step.button.addClass("-active")
                .siblings()
                .removeClass("-active");
    		}
        },

        header: function(){
            var $phones = WD.el.find('home-hero .phones'),
                $stickyNav = WD.el.find('.stickyNav'),
                animHeader = new app.plugins.animate(WD.el, {
                    showAfter: 1
                });

            animHeader.show(function(){
                $phones.attr("data-show", true);
                $afterlag.xl(function(){
                    app.sections.trigger("ready"); // RUN mounting tags
                });
            });
        },

        content: function(){
            WD.contentAnimate = new app.plugins.scroll.animate({
                container: $dom.body,
                onlyItems: true,
                items: [
                    {
                        delta: "xs",
                        elem: "home-professions .prof__items__photo",
                        callback: function($elem, i){
                            $elem.attr("data-show", true);
                        }
                    },
                    {
                        delta: "xs",
                        elem: "home-promo .phones",
                        callback: function($elem, i){
                            $elem.attr("data-show", true);
                        }
                    },
                    {
                        delta: "xs",
                        elem: "section-plans",
                        callback: function($elem, i){
                            app.features.orbits.init();
                        }
                    }
                ]
            });

            WD.contentAnimate.start();
        },

        writing: function(){
            var $section = WD.el.find("section-writing"),
                $plans = $section.find(".plans");

            $plans.on("click", ".plan__item", function(e){
                if ($(e.target).hasClass("btn-order")){

                }
                else {
                    var $item = $(this),
                        $plan = $item.closest(".plan"),
                        $open = $item.find(".btn-open");

                    $plan.toggleClass("plan--show");

                    if ($plan.hasClass("plan--show")){
                        $plan.height($plan.find(".plan__options").outerHeight() + $item.height());
                        $open.text("Закрыть");
                    }
                    else {
                        $plan.removeAttr("style");
                        $open.text("Подробнее");
                    }
                }
            });
        },

        createAccount: function(){
            WD.el.on("click", ".createAccount", function(){
                location.replace('/auth/signup');
            });
        }
    };

    var WD = app.sections.home;

})(app, $, app.$dom, app.events, app.utils);
