(function(app, $, $dom, EV, _){

    app.define("sections.premiumMobile");

    app.sections.premiumMobile = {

        init: function(){

            this.el = $dom.body.children("premium-mobile");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.$section = WD.el.find("premium-mobile-overview");

            WD.onScroll()
            WD.header();
            WD.screens();
            WD.btnInfo();
            WD.video();
            WD.colors();
            WD.salary();
            WD.inbox();
            WD.tracker();
            WD.slider();

            var imagesLoaded = new app.plugins.imagesLoaded({
                container: WD.el[0]
            });

            imagesLoaded.load({
                timeout: 10000
            });

            app.sections.on("afterMounted", function(){
                app.tag("section-player", function(tag){
                    WD.player = tag;
                });
            });
            app.sections.trigger("ready");

            app.metrika.set("views.premiumMobile", 1, {
                action: "inc"
            })
        },

        onScroll: function(){

            _.raf(WD.onScroll);

            WD.scrollTop = $dom.document.scrollTop();
        },

        header: function(){
            var $section = WD.$section.find(".section__hero"),
                layersLoaded = new app.plugins.imagesLoaded({
                container: $section[0]
            });

            layersLoaded.load({
                imageClassName: "l-progressive"
            });

            layersLoaded.on("complete", function(){
                WD.animate();
            });

            var parallax = new app.plugins.scroll.ParallaxController({
                items: [
                    {
                        elem: $section.find(".section__hero__double__ipad__back")[0],
                        from: -30,
                        to: 30,
                        off: 0
                    },
                    {
                        elem: $section.find(".section__hero__double__ipad__front")[0],
                        from: 60,
                        to: -60,
                        off: 0
                    }
                ]
            });

            parallax.start();
        },

        screens: function(){
            WD.$section.find(".screens").each(function(i){
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
            var $section = WD.$section.find(".phone__figure__screen[data-section='overview-btn-info']"),
                start = false,
                timer = null,
                show = false,
                timeout = {
                    show: 7000,
                    hide: 3000
                }

            WD.btnInfo.start = function(){
                timer = setTimeout(function(){
                    clearTimeout(timer);
                    start = true;
                    show = !show;
                    $section.toggleClass("-open");
                    WD.btnInfo.start();
                }, show ? timeout.show : (start ? timeout.hide : 1500))
            };

            $section.find(".phone__screen__nav__info").on("click", function(){
                clearTimeout(timer);
                $section.toggleClass("-open");
                show = !show;
                WD.btnInfo.start();
            });
        },

        video: function(){
            var $section = WD.$section.find(".section__phone[data-section='overview-video']");

            $section.find(".ovpremium__video__play").on("click", function(){
                WD.player.show(this.getAttribute("data-url"));
            });

            $section.find(".ovpremium__video__items").on("click", ".ovpremium__video__item__image", function(e){
                WD.player.show(e.currentTarget.getAttribute("data-url"));
            });
        },

        colors: function(){
            var $slider = WD.$section.find(".phone__figure__screen[data-section='overview-colors'] .slick-slider"),
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
            var $section = WD.$section.find(".phone__figure__screen[data-section='overview-salary'] .screens");

            $section.find(".phone__screen__nav__salary").on("click", function(){
                $section[0].screens.nav(0, 700);
            });
        },

        inbox: function(){
            var durationV = 850,
                durationH = 700,
                pause = 3000,
                $section = WD.$section.find(".phone__figure__screen[data-section='overview-inbox']"),
                $overviewInboxNav = $section.find(".phone__screen__nav"),
                $screensVertical = $section.find(".screens[data-vertical='true']"),
                $screensNonVertical = $section.find(".screens[data-vertical='false']");

            WD.inbox.start = function(){
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
                                                    WD.inbox.start();
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
                container: WD.$section,
                items: [
                    {
                        elem: ".phone__figure__screen[data-section='overview-btn-info']",
                        callback: function($elem, i){
                            WD.btnInfo.start();
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
                            WD.inbox.start();
                        }
                    }
                ]
            });

            animateScroll.start();
        },

        tracker: function(){
            var $globalNav = WD.el.children("global-nav"),
                $phoneTrack = WD.$section.find(".section__phone__track"),
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

        slider: function(){
            var $slider = WD.$section.find(".slick-slider[data-section=samples]"),
                $pointer = $slider.prev(),
                show = true;

            $slider.slick({
                arrows: true,
                speed: 900,
                infinite: false,
                cssEase: "cubic-bezier(0.4, 0, 0, 1)",
                centerMode: true,
                centerPadding: false,
                focusOnSelect: true,
                slidesToShow: 3,
                slidesToScroll: 1
            });

            $slider.on("beforeChange", function(e, slick, current, next) {
                if (show && next == 1){
                    show = false;
                    $pointer.css("opacity", "0");
                }
                else if (!show && next == 0){
                    show = true;
                    $pointer.css("opacity", "1");
                }
            })
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

    var WD = app.sections.premiumMobile;

})(app, $, app.$dom, app.events, app.utils);
