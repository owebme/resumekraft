<samples-clusters>

    <div onClick={ show } class="samples__nav__select" data-ripple data-show={ active }>
        <div class="samples__nav__select__label">Выбрать направление</div>
        <span class="samples__nav__select__chevron"></span>
    </div>
    <div ref="container" class="samples__nav__options section-scroll">
        <div class="samples__nav__options__scroll">
            <div class="samples__nav__options__container">
                <a onClick={ open } onUpdate="none" href="/samples/clusters/{ item._id }/{ item.title }" each={ item, i in items } no-reorder class="samples__nav__options__item" data-ripple data-active={ item._id == parent.cluster }>{ item.title }<span class="samples__nav__options__item__count">{ parent.parent.opts.utils.random(1, 20) }</span></a>
            </div>
        </div>
    </div>

<script>

    var $ = this;

    $.active = false;

    $.cluster = $.opts.cluster;

    $.on("mount", function(){
        try {
            var options = new app.plugins.scroll.content($.refs.container);
            options.init();
        }
        catch(e){}
    });

    $.show = function(){
        $.active = !$.active;

        app.$dom.document.off("click.nav");

        setTimeout(function(){
            app.$dom.document.one("click.nav", function(e){
                $.update({
                    active: false
                })
            });
        }, 5);
    };

    $.open = function(e){
        e.preventDefault();
        $.cluster = this.item._id;
        $Router.set(e.currentTarget.getAttribute("href"), "Образцы резюме «" + $.cluster + "»");
    };

    try {
        if ($store.samples.clusters && $.opts.clusters){
            $store.samples.clusters = $.opts.clusters;
        }
        $.items = $.opts.clusters || $store.samples.clusters
    }
    catch(e){
        $.cluster = $.opts.cluster;
        $.items = $.opts.clusters;
    }

</script>

</samples-clusters>
