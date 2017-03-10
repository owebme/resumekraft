<jobs-search-list-item>

    <div class="jobs__list__item">
        <div class="jobs__list__item__content">
            <a target={ "_blank" : opts._blank } href="/jobs/vacancy/{ opts.item.id }/{ link(opts.item.name) }" class="jobs__list__item__title" data-id={ opts.item.id }>{ opts.item.name }</a>
            <div if={ opts.item.salary } class="jobs__list__item__salary">
                { 'от' : opts.item.salary.from } { opts.utils.numberFormat(opts.item.salary.from, 0, ".", " ") } <span if={ opts.item.salary.to }>до { opts.utils.numberFormat(opts.item.salary.to, 0, ".", " ") }</span> { currency(opts.item.salary.currency) }
            </div>
            <div if={ opts.item.snippet.requirement } class="jobs__list__item__text">
                <strong>Требования:</strong>
                { opts.item.snippet.requirement }
            </div>
            <div class="jobs__list__item__company">
                <div class="jobs__list__item__company__text" data-trusted={ opts.item.employer.trusted }>{ opts.item.employer.name }</div>
            </div>
            <div class="jobs__list__item__address">
                <span class="jobs__list__item__address__city">{ opts.item.area.name }</span><span if={ opts.item.address && opts.item.address.metro } class="jobs__list__item__address__metro"><span class="c-gray">&nbsp;&nbsp;•&nbsp;&nbsp;</span>{ opts.item.address.metro.station_name }</span>&nbsp;&nbsp;•&nbsp;&nbsp;{ date(opts.item.published_at) }
            </div>
            <div class="jobs__list__item__buttons">
                <jobs-search-list-favorite item={ opts.item } color={ opts.isphone ? "silver" : "blueBright" } size={ opts.isphone ? "s" : "xs" }></jobs-search-list-favorite>
                <a target="_blank" href="https://hh.ru/applicant/vacancy_response?vacancyId={ opts.item.id }" class="btn-default btn-m">Откликнуться</a>
            </div>
        </div>
    </div>

<script>

    var $ = this;

    $.link = function(link){
        return link.replace(/[.|,|:|;|(|)"|']/gi, "").replace(/\s+/gi, "-").replace(/\//gi, "-").replace(/(-)+/gi, "-");
    }

    $.date = function(date){
        var days = $.opts.utils.moment(date).diff($.opts.utils.moment(), 'days');

        if (days === 0) return "Сегодня";
        else if (days === -1) return "Вчера";
        else {
            return $.opts.utils.moment(date).format("D MMMM");
        }
    }

    $.currency = function(code){
        if (code){
            return $.opts.utils.findWhere($.opts.currency, {"code": code}).abbr;
        }
    }

</script>

</jobs-search-list-item>
