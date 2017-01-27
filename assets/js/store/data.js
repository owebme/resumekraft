(function(){
    $store.data = _.extend(new Baobab([]),
        {
            onEdit: function(id){
                $Sections.resume.edit.show({
                    id: id
                });
            },
            onPreview: function(id){

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
                    title: "Предпросмотр",
                    callback: function(id){
                        $.onPreview(id);
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

                            $resume.set(item);

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
                    callback: function(){
                        var resume = $store.data.select({"_id": $.opts.item._id}).deepClone();

                        app.request("addResume", {
                            data: resume
                        })
                        .then(function(data){
                            if (data && data.id){
                                resume._id = data.id;
                                $store.data.push(resume);
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
                    callback: function(){
                        $.onRemove();
                    }
                }
            ]
        }
    );

    var $ = $store.data;

})();
