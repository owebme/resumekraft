<samples-items class="container samples__items">

    <div if={ !opts.item } class="row">
        <div class="col-md-offset-6 col-md-9">
            <ul class="samples__items__list">
                <div if={ alpha } class="samples__items__alpha__tracker">
                    <span class="samples__items__alpha">{ alpha }</span>
                </div>
                <li each={ item in items[0] } no-reorder class="samples__items__item">
                    <a onClick={ open } onUpdate="none" href="{ get.link(item) }" class="samples__items__item__link">
                        { get.title(item.post) }
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-md-9">
            <ul class="samples__items__list">
                <li each={ item in items[1] } no-reorder class="samples__items__item">
                    <a onClick={ open } onUpdate="none" href="{ get.link(item) }" class="samples__items__item__link">
                        { get.title(item.post) }
                    </a>
                </li>
            </ul>
        </div>
    </div>

<script>

    var $ = this;

    $.open = function(e){
        e.preventDefault();
        $Router.set(e.currentTarget.getAttribute("href"), "Образец резюме «" + this.item.post + "»");
    };

    $.get = {
        title: function(title){
            return title.replace(/\//g, ",").replace(/\s+/, " ").replace(/\s,/, ",");
        },
        link: function(item){
            return "/samples/" + item._id + "/" + item.post.replace(/[\/|.|,|\s+]/g, "-").replace(/(-)+/g, "-");
        }
    }

    $.chunkArray = function(arr, n) {
        var chunk = Math.ceil(arr.length / n);
        var i, j, tmp = [];
        for (i = 0, j = arr.length; i < j; i += chunk) {
            tmp.push(arr.slice(i, i + chunk));
        }
        return tmp;
    }

    $.render = function(items){
        $.items = $.chunkArray(items, 2);
    }

    try {
        if ($store.samples && $.opts.items) $store.samples.set($.opts.items);
        $.alpha = $.opts.alpha_ || $.opts.alpha;
        $.render($.opts.items || $store.samples.get());
    }
    catch(e){
        $.alpha = $.opts.alpha;
        $.render($.opts.items);
    }

</script>

</samples-items>
