(function(app, $, $dom, EV, _){

    app.define("sections.jobsHome");

    app.sections.jobsHome = {

        init: function(){

            this.el = $dom.body.children("section-jobs");

            if (this.el.length) this.render();
        },

        render: function(){

            var $header = WD.el.find(".jobs__header"),
                $form = $header.find(".jobs__header__search"),
                $tabs = $form.find(".jobs__header__search__tabs");

            $header.addClass("showAnim");

            app.sections.on("beforeMounted", function(){
                WD.el.find(".input-vacancy").replaceWith('<ui-input placeholder="Я ищу..." color="input-white" autosuggest="getSuggestVacancy" size="xl" autosuggestSize="xl">');
                WD.el.find(".input-city").replaceWith('<ui-input placeholder="Где?" color="input-white" autosuggest="getSuggestCity" size="xl" autosuggestSize="xl">');
                WD.el.find(".input-companies").replaceWith('<ui-input placeholder="Название компании" color="input-white" autosuggest="getSuggestCompanies" size="xl" autosuggestSize="xl">');

                $form.on("focus blur", "input", function(e){
                    if (e.type == "focus" || e.type == "focusin"){
                        $(e.target).parent().addClass("focused");
                    }
                    else {
                        $(e.target).parent().removeClass("focused");
                    }
                });

                $tabs.on("click", ".jobs__header__search__tabs__item", function(){
                    var $item = $(this);
                    $item.attr("data-active", true)
                    .siblings()
                    .attr("data-active", false);

                    $form.find(".input-group[data-item='" + $item.attr("data-item") + "']")
                    .attr("data-active", true)
                    .siblings()
                    .attr("data-active", false);
                });
            });
        }
    };

    var WD = app.sections.jobsHome;

})(app, $, app.$dom, app.events, app.utils);
