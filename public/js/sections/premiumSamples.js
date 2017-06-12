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

            var imagesLoaded = new app.plugins.imagesLoaded({
                container: WD.el[0]
            });

            imagesLoaded.on("complete", function(elem){
                WD.gallery();
                WD.overview.init();
            });

            imagesLoaded.load({
                timeout: 10000
            });

            $afterlag.s(function(){
                WD.slider();
            });

            app.metrika.set("views.premiumSamples", 1, {
                action: "inc"
            })
        },

        overview: {

            $section: null,

            init: function(){
                WD.overview.$section = WD.el.find("premium-samples-overview");
                WD.overview.offsetTop = parseInt(WD.overview.$section.offset().top);

                WD.overview.screens();
                WD.overview.btnInfo();
                WD.overview.video();
                WD.overview.colors();
                WD.overview.salary();
                WD.overview.inbox();
                WD.overview.animate();

                app.sections.on("afterMounted", function(){
                    app.tag("section-player", function(tag){
                        WD.player = tag;
                    });
                });
                app.sections.trigger("ready");
            },

            screens: function(){
                WD.overview.$section.find(".screens").each(function(i){
                    var screens = new app.plugins.screens(this, {
                        vertical: this.getAttribute("data-vertical") == "true" ? true : false,
                        mousewheel: false,
                        phoneEmulate: true,
                        play: this.getAttribute("data-play") == "true" && {
                            run: this.getAttribute("data-autorun") == "true" ? true : false,
                            interval: 5
                        } || false
                    });
                    screens.init();
                    screens.marquee.disableKeyboard();
                    if (this.getAttribute("data-play") == "true") this.play = screens.play;
                    this.screens = screens;
                });
            },

            btnInfo: function(){
                var $section = WD.overview.$section.find(".phone__figure__screen[data-section='overview-btn-info']"),
                    timer = null,
                    show = false;

                    WD.overview.btnInfo.start = function(){
                    timer = setTimeout(function(){
                        show = !show;
                        $section.toggleClass("-open");
                        WD.overview.btnInfo.start();
                    }, show ? 7000 : 3000)
                };

                $section.find(".phone__screen__nav__info").on("click", function(){
                    clearTimeout(timer);
                    $section.toggleClass("-open");
                    show = !show;
                    WD.overview.btnInfo.start();
                });
            },

            video: function(){
                var $section = WD.overview.$section.find(".section__phone[data-section='overview-video']");

                $section.find(".ovpremium__video__play").on("click", function(){
                    WD.player.show(this.getAttribute("data-url"));
                });

                $section.find(".ovpremium__video__items").on("click", ".ovpremium__video__item__image", function(e){
                    WD.player.show(e.currentTarget.getAttribute("data-url"));
                });
            },

            colors: function(){
                var $slider = WD.overview.$section.find(".phone__figure__screen[data-section='overview-colors'] .slick-slider"),
                    $nav = $slider.next("phone-screen-nav");

                $slider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    infinite: true,
                    autoplay: true,
                    cssEase: "cubic-bezier(.32,.07,.41,1)",
                    speed: 1000,
                    autoplaySpeed: 3000
                });

                $slider.on("beforeChange", function(e, slick, current, next) {
                    $nav.attr("data-color", slick.$slides[next].getAttribute("data-color"));
                });
            },

            salary: function(){
                var $section = WD.overview.$section.find(".phone__figure__screen[data-section='overview-salary'] .screens");

                $section.find(".phone__screen__nav__salary").on("click", function(){
                    $section[0].screens.nav(0, 700);
                });
            },

            inbox: function(){
                var durationV = 850,
                    durationH = 700,
                    pause = 3000,
                    $section = WD.overview.$section.find(".phone__figure__screen[data-section='overview-inbox']"),
                    $overviewInboxNav = $section.find(".phone__screen__nav"),
                    $screensVertical = $section.find(".screens[data-vertical='true']"),
                    $screensNonVertical = $section.find(".screens[data-vertical='false']");

                WD.overview.inbox.start = function(){
                    setTimeout(function(){
                        $screensVertical[0].screens.nav(1, durationV);
                        setTimeout(function(){
                            $screensVertical[0].screens.nav(2, durationV);
                            setTimeout(function(){
                                $screensNonVertical.css("zIndex", "2");
                                setTimeout(function(){
                                    $screensNonVertical[0].screens.nav(1, durationH);
                                    setTimeout(function(){
                                        $screensNonVertical[0].screens.nav(0, durationH);
                                        setTimeout(function(){
                                            $screensNonVertical.css("zIndex", "1");
                                            setTimeout(function(){
                                                $screensVertical[0].screens.nav(1, durationV);
                                                setTimeout(function(){
                                                    $screensVertical[0].screens.nav(0, durationV);
                                                    setTimeout(function(){
                                                        WD.overview.inbox.start();
                                                    }, durationV);
                                                }, pause + durationV);
                                            }, pause);
                                        }, durationH);
                                    }, pause + durationH);
                                }, pause);
                            }, durationV);
                        }, pause);
                    }, pause + durationV);
                };

                $screensVertical.find(".screen").on('show hide', function(e){
                    var index = $(this).index();
                    if (e.type == "show" && index == 3){
                        $overviewInboxNav.attr("data-hidden", true);
                    }
                    else if (e.type == "hide" && index == 3){
                        $overviewInboxNav.attr("data-hidden", false);
                    }
                });
            },

            animate: function(){
                var animateScroll = new app.plugins.scroll.animate({
                    container: WD.overview.$section,
                    items: [
                        {
                            elem: ".section__hero",
                            callback: function($elem, i){
                                WD.overview.tracker();
                            }
                        },
                        {
                            elem: ".phone__figure__screen[data-section='overview-btn-info']",
                            callback: function($elem, i){
                                WD.overview.btnInfo.start();
                            }
                        },
                        {
                            elem: ".phone__figure__screen[data-section='overview-salary']",
                            callback: function($elem, i){
                                var screens = $elem.children(".screens")[0];
                                if (screens.play){
                                    setTimeout(function(){
                                        screens.play.run(true);
                                    }, 1500);
                                }
                            }
                        },
                        {
                            elem: ".phone__figure__screen[data-section='overview-simple']",
                            callback: function($elem, i){
                                var screens = $elem.children(".screens")[0];
                                if (screens.play){
                                    setTimeout(function(){
                                        screens.play.run(true);
                                    }, 1500);
                                }
                            }
                        },
                        {
                            elem: ".phone__figure__screen[data-section='overview-inbox']",
                            callback: function($elem, i){
                                WD.overview.inbox.start();
                            }
                        }
                    ]
                });

                animateScroll.start();
            },

            tracker: function(){
                var $globalNav = WD.el.children("global-nav"),
                    $phoneTrack = WD.overview.$section.find(".section__phone__track"),
                    $phoneCaptions = $phoneTrack.find(".section__phone__track__captions"),
                    $phoneNav = $phoneTrack.find("phone-screen-nav"),
                    $phoneIcons = $phoneTrack.find(".section__phone__track__icons"),
                    offsetTop = parseInt($phoneTrack.find(".section__phone__track__wrapper").offset().top),
                    paddingTop = 120,
                    paddingBottom = app.sizes.height + 128,
                    heightScroll = parseInt($phoneTrack.height()),
                    navVisible = true,
                    gradVisible = false;

                if (!$phoneTrack.length || !$phoneTrack.is(":visible")) return;

                $phoneTrack.find(".sticky").Stickyfill();

                _.each(WD.trackList, function(item, i){
                    $phoneIcons.find(".section__phone__track__icons__item[data-item='" + item.title + "']").height(item.title == "contacts" ? item.height + WD.trackList[i + 1].height : item.height);
                });

                (function scrollSticky(){
                    _.raf(scrollSticky);

                    if (navVisible && (WD.scrollTop > offsetTop - paddingTop && WD.scrollTop < offsetTop + heightScroll - paddingBottom)){
                        navVisible = false;
                        $globalNav.attr("data-hidden", true);
                    }
                    else if (!navVisible && (WD.scrollTop > offsetTop + heightScroll - paddingBottom || WD.scrollTop < offsetTop - paddingTop)){
                        navVisible = true;
                        $globalNav.attr("data-hidden", false);
                    }
                    if (!gradVisible && (WD.scrollTop > offsetTop + paddingTop && WD.scrollTop < offsetTop + heightScroll - paddingBottom)){
                        gradVisible = true;
                        $phoneTrack.attr("data-colorful", true);
                    }
                    else if (gradVisible && (WD.scrollTop > offsetTop + heightScroll - paddingBottom || WD.scrollTop < offsetTop + paddingTop)){
                        gradVisible = false;
                        $phoneTrack.attr("data-colorful", false);
                    }
                    WD.scrollColor(offsetTop, $phoneNav, $phoneTrack, $phoneCaptions);
                })();
            }
        },

        scrollColor: function(offsetTop, $phoneNav, $phoneTrack, $phoneCaptions){
            var section = null,
                scroll = WD.scrollTop - offsetTop;

            _.each(WD.trackList, function(item){
                if (scroll > item.top && scroll < (item.top + item.height)){
                    section = item;
                }
            });

    		if (section){
                if (WD.trackSection.title != section.title) {
                    WD.trackSection = section;
                    $phoneNav.attr("data-color", section.color);
                    $phoneNav.removeAttr("data-color-icons");
                    $phoneTrack.attr("data-color", section.color);
                    $phoneCaptions.find(".section__phone__track__caption[data-item='" + section.title + "']")
                    .addClass("-show")
                    .siblings()
                    .removeClass("-show");
                }
                else if (section.offsetWhite && WD.trackSection.title == section.title){
                    if (scroll > (section.top + section.offsetWhite)){
                        $phoneNav.attr("data-color", "#ffffff");
                        $phoneNav.attr("data-color-icons", section.color);
                    }
                    else if (scroll < (section.top + section.offsetWhite)){
                        $phoneNav.attr("data-color", section.color);
                        $phoneNav.removeAttr("data-color-icons");
                    }
                }
    		}
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
                if (WD.overview.offsetTop){
                    if (scrollSection !== "overview" && WD.scrollTop > WD.overview.offsetTop){
                        WD.el.attr("data-scroll", "overview");
                        scrollSection = "overview";
                    }
                    else if (scrollSection === "overview" && WD.scrollTop < WD.overview.offsetTop){
                        WD.el.removeAttr("data-scroll");
                        scrollSection = null;
                    }
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
        },

        trackSection: {},
        trackList: [
            {
                title: "commons",
                top: 0,
                height: 1533,
                color: "#0084ff"
            },
            {
                title: "works",
                top: 1533,
                height: 2339,
                color: "#ab81cd",
                offsetWhite: 406
            },
            {
                title: "skills",
                top: 3872,
                height: 1240,
                color: "#ea7f07"
            },
            {
                title: "education",
                top: 5112,
                height: 915,
                color: "#0bb5b7"
            },
            {
                title: "courses",
                top: 6027,
                height: 952,
                color: "#74b027"
            },
            {
                title: "languages",
                top: 6979,
                height: 702,
                color: "#d93663"
            },
            {
                title: "jobs",
                top: 7681,
                height: 3087,
                color: "#c1a16b",
                offsetWhite: 538
            },
            {
                title: "hobby",
                top: 10768,
                height: 759,
                color: "#ff7272"
            },
            {
                title: "contacts",
                top: 11527,
                height: 677,
                color: "#0084ff"
            },
            {
                title: "businessTrip",
                top: 12204,
                height: 658,
                color: "#5856d6"
            },
            {
                title: "feedback",
                top: 12862,
                height: 607,
                color: "#0bb5b7"
            },
            {
                title: "likes",
                top: 13469,
                height: 667,
                color: "#ff7272"
            }
        ]
    };

    var WD = app.sections.premiumSamples;

})(app, $, app.$dom, app.events, app.utils);
