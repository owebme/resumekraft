$store.dictionary = {
    businessTrip: new Baobab([
        {
            _id: "ready",
            title: {
                en: "Prepared for business trips",
                ru: "Возможно"
            }
        }, {
            _id: "sometimes",
            title: {
                en: "Prepared for occasional business trips",
                ru: "Возможно иногда"
            }
        }, {
            _id: "never",
            title: {
                en: "Not prepared for business trips",
                ru: "Никогда"
            }
        }
    ]),
    relocation: new Baobab([
        {
            _id: "no_relocation",
            title: {
                en: "Not willing to relocate",
                ru: "Не готов"
            }
        }, {
            _id: "relocation_possible",
            title: {
                en: "Willing to relocate",
                ru: "Готов к переезду"
            }
        }, {
            _id: "relocation_desirable",
            title: {
                en: "I want to relocate",
                ru: "Хочу переехать"
            }
        }
    ]),
    travelTime: new Baobab([
        {
            _id: "any",
            title: {
                en: "Doesn't matter",
                ru: "Не имеет значения"
            }
        }, {
            _id: "less_than_hour",
            title: {
                en: "Up to one hour",
                ru: "Не более часа"
            }
        }, {
            _id: "from_hour_to_one_and_half",
            title: {
                en: "Up to 90 minutes",
                ru: "Не более полутора часов"
            }
        }
    ]),
    // Moved to salary.worktime
    employments: new Baobab([
        {
            _id: "full",
            title: {
                en: "Full-time",
                ru: "Полная занятость"
            }
        }, {
            _id: "part",
            title: {
                en: "Part-time",
                ru: "Частичная занятость"
            }
        }, {
            _id: "project",
            title: {
                en: "Project/temporary work",
                ru: "Проектная работа"
            }
        }, {
            _id: "volunteer",
            title: {
                en: "Volunteering",
                ru: "Волонтерство"
            }
        }, {
            _id: "probation",
            title: {
                en: "Work placement",
                ru: "Стажировка"
            }
        }
    ]),
    schedules: new Baobab([
        {
            _id: "fullDay",
            title: {
                en: "Full day",
                ru: "Полный день"
            }
        }, {
            _id: "shift",
            title: {
                en: "Shift schedule",
                ru: "Сменный график"
            }
        }, {
            _id: "flexible",
            title: {
                en: "Flexible schedule",
                ru: "Гибкий график"
            }
        }, {
            _id: "remote",
            title: {
                en: "Remote working",
                ru: "Удаленная работа"
            }
        }, {
            _id: "flyInFlyOut",
            title: {
                en: "Rotation based work",
                ru: "Вахтовый метод"
            }
        }
    ]),
    contactsPrimary: new Baobab([
        {
            _id: "any",
            title: {
                en: "Any",
                ru: "Любой"
            }
        },
        {
            _id: "email",
            title: {
                en: "Email",
                ru: "Электронная почта"
            }
        },
        {
            _id: "phone",
            title: {
                en: "Mobile phone",
                ru: "Мобильный телефон"
            }
        },
        {
            _id: "skype",
            title: {
                en: "Skype",
                ru: "Skype"
            }
        }
    ]),
    get: function(name, lang){
        if (name){
            return _.map($store.dictionary[name].get(), function(item){
                return {
                    _id: item._id,
                    title: item.title[lang || $store.resume.get("lang")]
                }
            });
        }
    },
    getTitleById: function(id, name, lang){
        if (name && id){
            return $store.dictionary[name].get({_id: id}, "title", lang || $store.resume.get("lang"));
        }
    }
};
