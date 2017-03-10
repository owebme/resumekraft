<section-vacancy-mobile class="section jobs">

    <jobs-panel-mobile></jobs-panel-mobile>

    <vacancy-content classname="vacancy" item={ opts.item } utils={ opts.utils } currency={ opts.currency } isPhone={ opts.device.type == "phone" }></vacancy-content>

    <vacancy-panel-mobile item={ opts.item }></vacancy-panel-mobile>

    <vacancy-similary items={ opts.items } utils={ opts.utils } currency={ opts.currency }></vacancy-similary>

    <jobs-footer></jobs-footer>

    <screen-favorites></screen-favorites>

    <ui-share-items if={ opts.device.type == "phone" }></ui-share-items>

    <div class="section__overlay"></div>

</section-vacancy-mobile>
