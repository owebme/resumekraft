module.exports = function(){

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
                exclude: [/_clip/, '.svg#mask'],
                maxImageSize: 16*1024, // bytes
                debug: false
            }),
    		gulp.dest('public/css'),
    		browserSync.stream()
    	).on('error', notify.onError({
    		"sound": false,
    	}));
    });

    gulp.task('public.css.largeScreen', function() {
    	return combiner(
    		gulp.src('public/css/style.css'),
    		px2vw({
    			width: 1440,
    			minPx: 2,
    			maxPx: 10000,
    			replace: true
    		}),
    		rename("style.largeScreen.css"),
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

    gulp.task('public.css.smallScreen', function() {
    	return combiner(
    		gulp.src('public/css/style.mobile.css'),
    		px2vw({
    			width: 360,
    			minPx: 2,
    			maxPx: 10000,
    			replace: true
    		}),
    		rename("style.mobile.smallScreen.css"),
    		gulp.dest('public/css'),
    		browserSync.stream()
    	).on('error', notify.onError({
    		"sound": false,
    	}));
    });
}
