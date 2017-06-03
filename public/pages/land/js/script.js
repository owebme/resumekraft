"use strict";

(function(){
    var onLoadImage = function(url, callback) {
        var img = new Image(),
            loaded = false;

        function loadHandler() {
            if (loaded) return;
            loaded = true;
            if (callback) callback(true);
        }
        function errHandler() {
            if (callback) callback(false);
        }
        img.src = url;
        img.onload = loadHandler;
        img.onerror = errHandler;
        if (img.complete) loadHandler();
    },
    getBackgroundImage = function(p) {
        var o = p.currentStyle;
        if (!o) {
            o = window.getComputedStyle(p, false)
        }
        if (o.backgroundImage.indexOf("url(") === 0) {
            return o.backgroundImage.slice(4, -1).replace(/"/g, "")
        }
        return null
    };

    if (/firefox/i.test(navigator.userAgent)){
        document.querySelector(".cover__title").style.color = "#e6e6e6";
        document.querySelector(".cover__title").style.background = "none";
    }

    document.addEventListener("readystatechange", function(){
        if (document.readyState === "complete"){
            onLoadImage(getBackgroundImage(document.querySelector(".cover__bg")), function(){
                var cover = document.querySelector(".cover");
                cover.setAttribute("data-progressive", false);
                onLoadImage(getBackgroundImage(cover), function(){
                    document.querySelector("body").setAttribute("data-ready", true);
                });
            });
        }
    }, false);

})();
