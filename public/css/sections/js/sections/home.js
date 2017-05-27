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

            WD.plans();

            WD.createAccount();

            app.metrika.set("views.home", 1, {
                action: "inc"
            })
        },

        header: function(){
            var $phones = WD.el.find('home-hero .phones'),
                $stickyNav = WD.el.find('.stickyNav'),
                animHeader = new app.plugins.animate(WD.el, {
                    showAfter: 1
                });

            animHeader.show(function(){
                $phones.attr("data-show", true);
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
                    }
                ]
            });

            WD.contentAnimate.start();
        },

        plans: function(){
            var $plans = WD.el.find(".plans");

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
                var period = this.getAttribute("data-period") || "month1";
                if (WD.auth){
                    _.opener("/private/?plan=premium&period=" + period);
                }
                else {
                    app.tag("section-auth").open("signup", "premium");
                    app.metrika.set("plan.period", period);
                }
            });
        }
    };

    var WD = app.sections.home;

})(app, $, app.$dom, app.events, app.utils);
