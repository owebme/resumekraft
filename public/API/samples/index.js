module.exports = function(url) {

    var route = app.express.Router();

    route.get('/suggest', function(req, res, next) {
        API.samples.items(null, function(err, data){
            res.send(data);
        });
	});

    route.get('/alpha/:alpha', function(req, res, next) {
        API.samples.alpha(req.params.alpha, function(err, data){
            app.errHandler(res, err, data);
        });
	});

    route.get('/import', function(req, res, next) {
        app.db.collection('samplesClusters').insert(app.utils.map(['Авиация', 'Агропромышленный комплекс', 'Архитектура и строительство', 'Безопасность и Силовые структуры', 'Бухгалтерия и банковское дело', 'Ветеринария и животноводство', 'Воспитание', 'Государственное управление', 'Делопроизводство', 'Дизайн', 'Издательcтво и типография', 'Инженерное дело', 'Информационные технологии', 'Искусство', 'Коммуникации (СМИ)', 'Кадры', 'Красота', 'Кулинария', 'Легкая промышленность', 'Лингвистика', 'Маркетинг и PR', 'Медицина и психология', 'Менеджмент', 'Налоги', 'Наука и образование', 'Недвижимость', 'Склад логистика таможня', 'Социальная сфера', 'Спорт', 'Страхование', 'Торговля', 'Транспорт', 'Туризм и гостиничная деятельность', 'Экономика и Финансы', 'Экология', 'Энергетика', 'Юриспруденция'], function(name, i){
			return {
				title: name
			}
		}),
        function(err, data){
            app.errHandler(res, err, data);
        });
	});

    route.get('/:alias', function(req, res, next) {
        API.samples.content(req.params.alias, function(err, data){
            app.errHandler(res, err, data);
        });
	});

    app.use(url, route);
};
