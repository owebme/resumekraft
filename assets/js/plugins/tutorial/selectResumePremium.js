(function(app){

    app.define("plugins.tutorial.selectResumePremium");

    app.plugins.tutorial.selectResumePremium = [
        function(){
            return {
                figure: "square",
                target: ".tutorial-step1",
                actions: {
                    toggle: function($target){
                        $target.parent().toggleClass("tutorial-current")
                    }
                },
                position: "right",
                title: "Lorem ipsum dolor sit amet",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, dolore dolor, reiciendis cupiditate nemo ullam beatae nulla recusandae adipisci fugiat tempora error distinctio et aspernatur a, quam ducimus asperiores sequi."
            }
        },
        function(){
            return {
                figure: "circle",
                target: ".tutorial-step2",
                position: "left",
                title: "Lorem ipsum dolor sit amet",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, dolore dolor, reiciendis cupiditate nemo ullam beatae nulla recusandae adipisci fugiat tempora error distinctio et aspernatur a, quam ducimus asperiores sequi."
            }
        },
        function(){
            return {
                figure: "square",
                target: ".tutorial-step3",
                position: "up",
                title: "Lorem ipsum dolor sit amet",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, dolore dolor, reiciendis cupiditate nemo ullam beatae nulla recusandae adipisci fugiat tempora error distinctio et aspernatur a, quam ducimus asperiores sequi."
            }
        }
    ];

})(app);
