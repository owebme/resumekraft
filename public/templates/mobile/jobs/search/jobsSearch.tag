<section-jobs-search-mobile class="section jobs" data-list={ opts.modeView }>

    <jobs-search-panel-mobile></jobs-search-panel-mobile>

    <jobs-search-content items={ opts.items } utils={ opts.utils } currency={ opts.currency }></jobs-search-content>

    <jobs-search-pages page={ opts.page } pages={ opts.pages } utils={ opts.utils }></jobs-search-pages>

    <jobs-footer></jobs-footer>

    <screen-search-filter></screen-search-filter>

    <screen-vacancy></screen-vacancy>

    <screen-employer></screen-employer>

    <screen-favorites></screen-favorites>

    <ui-share-items if={ opts.device.type == "phone" }></ui-share-items>

    <jobs-search-help-swipeOpenFilters></jobs-search-help-swipeOpenFilters>

    <div class="section__overlay"></div>

</section-jobs-search-mobile>
