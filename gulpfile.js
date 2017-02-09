var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var base64 = require('gulp-base64');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var riot = require('gulp-riot');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var px2vw = require('gulp-px2vw');
var px2rem = require('gulp-px2rem');
var combiner = require('stream-combiner2').obj;
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var _ = require('underscore');

gulp.task('private.css', function() {
	return combiner(
		gulp.src('assets/css/style.scss'),
		sass(),
		csso(),
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}),
        base64({
            baseDir: './',
            extensions: ['svg'],
            maxImageSize: 16*1024, // bytes
            debug: false
        }),
		gulp.dest('assets/css'),
		browserSync.stream()
	).on('error', notify.onError({
		"sound": false,
	}));
});

gulp.task('private.css.largeScreen', function() {
	return combiner(
		gulp.src('assets/css/style.css'),
		px2vw({
			width: 1400,
			minPx: 2,
			maxPx: 10000,
			replace: true
		}),
		rename("style.largeScreen.css"),
		gulp.dest('assets/css'),
		browserSync.stream()
	).on('error', notify.onError({
		"sound": false,
	}));
});

gulp.task('private.css.smallScreen', function() {
	return combiner(
		gulp.src('assets/css/style.css'),
		px2vw({
			width: 360,
			minPx: 2,
			maxPx: 10000,
			replace: true
		}),
		rename("style.smallScreen.css"),
		gulp.dest('assets/css'),
		browserSync.stream()
	).on('error', notify.onError({
		"sound": false,
	}));
});

gulp.task('premium.css', function() {
	return combiner(
		gulp.src('assets/css/premium.scss'),
		sass(),
		csso(),
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}),
        base64({
            baseDir: './',
            extensions: ['svg'],
            maxImageSize: 16*1024, // bytes
            debug: false
        }),
		gulp.dest('assets/css'),
		browserSync.stream()
	).on('error', notify.onError({
		"sound": false,
	}));
});

gulp.task('premium.css.largeScreen', function() {
	return combiner(
		gulp.src('assets/css/premium.css'),
		px2vw({
			width: 1400,
			minPx: 2,
			maxPx: 10000,
			replace: true
		}),
		rename("premium.largeScreen.css"),
		gulp.dest('assets/css'),
		browserSync.stream()
	).on('error', notify.onError({
		"sound": false,
	}));
});

gulp.task('premium.css.smallScreen', function() {
	return combiner(
		gulp.src('assets/css/premium.css'),
		px2vw({
			width: 360,
			minPx: 2,
			maxPx: 10000,
			replace: true
		}),
		rename("premium.smallScreen.css"),
		gulp.dest('assets/css'),
		browserSync.stream()
	).on('error', notify.onError({
		"sound": false,
	}));
});

gulp.task('templates.basic', function() {
	return combiner(
		gulp.src('assets/css/appResume/basic/templates/style.scss'),
		sass(),
		csso(),
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}),
		gulp.dest('assets/css/appResume/basic/templates'),
		browserSync.stream()
	).on('error', notify.onError({
		"sound": false,
	}));
});

gulp.task('templates.basic.view', function() {
	return combiner(
		gulp.src('assets/css/appResume/basic/templates/style.css'),
		px2vw({
			width: 1280,
			minPx: 2,
			maxPx: 10000,
			replace: true
		}),
		rename("style.view.css"),
		gulp.dest('assets/css/appResume/basic/templates'),
		browserSync.stream()
	).on('error', notify.onError({
		"sound": false,
	}));
});

gulp.task('public.css', function() {
	return combiner(
		gulp.src('public/css/style.scss'),
		sass(),
		csso(),
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}),
        base64({
            baseDir: './',
            extensions: ['svg'],
            maxImageSize: 16*1024, // bytes
            debug: false
        }),
		gulp.dest('public/css'),
		browserSync.stream()
	).on('error', notify.onError({
		"sound": false,
	}));
});

gulp.task('public.mobile.css', function() {
	return combiner(
		gulp.src('public/css/style.mobile.scss'),
		sass(),
		csso(),
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}),
        base64({
            baseDir: './',
            extensions: ['svg'],
            maxImageSize: 16*1024, // bytes
            debug: false
        }),
		gulp.dest('public/css'),
		browserSync.stream()
	).on('error', notify.onError({
		"sound": false,
	}));
});

gulp.task('styleguide', function() {
	return combiner(
		gulp.src('assets/css/styleguide.scss'),
		sass(),
		csso(),
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}),
        base64({
            baseDir: './',
            extensions: ['svg', 'png', 'jpg'],
            maxImageSize: 16*1024, // bytes
            debug: false
        }),
		gulp.dest('assets/css'),
		browserSync.stream()
	).on('error', notify.onError({
		"sound": false,
	}));
});

gulp.task('private.libs', function() {
	return gulp.src(['assets/js/libs/jquery.min.js',
		'assets/js/libs/jquery.mobile.custom.min.js',
		'assets/js/libs/jquery.swipeUpDown.js',
		'assets/js/libs/modernizr.custom.js',
		'assets/js/libs/fastclick.min.js',
		'assets/js/libs/riot/riot+compiler.update.js',
		'assets/js/libs/riot/riot-i18n.js',
		'assets/js/libs/baobab.js',
		'assets/js/libs/underscore-min.js',
		'assets/js/libs/iscroll.js',
		'assets/js/libs/iscroll.static.js',
		'assets/js/libs/rangeslider.js',
		'assets/js/libs/jquery.cropit.js',
		'assets/js/libs/moment.min.js',
		'assets/js/libs/moment.ru.js',
		'assets/js/libs/jquery.mask.min.js',
		'assets/js/libs/chartist.min.js',
		'assets/js/libs/circliful/js/jquery.circliful.js',
		'assets/js/libs/peity/jquery.peity.min.js',
		'assets/js/libs/TweenLite-1.19.0.min.js',
		'assets/js/libs/file-saver/FileSaver.min.js',
		'assets/js/libs/afterlag-js/dist/afterlag.min.js',
		'assets/js/libs/imagesloaded/imagesloaded.pkgd.min.js',
		'assets/js/libs/mouseweel.js',
		'assets/js/libs/store.min.js',
		'assets/js/libs/url.min.js'])
		.pipe(concat('libs.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js'));
});

gulp.task('private.commons', function() {
	return gulp.src(['assets/js/components/commons/app.js',
	    'assets/js/components/commons/afterlag.js',
	    'assets/js/components/commons/common.js',
	    'assets/js/components/commons/utils.js',
	    'assets/js/components/commons/request.js',
	    'assets/js/components/commons/modules.js',
	    'assets/js/components/commons/metrika.js',
	    'assets/js/components/features/premium.js',
	    'assets/js/components/config.js',
	    'assets/js/components/fetch.js',
	    'assets/js/components/i18n/i18n.js',
	    'assets/js/components/i18n/resume/basic/template/ru.js'])
		.pipe(concat('commons.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js'));
});

gulp.task('private.plugins', function() {
	return gulp.src(['assets/js/plugins/**/*.js',
	    'assets/js/plugins/*.js'])
		.pipe(concat('plugins.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js'));
});

gulp.task('private.app', function() {
	return gulp.src(['assets/js/components/commons/app.js',
		'assets/js/components/commons/common.js',
		'assets/js/components/commons/request.js',
		'assets/js/components/commons/modules.js',
		'assets/js/components/commons/utils.js',
		'assets/js/components/commons/afterlag.js',
		'assets/js/components/config.js',
		'assets/js/components/fetch.js',
		'assets/js/components/tutorial/welcome.js',
		'assets/js/components/tutorial/resume/free/interface.js',
		'assets/js/store/*.js',
		'assets/js/store/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js'));
});

gulp.task('private.templates', function() {
	return gulp.src(['assets/templates/modules/*.html',
	    'assets/templates/sections/**/*.html',
		'assets/templates/sections/**/*.tag',
		'assets/templates/ui/*.html',
		'assets/templates/ui/**/*.html',
		'public/templates/icons/social/*.tag',
		'assets/templates/appResume/basic/*.html',
		'assets/templates/appResume/basic/**/*.html',
		'assets/templates/root.html'])
		.pipe(riot())
		.pipe(concat('templates.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js'));
});

gulp.task('ui.templates', function() {
	return gulp.src(['assets/templates/ui/*.html',
		'assets/templates/ui/**/*.html'])
		.pipe(riot())
		.pipe(concat('templates.ui.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js'));
});

gulp.task('private.app.build', function() {
	return gulp.src(['assets/js/templates.js',
		'assets/js/app.js',
		'assets/js/init.js'])
		.pipe(concat('app.build.js'))
		.pipe(gulp.dest('./assets/js'));
});

gulp.task('premium.app', function() {
	return gulp.src(['assets/js/components/commons/app.js',
		'assets/js/components/commons/afterlag.js',
		'assets/js/components/commons/common.js',
		'assets/js/components/commons/utils.js',
		'assets/js/components/commons/request.js',
		'assets/js/components/commons/modules.js',
		'assets/js/components/help/resume/premium/*.js',
		'assets/js/components/i18n/i18n.js',
		'assets/js/plugins/eventsEmitter.js',
		'assets/js/plugins/marquee.js',
	    'assets/js/plugins/marquee.effects.js',
	    'assets/js/plugins/screens.js',
	    'assets/js/plugins/styles.js',
	    'assets/js/plugins/scroll/scroll.Slider.js',
	    'assets/js/plugins/scroll/scroll.Content.js',
		'assets/js/store/*.js',
		'assets/js/store/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/premium'));
});

gulp.task('premium.ui.templates', function() {
	return gulp.src(['assets/templates/appResume/premium/ui/*.html',
		'assets/templates/appResume/premium/ui/**/*.html',
		'assets/templates/appResume/commons/**/*.html',
		'assets/templates/ui/slider.html',
		'assets/templates/ui/switcher.html',
		'assets/templates/ui/checkbox.html',
		'assets/templates/ui/input.html',
		'assets/templates/ui/textarea.html',
		'assets/templates/ui/select.html',
		'assets/templates/ui/checkbox.html',
		'assets/templates/ui/icons/social/*.html',
		'assets/templates/ui/icons/icon-city.html',
		'assets/templates/ui/icons/icon-feedback.html',
		'assets/templates/ui/icons/icon-phone.html',
		'assets/templates/ui/icons/icon-email.html',
		'assets/templates/ui/icons/icon-skype.html',
		'assets/templates/ui/icons/icon-arrow.html',
		'assets/templates/ui/icons/icon-bubble.html'])
		.pipe(riot())
		.pipe(concat('templates.ui.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/premium'));
});

gulp.task('premium.control.templates', function() {
	return gulp.src(['assets/templates/appResume/premium/control/*.html'])
		.pipe(riot())
		.pipe(concat('templates.control.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/premium'));
});

gulp.task('premium.sections.templates', function() {
	return gulp.src(['assets/templates/appResume/premium/sections/*.html',
		'assets/templates/appResume/premium/sections/**/*.html'])
		.pipe(riot())
		.pipe(concat('templates.sections.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/premium'));
});

gulp.task('premium.editable.templates', function() {
	return gulp.src(['assets/templates/appResume/premium/editable/*.html'])
		.pipe(riot())
		.pipe(concat('templates.editable.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/premium'));
});

gulp.task('premium.components.templates', function() {
	return gulp.src(['assets/templates/appResume/premium/components/*.html'])
		.pipe(riot())
		.pipe(concat('templates.components.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/premium'));
});

gulp.task('premium.templates', function() {
	return gulp.src(['assets/templates/ui/*.html',
		'assets/templates/ui/icons/*.html',
		'assets/templates/appResume/premium/*.html',
		'assets/templates/appResume/premium/**/*.html'])
		.pipe(riot())
		.pipe(concat('templates.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/premium'));
});

gulp.task('premium.app.build', function() {
	return gulp.src(['assets/js/premium/templates.js',
		'assets/js/premium/app.js'])
		.pipe(concat('app.build.js'))
		.pipe(gulp.dest('./assets/js/premium'));
});

gulp.task('preview.css', function() {
	return combiner(
		gulp.src('preview/css/style.scss'),
		sass(),
		csso(),
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}),
        base64({
            baseDir: './',
            extensions: ['svg'],
            maxImageSize: 16*1024, // bytes
            debug: false
        }),
		gulp.dest('preview/css'),
		browserSync.stream()
	).on('error', notify.onError({
		"sound": false,
	}));
});

gulp.task('cachebust', function() {
  return gulp.src('./craft/templates/_layouts/*.html')
    .pipe(replace(/screen.min.css\?([0-9]*)/g, 'screen.min.css?' + getStamp()))
    .pipe(replace(/print.min.css\?([0-9]*)/g, 'print.min.css?' + getStamp()))
    .pipe(replace(/webstoemp.min.js\?([0-9]*)/g, 'webstoemp.min.js?' + getStamp()))
    .pipe(gulp.dest('./craft/templates/_layouts/'))
    .pipe(notify({ message: 'CSS/JS Cachebust task complete' }));
});

// Datestamp for cache busting
var getStamp = function() {
	var myDate = new Date();

	var myYear = myDate.getFullYear().toString();
	var myMonth = ('0' + (myDate.getMonth() + 1)).slice(-2);
	var myDay = ('0' + myDate.getDate()).slice(-2);
	var mySeconds = myDate.getSeconds().toString();

	var myFullDate = myYear + myMonth + myDay + mySeconds;

	return myFullDate;
};

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
		'public/**/*.tag',
		'assets/templates/**/*.tag'
	]).on('change', reload);

	// browserSync.watch([
	// 	'views/*.html',
	// 	'public/**/*.tag',
	// 	'assets/templates/**/*.tag'
	// ]).on('change', _.debounce(reload, 3000));

	browserSync.watch([
		'public/js/*.js',
		'public/js/**/*.js'
	]).on('change', reload);

	gulp.watch([
		'assets/css/**/*.scss',
		'public/css/style.scss',
		'public/css/**/*.scss'
	], gulp.series('public.css', 'public.mobile.css'));
});

gulp.task('css.build', gulp.series('private.css', 'premium.css', 'public.css', gulp.parallel('private.css.largeScreen', 'private.css.smallScreen', 'premium.css.largeScreen', 'premium.css.smallScreen', 'templates.basic', 'templates.basic.view')));

gulp.task('private.js.build', gulp.parallel('private.libs', 'private.app', 'private.templates', 'ui.templates', 'private.commons', 'private.plugins'));
gulp.task('premium.js.build', gulp.parallel('premium.app', 'premium.templates', 'premium.ui.templates', 'premium.editable.templates', 'premium.components.templates', 'premium.sections.templates', 'premium.control.templates'));

gulp.task('build', gulp.series(
	gulp.parallel(
		'css.build',
		gulp.series('private.js.build', 'private.app.build'),
		gulp.series('premium.js.build', 'premium.app.build')
	)
));

gulp.task('preview', gulp.series(
	'preview.css',
	gulp.parallel('serve', 'watch')
));

gulp.task('public', gulp.series(
	gulp.parallel('public.css', 'public.mobile.css'),
	gulp.parallel('serve', 'watchPublic')
));

gulp.task('dev', gulp.series(
	gulp.parallel('private.css', 'private.app', 'premium.css'),
	gulp.parallel('serve', 'watch')
));
