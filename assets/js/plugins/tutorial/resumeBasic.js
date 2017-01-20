(function(){

    app.define("plugins.tutorial.resumeBasic");

    app.plugins.tutorial.resumeBasic = [
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
                text: "Предпросмотр резюме, загрузить свою фотографию, выбрать шаблон резюме, распечатать, сохранить в PDF, настройки резюме (опубликовать резюме, включить сбор статистики, выбор языка и т.д.)"
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
                title: "Переключение секций",
                text: "Переход между основными секциями: общие данные, образование, владение языками, карьера, текст о себе."
            }
        },
        function(){
            return {
                figure: "circle",
                target: "share-button",
                position: "left",
                title: "Поделиться резюме",
                text: "Поделиться свои резюме в социальных сетях: Facebook, ВКонтакте, Twitter, Одноклаcсниках."
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
                text: "Индикатор процента заполнения вашего резюме, чем он выше, тем более привлекательно вашего резюме для потенциального работодателя."
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
                text: "Завершить редактирование резюме. Ваше резюме периодически будет проходить процедуру автосохранения, также автосохранение сработает в момент его закрытия."
            }
        }
    ];

})();
