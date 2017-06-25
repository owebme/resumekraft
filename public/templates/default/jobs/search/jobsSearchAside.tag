<jobs-search-aside class="section jobs__search__aside">

    <div class="jobs__blockInfo">
        <a class="jobs__blockInfo__tile jobs__blockInfo__tile__weather" target="_blank" href="https://yandex.ru/pogoda/moscow">
            <div class="pos-tl jobs__blockInfo__label">сегодня</div>
            <div class="pos-tr jobs__blockInfo__label">в Москве</div>
            <div class="jobs__blockInfo__weather">{ get.data("weather").from }° ... { get.data("weather").to }°</div>
            <div class="jobs__blockInfo__text">{ get.data("weather").type }</div>
            <div class="jobs__blockInfo__title">{ get.data("weather").humidity }% / { get.data("weather").pressure } мм рт.с.</div>
        </a>
        <div class="jobs__blockInfo__devider"></div>
        <a class="jobs__blockInfo__tile jobs__blockInfo__tile__currency" target="_blank" href="http://www.cbr.ru/">
            <div class="pos-tl jobs__blockInfo__label">по курсу ЦБ РФ</div>
            <div class="pos-tr jobs__blockInfo__label">{ get.data("currency").date }</div>
            <div class="jobs__blockInfo__currency">$ { get.data("currency").usd } ₽</div>
            <div class="jobs__blockInfo__devider"></div>
            <div class="jobs__blockInfo__currency">€ { get.data("currency").euro } ₽</div>
        </a>
        <a class="jobs__blockInfo__tile jobs__blockInfo__tile__traffic" target="_blank" href="https://yandex.ru/maps/213/moscow/probki?source=traffic">
            <div class="pos-tr jobs__blockInfo__label">в Москве</div>
            <div class="jobs__blockInfo__title">Пробки &ndash; { get.traffic() }</div>
            <div class="jobs__blockInfo__text">{ get.data("traffic").status.ru }</div>
        </a>
    </div>
    <a href="http://rehh.ru" class="jobs__blockAddress">
        <div class="jobs__blockAddress__label">наш короткий адрес</div>
        <div class="jobs__blockAddress__title">rehh.ru</div>
    </a>
    <div class="jobs__webmobile">
        <div class="jobs__webmobile__title">Наш ресурс доступен на мобильных устройствах</div>
    </div>
    <!-- <iframe class="mt-l" src="/public/pages/land/index.html" frameborder="0" style="width:240px; height:460px"></iframe> -->

<script>

    var $ = this;

    this.get = {
        data: function(data){
            return $.parent.opts.informers[data];
        },
        traffic: function(){
            var level = $.parent.opts.informers.traffic.level;

                 if (level == 1) return level + " балл";
            else if (level > 1 && level < 5) return level + " балла";
            else if (level > 4 || level == 0) return level + " баллов";
        }
    }

</script>

</jobs-search-aside>
