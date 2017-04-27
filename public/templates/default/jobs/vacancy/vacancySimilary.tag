<vacancy-similary if={ opts.items && !opts.utils.isEmpty(opts.items) } class="section vacancy__similary__wrapper">

    <div class="container">
        <div class="row">
            <div class="col-md-17">
                <div class="vacancy__similary">
                    <h3 class="title">Похожие вакансии</h3>
                    <div class="vacancy__similary__items">
                        <a if={ i < 6 } each={ item, i in opts.items } no-reorder href="/jobs/vacancy/{ item.id }/{ link(item.name) }" data-id={ item.id } class="vacancy__similary__item">
                            <div class="vacancy__similary__item__title">{ item.name }</div>
                            <div class="vacancy__similary__item__salary">
                                <span if={ item.salary }>{ 'от' : item.salary.from } { parent.opts.utils.numberFormat(item.salary.from, 0, ".", " ") } <span if={ item.salary.to }>до { parent.opts.utils.numberFormat(item.salary.to, 0, ".", " ") }</span> { currency(item.salary.currency) }</span>
                                <span if={ !item.salary }>з/п не указана</span>
                            </div>
                            <div class="vacancy__similary__item__name">{ item.employer.name }, { item.area.name }</div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="vacancy__similary__resumeOffer">
                    <div class="resumeOffer">
                        <div class="resumeOffer__title">У вас уже есть продающее резюме?</div>
                        <div class="resumeOffer__container">
                            <a target="_blank" href="/premium/"><img class="resumeOffer__image" src="/public/images/jobs/banners/premium-banner-mini.png"></a>
                            <div class="resumeOffer__text">Создайте премиальное резюме нового формата, чтобы работодатели смогли заметить вас и пригласить на работу.</div>
                        </div>
                        <a target="_blank" href="/premium/" class="btn-default btn-l btn-white">Узнать больше</a>
                    </div>
                </div>
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

</vacancy-similary>
