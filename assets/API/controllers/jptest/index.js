module.exports = function(){

	var API = {};

	API.votes = function(req, callback){
        if (req.body && req.body.score){
            app.db.collection('jptest').insert({
                score: req.body.score,
                site: req.body.site,
                device: req.device && req.device.type,
                ua: req.headers['user-agent'],
                ip: req.clientIP
            },
            function(err, data){
                callback(err, data);
            });
        }
        else {
            callback();
        }
    };

    return API;
};
