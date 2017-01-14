var path = require('path'),
    glob = require('glob');

module.exports = function(app) {

    glob(path.join(__dirname, '/commons/', '**', '*.tag'), function(err, tags) {
        tags.forEach(function(tag) {
            var name = tag.replace(/.+\/(.+)\.tag/g, "$1");
            app._tags.commons[name] = require(tag);
        })
    })
    glob(path.join(__dirname, '/default/', '**', '*.tag'), function(err, tags) {
        tags.forEach(function(tag) {
            var name = tag.replace(/.+\/(.+)\.tag/g, "$1");
            app._tags.default[name] = require(tag);
        })
    })
    glob(path.join(__dirname, '/mobile/', '**', '*.tag'), function(err, tags) {
        tags.forEach(function(tag) {
            var name = tag.replace(/.+\/(.+)\.tag/g, "$1");
            app._tags.mobile[name] = require(tag);
        })
    })

    app._tags.premiumContent = require('../../assets/templates/sections/overview/premium/overviewPremiumContent.tag');
    app._tags.jqtestEnter = require('../../assets/templates/sections/jqtest/jqtest-enter-content.tag');

    app.tags = function(name){
        if (app.device.mobile() || app.debug == "phone") return app._tags.mobile[name];
        else return app._tags.default[name];
    }
};