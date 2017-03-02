$store.jobs = $store.jobs || {};

$store.jobs.dictionary = new Baobab({
    "vacancy_search_order": [{
        "id": "publication_time",
        "name": "по дате"
    }, {
        "id": "salary_desc",
        "name": "по убыванию зарплаты"
    }, {
        "id": "salary_asc",
        "name": "по возрастанию зарплаты"
    }, {
        "id": "relevance",
        "name": "по соответствию"
    }],
    "vacancy_search_period": [{
        "id": "30",
        "name": "за месяц"
    }, {
        "id": "7",
        "name": "за неделю"
    }, {
        "id": "3",
        "name": "за 3 дня"
    }, {
        "id": "1",
        "name": "за сутки"
    }],
    "currency": [{
        "rate": 1.0,
        "code": "RUR",
        "abbr": "руб.",
        "in_use": true,
        "default": true,
        "name": "Рубли"
    }, {
        "rate": 0.031187,
        "code": "AZN",
        "abbr": "AZN",
        "in_use": false,
        "default": false,
        "name": "Манаты"
    }, {
        "rate": 0.032631,
        "code": "BYR",
        "abbr": "бел. руб.",
        "in_use": false,
        "default": false,
        "name": "Белорусские рубли"
    }, {
        "rate": 0.016542,
        "code": "EUR",
        "abbr": "EUR",
        "in_use": true,
        "default": false,
        "name": "Евро"
    }, {
        "rate": 0.0344,
        "code": "GEL",
        "abbr": "GEL",
        "in_use": false,
        "default": false,
        "name": "Грузинский лари"
    }, {
        "rate": 1.202315,
        "code": "KGS",
        "abbr": "KGS",
        "in_use": false,
        "default": false,
        "name": "Киргизский сом"
    }, {
        "rate": 5.444251,
        "code": "KZT",
        "abbr": "KZT",
        "in_use": false,
        "default": false,
        "name": "Тенге"
    }, {
        "rate": 0.469585,
        "code": "UAH",
        "abbr": "грн.",
        "in_use": false,
        "default": false,
        "name": "Гривны"
    }, {
        "rate": 0.017399,
        "code": "USD",
        "abbr": "USD",
        "in_use": true,
        "default": false,
        "name": "Доллары"
    }, {
        "rate": 57.501998,
        "code": "UZS",
        "abbr": "UZS",
        "in_use": false,
        "default": false,
        "name": "Узбекский сум"
    }]
});
