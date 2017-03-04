<jobs-search-content class="section jobs__search__content" data-inner="hidden" data-loading="false">

    <div class="section__loading visible-xs">
        <div class="section__loading__text">Поиск вакансий...</div>
    </div>

    <div class="jobs__list">
        <div if={ !opts.items.length } class="jobs__list__empty text-center">
            <h3 class="c-silver mb-s">Нет подходящих результатов</h3>
            <p class="mb25">попробуйте смягчить условия поиска</p>
            <a href="/jobs/search/" class="btn btn-l btn-primary-hover-success">Сбросить фильтры</a>
        </div>
        <div each={ item, i in opts.items } no-reorder class="jobs__list__item">
            <div class="jobs__list__item__content">
                <a target="_blank" href="/jobs/vacancy/{ item.id }/{ link(item.employer.name) }" class="jobs__list__item__title">{ item.name }</a>
                <div if={ item.salary } class="jobs__list__item__salary">
                    { 'от' : item.salary.from } { parent.parent.opts.utils.numberFormat(item.salary.from, 0, ".", " ") } <span if={ item.salary.to }>до { parent.parent.opts.utils.numberFormat(item.salary.to, 0, ".", " ") }</span> { currency(item.salary.currency) }
                </div>
                <div class="jobs__list__item__text">
                    <strong>Требования:</strong>
                    { item.snippet.requirement }
                </div>
                <div class="jobs__list__item__company">
                    <div class="jobs__list__item__company__text" data-trusted={ item.employer.trusted }>{ item.employer.name }</div>
                </div>
                <div class="jobs__list__item__address">
                    <span class="jobs__list__item__address__city">{ item.area.name }</span><span if={ item.address && item.address.metro } class="jobs__list__item__address__metro"><span class="c-gray">&nbsp;&nbsp;•&nbsp;&nbsp;</span>{ item.address.metro.station_name }</span>&nbsp;&nbsp;•&nbsp;&nbsp;{ date(item.published_at) }
                </div>
                <div class="jobs__list__item__buttons">
                    <icon-like color={ parent.parent.opts.device.type == "phone" ? "silver" : "blueBright" } size={ parent.parent.opts.device.type == "phone" ? "s" : "xs" }></icon-like>
                    <div class="btn-default btn-m">Откликнуться</div>
                </div>
            </div>
        </div>
    </div>

<script>

    var $ = this;

    $.link = function(link){
        return link.replace(/\s+/gi, "-");
    }

    $.date = function(date){
        var days = $.parent.opts.moment(date).diff($.parent.opts.moment(), 'days');

        if (days === 0) return "Сегодня";
        else if (days === -1) return "Вчера";
        else {
            return $.parent.opts.moment(date).format("D MMMM");
        }
    }

    $.currency = function(code){
        if (code){
            return $.parent.opts.utils.findWhere($.parent.opts.currency, {"code": code}).abbr;
        }
    }

</script>

</jobs-search-content>
