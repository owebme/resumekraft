module.exports = function(){

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
}
