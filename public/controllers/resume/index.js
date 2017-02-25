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
                handlerResult(req, res, null);
                return;
            }
            var params = {};
            params._id = app.utils.ObjectId(req.params.alias);

            if (mode == "editing") params.accountId = req.accountId;

            app.db.collection('resumes').find(params)
            .toArray(function(err, data){
                if (!err && !app.utils.isEmpty(data)){
                    var resume = data[0];
                }
                if (err){
                    next();
                }
                else if (app.utils.isEmpty(data)){
                    handlerResult(req, res, data);
                }
                else if (mode == "editing" && req.account && req.account.plan == "premium"){
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
                        isMobile: req.device.isMobile,
                        stamp: true,
                        editing: false
                    });
                }
                else if (mode == "view" && resume.plan == "premium" && resume.public){
                    res.render('premiumView', {
                        color: resume.config.color,
                        ip: req.clientIP,
                        post: resume.post,
                        resume: JSON.stringify(resume),
                        editing: false
                    });
                }
                else {
                    handlerResult(req, res, data);
                }
            });
        }
    }

    function handlerResult(req, res, data){
        var result = {
            message: ":(",
            error: {
                back: {
                    url: "/private",
                    title: "Вернуться в кабинет"
                }
            }
        }
        if (mode == "editing" && req.account && req.account.plan != "premium"){
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
