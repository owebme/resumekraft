app.config = {
    domain: null,
    api: '/public/api',
    request: function(){
        return {
            loader: false,
            notify: true
        }
    },
    logger: {
        method: "addLog",
        report: false
    },
    share: {
        title: 'Создать крутое резюме и получить престижную работу'
    },
    changeStyles: false
};
