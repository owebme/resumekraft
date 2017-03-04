<section-jobs-search-mobile class="section jobs" data-list={ opts.modeView }>

    <jobs-search-panel-mobile section={ opts.section }></jobs-search-panel-mobile>

    <jobs-search-content items={ opts.items }></jobs-search-content>

    <jobs-search-pages page={ opts.page } pages={ opts.pages }></jobs-search-pages>

    <jobs-search-filter-screen></jobs-search-filter-screen>

    <div class="jobs__help">
        <div class="jobs__help__content">
            <div class="jobs__help__image" data-image="swipeLeft"></div>
            <div class="jobs__help__text fontSize-20">Для быстрого доступа к параметрам поиска свайпните список влево.</div>
            <div class="btn-default btn-l btn-white">Понятно</div>
        </div>
    </div>

    <div class="section__overlay"></div>

</section-jobs-search-mobile>
