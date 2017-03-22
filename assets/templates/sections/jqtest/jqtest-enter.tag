<jqtest-enter class={ 'oScreen__jqtest__enter zIndex--1' : !opts.isserver }>

    <div class="anim-group3 anim-tb-soft oScreen__jqtest__enter__angle__link anim-delay-xs" data-duration="m">
        Для соискателей
    </div>
    <div class="anim-group3 anim-scale-zoom oScreen__jqtest__enter__faces" data-duration="l"></div>
    <div class="oScreen__jqtest__enter__phone__left">
        <div class="anim-group1 anim-fadeIn" data-duration="xs">
            <div class="overview__phone" data-color="white" data-align="left">
                <div style="background-image:url('/public/images/promo/jqtest/slide2_1_screen.png')" class="overview__phone__screen bg-cover"></div>
            </div>
        </div>
    </div>
    <div class="oScreen__jqtest__enter__phone__right">
        <div class="anim-group1 anim-fadeIn" data-duration="xs">
            <div class="overview__phone" data-color="black" data-align="right">
                <div style="background-image:url('/public/images/promo/jqtest/slide7_1_screen.png')" class="overview__phone__screen bg-cover"></div>
            </div>
        </div>
    </div>
    <div class="oScreen__jqtest__enter__text">
        <div class="oScreen__jqtest__enter__text__inner overview__section container">
            <div class="row">
                <div class="centered col-md-16">
                    <small class="mb{ !opts.isserver ? '60' : '-l' } anim-group2 anim-scale-zoom anim-delay-s">Совершенно бесплатно</small>
                    <h1 class="mb25 mlr-m plr-l pt-m fontWeight-8 anim-group2 anim-bt anim-delay-m">JQ-тест версия 2.0</h1>
                    <p class="mb50 fontSize-24 lineHeight-xxxl c-gray anim-group2 anim-bt anim-delay-l">Узнать больше после, чем вы знали до.</p>
                    <div class="anim-group2 anim-scale anim-delay-xl">
                        <button onClick={ open.test } onUpdate="none" class="btn btn-xl2 btn-primary">Пройти JQ-тест</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="oScreen__jqtest__enter__text__line">
            <div class="oScreen__jqtest__enter__text__line__item anim-group2 anim-bt-ease anim-delay-xl"  data-duration="xl"></div>
        </div>
    </div>

<script>

    var $ = this;

    $.on("mount", function(){
        try {
            $.animate = new app.plugins.animate($.root, {
                showAfter: 2,
                hide: "noanimate"
            });

            $.parent.on("hideAnimated", function(){
                $.animate.hide();
            });
        } catch(e){}
    });

    $.show = function(){
        $afterlag.run(function(){
            $.animate.show();
        });
    };

    $.open = {
        test: function(){
            $.parent.sections.test.show();
            app.metrika.set("jqtest.new", true);
        }
    };

</script>

</jqtest-enter>
