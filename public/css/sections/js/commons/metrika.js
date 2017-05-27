(function(){

    app.define("metrics.public");

    app.metrics.public = {
        ver: "1.0",
        plan: {
            name: "free",
            period: "month1"
        },
        notify: {
            oauth: false
        },
        views: {
            home: 0,
            premium: 0,
            jptest: 0,
            blog: 0
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
