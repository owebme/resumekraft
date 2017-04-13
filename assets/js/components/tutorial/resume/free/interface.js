(function(){

    app.define("tutorial.resumeFree");

    app.tutorial.resumeFree = [
        function(){
            return {
                figure: "square",
                target: "resume-control-buttons",
                position: "left",
                offset: {
                    top: -22
                },
                zoom: 0.96,
                title: "Элементы управления",
                text: "Предпросмотр резюме, загрузить фотографию, поменять дизайн резюме, распечатать, сохранить резюме в PDF, изменить язык резюме на английский."
            }
        },
        function(){
            return {
                figure: "square",
                target: "resume-control-step",
                position: "left",
                width:80,
                offset: {
                    left: -20
                },
                zoom: 1.1,
                activeZone: true,
                title: "Навигация между секциями",
                text: "Переход между основными секциями: общие данные о вас, образовании, дополнительные курсы, владение языками, опыт работы, ваши ключевые навыки, информация о себе и ваших качествах."
            }
        },
        function(){
            return {
                figure: "square",
                target: "resume-control-percentage .percentage__container",
                position: "right",
                width:120,
                offset: {
                    top: -20,
                    left: -30
                },
                title: "Процент заполнения",
                text: "Индикатор наполнения вашего резюме, чем он выше, тем более привлекательней ваше резюме для потенциального работодателя."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".oScreen__section__buttons .button__close",
                position: "left",
                width:40,
                height:40,
                title: "Закрыть резюме",
                text: "Завершить редактирование резюме. В процессе работы, ваше резюме периодически будет совершать автосохранение."
            }
        }
    ];

})();
