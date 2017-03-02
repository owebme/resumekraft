<vacancy-panel class="section vacancy__panel container">

    <div class="row">
        <div class="col-md-offset-12 col-md-12">
            <div class="vacancy__panel__block">
                <div class="vacancy__panel__button btn btn-primary-hover-success btn-shadow btn-l">
                    <svg class="btn-svg" viewBox="3 -3 24 24"><path class="fill-white" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg>
                    Откликнуться
                </div>
                <div class="btn-icon" data-balloon="Добавить в избранное">
                    <icon-like color="blueBright" size="s"></icon-like>
                </div>
                <a target="_blank" if={ opts.item.address.city && opts.item.address.street } href="https://yandex.ru/maps/?text={ opts.item.address.city }, { opts.item.address.street }, { opts.item.address.building }" class="btn-icon" data-balloon="Адрес на карте">
                    <icon-location color="green" size="s"></icon-location>
                </a>
                <div class="vacancy__panel__salary">
                    <div class="vacancy__panel__salary__title">Уровень зарплаты</div>
                    <div if={ opts.item.salary } class="vacancy__panel__salary__text nowrap">{ 'от' : opts.item.salary.from } { parent.opts.utils.numberFormat(opts.item.salary.from, 0, ".", " ") } <span if={ opts.item.salary.to }>до { parent.opts.utils.numberFormat(opts.item.salary.to, 0, ".", " ") }</span> { currency(opts.item.salary.currency) }</div>
                    <div if={ !opts.item.salary } class="vacancy__panel__salary__text">з/п не указана</div>
                </div>
            </div>
        </div>
    </div>

<script>

    var $ = this;

    $.currency = function(code){
        return $.parent.opts.utils.findWhere($.parent.opts.currency, {"code": code}).abbr;
    }

</script>

</vacancy-panel>
