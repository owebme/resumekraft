(function(app, $, $dom, EV, _){

    app.define("sections.sample");

    app.sections.sample = {

        init: function(){

            this.el = $dom.body.children(".samples");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.onScroll();

            app.sections.on("afterMounted", function(){
                WD.offer();
                WD.modal();
                WD.saveMSWord();
            });
        },

        saveMSWord: function(){
            WD.el.on("click", "sample-button-word", function(){
                var $html = WD.el.find("sample-page").html(),
                    content = '<!DOCTYPE html>' + $html;

                saveAs(htmlDocx.asBlob(content, {
                    orientation: "portrait"
                }), 'test.docx');
            });
        },

        offer: function(){
            WD.offer.render = function(){
                if (!WD.offer.$el) WD.offer.$el = WD.el.find("section-sample-offer");
                WD.offer.offsetTop = parseInt(WD.offer.$el.offset().top);
            };
            WD.offer.render();

            if (WD.offer.$el.is(":visible") && WD.offer.offsetTop && !WD.offer.tracker){

                WD.offer.tracker = true;
                WD.offer.show = false;

                WD.slider();

                (function scrollTracker(){
                    _.raf(scrollTracker);

                    if (app.sections.samples.section === "samples") return;

                    var scroll = WD.scrollTop + app.sizes.height * 0.6;

                    if (!WD.offer.show && scroll > WD.offer.offsetTop){
                        WD.offer.show = true;
                        WD.offer.$el.attr("data-show", true);
                        setTimeout(function(){
                            WD.playback.run(true);
                        }, 1500);
                    }
                    else if (WD.offer.show && scroll < WD.offer.offsetTop){
                        WD.offer.show = false;
                        WD.offer.$el.attr("data-show", false);
                        WD.playback.stop();
                    }
                })();

                var resize = _.debounce(WD.offer.render, 1000),
                    eventResize = app.device.isMobile ? 'orientationchange' : 'resize';

                app.$dom.window.on(eventResize + '.scroll-to-offer', function(){
                    resize();
                });
            }
        },

        modal: function(){
            WD.$modal = WD.el.find("sample-modal")[0]._tag;

            WD.el.on("click", ".sample__text > .opener", function(){
                WD.$modal.show(WD.el.find(".sample__fulltext").text());
            });
        },

        slider: function(){
            var $screens = WD.el.find(".screens"),
                screens = new app.plugins.screens($screens[0], {
                vertical: false,
                mousewheel: false,
                phoneEmulate: true,
                play: {
                    run: false,
                    round: true,
                    interval: 5
                }
            });
            screens.init();
            screens.marquee.disableKeyboard();

            WD.playback = screens.play;

            var $screen = $screens.find(".screen"),
                i = 0;

            $screen.on('show', function(e){
                i++;
                if (i > 1){
                    $(this).closest(".screens")
                    .prev().attr("data-color", _.shuffle($store.colors.get())[0]._id);
                }
            });
        },

        onScroll: function(){

            _.raf(WD.onScroll);

            WD.scrollTop = $dom.document.scrollTop();
        }
    };

    var WD = app.sections.sample;

})(app, $, app.$dom, app.events, app.utils);
