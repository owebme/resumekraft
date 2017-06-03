(function(app, $, $dom, EV, _){

    app.define("sections.premiumSelect");

    app.sections.premiumSelect = {

        init: function(){

            this.el = $dom.body.children("premium-select");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.header();

            WD.slider();

            app.metrika.set("views.premiumSelect", 1, {
                action: "inc"
            })
        },

        header: function(){

            var $header = WD.el.find(".hero"),
                $bg = $header.find(".hero__bg"),
                $overlay = $header.find(".hero__overlay"),
                height = $header.height(),
                influence = 0,
                blurValue = 20,
                baseSaturationValue = 1,
                saturationValue = 2;

            (function scrollParallax(){
                WD.raf = _.raf(scrollParallax);

                var scrollTop = $dom.document.scrollTop(),
                    influence = scrollTop / height,
                    blur = blurValue * influence,
                    saturate = WD.lerp(influence, baseSaturationValue, saturationValue);

                var cHeight = 1 - height / 4000;
                var t = WD.smoothstep(baseSaturationValue, saturationValue, influence + 1);
                t *= cHeight;
                t = WD.clamp(t, 0, 1);
                var newSaturate = WD.lerp(t, baseSaturationValue, saturationValue);

                var opacity = influence;
                if (opacity < 1.01 && opacity > -1e-6){
                    $overlay.css("opacity", opacity);
                    $bg.css({
                        filter: "blur(" + blur + "px) saturate(" + newSaturate + ")"
                    })
                }
            })();

            WD.screens = new app.plugins.screens($header.find(".screens")[0], {
                vertical: false,
                mousewheel: false,
                phoneEmulate: true,
                play: {
                    run: true,
                    interval: 5
                }
            });
            WD.screens.init();
            WD.screens.marquee.disableKeyboard();

            var $slider = $header.find(".hero__text__slider");

            $slider.slick({
                arrows: false,
                speed: 700,
                infinite: false,
                draggable: false,
                cssEase: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                centerMode: false,
                centerPadding: false
            });

            var $screens = $header.find(".screens .screen");

            $screens.on('show', function(e){
                $slider.slick("slickGoTo", parseInt($(this).index()));
            });
        },

        slider: function(){
            var $section = WD.el.find("premium-select-slider"),
                $slider = $section.find(".slider"),
                $dots = $section.find(".c-dots > .c-dots_list"),
                $total = $section.find(".slider__total"),
                totalShow = true;

            $slider.slick({
                arrows: true,
                speed: 900,
                infinite: false,
                cssEase: "cubic-bezier(0.4, 0, 0, 1)",
                centerMode: true,
                centerPadding: false,
                slidesToShow: 2.675,
                slidesToScroll: 1,
                asNavFor: ".js-family-dots"
            });

            $dots.slick({
                arrows: false,
                speed: 900,
                infinite: false,
                cssEase: "cubic-bezier(0.4, 0, 0, 1)",
                slidesToShow: true,
                focusOnSelect: true,
                centerMode: true,
                variableWidth: true,
                draggable: false,
                swipe: false,
                asNavFor: ".slider"
            });

            $slider.on("beforeChange", function(e, slick, current, next) {
                if (totalShow && next == 1){
                    totalShow = false;
                    $total.css("opacity", "0");
                }
                else if (!totalShow && next == 0){
                    totalShow = true;
                    $total.css("opacity", "1");
                }
            })
        },

        clamp: function(t, e, i) {
            return Math.max(e, Math.min(i, t));
        },
        normalize: function(t, e, i) {
            return (t - e) / (i - e);
        },
        smoothstep: function(t, e, i) {
            var o = this.clamp(this.normalize(i, t, e), 0, 1);
            return o * o * (3 - 2 * o);
        },
        lerp: function(l, k, j) {
            return k + (j - k) * l;
        }
    };

    var WD = app.sections.premiumSelect;

})(app, $, app.$dom, app.events, app.utils);
