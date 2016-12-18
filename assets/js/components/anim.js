(function($, device){

    if (!device.isMobile){
        app.$dom.window.on("load", function(){
            var elems = [],
                body = $("body")[0];

            $(".anim").each(function(){
                var $elem = $(this);
                elems.push({
                    elem: $elem,
                    anim: false,
                    offset: $elem.offset(),
                    effect: $elem.attr("data-anim")
                });
            });

            window.addEventListener('scroll', function(){
                var scroll = body.scrollTop + this.outerHeight - this.outerHeight * 0.3;
                elems.forEach(function(item, i){
                    if (!item.anim && scroll > item.offset.top){
                        item.anim = true;
                        item.elem.addClass("anim-" + item.effect);
                    }
                });
            });
        });
    }

})((window.jQuery || window.Zepto), app.device);
