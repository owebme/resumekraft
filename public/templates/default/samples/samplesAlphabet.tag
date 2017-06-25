<samples-alphabet class="samples__nav__items">

    <a onClick={ open } href="/samples/alpha/{ item }" each={ item, i in alphabet } no-reorder class="samples__nav__item waves-light" data-ripple data-active={ item == parent.alpha }>{ item }</a>

<script>

    var $ = this;

    $.alpha = $.opts.alpha;

    $.alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х'];

    $.open = function(e){
        e.preventDefault();
        $.alpha = this.item;
        $Router.set(e.currentTarget.getAttribute("href"), "Образцы резюме на букву «" + $.alpha + "»");
    };

    $.clear = function(){
        $.update({
            alpha: null
        })
    };

</script>

</samples-alphabet>
