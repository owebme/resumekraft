var path = require('path'),
    glob = require('glob');

module.exports = function() {

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
    app._tags.premiumColors = require('../../assets/templates/sections/overview/premium/overviewPremiumColor.tag');
    app._tags.jptestEnter = require('../../assets/templates/sections/jptest/jptest-enter.tag');

    app.tags = function(name, device){
        if (device && device.type == "phone") return app._tags.mobile[name];
        else return app._tags.default[name];
    }
};
