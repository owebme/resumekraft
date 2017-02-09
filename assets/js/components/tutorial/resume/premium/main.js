(function($){

    app.define("tutorial.resumePremiumMain");

    app.tutorial.resumePremiumMain = [
        function(){
            return {
                figure: "circle",
                target: ".control__fonts .control__fonts__item--active",
                position: "left",
                padding: 5,
                title: "Изменить шрифт",
                text: "Доступно 5 стилистически разных шрифтов для резюме, каждый из которых имеет свою индивидуальность. Чтобы перейти на следующий шаг нажмите «Далее»."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".control__colors .control__colors__item--active",
                position: "left",
                padding: 10,
                title: "Изменить цвет",
                text: "Доступно 10 основных цветов, все они стильные и яркие, выбор на ваш вкус. Чтобы перейти на следующий шаг нажмите «Далее»."
            }
        },
        function(){
            return {
                figure: "circle",
                target: "button-save",
                position: "left",
                padding: 10,
                title: "Сохранить резюме",
                text: "Закончить редактирование и сохранить резюме. Чтобы перейти на следующий шаг нажмите «Далее»."
            }
        },
        function(){
            return {
                figure: "square",
                target: ".nav .nav__container",
                position: "up",
                padding: 15,
                title: "Навигационная панель",
                text: "Переход по основным секциям вашего резюме. Чтобы перейти на следующий шаг нажмите «Далее»."
            }
        },
        function(){
            return {
                figure: "square",
                target: "section-percentage .percentage__container",
                position: "right",
                width:120,
                offset: {
                    top: -20,
                    left: -30
                },
                title: "Процент заполнения",
                text: "Индикатор процента заполнения вашего резюме, чем он выше, тем более привлекательно вашего резюме для потенциального работодателя. Чтобы перейти на следующий шаг нажмите «Далее»."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".menu__opener",
                position: "right",
                padding: 5,
                title: "Контактные данные и настройки",
                text: "Открыв это меню, вы сможете внести изменения в контактную информацию о себе, написать сопроводительное письмо, и изменить прочие настройки касающиеся вашего резюме. Чтобы перейти к интерфейсу нажмите на кнопку ниже."
            }
        }
    ];

})(window.jQuery || window.Zepto);
