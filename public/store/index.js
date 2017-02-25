module.exports = function() {

    app.utils.fs.readFile(process.cwd() + '/public/json/dictionary.json', "utf8", function(err, data){
        if (!err) app.store.dictionary = JSON.parse(data);
    });

    app.utils.fs.readFile(process.cwd() + '/public/json/metro.json', "utf8", function(err, data){
        if (!err) app.store.metro = JSON.parse(data);
    });

}
