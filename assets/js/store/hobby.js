$store.hobby = _.extend(new Baobab([
    {
        _id: "airplane",
        title: "Путешествия"
    },
    {
        _id: "basketball",
        title: "Баскетбол"
    },
    {
        _id: "books",
        title: "Чтение"
    },
    {
        _id: "camera",
        title: "Фото/видео"
    },
    {
        _id: "car",
        title: "Автомобили"
    },
    {
        _id: "palette",
        title: "Рисование"
    },
    {
        _id: "comedy",
        title: "Театр"
    },
    {
        _id: "cooking",
        title: "Кулинария"
    },
    {
        _id: "cyclist",
        title: "Велосипед"
    },
    {
        _id: "dancer",
        title: "Танцы"
    },
    {
        _id: "happy",
        title: "Шоппинг"
    },
    {
        _id: "mirrors",
        title: "Клубы"
    },
    {
        _id: "movie",
        title: "Кино"
    },
    {
        _id: "musical",
        title: "Музыка"
    },
    {
        _id: "poker",
        title: "Азартные игры"
    },
    {
        _id: "running",
        title: "Бег"
    },
    {
        _id: "snowboard",
        title: "Сноуборд"
    },
    {
        _id: "soccer",
        title: "Футбол"
    },
    {
        _id: "sport",
        title: "Лыжи"
    },
    {
        _id: "swimmer",
        title: "Плавание"
    },
    {
        _id: "typewriter",
        title: "Писательство"
    },
    {
        _id: "volleyball",
        title: "Волейбол"
    },
    {
        _id: "programming",
        title: "Программирование"
    },
    {
        _id: "weightlifting",
        title: "Тренажерный зал"
    },
    {
        _id: "tennis",
        title: "Теннис / Сквош"
    },
    {
        _id: "bowling",
        title: "Боулинг"
    },
    {
        _id: "yoga",
        title: "Йога"
    },
    {
        _id: "hunting",
        title: "Охота"
    },
    {
        _id: "boxing",
        title: "Бокс"
    },
    {
        _id: "fencing",
        title: "Фехтование"
    },
    {
        _id: "needlework",
        title: "Рукоделие"
    },
    {
        _id: "skydiving",
        title: "Прыжки с парашютом"
    },
    {
        _id: "pets",
        title: "Домашние животные"
    },
    {
        _id: "boardgames",
        title: "Настольные игры"
    },
    {
        _id: "bath",
        title: "Баня"
    },
    {
        _id: "computergames",
        title: "Компьютерные игры"
    },
    {
        _id: "singing",
        title: "Пение"
    },
    {
        _id: "decoration",
        title: "Декор"
    },
    {
        _id: "surfing",
        title: "Серфинг"
    },
    {
        _id: "chess",
        title: "Шахматы"
    },
    {
        _id: "horsebackriding",
        title: "Верховая езда"
    },
    {
        _id: "collecting",
        title: "Хоккей"
    },
    {
        _id: "floristics",
        title: "Флористика"
    },
    {
        _id: "billiards",
        title: "Бильярд"
    },
    {
        _id: "skateboarding",
        title: "Скейтбординг"
    },
    {
        _id: "rollers",
        title: "Ролики"
    },
    {
        _id: "mindgames",
        title: "Интеллектуальные игры"
    },
    {
        _id: "poetry",
        title: "Поэзия"
    },
    {
        _id: "hikes",
        title: "Походы / каякинг"
    },
    {
        _id: "rockclimbing",
        title: "Альпинизм"
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.hobby.get(), {"_id": id}).title;
        }
    }
);
