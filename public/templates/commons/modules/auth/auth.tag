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

        app.$dom.window.on("message", function(e){
            var data = e.originalEvent.data;
            if (data && data.user){
                var OAUTH = _.isJSON(data.user) && JSON.parse(data.user) || data.user;
                if (OAUTH.error){
                    app.tag("section-notify").show({
                        color: "danger",
                        text: "Ошибка проведения верификации, повторите попытку чуть позже"
                    })
                }
                else {
                    var json = JSON.stringify(OAUTH);
                    $$.post({
                        url: '/auth',
                        data: {
                            oauth: json
                        },
                        dataType : "json",
                        success: function(data, status){
                            var user = {
                                oauth: OAUTH.channel,
                                avatar: OAUTH.avatar,
                                name: OAUTH.name,
                                surname: OAUTH.surname
                            }
                            if (data.user){
                                user.avatar = data.user.photo || user.avatar;
                                user.name = data.user.name;
                                user.surname = data.user.surname;
                            }
                            app.tag("section-loader-user").show({
                                user: user
                            })
                            .then(function(){
                                $.tags["auth-" + data.auth].form.removeAttr("target");
                                $.tags["auth-" + data.auth].form.find("input[name=oauth]").val(json);

                                $.submit($.tags["auth-" + data.auth].form);
                            });
                        },
                        error: function(){
                            var text = "Ошибка авторизации, повторите попытку чуть позже";
                            if ($.auth.notify){
                                $.auth.notify.show({
                                    color: "danger",
                                    text: "Ошибка авторизации, повторите попытку чуть позже"
                                })
                            }
                            else {
                                alert(text);
                            }
                        }
                    });
                }
            }
        });
    });

    $.referer = function(){
        return app.metrika.get("referer");
    };

    $.notifyOAuth = function(){
        if (!app.metrika.get("notify.oauth") || location.hash.match(/oauth/)){
            app.tag("section-notify").show({
                color: "info",
                text: "Для регистрации/авторизации в один клик, выберите свою социальную сеть",
                pos: app.device.isPhone ? "top-left" : "bottom-left",
                timeout: app.device.isPhone ? 3.5 : 5
            });
            app.metrika.set("notify.oauth", true);
        }
    };

    $.onNotify = function(text, color, timeout){
        if (!text) return;
        if ($.notify){
            $.notify.show({
                color: color,
                text: text,
                timeout: timeout || 1.5
            })
        }
        else {
            alert(text);
        }
    };

    $.oauth = function(e){
        var channel = e.currentTarget.getAttribute("data-social");
        window.open("/auth/" + channel,"","width=600,height=400,left=350,top=170,status=no,toolbar=no,menubar=no");
    };

    $.submit = function($form){
        $afterlag.run(function(){
            $form.submit();
        }, {
            iterations: 5,
            timeout: 500,
            delay: 200
        });
    };

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
