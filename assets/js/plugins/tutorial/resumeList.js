(function(app){

    app.define("plugins.tutorial.resumeList");

    app.plugins.tutorial.resumeList = [
        function(){
            return {
                figure: "circle",
                target: ".resume__item__control__remove",
                position: "right",
                width:40,
                height:40,
                title: "Элементы управления",
                text: "Предпросмотр резюме, загрузить свою фотографию, выбрать шаблон резюме, распечатать, сохранить в PDF, настройки резюме (опубликовать резюме, включить сбор статистики, выбор языка и т.д.)"
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".resume__item__control__menu",
                position: "right",
                width:40,
                height:40,
                title: "Переключение секций",
                text: "Переход между основными секциями: общие данные, образование, владение языками, карьера, текст о себе."
            }
        }
    ];

})(app);
