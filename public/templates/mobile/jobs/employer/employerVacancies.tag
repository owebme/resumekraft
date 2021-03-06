<employer-vacancies-mobile if={ opts.items && !opts.utils.isEmpty(opts.items) } id="vacancies" class="section employer__vacancies">

    <h3>Вакансии компании</h3>

    <div each={ item in opts.items } no-reorder class="employer__vacancies__item">
        <div class="employer__vacancies__item__name">
            <a href="/jobs/vacancy/{ item.id }/{ link(item.employer.name) }" class="employer__vacancies__item__title" data-id={ item.id }>{ item.name }</a>
            <div class="employer__vacancies__item__date">
                <span class="c-gray">{ parent.opts.utils.moment(item.published_at).format("D MMMM") }</span>, { item.area.name }
            </div>
            <div class="employer__vacancies__item__salary">
                <span if={ item.salary }>{ 'от' : item.salary.from } { parent.opts.utils.numberFormat(item.salary.from, 0, ".", " ") } <span if={ item.salary.to }>до { parent.opts.utils.numberFormat(item.salary.to, 0, ".", " ") } { currency(item.salary.currency) }</span></span>
                <span if={ !item.salary.to }>{ currency(item.salary.currency) }</span>
                <span if={ !item.salary }>з/п не указана</span>
            </div>
        </div>
    </div>

<script>

    var $ = this;

    $.link = function(link){
        return link.replace(/[.|,|:|;|(|)"|']/gi, "").replace(/\s+/gi, "-").replace(/\//gi, "-").replace(/(-)+/gi, "-");
    }

    $.currency = function(code){
        if (code){
            return $.opts.utils.findWhere($.opts.currency, {"code": code}).abbr;
        }
    }

</script>

</employer-vacancies-mobile>
