<home-jq-test class="screen home__jqtest rellax overflow-hidden zIndex-1" data-rellax-speed="5.25">

    <div class="pos-rel rows">
        <div class="pos-abs-full zIndex-2">
            <div class="pos-abs-full bg-overlay opacity-80"></div>
            <div class="pos-abs-full bg-radial-black"></div>
            <div class="pos-centered">
                <div class="rellax anim anim-scale" data-rellax-speed="3.5">
                    <div class="home__jqtest__container">
                        <small class="c-white mb-l pb-m sm-pb-l">совершенно бесплатно</small>
                        <h1 class="c-white nowrap textShadow-light mb-m pb-xs">Пройти новейший <span class="c-lime">JQ<sup class="pl-xxs">2.0</sup></span> тест</h1>
                        <p class="c-white mb-m sm-mb-l">Ответить себе на множество проф вопросов и кто Я.</p>
                        <div class="inline">
                            <button class="btn btn-danger btn-upper btn-xl mlr-s">перейти к тесту</button>
                            <button class="btn btn-white-hover-success btn-upper btn-xl mlr-s">смотреть обзор</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div if={ !parent.opts.device.mobile() } class="row">
            <div each={ item, i in (parent.opts.utils.range(1, 9)) } class="home__jqtest__grid__item col-md-6" style="background-image:url(/assets/images/promo/peoples/team{ i + 1 }.jpg)"></div>
        </div>
        <div if={ parent.opts.device.mobile() } class="visible-md row">
            <div each={ item, i in ["1", "2", "3", "5", "6", "7"] } class="home__jqtest__grid__item col-md-8" style="background-image:url(/assets/images/promo/peoples/team{ item }.jpg)"></div>
        </div>
        <div if={ parent.opts.device.mobile() } class="visible-sm row">
            <div each={ item, i in ["1", "2", "6", "3"] } class="home__jqtest__grid__item col-sm-12" style="background-image:url(/assets/images/promo/peoples/team{ item }.jpg)"></div>
        </div>
    </div>

</home-jq-test>
