$store.hobby = _.extend(new Baobab([
    {
        _id: "airplane",
        title: "Путешествия",
        value: 27353
    },
    {
        _id: "basketball",
        title: "Баскетбол",
        value: 40611
    },
    {
        _id: "books",
        title: "Чтение",
        value: 4062
    },
    {
        _id: "camera",
        title: "Фото/видео",
        value: 1999599
    },
    {
        _id: "car",
        title: "Автомобили",
        value: 347560
    },
    {
        _id: "palette",
        title: "Рисование",
        value: 23534
    },
    {
        _id: "comedy",
        title: "Театр",
        value: 27906
    },
    {
        _id: "cooking",
        title: "Кулинария",
        value: 22545
    },
    {
        _id: "cyclist",
        title: "Велосипед",
        value: 2286
    },
    {
        _id: "dancer",
        title: "Танцы",
        value: 150088
    },
    {
        _id: "happy",
        title: "Шоппинг",
        value: 5173
    },
    {
        _id: "mirrors",
        title: "Клубы",
        value: 23979
    },
    {
        _id: "movie",
        title: "Кино",
        value: 909743
    },
    {
        _id: "musical",
        title: "Музыка",
        value: 1605498
    },
    {
        _id: "poker",
        title: "Азартные игры",
        value: 6535
    },
    {
        _id: "running",
        title: "Бег",
        value: 5867
    },
    {
        _id: "snowboard",
        title: "Сноуборд",
        value: 16734
    },
    {
        _id: "soccer",
        title: "Футбол",
        value: 793657
    },
    {
        _id: "sport",
        title: "Лыжи",
        value: 12032
    },
    {
        _id: "swimmer",
        title: "Плавание",
        value: 10735
    },
    {
        _id: "typewriter",
        title: "Писательство",
        value: 5882
    },
    {
        _id: "volleyball",
        title: "Волейбол",
        value: 61144
    },
    {
        _id: "programming",
        title: "Программирование",
        value: 10038
    },
    {
        _id: "weightlifting",
        title: "Тренажерный зал",
        value: 7819
    },
    {
        _id: "tennis",
        title: "Теннис / Сквош",
        value: 20252
    },
    {
        _id: "bowling",
        title: "Боулинг",
        value: 12713
    },
    {
        _id: "yoga",
        title: "Йога",
        value: 38675
    },
    {
        _id: "hunting",
        title: "Охота",
        value: 35739
    },
    {
        _id: "boxing",
        title: "Бокс",
        value: 113534
    },
    {
        _id: "fencing",
        title: "Фехтование",
        value: 5399
    },
    {
        _id: "needlework",
        title: "Рукоделие",
        value: 13249
    },
    {
        _id: "skydiving",
        title: "Прыжки с парашютом",
        value: 4365
    },
    {
        _id: "pets",
        title: "Домашние животные",
        value: 24673
    },
    {
        _id: "boardgames",
        title: "Настольные игры",
        value: 36111
    },
    {
        _id: "bath",
        title: "Баня",
        value: 28067
    },
    {
        _id: "computergames",
        title: "Компьютерные игры",
        value: 9987
    },
    {
        _id: "singing",
        title: "Пение",
        value: 1851
    },
    {
        _id: "decoration",
        title: "Декор",
        value: 7587
    },
    {
        _id: "surfing",
        title: "Серфинг",
        value: 4231
    },
    {
        _id: "chess",
        title: "Шахматы",
        value: 139555
    },
    {
        _id: "horsebackriding",
        title: "Верховая езда",
        value: 1609
    },
    {
        _id: "icehockey",
        title: "Хоккей",
        value: 132542
    },
    {
        _id: "collecting",
        title: "Собирательство",
        value: 1086
    },
    {
        _id: "floristics",
        title: "Флористика",
        value: 2962
    },
    {
        _id: "billiards",
        title: "Бильярд",
        value: 22939
    },
    {
        _id: "skateboarding",
        title: "Скейтбординг",
        value: 1078
    },
    {
        _id: "rollers",
        title: "Ролики",
        value: 15993
    },
    {
        _id: "mindgames",
        title: "Интеллектуальные игры",
        value: 6647
    },
    {
        _id: "poetry",
        title: "Поэзия",
        value: 3672
    },
    {
        _id: "hikes",
        title: "Походы / каякинг",
        value: 2991
    },
    {
        _id: "rockclimbing",
        title: "Альпинизм",
        value: 1434
    }
    ]),
    {
        getTitleById: function(id){
            return _.findWhere($store.hobby.get(), {"_id": id}).title;
        }
    }
);
