(function(){
    $store.data = _.extend(new Baobab([]),
        {
            onRemove: function(id){
                $Alert.show({
                    title: "Удалить резюме?",
                    subtitle: "Вы уверены?",
                    success: {
                        callback: function(){
                            app.request('delResume', {
                                id: id
                            })
                            .then(function(){
                                $.select({'_id': id}).unset();

                                if (!app.device.isPhone && $Sections.resume.list.slider.index > 0){
                                    $Sections.resume.list.slider.prevSlides();
                                }
                                $Sections.resume.list.update();
                            });
                        }
                    }
                });
            },
            onEdit: function(id){
                var item = $store.data.get({"_id": id});
                if (item.plan == "premium"){
                    if ($account.get("plan") != "premium"){
                        $Sections.plan.show("premium");
                    }
                    else {
                        $Loader.show({
                            color: item.config.color
                        })
                        .then(function(){
                            location.replace('/private/resume/' + id);
                        });
                    }
                }
                else {
                    $Sections.resume.edit.show({
                        id: id
                    });
                }
            },
            onStat: function(id, item){
                $Sections.resume.stat.show(id, item);
            },
            onSendMail: function(id){
                $Sections.resume.sendmail.show(id);
            },
            dropMenu: [
                {
                    title: "Редактировать",
                    callback: function(id){
                        $.onEdit(id);
                    }
                },
                {
                    hidden: !app.device.isPhone,
                    title: "Статистика",
                    callback: function(id, item){
                        $.onStat(id, item);
                    }
                },
                {
                    title: "Отправить на почту",
                    callback: function(id){
                        $.onSendMail(id);
                    }
                },
                {
                    title: "Сохранить в PDF",
                    callback: function(id, item){
                        $Sections.progress.show(function(){
                            var post = item.post,
                                num = item.template,
                                $template = $$('<div class="resume__preview resume__preview--shadow">').appendTo(app.$dom.body);

                            $.set(item);

                            var template = riot.mount($template[0], "resume-basic-template" + num)[0];

                            template.one("updated", function(){
                                app.request('addConvertPdf', {
                                    id: item._id,
                                    template: item.template,
                                    stamp: item.config.pdf.logotype,
                                    content: $template.html()
                                }, {
                                    loader: false
                                })
                                .then(function(data){
                                    if (data && data.pdf){

                                        template.unmount();

                                        var oReq = new XMLHttpRequest();
                                        oReq.open("GET", data.pdf, true);
                                        oReq.responseType = "arraybuffer";
                                        oReq.onload = function() {

                                            var response = this.response;

                                            $Sections.progress.hide(function(){
                                                var file = new Blob([response], {type: "application/pdf"});
                                                saveAs(file, post ? post : "MyResume.pdf");
                                            });
                                        };
                                        oReq.send();
                                    }
                                });
                            });

                            app.metrika.set("resume.create.control.pdf", true);
                        });
                    }
                },
                {
                    title: "Создать копию",
                    callback: function(id){
                        var resume = $.select({"_id": id}).deepClone();

                        app.request("addResume", {
                            data: resume
                        })
                        .then(function(data){
                            if (data && data.id){
                                resume._id = data.id;
                                $.push(resume);
                                $Sections.resume.list.update();
                            }
                        })
                    }
                },
                {
                    hidden: app.device.isMobile,
                    title: "Распечатать",
                    callback: function(){
                        alert("Распечатать");
                    }
                },
                {
                    title: "Удалить",
                    callback: function(id){
                        $.onRemove(id);
                    }
                }
            ]
        }
    );

    var $ = $store.data;

})();
