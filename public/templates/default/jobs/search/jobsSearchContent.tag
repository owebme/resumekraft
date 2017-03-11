<jobs-search-content class="section jobs__search__content" data-inner="hidden" data-loading="false">

    <div class="section__loading visible-xs">
        <div class="section__loading__text">Поиск вакансий...</div>
    </div>

    <div class="jobs__list">
        <div if={ !get.items().length } class="jobs__list__empty text-center">
            <h3 class="c-silver mb-s">Нет подходящих результатов</h3>
            <p class="mb25">попробуйте смягчить условия поиска</p>
            <a onClick={ onBack } onUpdate="none" href="/jobs/search/" class="btn btn-l btn-primary-hover-success">{ opts.renderClient ? 'Сбросить фильтры' : 'Вернуться на шаг назад' }</a>
        </div>
        <jobs-search-list-item each={ item, i in get.items() } no-reorder item={ item } utils={ parent.get.utils() } currency={ parent.get.currency() } isPhone={ parent.isPhone() } _blank="true"></jobs-search-list-item>
    </div>

<script>

    var $ = this;

    $.on("mount", function(){
        if ($.opts.renderClient){
            try {
                $Sections.module("search.content", $);
                $Sections.module("search.$content", $$($.root));

                if (app.device.isPhone){
                    $Sections.search.$content.on('swipeLeft', function(){
                        $Sections.search.panel.open.filter();
                    });
                    $Sections.search.$content.on('click', ".jobs__list__item__title", function(e){
                        e.preventDefault();

                        var $el = $$(this);

                        if ($Screens.vacancy){
                            app.$dom.body.addClass("no-scroll");
                            $Screens.vacancy.show($el.attr("data-id"), $el.attr("href"), function(){
                                app.$dom.body.removeClass("no-scroll");
                            });
                        }
                    });
                }
            } catch(e){}
        }
    });

    $.onBack = function(){
        History.back();
    }

    $.isPhone = function(){
        if ($.opts.renderClient){
            try {
                return app.device.isPhone;
            } catch(e){}
        }
        else {
            return $.parent.opts.device.type == "phone";
        }
    }

    $.get = {
        items: function(){
            if ($.opts.renderClient){
                try {
                    return $store.jobs.items;
                } catch(e){}
            }
            else {
                return $.opts.items;
            }
        },
        utils: function(){
            if ($.opts.renderClient){
                try {
                    return window._;
                } catch(e){}
            }
            else {
                return $.opts.utils;
            }
        },
        currency: function(){
            if ($.opts.renderClient){
                try {
                    return $store.jobs.dictionary.get("currency");
                } catch(e){}
            }
            else {
                return $.opts.currency;
            }
        }
    }

</script>

</jobs-search-content>
