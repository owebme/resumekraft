module.exports = function(){

	var API = {};

	API.overlimit = function(history, limit, method){
        var today = 0,
            d = app.moment().format("YYMMDD");

        app.utils.each(app.utils.where(history, {name: method}), function(item){
            var date = app.moment(item.date).format("YYMMDD");
            if (d === date) today++;
        });

        if (limit < today){
            return true;
        }
        else {
            return false;
        }
    };

    return API;
};
