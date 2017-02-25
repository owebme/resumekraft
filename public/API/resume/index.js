module.exports = function(url){

	var route = app.express.Router();

	route.post('/like', function(req, res) {
        if (req.body && app.utils.isObjectId(req.body.id)){

            app.db.collection('resumes').update({
                "_id": app.utils.ObjectId(req.body.id)
            },{
                $addToSet: {
                    likes: req.clientIP
                }
            },
            function(err, data){
                app.errHandler(res, err, data);
            });
        }
        else {
            app.errHandler(res);
        }
	});

	app.use(url, route);
};
