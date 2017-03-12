<section-auth class="{ app.device.isPhone ? 'section' : 'oScreen' } zIndex-100 pos-fixed" data-open="false">

    <div if={ app.device.isPhone } class="oScreen__buttons" data-pos="top-right">
        <div onClick={ close } class="button__close" data-color="gray"></div>
    </div>

    <auth-signin></auth-signin>

    <auth-remember></auth-remember>

    <auth-signup></auth-signup>

<script>

    var $ = this;

    $.active = false;

    $.on("mount", function(){
        if (location.href.match(/\?signin/)){
            $afterlag.run(function(){
                $.open("signin");
            });
        }
        else if (location.href.match(/\?signup/)){
            $afterlag.run(function(){
                $.open("signup", location.href.match(/\&plan=premium/) ? "premium" : false);
            });
        }
        app.tag("section-notify", function(tag){
            $.notify = tag;

            if (window.ymaps){
                ymaps.ready(function(){
                    if (ymaps.geolocation && ymaps.geolocation.city){
                        $.update({
                            location: {
                                country: ymaps.geolocation.country,
                                city: ymaps.geolocation.city,
                                region: ymaps.geolocation.region
                            }
                        })
                    }
                });
            }
        });
    });

    $.open = function(section, param){
        $.active = true;
        $.root.setAttribute("data-open", true);
        var modal = $.tags["auth-" + section];
        if (modal && modal.open) modal.open(param);
    };

    $.close = function(){
        $.root.setAttribute("data-open", false);
        $.update({
            active: false
        });
    };

</script>

</section-auth>
