<jobs-search-content class="section jobs__search__content">

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
                    <strong>Требования:</strong> { highlight(item.snippet.requirement) }
                </div>
                <div class="jobs__list__item__company">
                    <div class="jobs__list__item__company__text" data-trusted={ item.employer.trusted }>{ item.employer.name }</div>
                </div>
                <div class="jobs__list__item__address">
                    <span class="jobs__list__item__address__city">{ item.area.name }</span><span if={ item.address && item.address.metro } class="jobs__list__item__address__metro"><span class="c-gray">&nbsp;&nbsp;•&nbsp;&nbsp;</span>{ item.address.metro.station_name }</span>&nbsp;&nbsp;•&nbsp;&nbsp;{ parent.parent.opts.moment(item.published_at).format("D MMMM") }
                </div>
                <div class="jobs__list__item__buttons">
                    <icon-like color="blueBright" size="xs"></icon-like>
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

    $.highlight = function(text){
        return text.replace(/<highlighttext>/, '').replace(/<\/highlighttext>/, '');
    }

    $.currency = function(code){
        if (code){
            return $.parent.opts.utils.findWhere($.parent.opts.currency, {"code": code}).abbr;
        }
    }

</script>

</jobs-search-content>
