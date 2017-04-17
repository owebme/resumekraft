(function(){

    app.define("metrics.private");

    app.metrics.private = {
        ver: "1.0",
        offers: {
            welcome: {
                show: false,
                hide: false,
                tutorial: {
                    show: false,
                    hide: false,
                    success: false
                },
                success: false
            },
            stat: {
                show: false,
                hide: false,
                success: false
            },
            inbox: {
                show: false,
                hide: false,
                success: false
            },
            plan: {
                show: false,
                hide: false,
                success: false
            },
            votes: {
                show: false,
                hide: false,
                score: null,
                success: false
            },
            popup: {
                premium: {
                    show: false,
                    hide: false,
                    success: false
                },
                jptest: {
                    show: false,
                    hide: false,
                    success: false
                }
            }
        },
        overview: {
            premium: {
                show: false,
                hide: false,
                success: false
            }
        },
        jptest: {
            show: false,
            hide: false,
            start: false,
            score: null,
            passed: 0
        },
        resume: {
            buttonNew: false,
            select: {
                show: false,
                hide: false,
                template: null,
                success: false
            },
            create: {
                show: false,
                hide: false,
                control: {
                    preview: false,
                    photo: false,
                    design: false,
                    print: false,
                    pdf: false,
                    lang: false
                },
                tutorial: {
                    show: false,
                    hide: false,
                    success: false
                },
                success: false
            }
        },
        plan: {
            show: false,
            hide: false,
            success: false
        },
        payment: {
            show: false,
            hide: false,
            method: null,
            period: null,
            success: false
        }
    };

})();
