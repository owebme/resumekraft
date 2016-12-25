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

gulp.task('premium.libs', function() {
	return gulp.src(['assets/js/libs/jquery.min.js',
		'assets/js/libs/jquery.mobile.custom.min.js',
		'assets/js/libs/modernizr.custom.js',
		'assets/js/libs/fastclick.min.js',
		'assets/js/libs/riot/riot+compiler.update.js',
		'assets/js/libs/baobab.js',
		'assets/js/libs/underscore-min.js',
		'assets/js/libs/iscroll.js',
		'assets/js/libs/rangeslider.js',
		'assets/js/libs/jquery.cropit.js',
		'assets/js/libs/moment.min.js',
		'assets/js/libs/moment.ru.js',
		'assets/js/libs/peity/jquery.peity.min.js',
		'assets/js/libs/afterlag-js/dist/afterlag.min.js'])
		.pipe(concat('premium.libs.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js'));
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
			minPx: 0.0001,
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
		'assets/js/libs/modernizr.custom.js',
		'assets/js/libs/fastclick.min.js',
		'assets/js/libs/riot/riot+compiler.update.js',
		'assets/js/libs/baobab.js',
		'assets/js/libs/underscore-min.js',
		'assets/js/libs/iscroll.js',
		'assets/js/libs/rangeslider.js',
		'assets/js/libs/jquery.cropit.js',
		'assets/js/libs/moment.min.js',
		'assets/js/libs/moment.ru.js',
		'assets/js/libs/chartist.min.js',
		'assets/js/libs/circliful/js/jquery.circliful.js',
		'assets/js/libs/TweenLite-1.19.0.min.js',
		'assets/js/libs/file-saver/FileSaver.min.js',
		'assets/js/libs/afterlag-js/dist/afterlag.min.js',
		'assets/js/libs/imagesloaded/imagesloaded.pkgd.min.js'])
		.pipe(concat('libs.js'))
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
		'assets/js/plugins/chart.js',
	    'assets/js/plugins/animate.js',
	    'assets/js/plugins/slider.js',
	    'assets/js/plugins/styles.js',
	    'assets/js/plugins/marquee.js',
	    'assets/js/plugins/screens.js',
	    'assets/js/plugins/scroll/scroll.Fix.js',
	    'assets/js/plugins/scroll/scroll.Progress.js',
	    'assets/js/plugins/scroll/scroll.Animate.js',
	    'assets/js/plugins/tutorial/selectResumePremium.js',
		'assets/js/store/resume.js',
		'assets/js/store/fonts.js',
		'assets/js/store/colors.js',
		'assets/js/store/salary.js',
		'assets/js/store/education.js',
		'assets/js/store/languages.js',
		'assets/js/store/month.js',
		'assets/js/store/hobby.js'])
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js'));
});

gulp.task('private.templates', function() {
	return gulp.src(['assets/templates/modules/*.html',
	    'assets/templates/sections/**/*.html',
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

gulp.task('private.app.build', function() {
	return gulp.src(['assets/js/libs.js',
		'assets/js/templates.js',
		'assets/js/app.js',
		'assets/js/init.js'])
		.pipe(concat('app.build.js'))
		.pipe(gulp.dest('./assets/js'));
});

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

	browserSync.watch([
		'assets/js/*.js',
		'assets/js/**/*.js',
		'assets/templates/*.html',
		'assets/templates/**/*.html'
	]).on('change', reload);

	browserSync.watch([
		'public/*.html',
		'public/**/*.tag'
	]).on('change', _.debounce(reload, 3000));
});

gulp.task('watch', function() {
	gulp.watch([
		'assets/css/style.scss',
		'assets/css/**/*.scss'
	], gulp.parallel('premium.css'));

	gulp.watch([
		'assets/css/**/templates/style.scss',
		'assets/css/**/templates/*/*.scss'
	], gulp.series('templates.basic', 'templates.basic.view'));

	gulp.watch([
		'public/css/style.scss',
		'public/css/**/*.scss'
	], gulp.series('public.css'));
});

gulp.task('css.build', gulp.series('private.css', 'premium.css', 'public.css', gulp.parallel('private.css.largeScreen', 'private.css.smallScreen', 'premium.css.largeScreen', 'premium.css.smallScreen', 'templates.basic', 'templates.basic.view')));

gulp.task('private.js.build', gulp.parallel('private.libs', 'private.app', 'private.templates'));

gulp.task('build', gulp.series(
	gulp.parallel('css.build', gulp.series('private.js.build', 'private.app.build'))
));

gulp.task('dev', gulp.series(
	gulp.parallel('private.css', 'private.app', 'premium.css'),
	gulp.parallel('serve', 'watch')
));
