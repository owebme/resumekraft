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
                        device: req.device.type,
                        resume: JSON.stringify(resume),
                        editing: true
                    });
                }
                else if (mode == "view" && (resume.plan == "free" || req.query.print) && resume.public){
                    var template = resume.template;
                    if (req.query.print){
                        template = "7";
                        resume.template = template;
                    }
                    else {
                        addHits(resume._id, req);
                    }
                    res.render('resumeView', {
                        post: resume.post,
                        resume: JSON.stringify(resume),
                        num: template,
                        device: req.device.type,
                        isMobile: req.device.isMobile,
                        print: req.query.print ? true : false,
                        stamp: req.query.print ? false : true,
                        editing: false
                    });
                }
                else if (mode == "view" && resume.plan == "premium" && resume.public && !req.query.print){
                    addHits(resume._id, req);
                    res.render('premiumView', {
                        color: resume.config.color,
                        ip: req.clientIP,
                        post: resume.post,
                        device: req.device.type,
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

    function addHits(id, req){
        app.db.collection('resumesVisits').update({
            "_id": app.utils.ObjectId(id)
        },{
            $push: {
                visits: {
                    ua: req.headers['user-agent'],
                    ip: req.clientIP,
                    device: req.device.type,
                    date: new Date()
                }
            }
        }, {
            upsert: true
        });
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
            res.status(403);
        }
        else if (mode != "editing" || !data || app.utils.isEmpty(data)){
            result.error.status = "Резюме не найдено";
            result.error.text = "Проверьте адрес в адресной строке браузера.";
            res.status(404);
        }
        res.render('error', result);
    }
}
