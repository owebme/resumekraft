app.config = {
    domain: null,
    api: '/public/api',
    request: {
        options: function(){
            return {
                loader: false,
                notify: true
            }
        }
    }
};
