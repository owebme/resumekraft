module.exports = function(mode){

    return function(req, res, next){

        if (mode == "demo" || mode == "demo-editing"){
            res.render(mode == "demo-editing" ? 'premium' : 'premiumView', {
                editing: mode == "demo-editing" ? true : false,
                demo: true
            });
        }
        else {
            if (!app.utils.isObjectId(req.params.alias)){
                handlerResult(res, null);
                return;
            }
            var params = {};
            params._id = app.utils.ObjectId(req.params.alias);

            if (mode == "editing") params.accountId = app.accountId;

            app.db.collection('resumes').find(params)
            .toArray(function(err, data){
                if (!err && !app.utils.isEmpty(data)){
                    var resume = data[0];
                }
                if (err){
                    next();
                }
                else if (app.utils.isEmpty(data)){
                    handlerResult(res, data);
                }
                else if (mode == "editing" && app.account && app.account.plan == "premium"){
                    res.render('premium', {
                        color: resume.config.color,
                        resume: JSON.stringify(resume),
                        editing: true
                    });
                }
                else if (mode == "view" && resume.plan == "free" && resume.public){
                    res.render('resumeView', {
                        post: resume.post,
                        resume: JSON.stringify(resume),
                        num: resume.template,
                        isMobile: app.device.isMobile,
                        stamp: true,
                        editing: false
                    });
                }
                else if (mode == "view" && resume.plan == "premium" && resume.public){
                    res.render('premiumView', {
                        color: resume.config.color,
                        ip: app.clientIP,
                        post: resume.post,
                        resume: JSON.stringify(resume),
                        editing: false
                    });
                }
                else {
                    handlerResult(res, data);
                }
            });
        }
    }

    function handlerResult(res, data){
        var result = {
            message: ":(",
            error: {
                back: {
                    url: "/private",
                    title: "Вернуться в кабинет"
                }
            }
        }
        if (mode == "editing" && app.account && app.account.plan != "premium"){
            result.error = {
                status: "Для редактирования резюме требуется <span class='blue'>Premium</span> аккаунт",
                text: "Возможно действие тарифного плана истекло.",
                back: {
                    url: "/private?changePlan=premium",
                    title: "Сменить тариф на Premium"
                }
            }
        }
        else if (mode != "editing" || !data || app.utils.isEmpty(data)){
            result.error.status = "Резюме не найдено";
            result.error.text = "Проверьте адрес в адресной строке браузера.";
        }
        res.render('error', result);
    }
}
