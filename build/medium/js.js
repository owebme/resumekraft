module.exports = function(){

    gulp.task('medium.libs', function() {
    	return gulp.src(['assets/js/libs/jquery.min.js',
    		'assets/js/libs/jquery.mobile.custom.min.js',
    		'assets/js/libs/jquery.swipeUpDown.js',
    		'assets/js/libs/modernizr.custom.js',
    		'assets/js/libs/fastclick.js',
    		'assets/js/libs/riot-3.5.1/riot+compiler.update.js',
    		'assets/js/libs/riot/riot-i18n.js',
    		'assets/js/libs/baobab.js',
    		'assets/js/libs/underscore-min.js',
            'assets/js/libs/iscroll.js',
    		'assets/js/libs/moment.min.js',
    		'assets/js/libs/moment.ru.js',
            'assets/js/libs/afterlag-js/dist/afterlag.min.js',
            'assets/js/libs/slick/slick.min.js'])
    		.pipe(concat('libs.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js/medium'));
    });

    gulp.task('medium.app', function() {
    	return gulp.src(['assets/js/components/commons/app.js',
    		'assets/js/components/commons/afterlag.js',
    		'assets/js/components/commons/common.js',
    		'assets/js/components/commons/utils.js',
    		'assets/js/components/commons/request.js',
    		'assets/js/components/commons/modules.js',
            'assets/js/components/commons/EventEmitter.js',
            'assets/js/components/commons/EventEmitterMicro.js',
            'assets/js/components/i18n/i18n.js',
            'assets/js/components/i18n/resume/medium/template/ru.js',
            'assets/js/plugins/define.js',
            'assets/js/plugins/scroll/scroll.Content.js',
            'assets/js/plugins/scroll/scroll.RefreshFix.js',
            'assets/js/plugins/ripple.js',
            'assets/js/store/*.js',
            'assets/js/store/**/*.js'])
    		.pipe(concat('app.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js/medium'));
    });
}
