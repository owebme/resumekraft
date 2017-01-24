(function($){

    app.define("plugins.tutorial.welcome");

    app.plugins.tutorial.welcome = [
        function(){
            return {
                figure: "square",
                target: ".profile .tutorial__changeData",
                position: "right",
                padding: 18,
                offset: {
                    top: 2
                },
                title: "Заполнить свой профиль",
                text: "Ввести свои основные данные, чтобы не вводить их повторно для каждого резюме. Чтобы перейти на следующий шаг нажмите «Далее»."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".profile .profile__photo__image",
                position: "right",
                zoom: 0.8,
                title: "Фотография",
                text: "Загрузить свою фотографию. Сейчас ваши действия не активны, но после прохождения обзора весь интерфейс в вашем распоряжении."
            }
        },
        function(){
            return {
                figure: "square",
                target: ".profile .profile__column__right",
                position: "left",
                offset: {
                    top: 20,
                    left: -40
                },
                title: "Тариф",
                text: "Ваш текущий тариф. Сменить пароль и тариф на «Premium»."
            }
        },
        function(){
            return {
                figure: "square",
                target: ".profile .tutorial__reflink",
                position: "right",
                width: 380,
                padding: 18,
                offset: {
                    top: 8
                },
                title: "Реферальная программа",
                text: "Получить на свой счет 369 руб., приведя друга по реферальной ссылке."
            }
        },        
        function(){
            return {
                figure: "square",
                target: ".profile .tutorial__balance",
                position: "left",
                width: 300,
                padding: 30,
                offset: {
                    top: 5,
                    left: 74
                },
                title: "Пополнить баланс",
                text: "Сейчас доступны скидочные программы при оплате от 3 месяцев."
            }
        },
        function(){
            return {
                actions: {
                    callback: function($tutorial, $target, arrow){
                        $Sections.profile.section.hide();
                        $afterlag.s(function(){
                            $Sections.resume.list.start(function(){
                                $tutorial.nextStep();
                            });
                            $Sections.resume.list.show();
                        });
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
                text: "Демонстрационная карточка резюме. Перейдем к обзору его элементов, нажмите «Далее».",
                actions: {
                    callback: function($tutorial, $target){
                        $target.find(".resume__item").attr("data-blank", false);
                    }
                }
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
                text: "Чем выше процент тем более привлекательно ваше резюме для работодателя.",
                actions: {
                    toggle: function($target, hide){
                        if (hide){
                            $(".slider__wrapper .slider__item:first .resume__item")
                            .attr("data-blank", true);
                        }
                    }
                }
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
                        callback: function($tutorial, $target){
                            $tutorial.hide();
                        }
                    }
                },
                nav: {
                    buttons: {
                        success: false
                    }
                }
            }
        }
    ];

})(window.jQuery || window.Zepto);
