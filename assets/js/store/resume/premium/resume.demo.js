// https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/18235126033139.5634e8d8b1adc.jpg
// https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/750ee935139279.5852ed2f4dd5f.jpg
// https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/091df946261671.584e198a52ec6.jpg
// http://ottawa.fatmoon.kinsta.com/wp-content/uploads/sites/52/2016/04/vertical20.jpg
// http://ottawa.fatmoon.kinsta.com/wp-content/uploads/sites/52/2016/04/vertical15.jpg
// https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6612ee41993431.57bc86ef27ea9.jpg
// http://ottawa.fatmoon.kinsta.com/wp-content/uploads/sites/52/2016/04/vertical9.jpg
// http://ottawa.fatmoon.kinsta.com/wp-content/uploads/sites/52/2016/04/vertical3.jpg
// http://ottawa.fatmoon.kinsta.com/wp-content/uploads/sites/52/2016/04/horizontal10.jpg
// http://ottawa.fatmoon.kinsta.com/wp-content/uploads/sites/52/2016/04/horizontal15.jpg
// http://ottawa.fatmoon.kinsta.com/wp-content/uploads/sites/52/2016/04/horizontal8.jpg
// http://ottawa.fatmoon.kinsta.com/wp-content/uploads/sites/52/2016/04/horizontal2.jpg
// http://ottawa.fatmoon.kinsta.com/wp-content/uploads/sites/52/apollo13_images/cover5-6fkzrkng4ltfpc2rzfdl225u36rb5s8mj6.jpg
// http://ottawa.fatmoon.kinsta.com/wp-content/uploads/sites/52/2016/04/vertical5.jpg
// https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/14592068_1825528711058860_6525389476905091072_n.jpg?ig_cache_key=MTQwODE3NjcxNjcyODA3ODA5Ng%3D%3D.2
// http://demo.massivedynamic.co/fashion-photography/wp-content/uploads/2015/10/16_02.jpg
// http://nodia-foto.ru/sites/default/files/BarberHerman_06_internet.jpg
// http://ottawa.fatmoon.kinsta.com/wp-content/uploads/sites/52/2016/04/vertical18.jpg
// http://www.smsrande.sk/pictures/full/zuzicka21.jpg
// http://www.steps.be/wp-content/uploads/2016/09/iStock_30866880_MEDIUM.jpg
// http://lionesseflatiron.org/wp-content/uploads/2015/08/Lionesse-Things-to-Know-Before-Going-Bronde.jpg
// https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0b6c6030715153.562fb7e328626.jpg
// https://mir-s3-cdn-cf.behance.net/project_modules/disp/23386321049159.562fabde4b72c.jpg
// https://drscdn.500px.org/photo/195237645/q%3D80_m%3D2000/3c1363e2c3cf86aeac84187d2703da1b

$store.demo = {
        _id: "588becda9f1df3915186566b",
        public: true,
        plan: "basic",
        template: "1",
        lang: "ru",
        post: "Web-Designer, Art-director, Illustrator",
        photo: "/preview/images/photo/photo_phone.jpg",
        percent: "97",
        commons: {
            name: "Виктория",
            surname: "",
            gender: "female",
            birthday: {
                day: "25",
                month: "8",
                year: "1986",
                hidden: true
            },
            contacts: {
                city: "Москва",
                email: "mymail@gmail.com",
                phone: "(XXX) 500-5550",
                primary: "any",
                relocate: true,
                site: "http://web-projects.me",
                skype: "myskype"
            }
        },
        salary: {
            amount: "125000",
            currency: "1",
            worktime: "1",
            graph: {
                active: true,
                items: [80000,100000,125000,150000,175000,195000]
            },
            active: true
        },
        tags: [
            'Adobe Photoshop', 'InDesign', 'Illustrator', 'Sketch App', 'MS PowerPoint', 'HTML5', 'JavaScript', 'jQuery', 'UI/UX'
        ],
        appeal: "Я графический дизайнер. В дизайне предпочитаю лаконичный стиль. В тексте — информационный. Убираю всё, что мешает увидеть суть.",
        about: "Высокий уровень ответсвенности, исполнительности, умение работать с людьми, высокий уровень социальной коммуникации. Открытость, порядочность, честность, любовь к порядку, педантичность, аккуратность, любовь к мелочам и деталям.\n\n Широкий круг интересов: иностранные языки, программирование, психология. Свободное время провожу с семьей или за чтением книг.",
        likes: _.range(21),
        social: {
            title: 'Я в социальных медиа',
            items: [
                {
                    title: 'fb',
                    value: 'http://facebook.com'
                },
                {
                    title: 'vk',
                    value: 'http://vk.com'
                },
                {
                    title: 'in',
                    value: 'http://instagram.com'
                },
                {
                    title: 'lk',
                    value: 'http://linkedin.com'
                }
            ]
        },
        works: {
            title: "Мои проекты",
            text: "Наличие деловых контактов с представителями различных сфер таких как бизнесмены, журналисты, работники творческих профессий (продюсеры, художники, скульпторы, музыканты, и пр.)",
            items: [
                {
                    _id: "1",
                    year: "2015",
                    title: "YellStore",
                    text: "Idea, design UI/UX, Single Page App on JS, jQuery, Ajax, catching on client side, templates with mustache, css transform/transition, SVG, responsive, smacss, bem, gulp. Later in the task of writing Rest Full API on backend.",
                    links: {
                        url: {
                            title: 'Портфолио',
                            value: 'http://behance.net'
                        },
                        image: {
                            title: 'Еще материалы',
                            value: 'http://dribbble.com'
                        },
                        video: {
                            title: 'Видео материалы',
                            value: 'http://vimeo.com'
                        }
                    }
                },
                {
                    _id: "2",
                    year: "2014",
                    title: "ResumeKraft",
                    text: "Idea, design UI/UX, ModPerl, frontend only native JS, HTML5, canvas, Ajax, catching on client side, css transform/transition, responsive, smacss, gulp.",
                    links: {
                        url: {
                            title: 'Портфолио',
                            value: 'http://behance.net'
                        },
                        image: {
                            title: 'Еще материалы',
                            value: 'http://dribbble.com'
                        },
                        video: {
                            title: 'Видео материалы',
                            value: 'http://vimeo.com'
                        }
                    }
                },
                {
                    _id: "3",
                    year: "2014",
                    title: "JQ test",
                    text: "Idea, design UI/UX, JS, jQuery, Ajax, css transform/transition, responsive, less, gulp.",
                    links: {
                        url: {
                            title: 'Портфолио',
                            value: 'http://behance.net'
                        },
                        image: {
                            title: 'Еще материалы',
                            value: 'http://dribbble.com'
                        },
                        video: {
                            title: 'Видео материалы',
                            value: 'http://vimeo.com'
                        }
                    }
                },
                {
                    _id: "4",
                    year: "2013",
                    title: "SalesHR",
                    text: "ModPerl, catching on server side, JS (jQuery), bootstrap, fontawesome.",
                    links: {
                        url: {
                            title: 'Портфолио',
                            value: 'http://behance.net'
                        },
                        image: {
                            title: 'Еще материалы',
                            value: 'http://dribbble.com'
                        },
                        video: {
                            title: 'Видео материалы',
                            value: 'http://vimeo.com'
                        }
                    }
                },
                {
                    _id: "5",
                    year: "2012",
                    title: "UpleSEO",
                    text: "Perl, JS (jQuery), bootstrap, fontawesome, connection APIs: YandexMetrica, YandexWebmaster, Sape, eTXT.",
                    links: {
                        url: {
                            title: 'Портфолио',
                            value: 'http://behance.net'
                        },
                        image: {
                            title: 'Еще материалы',
                            value: 'http://dribbble.com'
                        },
                        video: {
                            title: 'Видео материалы',
                            value: 'http://vimeo.com'
                        }
                    }
                },
                {
                    _id: "6",
                    year: "2010",
                    title: "UpleCMS",
                    text: "Idea, design UI/UX, Perl, JS (jQuery), connection API YandexDirect. 18 modules.",
                    links: {
                        url: {
                            title: 'Портфолио',
                            value: 'http://behance.net'
                        },
                        image: {
                            title: 'Еще материалы',
                            value: 'http://dribbble.com'
                        },
                        video: {
                            title: 'Видео материалы',
                            value: 'http://vimeo.com'
                        }
                    }
                }
            ]
        },
        skills: {
            title: "Основные компетенции",
            header: "Работаю в Illustrator, Adobe Photoshop и InDesign. Мой профиль — айдентика, web и promo. Разработка UI/UX.",
            text: "С любовью справляюсь с командой. Разработка дизайна интерфейсов для мобильных приложений на базе iOS, android. Создание иконок для приложений, дизайн сайтов. Дизайн деловой документации, дизайн полиграфической продукции, дизайн рекламных макетов. Разработка рекламных кампаний, фирменных стилей.",
            items: [
                {
                    title: "Креативность",
                    value: "90"
                },
                {
                    title: "Управление проектами",
                    value: "95"
                },
                {
                    title: "Графический дизайн",
                    value: "79"
                },
                {
                    title: "Векторная графика",
                    value: "86"
                }
            ]
        },
        education: {
            title: "Образование",
            text: "Люблю учиться и повышать свои профессиональные навыки.",
            items: [
                {
                    _id: "1",
                    level: "1",
                    title: "Российская академия народного хозяйства и государственной службы при Президенте РФ, Москва",
                    faculty: 'Инновационно-технологического бизнеса',
                    speciality: "Инновационный менеджмент",
                    year: "2013"
                },
                {
                    _id: "2",
                    level: "1",
                    title: "Международная академия бизнеса и управления (МУБиУ), Москва",
                    faculty: 'Институт дизайна и рекламы',
                    speciality: "Дизайн архитектурной среды",
                    year: "2011"
                }
            ]
        },
        courses: {
            title: "Курсы",
            text: "Тяга к исследовательской деятельности, постоянному образованию, поиску и внедрению нестандартных решений.",
            items: [
                {
                    _id: "1",
                    name: "Тренинговое Агентство «Мастер-Класс», Москва",
                    title: "Семинар «Эффективная рекламная деятельность фирмы»",
                    year: "2008"
                },
                {
                    _id: "2",
                    name: "Тренинговое Агентство «Мастер-Класс», Москва",
                    title: "Тренинг «Эффективное руководство сотрудниками»",
                    year: "2008"
                },
                {
                    _id: "3",
                    name: "DIGITAL PAINTING / Painter, Москва",
                    title: "Школа Real Time",
                    year: "2006"
                }
            ]
        },
        languages: {
            title: "Владение языками",
            text: "Широкий круг интересов: иностранные языки, программирование, психология. Профессиональную деятельность считаю высшей степенью самореализации.",
            items: [
                {
                    title: "native",
                    value: "4"
                },
                {
                    title: "en",
                    value: "4"
                },
                {
                    title: "de",
                    value: "1"
                },
                {
                    title: "fr",
                    value: "2"
                }
            ]
        },
        jobs: {
            title: "Работа в компаниях",
            text: "Стабильность и ответственность, способность закрывать участки работ гарантируя полную надежность и прозрачность процесса, принимать ответственные решения, грамотно мотивировать людей, снижать риски и достигать поставленных целей.",
            items: [
                {
                    _id: "1",
                    company: "Технопарк Сколково, ООО",
                    city: "Москва",
                    post: "Специалист по коммуникациям",
                    from: {
                        month: "4",
                        year: "2014"
                    },
                    to: {
                        month: "1",
                        year: "2000"
                    },
                    text: "— Разработка дизайна промо-презентаций и презентаций для внутрикорпоративного использования\n— Разработка дизайна печатной и сувенирной продукции компании\n— Разработка дизайна электронных рассылок\n— Участие в разработке дизайна печатной продукции для Startup Village и Startup Tour\n— Авторский надзор за визуальной концепцией печатной продукции и рекламными кампаниями мероприятий (IASP 2016 Moscow, Открытые инновации)\n— Создание дизайна и контента страниц сайта компании",
                    last: true
                },
                {
                    _id: "2",
                    company: "ООО НПП «Тензосенсор»",
                    city: "Москва",
                    post: "Финансовый директор",
                    from: {
                        month: "2",
                        year: "2011"
                    },
                    to: {
                        month: "12",
                        year: "2013"
                    },
                    text: "Взаимодействовала со Сколково в рамках развития проекта\nКоординировала работу финансового подразделения компании (2 человека)\nГотовила финансовую отчетность по проектам\nПредставляла компанию и её разработки на российских и зарубежных выставках (Финляндия, Франция, США)\nРазработала контент и дизайн-макеты рекламной продукции компании (презентации, буклеты)\nСоздала контент сайта компании и его дизайн\nРазработала дизайн логотипа компании\nПисала новости компании для публикации на сайте компании",
                    last: false
                },
                {
                    _id: "3",
                    company: "ООО НТЦ «Интрофизика»",
                    city: "Москва",
                    post: "Заместитель директора по маркетингу",
                    from: {
                        month: "7",
                        year: "2010"
                    },
                    to: {
                        month: "1",
                        year: "2011"
                    },
                    text: "Участие в подготовке конкурсной документации НИОКР, в разработке стратегии компании относительно участия в тендерах.\nПодготовка аналитических отчетов о деятельности компании, подготовка отчетов об исследовании рынка и потенциале внедрения продуктов компании на рынок с учетом текущих тенденций развития.\nМатематические расчеты, построение прогнозных данных.",
                    last: false
                }
            ]
        },
        hobby: {
            title: "Мои хобби",
            text: "Много читаю разнообразной литературы, путешествую, вдохновляюсь культурой в зарубежных странах. Люблю обучаться новому.",
            items: ['airplane', 'comedy', 'swimmer', 'musical']
        },
        coverletter: {
            text: "Привет ;)\n Я графический дизайнер. В дизайне предпочитаю лаконичный стиль. В тексте — информационный. Убираю всё, что мешает увидеть суть.",
            color: "1"
        },
        sections: [
            {
                name: "salary",
                title: "Желаемая зарплата",
                short: "Зарплата",
                control: true,
                active: true
            },
            {
                name: "tags",
                title: "Ключевые навыки",
                short: "Навыки",
                control: true,
                active: true
            },
            {
                name: "appeal",
                title: "Заголовок-обращение",
                short: "Обращение",
                control: true,
                active: true
            },
            {
                name: "about",
                title: "О себе текст",
                short: "О себе",
                control: true,
                active: true
            },
            {
                name: "social",
                title: "Аккаунты в соц. сетях",
                short: "Соц. ссылки",
                control: true,
                active: true
            },
            {
                name: "works",
                title: "Мои проекты",
                short: "Проекты",
                screen: true,
                control: true,
                active: true
            },
            {
                name: "skills",
                title: "Основные компетенции",
                short: "Навыки",
                screen: true,
                control: true,
                active: true
            },
            {
                name: "education",
                title: "Образование",
                short: "Учеба",
                screen: true,
                control: true,
                active: true
            },
            {
                name: "courses",
                title: "Курсы",
                short: "Курсы",
                screen: true,
                control: true,
                active: true
            },
            {
                name: "languages",
                title: "Владение языками",
                short: "Языки",
                screen: true,
                control: true,
                active: true
            },
            {
                name: "jobs",
                title: "Работа в компаниях",
                short: "Карьера",
                screen: true,
                control: true,
                active: true
            },
            {
                name: "hobby",
                title: "Мои хобби",
                short: "Хобби",
                screen: true,
                control: true,
                active: true
            },
            {
                name: "contacts",
                title: "Контакты",
                short: "Контакты",
                screen: true,
                control: true,
                active: true
            },
            {
                name: "feedback",
                title: "Обратная связь",
                short: "Обратная связь",
                screen: true,
                control: true,
                active: true
            },
            {
                name: "coverletter",
                title: "Сопроводительное письмо",
                short: "Письмо",
                screen: true,
                control: false,
                active: false
            }
        ],
        config: {
            color: "#0084ff",
            font: "futura",
            photo: {
                minWidth: 440,
                maxHeight: 620,
                noise: false
            },
            pdf: {
                logotype: true
            },
            likes: {
                active: true,
                count: true
            },
            stat: false
        }
    }
