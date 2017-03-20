<blog-header class="section blog__header">

    <div class="blog__header__cover">
        <div class="blog__header__cover__image progressive-image" data-cover={ parent.opts.utils.random(1, 18) }></div>
    </div>

    <div class="container">
        <div class="blog__header__container row">
            <div class="col-md-17">
                <div class="blog__header__post">
                    <div class="blog__header__post__date mb-xxs anim-group1 anim-bt">
                        { opts.params.data.headers[0].date }, <span class="blog__header__post__time">{ opts.params.data.headers[0].time }</span>
                        <img class="blog__header__post__avatar" src="http://resumekraft.ru/assets/img/testimonials/testimonial9.jpg">
                        <span class="blog__header__post__tags">{ opts.params.data.headers[0].keywords }</span>
                    </div>
                    <div class="anim-group1 anim-bt anim-delay-xs">
                        <a href="/blog/{ opts.params.data.headers[0].alias }" class="blog__header__post__title h1 mb-xl"><span>{ opts.params.data.headers[0].name }</span></a>
                    </div>
                    <div class="anim-group1 anim-bt anim-delay-s">
                        <a href="/blog/{ opts.params.data.headers[0].alias }" class="btn btn-xl btn-default-hover-success">Подробнее</a>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="blog__header__list">
                    <div if={ i > 0 } each={ item, i in opts.params.data.headers } class="anim-group2 anim-bt { anim-delay-xs : i == 2, anim-delay-s : i == 3 }">
                        <a href="/blog/{ item.alias }" class="blog__header__list__item" data-first="{ i == 1 }">
                            <span class="blog__header__list__item__time">{ item.time }</span>
                            <span class="blog__header__list__item__date mb-xxs">{ item.date }</span>
                            <h3 class="blog__header__list__item__title lineHeight-m"><span>{ item.name }</span></h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</blog-header>
