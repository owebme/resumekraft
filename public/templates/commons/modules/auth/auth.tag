<section-auth class="{ app.device.isPhone ? 'section' : 'oScreen' } zIndex-100 pos-fixed" data-open="false" style="display:none">

    <div if={ app.device.isPhone } class="oScreen__buttons" data-pos="top-right">
        <div onClick={ close } class="button__close" data-color="gray"></div>
    </div>

    <auth-signin></auth-signin>

    <auth-remember></auth-remember>

    <auth-signup></auth-signup>

<script>

    var $ = this;

    $.active = false;

    $.ymaps = false;

    $.firstOpen = false;

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
        });

        window.ymapsReady = function(){
            $.ymaps = window.ymaps || {};

            if ($.ymaps.geolocation && $.ymaps.geolocation.city){
                $.update({
                    location: {
                        country: $.ymaps.geolocation.country,
                        city: $.ymaps.geolocation.city,
                        region: $.ymaps.geolocation.region
                    }
                })
            }
        };
    });

    $.open = function(section, param){
        if (!$.firstOpen){
            $.firstOpen = true;
            $.root.style.display = "block";
            $afterlag.run(function(){
                $._open(section, param);
            });
        }
        else {
            $._open(section, param);
        }
    };

    $._open = function(section, param){
        $.active = true;

        $.root.setAttribute("data-open", true);

        var modal = $.tags["auth-" + section];
        if (modal && modal.open) modal.open(param);

        if ($.ymaps === false){
            $.ymaps = "load";
            var script = document.createElement('script');
            script.src = 'https://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU&onload=ymapsReady';
            document.head.appendChild(script);
        }
    };

    $.close = function(){
        $.root.setAttribute("data-open", false);
        var modal = $.tags["auth-" + $.section];
        if (modal && modal.active) modal.close();
    };

</script>

</section-auth>
