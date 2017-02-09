(function(){

    riot.compile(function(){
        if (!window.resume) return;

        $store.resume.set(resume);
        window.$resume = $store.resume;

        $i18n.lang(resume.lang);
        moment.locale(resume.lang);

        var $template = riot.mount(".template-resume", "resume-basic-template" + resume.template)[0];

        $template.one("updated", function(){
    		var doc = document.getElementById("wrapper");
            doc.style.opacity = "1";
			doc.style[Modernizr.prefixed('transform')] = "translateY(0)";
        });
    });

})();
