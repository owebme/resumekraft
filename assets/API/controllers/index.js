module.exports = function(){

    global.API = {
        suggest: require('./suggest')(),
        jptest: require('./jptest')(),
        jobs: require('./jobs')()
    }

}
