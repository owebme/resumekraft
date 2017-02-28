<jobs-search-pages class="section container jobs__search__pages">

    <div class="row">
        <div class="col-md-offset-19 col-md-5">
            <div class="row jobs__search__pages__items">
                <div if={ get.pages() } class="jobs__search__pages__arrows">
                    <a href="#" class="jobs__search__pages__arrow" data-arrow="prev" data-active={ opts.page > 0 }>Alt + ←</a>
                    <a href="#" class="jobs__search__pages__arrow" data-arrow="next" data-active={ opts.page + 1 < opts.pages }>Alt + →</a>
                </div>
                <virtual each={ item, i in get.pages() } no-reorder>
                    <a if={ item != get.current() } href="/jobs/search/?page={ item }" class="col-md-4 jobs__search__pages__item">{ item + 1 }</a>
                    <span if={ item == get.current() } class="col-md-4 jobs__search__pages__item" data-active="true">{ item + 1 }</span>
                </virtual>
            </div>
        </div>
    </div>

    <script>

        var $ = this;

        $.perPage = 5;

        $.get = {
            current: function(){
                return $.opts.page;
            },
            url: function(){

            },
            pages: function(){
                if ($.opts.pages < 2) return;
                if ($.opts.page + $.perPage <= $.opts.pages){
                    if ($.opts.page > 0){
                        return $.parent.opts.utils.range($.opts.page - 1, $.opts.page + ($.perPage - 1));
                    }
                    else {
                        return $.parent.opts.utils.range($.opts.page, $.opts.page + $.perPage);
                    }
                }
                else {
                    var delta = $.opts.pages - $.opts.page;
                    if (delta < 2) delta = 2;
                    else delta = 2;
                    if ($.opts.page - delta < 0) delta = $.opts.page;
                    if (($.opts.pages - ($.opts.page - delta)) > $.perPage) $.opts.pages = $.opts.pages - 1;
                    return $.parent.opts.utils.range($.opts.page - delta, $.opts.pages);
                }
            }
        };

    </script>

</jobs-search-pages>
