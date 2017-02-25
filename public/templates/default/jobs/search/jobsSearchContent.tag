<jobs-search-content class="section jobs__search__content">

    <div class="jobs__list">
        <div each={ item, i in opts.items } class="jobs__list__item">
            <div class="jobs__list__item__content">
                <a href="/jobs/vacancy/{ item.id }" class="jobs__list__item__title">{ item.name }</a>
                <div if={ item.salary } class="jobs__list__item__salary">
                    { item.salary.from } <span if={ item.salary.to }>&mdash; { item.salary.to }</span> <span class="jobs__list__item__salary__rub">₽</span>
                </div>
                <div class="jobs__list__item__text">
                    <strong>Требования:</strong> { item.snippet.requirement }
                </div>
                <div class="jobs__list__item__company">
                    { item.employer.name }
                </div>
                <div class="jobs__list__item__city">
                    <span>{ item.area.name }</span>&nbsp;&nbsp;•&nbsp;&nbsp;{ parent.parent.opts.moment(item.published_at).format("D MMMM") }
                </div>
                <a href="/jobs/vacancy/{ item.id }/response" class="jobs__list__item__response">Откликнуться</a>
            </div>
        </div>
    </div>

</jobs-search-content>
