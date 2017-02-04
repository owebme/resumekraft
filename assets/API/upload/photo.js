var fs = require('fs');

module.exports = function(){

	return function(req, res, next){

        if (req.body && req.body.image){

			var base64Data = req.body.image.replace(/^data:image\/jpeg;base64,/,""),
                pathImage = app.config.get('path:photo') + (req.body.profile ? app.accountId : app.moment().format('x')) + '.jpg';

            fs.writeFile(process.cwd() + pathImage, base64Data, 'base64', function(err){
				if (!err){
                    if (req.body.profile){
                        app.db.collection('accounts').update({
            				"_id": app.accountId
            			},{
            				$set: {
                                "photo": pathImage
                            },
                            $push: {
                                "history.events": {
                                    name: "profileUploadPhoto",
                                    device: app.device,
                                    date: app.moment().format()
                                }
                            }
            			});
                    }
                    res.statusCode = 200;
                    res.send({
                        image: pathImage
                    });
                }
                else {
                    res.statusCode = 404;
                    res.send(err);
                }
	        })
		}
    }
}
