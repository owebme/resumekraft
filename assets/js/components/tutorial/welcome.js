(function($){

    app.define("tutorial.welcome");

    app.tutorial.welcome = [
        function(){
            return {
                figure: "square",
                target: ".profile .tutorial__changeData",
                position: "right",
                padding: 18,
                offset: {
                    top: 2
                },
                title: "Редактирование профиля",
                text: "Заполнить свой профиль, чтобы не вводить основные данные повторно для каждого резюме. Для перехода на следующий шаг, пожалуйста нажмите «Далее»."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".profile .user__photo",
                position: "right",
                zoom: 0.8,
                title: "Фотография",
                text: "Загрузить свою фотографию. Сейчас ваши действия не активны, но после прохождения обзора весь интерфейс будет доступен."
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
                text: "Ваш текущий тариф «Free», его можно сменить на «Premium», также изменить пароль или пополнить баланс."
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
                title: "Ваш текущий баланс",
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
                text: "Демонстрационная карточка резюме. Перейдем к обзору ее элементов, нажмите «Далее».",
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
                title: "Шапка резюме",
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
                text: "Статистика просмотров и посетителей вашего резюме с детализацией по дням."
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
                title: "Удалить",
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
                text: "Перейти к редактированию резюме, сохранить резюме в формате PDF, отправить по почте, распечатать, создать копию, удалить."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".slider__wrapper .slider__item:first .resume__item__inbox",
                position: "right",
                width:80,
                height:80,
                offset: {
                    top: -18,
                    left: -8
                },
                title: "Входящие обращения",
                text: "Приглашения или просто входящие обращения от ваших потенциальных работодателей. Доступно на «Premium» аккаунте."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".slider__wrapper .slider__item:first .resume__item__preview",
                position: "right",
                width:80,
                height:80,
                offset: {
                    top: -18,
                    left: -25
                },
                title: "Быстрый просмотр",
                text: "Показать быстрый просмотр резюме."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".slider__wrapper .slider__item:first .resume__item__likes",
                position: "right",
                width:80,
                height:80,
                offset: {
                    top: -20,
                    left: -28
                },
                title: "Лайки",
                text: "Собирайте лайки на ваши резюме. Всякий кто посмотрить ваше резюме может поставить свой лайк - это могут быть, как работодатели так и ваши коллеги. Доступно на «Premium» аккаунте."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".slider__wrapper .slider__item:first .resume__item__lang",
                position: "right",
                width:80,
                height:80,
                offset: {
                    top: -20,
                    left: -15
                },
                title: "Язык резюме",
                text: "Резюме доступно на двух языках, на русском и английском языке."
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
                title: "Процент заполнения",
                text: "Чем выше процент тем более привлекательно ваше резюме для работодателя.",
                actions: {
                    toggle: function($target, hide){
                        if (hide && !$store.data.get().length){
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
                text: "Пройти тест профориентации, импорт резюме, перейти на «Premium» аккаунт, ваш баланс, покинуть офис."
            }
        },
        function(){
            return {
                figure: "square",
                target: ".resume__navbar .btn-jobs",
                position: "down",
                padding: 10,
                title: "Найти работу",
                text: "Более 330,000 вакансий по России и странам СНГ. Возможность найти лучшую работу для вас. Также сервис доступен на мобильных устройствах."
            }
        },
        function(){
            return {
                figure: "square",
                target: ".resume__navbar .btn-import-resume",
                position: "down",
                padding: 10,
                title: "Импорт резюме",
                text: "Есть своё резюме на сервисе HeadHunter? Отлично, его можно забрать в один клик и продолжить редактирование."
            }
        },
        function(){
            return {
                figure: "square",
                target: ".resume__navbar .btn-jptest",
                position: "down",
                padding: 10,
                title: "JQ-тест 2.0",
                text: "Новый тест на профориентацию, поможет ответить на профессиональные вопросы + получить рекомендации. Прохождение теста абсолютно бесплатно."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".main__button",
                position: "right",
                padding: 2,
                title: "Открыть профиль",
                text: "Вернуться к главному экрану вашего профиля."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".master__launcher",
                position: "up",
                title: "Центр помощи",
                text: "Главный и центральный раздел быстрой помощи, поможет совершить часто используемые операции."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".messenger__launcher__opener",
                position: "left",
                padding: 5,
                title: "Консультант",
                text: "Наши консультанты рады вам помочь и проконсультировать по интересующим вопросам."
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
