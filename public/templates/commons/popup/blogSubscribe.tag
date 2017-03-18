<popup-blog-subscribe class="popup popup-m" data-pos="bottom-right" data-active={ active }>

    <div onClick={ close } onUpdate="none" class="popup__close"></div>

    <div class="popup__inner">
        <div class="popup__image">
            <img src="/public/images/popup/blog.png">
        </div>
        <div class="popup__content">
            <div class="popup__title c-blueLight fontWeight-bold">Подпишитесь</div>
            <div class="popup__text">на наш блог, чтобы получать новые статьи каждую неделю</div>
            <blog-subscribe-form></blog-subscribe-form>
        </div>
    </div>

<script>

    var $ = this;

    $.on("mount", function(){
        setTimeout(function(){
            $.root.style.display = "block";
        }, 20);

        $.form = $.tags["blog-subscribe-form"];

        if ($.form){
            $.form.one("success", function(){
                $.hide();
            })
            $.form.one("fail", function(){
                $.hide();
            })
        }
    });

    $.show = function(){
        if ($.active) return;

        $.update({
            active: true
        })

        if (!app.device.isMobile && $.form){
            $afterlag.xl(function(){
                $.form.refs.input.focus();
            })
        }

        app.metrika.set("offers.popup.blog.subscribe.show", true);
    };

    $.close = function(){
        $.hide();
        app.metrika.set("offers.popup.blog.subscribe.hide", true);
    };

    $.hide = function(){
        if (!$.active) return;

        $.update({
            active: false
        })
    };

</script>

</popup-blog-subscribe>
