module.exports = function(){

	var API = {};

    var handlerRequest = function(url, callback){
        app.req({
            url: url,
            headers: {
                'User-Agent': 'request'
            },
            timeout: 3000,
        }, function (err, response, data) {
            callback(JSON.parse(data));
        })
	};

    API.search = function(url, callback){
        handlerRequest(url, function(data){
            callback(data);
        });
    };

    return API;
};
