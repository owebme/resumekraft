(function(){

    var _extend = {
        getTitleById: function(name, id){
            return $.get(name, {"id": id}, "name");
        }
    };

    $store.jobs.dictionary = _.extend(new Baobab(
    {
        "employer_active_vacancies_order": [{
            "id": "expiration_date_desc",
            "name": "по убыванию даты"
        }, {
            "id": "expiration_date_asc",
            "name": "по дате"
        }, {
            "id": "name_desc",
            "name": "по заголовку, в обратном порядке"
        }, {
            "id": "name_asc",
            "name": "по заголовку"
        }],
        "business_trip_readiness": [{
            "id": "ready",
            "name": "готов к командировкам"
        }, {
            "id": "sometimes",
            "name": "готов к редким командировкам"
        }, {
            "id": "never",
            "name": "не готов к командировкам"
        }],
        "vacancy_search_fields": [{
            "id": "name",
            "name": "в названии вакансии"
        }, {
            "id": "company_name",
            "name": "в названии компании"
        }, {
            "id": "description",
            "name": "в описании вакансии"
        }],
        "resume_search_label": [{
            "id": "only_with_photo",
            "name": "Только с фотографией"
        }, {
            "id": "only_with_salary",
            "name": "Не показывать резюме без зарплаты"
        }, {
            "id": "only_with_age",
            "name": "Не показывать резюме без указания возраста"
        }, {
            "id": "only_with_gender",
            "name": "Не показывать резюме без указания пола"
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
        }],
        "travel_time": [{
            "id": "any",
            "name": "Не имеет значения"
        }, {
            "id": "less_than_hour",
            "name": "Не более часа"
        }, {
            "id": "from_hour_to_one_and_half",
            "name": "Не более полутора часов"
        }],
        "education_level": [{
            "id": "higher",
            "name": "Высшее"
        }, {
            "id": "bachelor",
            "name": "Бакалавр"
        }, {
            "id": "master",
            "name": "Магистр"
        }, {
            "id": "candidate",
            "name": "Кандидат наук"
        }, {
            "id": "doctor",
            "name": "Доктор наук"
        }, {
            "id": "unfinished_higher",
            "name": "Неоконченное высшее"
        }, {
            "id": "secondary",
            "name": "Среднее"
        }, {
            "id": "special_secondary",
            "name": "Среднее специальное"
        }],
        "preferred_contact_type": [{
            "id": "home",
            "name": "Домашний телефон"
        }, {
            "id": "work",
            "name": "Рабочий телефон"
        }, {
            "id": "cell",
            "name": "Мобильный телефон"
        }, {
            "id": "email",
            "name": "Эл. почта"
        }],
        "employment": [{
            "id": "full",
            "name": "Полная занятость"
        }, {
            "id": "part",
            "name": "Частичная занятость"
        }, {
            "id": "project",
            "name": "Проектная работа"
        }, {
            "id": "volunteer",
            "name": "Волонтерство"
        }, {
            "id": "probation",
            "name": "Стажировка"
        }],
        "vacancy_not_prolonged_reason": [{
            "id": "vacancy_archived",
            "name": "Вы не можете продлевать архивную/заблокированную вакансию."
        }, {
            "id": "not_enough_quotas",
            "name": "Вакансия не может быть обновлена. Квота на публикацию исчерпана."
        }, {
            "id": "free_prolongation_not_available",
            "name": "Бесплатная вакансия не может быть обновлена."
        }, {
            "id": "too_early_to_prolongate_free_rmr_publication",
            "name": "Объявление не может быть обновлено, т.к. предыдущее обновление было менее трех дней назад."
        }, {
            "id": "too_early_to_prolongate_free_publication",
            "name": "Бесплатная вакансия не может быть обновлена, т.к. предыдущее обновление было менее трех дней назад."
        }, {
            "id": "not_enough_purchased_services",
            "name": "Вакансия не может быть обновлена. Недостаточно купленных услуг."
        }, {
            "id": "too_early_to_prolongate_standard_publication",
            "name": "Вакансия \"Стандарт\" не может быть обновлена, т.к. предыдущее обновление было менее трех дней назад."
        }, {
            "id": "standard_plus_cannot_be_closed",
            "name": "Вакансия \"Стандарт Плюс\" не может быть закрытой."
        }, {
            "id": "standard_plus_publication_is_updated_automatically",
            "name": "Вакансия \"Стандарт Плюс\" не может быть обновлена, это происходит автоматически раз в три дня."
        }],
        "vacancy_label": [{
            "id": "accept_handicapped",
            "name": "Только для людей с инвалидностью"
        }, {
            "id": "not_from_agency",
            "name": "Без вакансий агентств"
        }],
        "resume_access_type": [{
            "id": "no_one",
            "name": "не видно никому"
        }, {
            "id": "whitelist",
            "name": "видно выбранным компаниям"
        }, {
            "id": "blacklist",
            "name": "скрыто от выбранных компаний"
        }, {
            "id": "clients",
            "name": "видно всем компаниям, зарегистрированным на HeadHunter"
        }, {
            "id": "everyone",
            "name": "видно всему интернету"
        }, {
            "id": "direct",
            "name": "доступно только по прямой ссылке"
        }],
        "negotiations_state": [{
            "id": "response",
            "name": "Отклик"
        }, {
            "id": "invitation",
            "name": "Приглашение"
        }, {
            "id": "discard",
            "name": "Отказ"
        }, {
            "id": "discard_after_interview",
            "name": "Отказ после интервью"
        }, {
            "id": "hidden",
            "name": "Скрытый"
        }, {
            "id": "text",
            "name": "Текст"
        }],
        "applicant_comment_access_type": [{
            "id": "coworkers",
            "name": "Виден мне и моим коллегам"
        }, {
            "id": "owner",
            "name": "Виден только мне"
        }],
        "language_level": [{
            "id": "basic",
            "name": "базовые знания"
        }, {
            "id": "can_read",
            "name": "читаю профессиональную литературу"
        }, {
            "id": "can_pass_interview",
            "name": "могу проходить интервью"
        }, {
            "id": "fluent",
            "name": "свободно владею"
        }, {
            "id": "native",
            "name": "родной"
        }],
        "resume_contacts_site_type": [{
            "id": "personal",
            "name": "Другой сайт"
        }, {
            "id": "moi_krug",
            "name": "Мой круг"
        }, {
            "id": "livejournal",
            "name": "LiveJournal"
        }, {
            "id": "linkedin",
            "name": "LinkedIn"
        }, {
            "id": "freelance",
            "name": "Free-lance"
        }, {
            "id": "facebook",
            "name": "Facebook"
        }, {
            "id": "skype",
            "name": "Skype"
        }, {
            "id": "icq",
            "name": "ICQ"
        }],
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
        "employer_hidden_vacancies_order": [{
            "id": "archive_time_asc",
            "name": "по дате архивации"
        }, {
            "id": "archive_time_desc",
            "name": "по убыванию даты архивации"
        }, {
            "id": "name_desc",
            "name": "по заголовку, в обратном порядке"
        }, {
            "id": "name_asc",
            "name": "по заголовку"
        }],
        "resume_search_order": [{
            "id": "publication_time",
            "name": "по дате изменения"
        }, {
            "id": "salary_desc",
            "name": "по убыванию зарплат"
        }, {
            "id": "salary_asc",
            "name": "по возрастанию зарплаты"
        }, {
            "id": "relevance",
            "name": "по соответствию"
        }],
        "vacancy_relation": [{
            "id": "favorited",
            "name": "В отобранных"
        }, {
            "id": "got_response",
            "name": "Вы отправили резюме"
        }, {
            "id": "got_invitation",
            "name": "Вас пригласили"
        }, {
            "id": "got_rejection",
            "name": "Вам отказали"
        }, {
            "id": "blacklisted",
            "name": "Скрыта из поиска"
        }],
        "schedule": [{
            "id": "fullDay",
            "name": "Полный день"
        }, {
            "id": "shift",
            "name": "Сменный график"
        }, {
            "id": "flexible",
            "name": "Гибкий график"
        }, {
            "id": "remote",
            "name": "Удаленная работа"
        }, {
            "id": "flyInFlyOut",
            "name": "Вахтовый метод"
        }],
        "resume_search_logic": [{
            "id": "all",
            "name": "Все слова встречаются"
        }, {
            "id": "any",
            "name": "Любое из слов встречается"
        }, {
            "id": "phrase",
            "name": "Точная фраза встречается"
        }, {
            "id": "except",
            "name": "Не встречаются"
        }],
        "negotiations_order": [{
            "id": "updated_at",
            "name": "по дате обновления"
        }, {
            "id": "created_at",
            "name": "по дате добавления"
        }],
        "resume_search_fields": [{
            "id": "everywhere",
            "name": "везде"
        }, {
            "id": "title",
            "name": "в названии резюме"
        }, {
            "id": "education",
            "name": "в образовании"
        }, {
            "id": "skills",
            "name": "в ключевых навыках"
        }, {
            "id": "experience",
            "name": "в опыте работы"
        }, {
            "id": "experience_company",
            "name": "в компаниях и отраслях"
        }, {
            "id": "experience_position",
            "name": "в должностях"
        }, {
            "id": "experience_description",
            "name": "в обязанностях"
        }],
        "vacancy_site": [{
            "id": "hh",
            "name": "hh.ru"
        }, {
            "id": "rmr",
            "name": "rabota.mail.ru"
        }],
        "resume_moderation_note": [{
            "id": "bad",
            "name": "Резюме составлено небрежно."
        }, {
            "id": "block_full_name",
            "name": "В резюме отсутствует полное имя кандидата."
        }, {
            "id": "bad_description",
            "name": "Укажите желаемую позицию, чтобы повысить свои шансы найти работу."
        }, {
            "id": "block_no_education_place_or_date",
            "name": "Отсутствуют данные об учебном заведении и дате его окончания."
        }, {
            "id": "bad_education",
            "name": "Плохо описано образование."
        }, {
            "id": "bad_education_student",
            "name": "Укажите полное название учебного заведения, факультет и планируемый год окончания."
        }, {
            "id": "block_no_function",
            "name": "Опишите подробнее свои обязанности и функции."
        }, {
            "id": "block_work_place",
            "name": "Не указан опыт работы за последнее время"
        }, {
            "id": "no_company_name",
            "name": "Укажите названия мест работы."
        }, {
            "id": "no_company_description",
            "name": "Укажите сферу деятельности компаний, в которых Вы работали."
        }, {
            "id": "no_position",
            "name": "Плохо описаны занимаемые должности."
        }, {
            "id": "no_date",
            "name": "Отсутствуют даты начала и окончания работы."
        }, {
            "id": "bad_function",
            "name": "Плохо описаны функции и обязанности."
        }, {
            "id": "not_enough_information",
            "name": "Укажите больше дополнительной информации: владение иностранными языками, знание компьютерных программ и др."
        }, {
            "id": "lot_information",
            "name": "Слишком много дополнительной информации."
        }, {
            "id": "no_recommendation",
            "name": "Вы не предоставили ни одну рекомендацию."
        }, {
            "id": "careless_additional_information",
            "name": "Обратите внимание на раздел «Ключевые навыки». Укажите в нём сведения, которые выгодно отличат Вас в качестве претендента на желаемую позицию. Проверьте орфографию и опечатки."
        }, {
            "id": "careless_photo",
            "name": "Рекомендуем Вам изменить фотографию для резюме. Лучше размещать фотографии, где Вы изображены в деловом или повседневном костюме."
        }, {
            "id": "careless_key_skill_information",
            "name": "Отредактируйте раздел «Ключевые навыки» Вашего резюме, поскольку указанная информация не вполне соответствует формату и/или содержит опечатки."
        }, {
            "id": "incorrect_phone_number",
            "name": "В резюме указан несуществующий номер телефона. Если номер корректен, свяжитесь со службой поддержки"
        }],
        "employer_archived_vacancies_order": [{
            "id": "archive_time_asc",
            "name": "по дате архивации"
        }, {
            "id": "archive_time_desc",
            "name": "по убыванию даты архивации"
        }, {
            "id": "name_desc",
            "name": "по заголовку, в обратном порядке"
        }, {
            "id": "name_asc",
            "name": "по заголовку"
        }],
        "vacancy_cluster": [{
            "id": "specialization",
            "name": "Специализация"
        }, {
            "id": "metro",
            "name": "Метро"
        }, {
            "id": "schedule",
            "name": "График работы"
        }, {
            "id": "industry",
            "name": "Отрасль компании"
        }, {
            "id": "area",
            "name": "Регион"
        }, {
            "id": "experience",
            "name": "Опыт работы"
        }, {
            "id": "label",
            "name": "Исключение"
        }, {
            "id": "salary",
            "name": "Зарплата"
        }, {
            "id": "industry",
            "name": "Сфера компании"
        }, {
            "id": "employment",
            "name": "Тип занятости"
        }, {
            "id": "professional_area",
            "name": "Профобласть"
        }],
        "relocation_type": [{
            "id": "no_relocation",
            "name": "не готов к переезду"
        }, {
            "id": "relocation_possible",
            "name": "готов к переезду"
        }, {
            "id": "relocation_desirable",
            "name": "хочу переехать"
        }],
        "messaging_status": [{
            "id": "ok",
            "name": "Переписка доступна"
        }, {
            "id": "archived",
            "name": "Вакансия отправлена в архив"
        }, {
            "id": "disabled_by_employer",
            "name": "Работодатель отключил переписку"
        }, {
            "id": "resume_deleted",
            "name": "Резюме удалено"
        }, {
            "id": "in_a_row_limit",
            "name": "Вы отправили 5 сообщений подряд. Дождитесь ответа, чтобы написать еще"
        }, {
            "id": "no_invitation",
            "name": "Переписка доступна только после приглашения"
        }, {
            "id": "overall_limit",
            "name": "Превышено число сообщений в переписке"
        }, {
            "id": "prohibited",
            "name": "Переписка недоступна"
        }],
        "negotiations_participant_type": [{
            "id": "applicant",
            "name": "Соискатель"
        }, {
            "id": "employer",
            "name": "Работодатель"
        }],
        "employer_type": [{
            "id": "company",
            "name": "Прямой работодатель"
        }, {
            "id": "agency",
            "name": "Кадровое агентство"
        }, {
            "id": "private_recruiter",
            "name": "Частный рекрутер"
        }],
        "gender": [{
            "id": "male",
            "name": "Мужской"
        }, {
            "id": "female",
            "name": "Женский"
        }],
        "vacancy_billing_type": [{
            "id": "free",
            "name": "Бесплатная"
        }, {
            "id": "standard",
            "name": "Стандарт"
        }, {
            "id": "standard_plus",
            "name": "Стандарт+"
        }, {
            "id": "premium",
            "name": "Премиум"
        }],
        "experience": [{
            "id": "noExperience",
            "name": "Нет опыта"
        }, {
            "id": "between1And3",
            "name": "От 1 года до 3 лет"
        }, {
            "id": "between3And6",
            "name": "От 3 до 6 лет"
        }, {
            "id": "moreThan6",
            "name": "Более 6 лет"
        }],
        "applicant_comments_order": [{
            "id": "creation_time_desc",
            "name": "по убыванию даты публикации"
        }, {
            "id": "creation_time_asc",
            "name": "по дате публикации"
        }],
        "employer_relation": [{
            "id": "blacklisted",
            "name": "Скрыт из поиска вакансий"
        }],
        "resume_search_relocation": [{
            "id": "living_or_relocation",
            "name": "Живут в указанном регионе или готовы переехать в него"
        }, {
            "id": "living",
            "name": "Живут в указанном регионе"
        }, {
            "id": "living_but_relocation",
            "name": "Живут в указанном регионе и готовы к переезду куда-либо"
        }, {
            "id": "relocation",
            "name": "Не живут в указанном регионе, но готовы переехать в него"
        }],
        "vacancy_type": [{
            "id": "open",
            "name": "Открытая"
        }, {
            "id": "closed",
            "name": "Закрытая"
        }, {
            "id": "anonymous",
            "name": "Анонимная"
        }, {
            "id": "direct",
            "name": "Рекламная"
        }],
        "resume_status": [{
            "id": "not_published",
            "name": "не опубликовано"
        }, {
            "id": "published",
            "name": "опубликовано"
        }, {
            "id": "blocked",
            "name": "заблокировано"
        }, {
            "id": "on_moderation",
            "name": "на модерации"
        }],
        "resume_search_experience_period": [{
            "id": "all_time",
            "name": "за всё время опыта"
        }, {
            "id": "last_year",
            "name": "за последний год"
        }, {
            "id": "last_three_years",
            "name": "за последние 3 года"
        }, {
            "id": "last_six_years",
            "name": "за последние 6 лет"
        }]
    }), _extend);

    var $ = $store.jobs.dictionary;

})();
