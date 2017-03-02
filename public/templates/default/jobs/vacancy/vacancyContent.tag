<vacancy-content class="section col-md-19">

    <div class="section__container">
        <h1 class="title">{ opts.item.name }</h1>
        <div class="flex-row-left-center">
            <a href="/jobs/employer/{ opts.item.employer.id }/{ link(opts.item.employer.name) }" class="link link-l">{ opts.item.employer.name }</a><div if={ opts.item.employer.trusted } class="pos-rel ml-xs mt-xxs" data-balloon="Компания прошла идентификацию"><svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path class="fill-green" d="M9.392 9.827L3.148 3.584l-2.54 1.04c-.21.116-.422 0-.53-.23-.104-.232-.104-.464 0-.58L2.832.234C2.937.113 3.044 0 3.15 0c.106 0 .212.115.318.232l6.455 8.9a.8.8 0 0 1 0 .695.286.286 0 0 1-.264.173.292.292 0 0 1-.265-.173" transform="matrix(1 0 0 -1 3 13)"/></svg></div>
        </div>
        <div class="vacancy__header">
            <div class="vacancy__header__item">
                <div class="vacancy__header__item__title">Уровень зарплаты</div>
                <div if={ opts.item.salary } class="vacancy__header__item__text nowrap">{ 'от' : opts.item.salary.from } { parent.opts.utils.numberFormat(opts.item.salary.from, 0, ".", " ") } <span if={ opts.item.salary.to }>до { parent.opts.utils.numberFormat(opts.item.salary.to, 0, ".", " ") }</span> { currency(opts.item.salary.currency) }</div>
                <div if={ !opts.item.salary } class="vacancy__header__item__text">з/п не указана</div>
            </div>
            <div class="vacancy__header__item">
                <div class="vacancy__header__item__title">Город</div>
                <div class="vacancy__header__item__text { mb-xss : opts.item.address.metro_stations }">{ opts.item.area.name }</div>
                <div each={ item in opts.item.address.metro_stations } class="vacancy__header__item__metro">м. { item.station_name }</div>
            </div>
            <div class="vacancy__header__item">
                <div class="vacancy__header__item__title">Требуемый опыт работы</div>
                <div class="vacancy__header__item__text">{ opts.item.experience.name }</div>
            </div>
        </div>
        <div class="row vacancy__content">
            <div class="col-md-16 vacancy__description">
                <raw-content content="{ opts.item.description }">{ opts.item.description }</raw-content>
            </div>
            <div class="col-md-8">
                <div class="vacancy__sidebar">
                    <a if={ opts.item.employer.logo_urls } href="/jobs/employer/{ opts.item.employer.id }/{ link(opts.item.employer.name) }"><img src="{ opts.item.employer.logo_urls.original }" class="vacancy__logotype"></a>
                    <div class="mb-s">Дата публикации вакансии</div>
                    <div class="c-gray mb-l">{ parent.opts.moment(opts.item.published_at).format("D MMMM YYYY") }</div>
                    <div if={ !parent.opts.utils.isEmpty(opts.item.key_skills) } class="mb-l">
                        <h3>Ключевые навыки</h3>
                        <div each={ item in opts.item.key_skills } class="vacancy__skills__item">{ item.name }</div>
                    </div>
                    <div if={ opts.item.address.city && opts.item.address.street } class="mb-l">
                        <h3>Адрес</h3>
                        <div class="c-blackLight mb-xs">
                            { opts.item.address.city }, { opts.item.address.street }, { opts.item.address.building }
                            <span each={ item in opts.item.address.metro_stations }>, м. { item.station_name }</span>
                        </div>
                        <a target="_blank" href="https://yandex.ru/maps/?text={ opts.item.address.city }, { opts.item.address.street }, { opts.item.address.building }" class="link">Показать на карте</a>
                    </div>
                    <div if={ opts.item.contacts } class="mb-l">
                        <h3>Контакты</h3>
                        <div class="c-blackLight fontSize-16">
                            <div if={ opts.item.contacts.phones } class="mb-xxs">
                                +{ opts.item.contacts.phones[0].country } { opts.item.contacts.phones[0].city } { opts.item.contacts.phones[0].number }
                            </div>
                            <strong if={ opts.item.contacts.name }>
                                { opts.item.contacts.name }
                            </strong>
                            <div class="mt-xxs" if={ opts.item.contacts.phones && opts.item.contacts.phones[0].comment }>
                                { opts.item.contacts.phones[0].comment }
                            </div>
                            <div if={ opts.item.contacts.email } class="nowrap">
                                <div class="hr"></div>
                                Почта: <a class="display-inlineBlock text-truncate maxW-75p vAlign-middle link" href="mailto:{ opts.item.contacts.email }">{ opts.item.contacts.email }</a>
                            </div>
                        </div>
                    </div>
                    <h3>Тип занятости</h3>
                    <div class="c-blackLight">
                        { opts.item.employment.name }
                    </div>
                </div>
            </div>
        </div>
    </div>

<script>

    var $ = this;

    $.link = function(link){
        return link.replace(/\s+/gi, "-");
    }

    $.currency = function(code){
        return $.parent.opts.utils.findWhere($.parent.opts.currency, {"code": code}).abbr;
    }

</script>

</vacancy-content>
