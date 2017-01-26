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
    events: {
        method: "addHistoryEvents",
        report: true
    },
    metrika: {
        active: true,
        report: {
            method: "addMetrika",
            interval: 30,
            yametrika: {
                counter: '27428363'
            }
        }
    },
    payment: {
        yamoney: '410012719414223'
    },
    profile: {
        photo: {
            minWidth: 440,
            maxHeight: 620
        }
    },
    resume: {
        free: {
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
