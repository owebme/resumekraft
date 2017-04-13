module.exports = function(){

    gulp.task('private.libs', function() {
    	return gulp.src(['assets/js/libs/jquery.min.js',
    		'assets/js/libs/jquery.mobile.custom.min.js',
    		'assets/js/libs/jquery.swipeUpDown.js',
    		'assets/js/libs/modernizr.custom.js',
    		'assets/js/libs/fastclick.js',
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
            'assets/js/libs/history.js/scripts/bundled/html5/jquery.history.js',
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
            'public/js/commons/metrika.js',
            'assets/js/components/commons/EventEmitter.js',
            'assets/js/components/commons/EventEmitterMicro.js',
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
    	return gulp.src(['assets/js/plugins/*.js',
            'assets/js/plugins/scroll/scroll.Fix.js',
            'assets/js/plugins/scroll/scroll.RefreshFix.js',
            'assets/js/plugins/scroll/scroll.Content.js',
            'assets/js/plugins/scroll/scroll.Slider.js',
            'assets/js/plugins/scroll/scroll.Parallax.js',
            'assets/js/plugins/scroll/scroll.Parallax.build.js',
            'assets/js/plugins/scroll/scroll.Animation.build.js',
            'assets/js/plugins/scroll/scroll.Animate.js'])
    		.pipe(concat('plugins.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.plugins.parallax', function() {
        return gulp.src(['assets/js/components/commons/dom/dom.getDimensions.js',
            'assets/js/components/commons/dom/dom.getScrollX.js',
            'assets/js/components/commons/dom/dom.getScrollY.js',
            'assets/js/components/commons/dom/dom.getPagePosition.js',
            'assets/js/components/commons/dom/styles/styles.combinePartialProperties.js',
            'assets/js/components/commons/dom/styles/styles.cssToObject.js',
            'assets/js/components/commons/dom/styles/styles.prefixer.js',
            'assets/js/components/commons/dom/styles/styles.setStyle.js',
            'assets/js/plugins/easing/easing.Ease.js',
            'assets/js/plugins/easing/easing.KeySpline.js',
            'assets/js/plugins/easing/easing.createBezier.js',
            'assets/js/plugins/easing/easing.createStep.js',
            'assets/js/plugins/easing/easing.cssAliases.js',
            'assets/js/plugins/easing/easing.fn.js',
            'assets/js/plugins/easing/easing.createPredefined.js',
            'assets/js/plugins/scroll/parallax/scroll.clock.js',
            'assets/js/plugins/scroll/parallax/scroll.clip.js',
            'assets/js/plugins/scroll/parallax/scroll.ScrollTracker.js',
            'assets/js/plugins/scroll/parallax/scroll.PooledScrollTracker.js',
            'assets/js/plugins/scroll/parallax/scroll.SmoothScrollTracker.js',
            'assets/js/plugins/scroll/parallax/scroll.ElementScrollTracker.js',
            'assets/js/plugins/scroll/parallax/scroll.ParallaxElement.js',
            'assets/js/plugins/scroll/parallax/scroll.ParallaxController.js'])
            .pipe(concat('scroll.Parallax.build.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./assets/js/plugins/scroll'));
    });

    gulp.task('private.plugins.animation', function() {
        return gulp.src(['assets/js/plugins/scroll/animation/scroll.math.js',
            'assets/js/plugins/scroll/animation/scroll.BaseComponent.js',
            'assets/js/plugins/scroll/animation/scroll.sharedClock.js',
            'assets/js/plugins/scroll/animation/scroll.MotionEmitter.js',
            'assets/js/plugins/scroll/animation/scroll.ScrollMotionEmitter.js',
            'assets/js/plugins/scroll/animation/scroll.Animation.js',
            'assets/js/plugins/scroll/animation/scroll.AnimationStarter.js',
            'assets/js/plugins/scroll/animation/scroll.AnimationController.js'])
            .pipe(concat('scroll.Animation.build.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./assets/js/plugins/scroll'));
    });

    gulp.task('private.root.templates', function() {
    	return gulp.src(['assets/templates/root.html',
            'assets/templates/root-mobile.html'])
    		.pipe(riot())
    		.pipe(concat('templates.root.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.sections.templates', function() {
    	return gulp.src(['assets/templates/sections/*.html',
    		'assets/templates/sections/**/*.html',
            'assets/templates/sections/jptest/jptest-enter.tag',
            'assets/templates/sections/overview/premium/overviewPremiumContent.tag'])
    		.pipe(riot())
    		.pipe(concat('templates.sections.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.modules.templates', function() {
    	return gulp.src(['assets/templates/modules/*.html'])
    		.pipe(riot())
    		.pipe(concat('templates.modules.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.resume.templates', function() {
    	return gulp.src(['assets/templates/appResume/basic/*.html',
            'assets/templates/appResume/basic/**/*.html',
            'assets/templates/appResume/commons/*.html',
            'assets/templates/appResume/commons/**/*.html'])
    		.pipe(riot())
    		.pipe(concat('templates.resume.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.ui.templates', function() {
    	return gulp.src(['assets/templates/ui/*.html',
    		'assets/templates/ui/**/*.html'])
    		.pipe(riot())
    		.pipe(concat('templates.ui.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.templates', function() {
    	return gulp.src(['assets/js/templates.root.js',
            'assets/js/templates.ui.js',
            'assets/js/templates.modules.js',
            'assets/js/templates.sections.js',
            'assets/js/templates.resume.js'])
    		.pipe(riot())
    		.pipe(concat('templates.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.app', function() {
    	return gulp.src(['assets/js/commons.js',
                'assets/js/plugins.js',
                'assets/js/components/tutorial/welcome.js',
                'assets/js/components/tutorial/resume/free/interface.js',
                'assets/js/store/*.js',
                'assets/js/store/**/*.js'
            ])
    		.pipe(concat('app.js'))
            .pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.app.build', function() {
    	return gulp.src(['assets/js/libs.js',
            'assets/js/app.js',
            'assets/js/templates.js'])
    		.pipe(concat('app.build.js'))
    		.pipe(gulp.dest('./assets/js'));
    });
}
