global.gulp = require('gulp');
global.sass = require('gulp-sass');
global.csso = require('gulp-csso');
global.base64 = require('gulp-base64');
global.autoprefixer = require('gulp-autoprefixer');
global.notify = require('gulp-notify');
global.riot = require('gulp-riot');
global.rename = require('gulp-rename');
global.uglify = require('gulp-uglify');
global.order = require('gulp-order');
global.concat = require('gulp-concat');
global.px2vw = require('gulp-px2vw');
global.px2rem = require('gulp-px2rem');
global.combiner = require('stream-combiner2').obj;
global.browserSync = require('browser-sync').create();
global.reload = browserSync.reload;
global._ = require('underscore');

require('./build/public/css')();
require('./build/public/js.mobile')();
require('./build/preview/css')();
require('./build/private/css')();
require('./build/private/js')();
require('./build/basic/css')();
require('./build/premium/css')();
require('./build/premium/js')();
require('./build/jobs/css')();
require('./build/jobs/js')();
require('./build/styleguide/css')();

gulp.task('serve', function() {
	browserSync.init({
		open: false,
		notify: false,
		watchOptions: {
	        usePolling: true
	    },
		proxy: "http://localhost:8080/"
		// server: {
		// 	baseDir: "./"
		// }
	});
});

gulp.task('watch', function() {
	browserSync.watch([
		'assets/js/*.js',
		'assets/js/**/*.js',
		'assets/templates/*.html',
		'assets/templates/**/*.html',
		'assets/templates/**/*.tag',
		'views/*.html'
	]).on('change', reload);

	gulp.watch([
		'assets/css/style.scss',
		'assets/css/**/*.scss'
	], {debounceDelay: 1000}, gulp.parallel('private.css'));

	gulp.watch([
		'assets/css/**/templates/style.scss',
		'assets/css/**/templates/*/*.scss'
	], gulp.series('templates.basic', 'templates.basic.view'));

	gulp.watch([
		'preview/css/*.scss'
	], gulp.series('preview.css'));
});

gulp.task('watchPublic', function() {
	browserSync.watch([
		'views/*.html',
		'public/templates/**/*.tag',
		'assets/templates/**/*.tag'
	]).on('change', _.debounce(reload, 3000));

	browserSync.watch([
		'assets/js/store/*.js',
		'assets/js/store/**/*.js',
		'public/js/*.js',
		'public/js/**/*.js',
		'public/templates/**/*.html',
	]).on('change', reload);

	gulp.watch([
		'assets/css/**/*.scss',
		'public/css/style.scss',
		'public/css/**/*.scss'
	], gulp.parallel('jobs.css'));
});

gulp.task('css.build', gulp.series('private.css', 'premium.css', 'public.css', gulp.parallel('private.css.largeScreen', 'private.css.smallScreen', 'premium.css.largeScreen', 'premium.css.smallScreen', 'templates.basic', 'templates.basic.view', 'jobs.css', 'jobs.css.smallScreen')));

gulp.task('jobs.js.build', gulp.parallel('jobs.libs', 'jobs.app', 'jobs.templates'));

gulp.task('public.js.mobile', gulp.parallel('public.libs.mobile', 'public.app.mobile', 'public.templates.mobile'));

gulp.task('private.js.build', gulp.parallel('private.libs', 'private.root.templates', 'private.sections.templates', 'private.modules.templates', 'private.resume.templates', 'private.ui.templates', 'private.commons', 'private.plugins'));

gulp.task('premium.js.build', gulp.parallel('premium.app', 'premium.templates', 'premium.ui.templates', 'premium.editable.templates', 'premium.components.templates', 'premium.sections.templates', 'premium.control.templates'));

gulp.task('build', gulp.series(
	gulp.parallel(
		'css.build',
		gulp.series('public.js.mobile', 'public.app.build.mobile'),
		gulp.series('private.js.build', 'private.templates', 'private.app', 'private.app.build'),
		gulp.series('premium.js.build', 'premium.app.build'),
		gulp.series('jobs.js.build', 'jobs.app.build')
	)
));

// gulp.task('build', gulp.series('private.app.build'));

gulp.task('preview', gulp.series(
	'preview.css',
	gulp.parallel('serve', 'watch')
));

gulp.task('public', gulp.series(
	gulp.parallel('public.css', 'public.mobile.css', 'jobs.css'),
	gulp.parallel('serve', 'watchPublic')
));

gulp.task('dev', gulp.series(
	gulp.parallel('private.css', 'premium.css'),
	gulp.parallel('serve', 'watch')
));
