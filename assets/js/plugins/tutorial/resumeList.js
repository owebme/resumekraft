(function(app){

    app.define("plugins.tutorial.resumeList");

    app.plugins.tutorial.resumeList = [
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
                            callback: function($control, $target){
                                $control.hide();
                                //$Sections.payment.show();
                                $target.trigger("click");
                            }
                        },
                        cancel: false
                    }
                },
                actions: {
                    click: {
                        elem: "self",
                        callback: function($control, $target){
                            $control.hide();
                        }
                    }
                }
            }
        },
        function(){
            return {
                figure: "square",
                target: ".slider__wrapper .slider__item:first",
                position: "right",
                padding: 10,
                offset: {
                    top: -18
                },
                title: "Карточка резюме",
                text: "Демонстрационная карточка резюме. Перейдем к обзору его элементов, нажмите «Далее»."
            }
        },
        function(){
            return {
                figure: "square",
                target: ".slider__wrapper .slider__item:first .resume__item__header__text",
                position: "right",
                padding: 25,
                offset: {
                    left: -5
                },
                title: "Карточка резюме",
                text: "Фотография, должность, дата последнего обновления, желаемая зарплата."
            }
        },
        function(){
            return {
                figure: "square",
                target: ".slider__wrapper .slider__item:first .resume__item__stat__button",
                position: "right",
                zoom: 1.4,
                offset: {
                    top: 2
                },
                title: "Показать статистику",
                text: "Статистика посещений вашего резюме с детализацией по дням."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".slider__wrapper .slider__item:first .resume__item__control__remove",
                position: "right",
                width:80,
                height:80,
                offset: {
                    top: -30,
                    left: -6
                },
                title: "Удалить резюме",
                text: "Кнопка удаления резюме."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".slider__wrapper .slider__item:first .resume__item__control__menu",
                position: "right",
                width:80,
                height:80,
                offset: {
                    top: -20,
                    left: -8
                },
                title: "Функциональное меню",
                text: "Перейти к редактированию резюме, сохранить резюме в PDF, распечатать, создать копию, удалить резюме."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".slider__wrapper .slider__item:first .resume__item__control__inbox",
                position: "right",
                width:80,
                height:80,
                offset: {
                    top: -18,
                    left: -8
                },
                title: "Входящие обращения",
                text: "Приглашения или просто входящие обращения от ваших потенциальных работодателей."
            }
        },
        function(){
            return {
                figure: "square",
                target: ".slider__wrapper .slider__item:first .resume__item__stat__percentage",
                position: "right",
                padding: 12,
                offset: {
                    left: -5
                },
                title: "Наполненность",
                text: "Чем выше процент тем более привлекательно ваше резюме для работодателя."
            }
        },
        function(){
            return {
                figure: "square",
                target: ".resume__navbar",
                position: "down",
                padding: 15,
                title: "Навигационное меню",
                text: "Пройти тест профориентации, входящие обращения, перейти на «Premium» аккаунт, пополнить баланс, покинуть офис."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".main__button",
                position: "right",
                padding: 10,
                title: "Открыть меню",
                text: "Изменить свой профиль по умолчанию, регистрационные данные, сменить пароль входа, загрузить свою фотографию и т.д."
            }
        },
        function(){
            return {
                activeZone: true,
                figure: "square",
                target: ".slider__wrapper resume-list-item-new",
                position: "right",
                zoom: 1.1,
                title: "Создать новое резюме",
                text: "Нажмите, чтобы перейти к созданию нового резюме.",
                actions: {
                    click: {
                        elem: "self",
                        callback: function($control, $target){
                            $control.hide();
                        }
                    }
                }
            }
        }
    ];

})(app);
