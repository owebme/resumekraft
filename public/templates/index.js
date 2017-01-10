var path = require('path'),
    glob = require('glob');

module.exports = function(app) {

    glob(path.join(__dirname, '/', '**', '*.tag'), function(err, tags) {
        tags.forEach(function(tag) {
            var name = tag.replace(/.+\/(.+)\.tag/g, "$1");
            app.tags[name] = require(tag);
        })
    })

    app.tags.premiumContent = require('../../assets/templates/sections/overview/premium/overviewPremiumContent.tag');
    app.tags.jqtestEnter = require('../../assets/templates/sections/jqtest/jqtest-enter-content.tag');
};
