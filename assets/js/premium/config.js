app.config = {
    domain: null,
    api: '/private/api',
    request: function(){
        return {
            loader: true,
            notify: true
        }
    },
    logger: {
        method: "addLog",
        report: true
    },
    profile: {
        photo: {
            minWidth: 440,
            maxHeight: 620
        }
    },
    resume: {
        premium: {
            autoSave: {
                interval: 15
            }
        }
    },
    share: {
        title: 'Создать крутое резюме и получить престижную работу'
    },
    changeStyles: true
};
