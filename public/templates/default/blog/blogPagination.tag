<blog-pagination class="section blog__pagination">

    <div class="container">
        <div class="row">
            <div class="col-md-8 col-lg-6 h130">
                <div class="blog__subscribe pos-centered w100p text-left pr-l">
                    <h4 class="c-blackLight mb-xxs">Подписаться на наш блог</h4>
                    <div class="blog__subscribe__form"></div>
                </div>
            </div>
            <virtual each={ item, i in get.pages() }>
                <a if={ item != get.current() } href="/blog/page_{ item }" class="col-md-3 blog__pagination__item">{ item }</a>
                <span if={ item == get.current() } class="col-md-3 blog__pagination__item" data-active="true">{ item }</span>
            </virtual>
        </div>
    </div>

<script>

    var $ = this;

    this.get = {
        current: function(){
            return $.opts.params.data.page;
        },
        pages: function(){
            if ($.opts.params.data.page + 5 <= $.opts.params.data.pages){
                if ($.opts.params.data.page > 1){
                    return $.opts.params.utils.range($.opts.params.data.page - 1, $.opts.params.data.page + 4);
                }
                else {
                    return $.opts.params.utils.range($.opts.params.data.page, $.opts.params.data.page + 5);
                }
            }
            else {
                var delta = $.opts.params.data.pages - $.opts.params.data.page;
                if (delta < 2) delta = 2;
                else delta = 1;
                return $.opts.params.utils.range($.opts.params.data.page - delta, $.opts.params.data.pages + 1);
            }
        }
    };

</script>

</blog-pagination>
