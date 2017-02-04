module.exports = function(mode){

    return function(req, res, next){

        if (mode == "demo" || mode == "demo-editing"){
            res.render('premium', {
                editing: mode == "demo-editing" ? true : false,
                demo: true
            });
        }
        else {
            if (!app.utils.isObjectId(req.params.alias)){
                handlerResult(res, null, mode);
                return;
            }
            var params = {};
            params._id = app.utils.ObjectId(req.params.alias);

            if (mode == "editing") params.accountId = app.accountId;

            app.db.collection('resumes').find(params)
            .toArray(function(err, data){
                if (!err && app.account.plan == "premium" && !app.utils.isEmpty(data)){
                    // var output = app.swig.renderFile(process.cwd() + app.config.get('path:template:basic'), {
                    //     num: req.body.template,
        			// 	stamp: req.body.stamp,
        			// 	width: options.width,
                    //     content: req.body.content
                    // });
                    // res.render('premium'
                    res.render('premium', {
                        color: data[0].config.color,
                        ip: app.clientIP,
                        resume: JSON.stringify(data[0]),
                        editing: mode == "editing" ? true : false
                    });
                }
                else if (err){
                    next();
                }
                else {
                    handlerResult(res, data, mode);
                }
            });
        }
    }

    function handlerResult(res, data, mode){
        var result = {
            message: ":(",
            error: {
                back: {
                    url: "/private",
                    title: "Вернуться в кабинет"
                }
            }
        }
        if (mode == "editing" && app.account.plan != "premium"){
            result.error = {
                status: "Ваш статус не имеет статус Premium",
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
