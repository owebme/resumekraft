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
            onCreate: function(lang){
                $Sections.resume.select.show({
                    plan: app.metrika.get("resume.select.default") || "free"
                })
                .then(function(data){
                    if (data.plan == "free"){
                        $Sections.resume.edit.show({
                            lang: lang || "ru",
                            template: data.template
                        });
                    }
                    else if (data.plan == "premium"){
                        if ($account.get("plan") != "premium"){
                            $Sections.plan.show("premium");
                        }
                        else {
                            var resume = $store.resume.prepare.premium(
                                $resume.default.resume({
                                    ACCOUNT_ID: $account.get("_id"),
                                    plan: "premium",
                                    lang: lang || "ru",
                                    commons: $account.get("commons")
                                })
                            );
                            app.request("addResume", {
                                data: resume
                            }, {
                                loader: false
                            })
                            .then(function(data){
                                if (data.id){
                                    resume._id = data.id;
                                    $store.data.push(resume);
                                    $store.data.onEdit(data.id);
                                }
                            })
                        }
                    }
                })
            },
            onEdit: function(id){
                var item = $store.data.get({"_id": id});
                if (item.plan == "premium"){
                    if ($account.get("plan") != "premium"){
                        $Sections.plan.show("premium");
                    }
                    else {
                        $Loader.show({
                            color: item.config && item.config.color
                        })
                        .then(function(){
                            History.pushState(null, null, '/private');
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
                if (item.plan == "free"){
                    var callback = null;
                    $Sections.resume.preview.show({
                        data: item,
                        template: item.template
                    })
                    .then(function(){
                        callback();
                    });
                }
                else {
                    app.utils.opener('/resume/' + item._id);
                }
                return new Promise(function(resolve, reject){
                    callback = resolve;
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
                                $Sections.resume.list.update();
                            });
                        }
                    }
                });
            },
            onPrint: function(id){
                app.utils.opener('/resume/' + id + '?print=true');
            },
            onStat: function(id, item){
                $Sections.resume.stat.show(id, item);
            },
            onSendMail: function(id){
                $Sections.resume.sendmail.show(id);
            },
            onGetPdf: function(item, options){
                var options = options || {};
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
                        app.request('addResumePdf', {
                            id: item._id,
                            template: item.template,
                            stamp: $account.get("plan") == "premium" ? false : true,
                            content: $template.html()
                        }, {
                            loader: false
                        })
                        .then(function(data){
                            if (data && data.pdf){

                                template.unmount();
                                moment.locale("ru");

                                if (options.skipGetFile){
                                    if (_.isFunction(options.callback)){
                                        $Sections.progress.hide(function(){
                                            options.callback();
                                        });
                                    }
                                    return;
                                }

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
                        title: item.post || "Новое резюме"
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
                        if (!resume) return;

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
                            if (resume.plan == "free" && plan == "premium"){
                                resume = $store.resume.prepare.premium(resume);
                                resume.percent = $store.resume.percentage.calc("premium", resume);
                            }
                            else if (resume.plan == "premium" && plan == "free"){
                                resume.config.color = "#0084ff";
                                resume.percent = $store.resume.percentage.calc("free", resume);
                            }
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
                    callback: function(id){
                        $.onPrint(id);
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
