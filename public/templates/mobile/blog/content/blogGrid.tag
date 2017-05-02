<blog-grid-mobile class="section blog__grid">

    <div each={ item, i in parent.opts.utils.rest(opts.params.data.items) } class="blog__grid__item { 'anim anim-bt-soft' : i > 1 } cover__bg{ item.color }" data-delay="{ i % 2 != 0 ? 's' : 'xs' }" data-duration="m">
        <a href="/blog/{ item.alias }" class="blog__grid__item__inner">
            <div class="blog__grid__item__image progressive-image" style="background-image:url({ get.image( item.image) })"></div>
            <div class="blog__grid__item__content">
                <div class="blog__grid__item__date">{ item.dateShort }</div>
                <img class="blog__grid__item__avatar" src="/public/images/blog/avatar.jpg">
                <div class="blog__grid__item__title">{ item.name }</div>
                <div class="blog__grid__item__tag">{ item.keywords }</div>
            </div>
        </a>
    </div>

<script>

    var $ = this;

    this.get = {
        image: function(url){
            return url.replace(/http:\/\/resumekraft\.ru\//g, "/").replace(/\/files\/blog\/images/g, "/public/files/blog/images");
        }
    }

</script>

</blog-grid-mobile>
