(function(app, $, $dom, EV, _){

    app.define("sections.premiumSamples");

    app.sections.premiumSamples = {

        init: function(){

            this.el = $dom.body.children("premium-samples");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.onScroll();

            WD.header();

            WD.imagesLoaded();

            $afterlag.s(function(){
                WD.slider();
            });

            app.metrika.set("views.premiumSamples", 1, {
                action: "inc"
            })
        },

        imagesLoaded: function(){
            var imagesLoaded = new app.plugins.imagesLoaded({
                container: WD.el[0]
            });

            imagesLoaded.on("complete", function(elem){
                WD.gallery();
            });

            imagesLoaded.load({
                timeout: 2000
            });
        },

        header: function(){
            var $header = WD.el.find("premium-samples-hero"),
                $bg = $header.find(".hero__bg"),
                $overlay = $header.find(".hero__overlay"),
                height = $header.height(),
                scrollSection = null,
                influence = 0,
                blurValue = 20,
                baseSaturationValue = 1,
                saturationValue = 2;

            if (!$header.length) return;

            (function scrollBlur(){
                _.raf(scrollBlur);

                var influence = WD.scrollTop / height;

                if (influence < 1.01 && influence > -1e-6){
                    var blur = blurValue * influence,
                        saturate = WD.lerp(influence, baseSaturationValue, saturationValue),
                        cHeight = 1 - height / 4000;

                    var t = WD.smoothstep(baseSaturationValue, saturationValue, influence + 1);
                    t *= cHeight;
                    t = WD.clamp(t, 0, 1);
                    var newSaturate = WD.lerp(t, baseSaturationValue, saturationValue);

                    $overlay.css("opacity", influence);
                    $bg.css({
                        filter: "blur(" + blur + "px) saturate(" + newSaturate + ")"
                    })
                }
            })();

            var screens = new app.plugins.screens($header.find(".screens")[0], {
                vertical: false,
                mousewheel: false,
                phoneEmulate: true,
                play: {
                    run: true,
                    round: true,
                    interval: 5
                }
            });
            screens.init();
            screens.marquee.disableKeyboard();

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

            var $screens = $header.find(".screens .screen"),
                i = 0;

            $screens.on('show', function(e){
                i++;
                if (i > 1){
                    $(this).closest(".screens")
                    .prev().attr("data-color", _.shuffle($store.colors.get())[0]._id)
                    $slider.slick("slickGoTo", $(this).index() * 1 - 1);
                }
            });
        },

        slider: function(){
            var $section = WD.el.find("premium-samples-slider"),
                $slider = $section.find(".slider"),
                $dots = $section.find(".c-dots > .c-dots_list"),
                $total = $section.find(".slider__total"),
                totalShow = true;

            if (!$section.length) return;

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

        gallery: function(){
            var $section = WD.el.find("premium-samples-gallery"),
                $screens = $section.find(".screens");

            if (!$section.length) return;

            WD.screens = [];

            $screens.each(function(i){
                var screen = new app.plugins.screens(this, {
                    vertical: this.getAttribute("data-vertical") == "true" ? true : false,
                    mousewheel: i == 1 && !app.device.isMobile ? true : false,
                    phoneEmulate: true,
                    play: {
                        run: true,
                        round: true,
                        interval: parseFloat(this.getAttribute("data-interval"))
                    }
                });
                screen.init();
                screen.marquee.disableKeyboard();
                WD.screens.push(screen);
            });

            if (!app.device.isMobile){
                $screens.eq(1).on('click mousemove mouseup mousedown', ".screen__content", function(e){
                    e.preventDefault();
                    e.stopPropagation();
                });
            }

            $screens.eq(0).find(".screen").on('show', function(e){
                $(this).closest(".screens")
                .prev().attr("data-color", _.shuffle($store.colors.get())[0]._id)
            });

            $screens.eq(2).find(".screen").on('show', function(e){
                $(this).closest(".screens")
                .prev().attr("data-color", _.shuffle($store.colors.get())[0]._id)
            });
        },

        onScroll: function(){

            _.raf(WD.onScroll);

            WD.scrollTop = $dom.document.scrollTop();
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

    var WD = app.sections.premiumSamples;

})(app, $, app.$dom, app.events, app.utils);
