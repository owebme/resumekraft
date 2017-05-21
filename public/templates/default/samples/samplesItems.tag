<samples-items class="container samples__items">

    <div class="row">
        <div class="col-md-offset-6 col-md-9">
            <ul class="samples__items__list">
                <span class="samples__items__alpha">A</span>
                <li each={ item in parent.opts.utils.range(24) } class="samples__items__item">
                    <a href="#" class="samples__items__item__link">
                        { parent.parent.opts.utils.shuffle(parent.titles)[0] }
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-md-9">
            <ul class="samples__items__list">
                <li each={ item in parent.opts.utils.range(24) } class="samples__items__item">
                    <a href="#" class="samples__items__item__link">
                        { parent.parent.opts.utils.shuffle(parent.titles)[0] }
                    </a>
                </li>
            </ul>
        </div>
    </div>

<script>

    var $ = this;

    this.titles = ["Менеджер по продажам", "Бухгалтер", "Автомеханик специалист", "Менеджер туркомпании", "Юрисконсульт"];

</script>

</samples-items>
