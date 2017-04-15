module.exports = function(){

    global.API = {
        suggest: require('./suggest')(),
        jptest: require('./jptest')(),
        blog: require('./blog')(),
        jobs: require('./jobs')(),
        resume: require('./resume')(),
        migrate: require('./resume/migrate')(),
        orders: require('./orders')(),
        utils: require('./utils')()
    }

}
