module.exports = function(){

    global.API = {
        auth: require('./auth')(),
        suggest: require('./suggest')(),
        informers: require('./informers')(),
        mailer: require('./mailer')(),
        jptest: require('./jptest')(),
        blog: require('./blog')(),
        jobs: require('./jobs')(),
        resume: require('./resume')(),
        migrate: require('./resume/migrate')(),
        orders: require('./orders')(),
        utils: require('./utils')()
    }

}
