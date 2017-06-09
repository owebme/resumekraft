<global-footer>

    <div class="container">
        <div class="row">
            <div class="col-xs-24">
                <div class="breadcrumbs">
                    <a href="/" class="breadcrumbs__home">
                        <span class="breadcrumbs__home__label"></span>
                    </a>
                    <ol class="breadcrumbs__path">
                        <virtual each={ item in getPath() }>
                            <a if={ item.link } href="{ item.link }" class="breadcrumbs__path__item">{ item.title }</a>
                            <li if={ !item.link } class="breadcrumbs__path__item">{ item.title }</ii>
                        </virtual>
                    </ol>
                </div>
            </div>
        </div>
        <global-menu></global-menu>
        <div class="copyright row">
            <div class="col-xs-12">
                <div class="copyright__text">&copy; ResumeNext, 2017 г. Все права защищены.</div>
            </div>
            <div class="col-xs-12">
                <div class="country" data-item="ru">Россия</div>
            </div>
        </div>
    </div>

<script>

    var $ = this;

    $.path = [];

    $.getPath = function(){
        $.opts.section.match(/([a-zа-яё\s\.,]+(\[.+\])?)/gi).forEach(function(item){
            $.path.push({
                title: item.match(/\[(.+)\]/) && item.match(/([a-zа-яё\s\.,]+)\[.+\]/i)[1] || item,
                link: item.match(/\[(.+)\]/) && item.match(/\[(.+)\]/)[1] || false
            });
        });

        return $.path;
    };

</script>

</global-footer>
