(function(){
    $store.data = _.extend(new Baobab([]),
        {
            onPhotoUpload: function(id, callback){
                $Sections.photoUpload.show(function(image){
                    app.request("setResumePhoto", {
                        id: id,
                        image: image
                    }, {
                        loader: false
                    })
                    .then(function(data){
                        if (data && data.image){
                            if (_.isFunction(callback)){
                                callback(data.image);
                            }
                        }
                    });
                });
            },
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
            onPreview: function(item){
                var callback = null;
                $Sections.resume.preview.show({
                    plan: item.plan,
                    data: item,
                    template: item.template
                })
                .then(function(){
                    callback();
                });
                return new Promise(function(resolve, reject){
                    callback = resolve;
                });
            },
            onStat: function(id, item){
                $Sections.resume.stat.show(id, item);
            },
            onSendMail: function(id){
                $Sections.resume.sendmail.show(id);
            },
            onGetPdf: function(item){
                $Sections.progress.show(function(){
                    var post = item.post,
                        num = item.template,
                        $template = $$('<div class="resume__preview resume__preview--shadow">').appendTo(app.$dom.body);

                    $i18n.lang(item.lang);
                    moment.locale(item.lang);

                    window.$resume = window.$resume || $store.resume;
                    $store.resume.set(item);

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
            },
            onPublic: function(id, value, callback){
                app.request("setResumePublic", {
                    id: id,
                    public: value
                })
                .then(function(){
                    $.select({"_id": id}, "public").set(value);
                    if (_.isFunction(callback)){
                        callback();
                    }
                });
            },
            getItemsMenu: function(){
                return _.map($.get(), function(item){
                    return {
                        _id: item._id,
                        title: item.post
                    }
                });
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
                        $.onGetPdf(item);
                    }
                },
                {
                    title: "Создать копию",
                    callback: function(id){
                        var resume = $.select({"_id": id}).deepClone();

                        if ($account.get("plan") == "premium"){
                            $Alert.show({
                                title: "В каком формате создать копию?",
                                subtitle: "Выберите формат резюме",
                                success: {
                                    title: "Premium",
                                    callback: function(){
                                        copyResume(resume, "premium");
                                    }
                                },
                                cancel: {
                                    title: "Free",
                                    callback: function(){
                                        copyResume(resume, "free");
                                    }
                                }
                            })
                        }
                        else {
                            copyResume(resume, resume.plan);
                        }
                        function copyResume(resume, plan){
                            resume.plan = plan;

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
