<section-home id="home">

    <global-nav section="home" user={ opts.user }></global-nav>

    <div id="content">

        <home-sticky-nav></home-sticky-nav>

        <home-hero></home-hero>

        <home-professions></home-professions>

        <home-promo utils={ opts.utils }></home-promo>

        <home-video></home-video>

        <section-main-blocks counter={ opts.vacancyCounter } utils={ opts.utils }></section-main-blocks>

        <section-plans></section-plans>

        <section-functions></section-functions>

        <!-- <section-writing></section-writing> -->

        <!-- <home-quotes></home-quotes> -->

        <section-premium-account></section-premium-account>

        <section-resume-medium></section-resume-medium>

        <home-employers counter={ opts.vacancyCounter } utils={ opts.utils }></home-employers>

    </div>

    <global-footer section="Главная"></global-footer>

    <section-player></section-player>

</section-home>
