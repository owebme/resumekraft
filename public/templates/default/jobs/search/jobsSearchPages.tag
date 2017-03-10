<jobs-search-pages class="section container jobs__search__pages">

    <div class="row xs-plr0 xs-mlr0">
        <div class="col-md-offset-18 col-md-6 col-lg-offset-19 col-lg-5 xs-plr0 xs-mlr0">
            <div class="row jobs__search__pages__items xs-plr0 xs-mlr0">
                <div if={ $State.get("pages") > 1 } class="jobs__search__pages__arrows">
                    <div onClick={ onPrev } onUpdate="none" class="jobs__search__pages__arrow" data-arrow="prev" data-active={ $State.get("page") > 0 }>Alt + ←</div>
                    <div onClick={ onNext } onUpdate="none" class="jobs__search__pages__arrow" data-arrow="next" data-active={ $State.get("page") + 1 < $State.get("pages") }>Alt + →</div>
                </div>
                <a href="/jobs/search{ item > 0 ? '/?page=' + item : '' }" each={ item, i in get.pages() } no-reorder onClick={ onSelect } class="col-md-4 jobs__search__pages__item" data-active={ item == $State.get("page") }>{ item + 1 }</a>
                <span onClick={ onNext } onUpdate="none" class="jobs__search__pages__item jobs__search__pages__item__arrow" data-active={ $State.get("page") + 1 < $State.get("pages") }></span>
            </div>
        </div>
    </div>

<script>

    var $ = this;

    $.perPage = 5;

    $.on("mount", function(){
        try {
            $Sections.module("search.pages", $);

            app.$dom.document.on("keydown", function(e){
                if (e.altKey){
                    if (e.keyCode == 37){
                        $.onPrev();
                    }
                    else if (e.keyCode == 39){
                        $.onNext();
                    }
                }
            });
        } catch(e){}
    });

    $.onSelect = function(){
        $.changePage(parseInt(this.item));
    };

    $.onNext = function(){
        if ($State.get("page") + 1 < $State.get("pages")){
            $.changePage($State.get("page") + 1);
            $.update();
        }
    };

    $.onPrev = function(){
        if ($State.get("page") > 0){
            $.changePage($State.get("page") - 1);
            $.update();
        }
    };

    $.changePage = function(page){
        $State.select("page").set(page);

        var params = Url.parseQuery();

        if (page > 0) params.page = page;
        else if (params.page) delete params.page;

        $Sections.search.filter.onSearch($Sections.search.filter.getUrl(params), {
            changePage: true
        });
    };

    $.get = {
        pages: function(){
            if ($.opts.renderClient){
                try {
                    var page = $State.get("page"),
                        pages = $State.get("pages"),
                        utils = window._;
                } catch(e){}
            }
            else {
                var page = $.opts.page * 1,
                    pages = $.opts.pages * 1,
                    utils = $.opts.utils;
            }

            if (pages < 2) return;

            if (page + $.perPage <= pages){
                if (page > 0){
                    return utils.range(page - 1, page + ($.perPage - 1));
                }
                else {
                    return utils.range(page, page + $.perPage);
                }
            }
            else {
                var delta = pages - page;
                if (delta < 2) delta = 2;
                else delta = 2;
                if (page - delta < 0) delta = page;
                if ((pages - (page - delta)) > $.perPage) pages = pages - 1;
                return utils.range(page - delta, pages);
            }
        }
    };

</script>

</jobs-search-pages>
