(function(){

    app.define("tutorial.balanceEmpty");

    app.tutorial.balanceEmpty = [
        function(){
            return {
                activeZone: true,
                figure: "square",
                target: ".resume__navbar .btn[data-item='payment']",
                position: "left",
                padding: 15,
                title: "Ваш баланc на нуле",
                text: "Перейти для пополнения баланса",
                nav: {
                    steps: false,
                    buttons: {
                        success: {
                            title: 'Пополнить',
                            size: 'l2',
                            callback: function($tutorial, $target){
                                $tutorial.hide();
                                $Sections.payment.show();
                            }
                        },
                        cancel: false
                    }
                },
                actions: {
                    click: {
                        elem: "self",
                        callback: function($tutorial, $target){
                            $tutorial.hide();
                        }
                    }
                }
            }
        }
    ];

})();
