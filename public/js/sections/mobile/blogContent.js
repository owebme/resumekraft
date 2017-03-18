(function(app, $, $dom, EV, _){

    app.define("sections.blogContent");

    app.sections.blogContent = {

        init: function(){

            this.el = $dom.body.children("blog-content-mobile");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.subscribe();

            WD.share();

            new app.plugins.scroll.refreshFix(this.el);

            this.$nav = this.el.find("section-nav-blog-mobile");

            if (this.$nav.length) this.nav();

            WD.photoSwipeContainer = document.querySelectorAll('.pswp')[0];

            this.el.on("click", "img", function(){
                var img = this.getAttribute("src");

                _.getSizeImage(img, function(w, h){
                    if (!w || !h) alert("Ошибка чтения фотографии");
                    else {
                        WD.photoSwipe({
                            image: img,
                            width: w,
                            height: h
                        });
                    }
                })
            });

            $afterlag.run(function(){
                app.sections.trigger("ready");
            });
        },

        nav: function(){
            var scrolling = false,
                previousTop = 0,
                currentTop = 0,
                scrollDelta = 10,
                scrollOffset = 150;

            $dom.window.on('scroll', function(){
                if (!scrolling){
                    scrolling = true;
                    _.raf(autoHideHeader);
                }
            });

            function autoHideHeader(){
        		var currentTop = $dom.window.scrollTop();

        		checkSimpleNavigation(currentTop);

        	   	previousTop = currentTop;
        		scrolling = false;
        	}

        	function checkSimpleNavigation(currentTop) {
        		//there's no secondary nav or secondary nav is below primary nav
        	    if (previousTop - currentTop > scrollDelta) {
        	    	//if scrolling up...
        	        WD.$nav.attr('data-turn', true);
        	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
        	    	//if scrolling down...
        	    	WD.$nav.attr('data-turn', false);
        	    }
        	}
        },

        share: function(){
            new app.plugins.share(WD.el.find(".blog__social__panel"), {
                buttons: ".blog__social__panel__item",
                dataAttr: "share"
            });
        },

        subscribe: function(){
            var $el = WD.el.find(".blog__subscribe"),
                $button = $el.find(".blog__subscribe__button");

            if (!app.metrika.get("offers.popup.blog.subscribe.success")){
                var $form = $("<blog-subscribe-form style='display:none'>").appendTo($el.find(".blog__subscribe__form"));

                app.sections.on("afterMounted", function(){
                    app.tag("blog-subscribe-form", function(tag){
                        tag.one("success", function(){
                            $el.remove();
                        })
                        tag.one("fail", function(){
                            $el.remove();
                        })
                    });
                });

                $button.on("click", function(){
                    $button.remove();
                    $form.css("display", "block");
                    app.metrika.set("offers.popup.blog.subscribe.show", true);
                })
            }
            else {
                $el.remove();
            }
        },

        photoSwipe: function(data){

            if (WD.active) return;

            var items = [
                {
                    src: data.image,
                    w: data.width,
                    h: data.height
                }
            ];

            var options = {
                mainClass: 'pswp--minimal--dark',
                barsSize: {top:0,bottom:0},
                captionEl: false,
                fullscreenEl: false,
                shareEl: false,
                bgOpacity: 0.85,
                tapToClose: true,
                tapToToggleControls: false,
                showAnimationDuration: 250
            };

            var delta = data.width / app.sizes.width,
                zoom = delta > 1.5 ? 1.5 : (delta < 1 ? 1 : delta),
                zoomScale = (app.sizes.width / data.width) * zoom,
                zoomX = app.sizes.width / 2;

            var gallery = new PhotoSwipe(WD.photoSwipeContainer, PhotoSwipeUI_Default, items, options);

            gallery.init();

            gallery.zoomTo(zoomScale, {
                x: zoomX,
                y: -(app.sizes.height * 0.4)
            }, 450);
        }
    };

    var WD = app.sections.blogContent;

})(app, $, app.$dom, app.events, app.utils);
