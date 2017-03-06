<section-employer-mobile class="section jobs">

    <jobs-panel-mobile></jobs-panel-mobile>

    <employer-content classname="employer" isPhone={ opts.device.type == "phone" } item={ opts.item } items={ opts.items }></employer-content>

    <employer-vacancies-mobile items={ opts.items } currency={ opts.currency } utils={ opts.utils }></employer-vacancies-mobile>

    <jobs-footer></jobs-footer>

    <div class="section__overlay"></div>

</section-employer-mobile>
