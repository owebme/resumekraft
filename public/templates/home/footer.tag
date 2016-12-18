<home-footer class="home__footer screen rellax" data-rellax-speed="3.87">

    <div class="container">
        <div if={ !parent.opts.device.mobile() } class="row">
            <div each={ item, i in ["1", "5", "3", "6", "2", "4"] } class="home__footer__grid__item col-md-4">
                <img class="home__footer__grid__image" src="/assets/images/home/client{ item }.png">
            </div>
        </div>
        <div if={ parent.opts.device.mobile() } class="row">
            <div each={ item, i in ["3", "6", "1", "5"] } class="home__footer__grid__item col-sm-6">
                <img class="home__footer__grid__image" src="/assets/images/home/client{ item }.png">
            </div>
        </div>
    </div>

</home-footer>
