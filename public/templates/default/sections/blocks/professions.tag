<section-professions class="section__professions">

    <div class="section__professions__button">
        <a href="/premium/samples" class="btn btn-xl btn-rounded btn-white-hover-success">
            <span class="btn-label">Смотреть примеры</span>
        </a>
    </div>
    <div class="prof__container">
        <div class="prof__items__photo">
            <div each={ item in opts.utils.range(42) } no-reorder class="prof__item__photo" style="transition-delay:{ parent.opts.utils.random(item, 20) * 0.05 }s">
                <div class="prof__item__photo__inner" data-active={ parent.larges.indexOf(item + 1) !== -1 }>
                    <div class="prof__item__photo__image" style="background-image:url(/public/images/samples/small/{ item + 1 }.jpg)"></div>
                </div>
            </div>
        </div>
    </div>

<script>

    this.larges = [5, 9, 10, 13, 15, 20, 24, 26, 31, 33];

</script>

</section-professions>
