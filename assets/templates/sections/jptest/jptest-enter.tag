<jptest-enter class={ 'oScreen__jptest__enter zIndex--1' : !opts.isserver }>

    <div class="anim-group3 anim-tb-soft oScreen__jptest__enter__angle__link anim-delay-xs" data-duration="m">
        Для соискателей
    </div>
    <div class="anim-group3 anim-scale-zoom oScreen__jptest__enter__faces" data-duration="l"></div>
    <div class="oScreen__jptest__enter__phone__left">
        <div class="anim-group1 anim-fadeIn" data-duration="xs">
            <div class="overview__phone" data-color="white" data-align="left">
                <div style="background-image:url('/public/images/jptest/screen1.png')" class="overview__phone__screen bg-cover"></div>
            </div>
        </div>
    </div>
    <div class="oScreen__jptest__enter__phone__right">
        <div class="anim-group1 anim-fadeIn" data-duration="xs">
            <div class="overview__phone" data-color="black" data-align="right">
                <div style="background-image:url('/public/images/jptest/screen2.png')" class="overview__phone__screen bg-cover"></div>
            </div>
        </div>
    </div>
    <div class="oScreen__jptest__enter__text">
        <div class="oScreen__jptest__enter__text__inner overview__section container">
            <div class="row">
                <div class="centered col-md-16">
                    <small class="mb{ !opts.isserver ? '60' : '-l' } anim-group2 anim-scale-zoom anim-delay-s">{ passed ? 'Мы поздравляем вас' : 'Совершенно бесплатно' }</small>
                    <h1 class="mb25 mlr-m plr-l pt-m fontWeight-8 anim-group2 anim-bt anim-delay-m">{ passed ? 'Тест успешно пройден' : 'JP-тест версия 2.0' }</h1>
                    <p class="mb50 fontSize-24 lineHeight-xxxl c-gray anim-group2 anim-bt anim-delay-l">{ passed ? 'Можно вернуться к резюме.' : 'Узнать больше после, чем вы знали до.' }</p>
                    <div class="anim-group2 anim-scale anim-delay-xl">
                        <button onClick={ btnClick } onUpdate="none" class="btn btn-xl2 btn-primary">{ passed ? 'Вернуться к резюме' : 'Пройти JP-тест' }</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="oScreen__jptest__enter__text__line">
            <div class="oScreen__jptest__enter__text__line__item anim-group2 anim-bt-ease anim-delay-xl"  data-duration="xl"></div>
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
        $.parent.sections.test.one("passed", function(){
            $.update({
                passed: true
            })
        });
        $afterlag.run(function(){
            $.animate.show();
        });
    };

    $.btnClick = function(){
        if ($.passed && $.parent){
            $.parent.hide();
        }
        else {
            $.parent.sections.test.show();
        }
    };

</script>

</jptest-enter>
