<blog-grid class="section blog__grid">

    <a each={ item, i in opts.items } href="/blog/{ item.alias }" class="blog__grid__item anim anim-bt-quick" data-delay="{ get.delay(i) }">
        <div class="blog__grid__tile">
            <div class="blog__grid__tile__container">
                <div class="blog__grid__tile__content">
                    <div class="blog__grid__item__content">
                        <div class="blog__grid__item__tags">{ item.keywords }</div>
                        <div class="blog__grid__item__date">{ item.date }</div>
                        <h4 class="blog__grid__item__title">{ item.name }</h4>
                        <div class="blog__grid__item__share">
                            <div class="blog__grid__item__share__link" data-item="fb" data-url="{ get.url(item.alias) }" data-title="{ item.name }"></div>
                            <div class="blog__grid__item__share__link" data-item="vk" data-url="{ get.url(item.alias) }" data-title="{ item.name }"></div>
                            <div class="blog__grid__item__share__link" data-item="gl" data-url="{ get.url(item.alias) }" data-title="{ item.name }"></div>
                            <div class="blog__grid__item__share__link" data-item="tw" data-url="{ get.url(item.alias) }" data-title="{ item.name }"></div>
                        </div>
                    </div>
                    <div class="blog__grid__item__image" style="background-image:url({ get.image( item.image) })">
                        <div class="blog__grid__item__text">
                            <div class="blog__grid__item__text__inner">
                                { item.text_sm }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </a>

<script>

    var $ = this;

    this.get = {
        url: function(alias){
            return $.opts.domain + '/blog/' + alias;
        },
        image: function(url){
            return url.replace(/http:\/\/resumekraft\.ru\//g, "/").replace(/\/files\/blog\/images/g, "/public/files/blog/images");
        },
        delay: function(i){
            if (i == 0 || i == 3) return "xs";
            else if (i == 1) return "s";
            else return false;
        }
    }

</script>

</blog-grid>
