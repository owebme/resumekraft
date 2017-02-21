(function(){

    app.define("metrics.public");

    app.metrics.public = {
        ver: "1.0",
        plan: {
            name: "free",
            period: "month"
        },
        tooltips: {
            regSocial: false
        },
        offers: {
            popup: {
                blog: {
                    subscribe: {
                        show: false,
                        hide: false,
                        success: false,
                        email: false
                    }
                }
            }
        }
    };

})();
