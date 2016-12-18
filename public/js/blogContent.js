(function(app, $, $dom, EV, _){

    app.define("sections.blogContent");

    app.sections.blogContent = {

        init: function(){

            this.el = $dom.body.find("blog-content");

            if (this.el) this.render();
        },

        render: function(){
            var delta = 0,
                $buttons = WD.el.find(".blog__social__panel[data-pos='left']"),
                show = false;

            $dom.window.on("scroll", function(){
                if (this.scrollY > app.sizes.height && this.scrollY < delta && !show){
                    show = true;
                    $buttons.attr("data-active", "true");
                }
                else if ((this.scrollY < app.sizes.height || this.scrollY > delta) && show){
                    show = false;
                    $buttons.attr("data-active", "false");
                }
            });

            WD.el.find(".blog__social__panel").on("click", ".blog__social__panel__item", function(e){
                shareSocial(e.currentTarget.getAttribute("data-share"));
            });

            var shareSocial = function(e, t, n) {
                var r = "";
                n || (n = "ResumeKraft - сервис создания уникальных резюме с классным дизайном!");
                var o = window.location.href;
                t && (o += t), "fb" == e ? r = "https://www.facebook.com/sharer/sharer.php?u=" + o + "?utm_source=social_fb" : "vk" == e ? r = "http://vk.com/share.php?url=" + o + "?utm_source=social_vk" : "mail" == e ? r = "http://connect.mail.ru/share?share_url=" + o + "?utm_source=social_mail" : "dk" == e ? r = "http://www.ok.ru/dk?st.cmd=addShare&st.s=1&st._surl=" + o + "?utm_source=social_dk&st.comments=" + encodeURIComponent(n) : "tw" == e && (r = "https://twitter.com/intent/tweet?original_referer=" + o + "&text=" + encodeURIComponent(n) + "&url=" + o + "?utm_source=social_tw"), window.open(r, "displayWindow", "width=520,height=300,left=350,top=170,status=no,toolbar=no,menubar=no")
            };

            WD.el.find(".blog__content").find("p, h1, h2, h3, h4, strong").each(function(){
                if (this.innerText.length < 5){
                    $(this).remove();
                }
                this.removeAttribute("style");
            });

            delta = $dom.document.height() - app.sizes.height * 2;
        }
    };

    var WD = app.sections.blogContent;

})(app, $, app.$dom, app.events, app.utils);
