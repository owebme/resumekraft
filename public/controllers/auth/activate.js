module.exports = function() {

	return function(req, res, next){
        if (!req.params.id || req.params.id && !app.utils.isObjectId(req.params.id) || !req.params.hash){
            next();
        }
        else {
            var id = req.params.id,
                hash = req.params.hash;

            app.db.collection('accounts').findOne({
				"_id": app.utils.ObjectId(id)
			},
            function(err, data){
                if (!err && data && data.activate.hash == app.utils.md5(data.login + ":" + app.config.get("session:secret"))){
                    app.db.collection('accounts').update({
                        "_id": app.utils.ObjectId(id)
                    },{
    					$set: {
    						"activate.active": true
    					},
    					$push: {
    						"history.events": {
    		                    name: "profileLoginActivate",
    		                    device: req.device.type,
    		                    date: app.moment().format()
    		            	}
    					}
    				},
    				function(err, data){
    					res.redirect('/?signin#activate');
    				});
                }
                else {
                    next();
                }
            });
        }
    }
}
