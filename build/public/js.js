module.exports = function(){

    gulp.task('public.libs', function() {
    	return gulp.src(['assets/js/libs/jquery.min.js',
    		'assets/js/libs/jquery.mobile.custom.min.js',
    		'assets/js/libs/jquery.swipeUpDown.js',
    		'assets/js/libs/modernizr.custom.js',
    		'assets/js/libs/fastclick.js',
    		'assets/js/libs/riot-3.6.0/riot+compiler.update.js',
            'assets/js/libs/riot/riot-i18n.js',
            'assets/js/libs/baobab.js',
            'assets/js/libs/moment.min.js',
            'assets/js/libs/moment.ru.js',
    		'assets/js/libs/underscore-min.js',
    		'assets/js/libs/iscroll.js',
    		'assets/js/libs/TweenMax-1.19.0.min.js',
            'assets/js/libs/file-saver/FileSaver.min.js',
            'assets/js/libs/parallax.js',
            'assets/js/libs/circliful/js/jquery.circliful.js',
    		'assets/js/libs/afterlag-js/dist/afterlag.min.js',
    		'assets/js/libs/imagesloaded/imagesloaded.pkgd.min.js',
            'assets/js/libs/anime/anime.min.js',
            'assets/js/libs/waves/waves.min.js',
            'assets/js/libs/slick/slick.min.js',
            'assets/js/libs/html-docx.js',
    		'assets/js/libs/store.min.js',
            'assets/js/libs/navigo.min.js',
            'assets/js/libs/typeahead/dist/typeahead.bundle.min.js',
            'assets/js/libs/stickyfill/dist/stickyfill.min.js'])
    		.pipe(concat('libs.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('public.app', function() {
    	return gulp.src(['assets/js/components/commons/app.js',
            'assets/js/components/commons/request.js',
            'assets/js/components/commons/afterlag.js',
            'assets/js/components/commons/common.js',
            'assets/js/components/commons/utils.js',
            'assets/js/components/commons/modules.js',
            'assets/js/components/commons/EventEmitter.js',
            'assets/js/components/commons/EventEmitterMicro.js',
            'assets/js/components/features/orbits.js',
            'assets/js/components/features/premium.js',
            'assets/js/components/features/jptest.js',
            'assets/js/components/features/samples.js',
            'assets/js/components/features/fireworks.js',
            'public/js/commons/config.js',
            'public/js/commons/metrika.js',
            'public/js/commons/sections.js',
            'assets/js/plugins/define.js',
            'assets/js/plugins/imagesLoaded/imagesLoaded.js',
            'assets/js/plugins/imagesLoaded/imagesLoaded.LiveQueue.js',
            'assets/js/plugins/imagesLoaded/imagesLoaded.Queue.js',
            'assets/js/plugins/imagesLoaded/imagesLoaded.QueueItem.js',
            'assets/js/plugins/chartRadial.js',
            'assets/js/plugins/animate.js',
            'assets/js/plugins/slider.js',
            'assets/js/plugins/metrika.js',
            'assets/js/plugins/share.js',
            'assets/js/plugins/styles.js',
            'assets/js/plugins/define.js',
            'assets/js/plugins/eventsEmitter.js',
            'assets/js/plugins/marquee.js',
            'assets/js/plugins/marquee.effects.js',
            'assets/js/plugins/marquee.play.js',
            'assets/js/plugins/screens.js',
            'assets/js/plugins/scroll/scroll.Fix.js',
            'assets/js/plugins/scroll/scroll.Animate.js',
            'assets/js/plugins/scroll/scroll.Parallax.js',
            'assets/js/plugins/scroll/scroll.Content.js',
            'assets/js/components/i18n/i18n.js',
            'assets/js/components/i18n/resume/basic/template/ru.js',
            'assets/js/store/resume/commons/education.js',
            'assets/js/store/resume/commons/languages.js',
            'assets/js/store/resume/commons/resume.js',
            'assets/js/store/resume/commons/salary.js',
            'assets/js/store/resume/commons/country.js',
            'assets/js/store/resume/commons/dictionary.js',
            'assets/js/store/resume/premium/colors.js',
            'assets/js/store/samples.js',
            'assets/js/store/month.js',
            'public/js/sections/*.js'])
    		.pipe(concat('app.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('public.templates', function() {
    	return gulp.src(['public/templates/commons/modules/auth/*.tag',
            'public/templates/commons/modules/auth/**/*.tag',
            'public/templates/default/blog/blogGrid.tag',
            'assets/templates/modules/player.html',
            'assets/templates/modules/oScreenLoader.html',
            'assets/templates/v3/modules/notify.html',
            'assets/templates/modules/loaderUser.html',
            'assets/templates/v3/ui/input.html',
            'assets/templates/sections/jptest/*.html',
            'assets/templates/sections/jptest/**/*.html',
            '!assets/templates/sections/jptest/jptest.html',
            'public/templates/client/samples/samplePage.html',
            'public/templates/client/samples/sampleModal.html',
            'public/templates/client/home/planPremium.html',
            'public/templates/client/blog/popup/blogSubscribe.html',
            'public/templates/client/blog/popup/blogSubscribeForm.html',
            'assets/templates/ui/icons/icon-link.html',
            'assets/templates/ui/icons/icon-replyMail.html',
            'public/templates/default/samples/sampleContent.tag',
            'public/templates/default/samples/samplesItems.tag',
            'public/templates/default/samples/samplesAlphabet.tag',
            'public/templates/default/samples/samplesClusters.tag',
            'public/templates/commons/icons/icon-premium.tag',
            'public/templates/commons/icons/social/icon-fb.tag',
            'public/templates/commons/icons/social/icon-vk.tag',
            'public/templates/commons/icons/social/icon-tw.tag',
            'public/templates/commons/icons/social/icon-dk.tag',
            'public/templates/commons/icons/social/icon-gl.tag',
            'public/templates/commons/icons/social/icon-glc.tag'])
    		.pipe(riot())
    		.pipe(concat('templates.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('promo.templates', function() {
    	return gulp.src(['assets/templates/sections/offers/premiumContent.html',
            'assets/templates/ui/icons/icon-device-desktop.html',
            'assets/templates/ui/icons/icon-device-tablet.html',
            'assets/templates/ui/icons/icon-device-phones.html'])
    		.pipe(riot())
    		.pipe(concat('promo.templates.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('promo.app.build', function() {
    	return gulp.src(['public/js/promo.libs.js',
            'public/js/promo.templates.js'])
    		.pipe(concat('app.promo.build.js'))
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('promo.libs', function() {
    	return gulp.src(['assets/js/libs/jquery.min.js',
            'assets/js/libs/modernizr.custom.js',
            'assets/js/libs/underscore-min.js',
            'assets/js/libs/riot-3.3.2/riot+compiler.update.js',
            'assets/js/libs/afterlag-js/dist/afterlag.min.js',
            'assets/js/components/commons/app.js',
            'assets/js/components/commons/common.js',
            'assets/js/components/commons/modules.js',
            'assets/js/components/commons/utils.js',
            'assets/js/components/commons/afterlag.js',
            'assets/js/components/commons/EventEmitterMicro.js',
            'assets/js/plugins/imagesLoaded/imagesLoaded.js',
            'assets/js/plugins/imagesLoaded/imagesLoaded.LiveQueue.js',
            'assets/js/plugins/imagesLoaded/imagesLoaded.Queue.js',
            'assets/js/plugins/imagesLoaded/imagesLoaded.QueueItem.js'])
    		.pipe(concat('promo.libs.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('public.jptest', function() {
    	return gulp.src('assets/js/jptest/*.js')
    		.pipe(concat('jptest.build.js'))
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('public.app.dev', function() {
    	return gulp.src(['public/js/app.js',
            'assets/js/plugins/scroll/scroll.Parallax.build.js'])
    		.pipe(concat('app.js'))
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('public.app.build', function() {
    	return gulp.src(['public/js/libs.js',
            'public/js/app.js',
            'assets/js/plugins/scroll/scroll.Parallax.build.js',
            'public/js/templates.js'])
    		.pipe(concat('app.build.js'))
    		.pipe(gulp.dest('./public/js'));
    });
}
