module.exports = function(){

    global.API = {
        suggest: require('./suggest')(),
        jobs: require('./jobs')()
    }

}
