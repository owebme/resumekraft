<blog-grid class="section blog__grid">

    <div class="container">
        <div class="blog__grid__container row">
            <virtual each={ item, i in opts.params.data.items }>
                <div class="{ i == 2 ? 'col-md-16' : 'col-md-8' } { 'anim anim-bt-soft' : i > 1 }" data-delay="{ get.delay(i) }" data-duration="m">
                    <a href="/blog/{ item.alias }" class="blog__grid__item" data-grid="{ i == 1 || i == 2 ? 'v2' : 'v1' }">
                        <div class="blog__grid__item__image progressive-image" style="background-image:url({ get.image( item.image) })"></div>
                        <div class="blog__grid__item__tag">{ item.keywords }</div>
                        <div class="blog__grid__item__content">
                            <h4 class="blog__grid__item__title"><span>{ item.name }</span></h4>
                            <div class="blog__grid__item__text">{ item.text_sm }</div>
                            <div class="blog__grid__item__date">{ item.date }</div>
                            <img class="blog__grid__item__avatar" src="http://resumekraft.ru/assets/img/testimonials/testimonial9.jpg">
                        </div>
                    </a>
                </div>
                <div if={ i == 0 } class="col-md-8">
                    <div class="blog__grid__item blog__grid__item--blockInfo" data-grid="v1">
                        <a target="_blank" href="https://yandex.ru/pogoda/moscow" class="display-block">
                            <div class="pos-tl p-m ml-xs fontSize-14 opacity-85 text-uppercase">сегодня</div>
                            <canvas id="blog__grid__weather__canvas" class="mb-m"></canvas>
                            <div class="fontSize-34 fontWeight-8 mb-xs nowrap">{ get.data("weather").from }° ... { get.data("weather").to }°</div>
                            <div class="fontSize-22 opacity-85 mb-xxs">{ get.data("weather").type }</div>
                            <div class="fontSize-28 fontWeight-8 mb-m nowrap">{ get.data("weather").humidity }% / { get.data("weather").pressure } мм рт.с.</div>
                        </a>
                        <div class="h1px bg-white opacity-50 mb-s"></div>
                        <a target="_blank" href="http://www.cbr.ru/" class="display-block pos-rel pt-l mb-m">
                            <div class="pos-tl opacity-85 text-uppercase">по курсу ЦБ РФ</div>
                            <div class="pos-tr opacity-85 text-uppercase">{ get.data("currency").date }</div>
                            <div class="fontSize-34 fontWeight-8 mb-xxs">$ { get.data("currency").usd } ₽</div>
                            <div class="fontSize-34 fontWeight-8">€ { get.data("currency").euro } ₽</div>
                            <div class="pos-br opacity-85 text-uppercase trY-m">в Москве</div>
                        </a>
                        <a target="_blank" href="https://yandex.ru/maps/213/moscow/probki?source=traffic" class="display-block pos-rel">
                            <div class="fontSize-24 fontWeight-8 mb-xs nowrap">Пробки &ndash; { get.traffic() }</div>
                            <div class="fontSize-14 opacity-85 text-uppercase">{ get.data("traffic").status.ru }</div>
                        </a>
                    </div>
                </div>
            </virtual>
        </div>
    </div>

<script>

    var $ = this;

    this.get = {
        data: function(data){
            return $.opts.params.data[data];
        },
        traffic: function(){
            var level = $.opts.params.data.traffic.level;
                 if (level == 1) return level + " балл";
            else if (level > 1 && level < 5) return level + " балла";
            else if (level > 4) return level + " баллов";
        },
        image: function(url){
            return "http://resumekraft.ru/" + url.replace(/http:\/\/resumekraft\.ru\//g, "");
        },
        delay: function(i){
            if (i == 3 || i == 5) return "xs";
            else if (i == 6) return "s";
            else return false;
        }
    }

</script>

</blog-grid>
