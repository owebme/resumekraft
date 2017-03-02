module.exports = function(){

    gulp.task('jobs.css', function() {
    	return combiner(
    		gulp.src('public/css/jobs.scss'),
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

    gulp.task('jobs.css.largeScreen', function() {
    	return combiner(
    		gulp.src('public/css/jobs.css'),
    		px2vw({
    			width: 1680,
    			minPx: 2,
    			maxPx: 10000,
    			replace: true
    		}),
    		rename("jobs.largeScreen.css"),
    		gulp.dest('public/css'),
    		browserSync.stream()
    	).on('error', notify.onError({
    		"sound": false,
    	}));
    });

    gulp.task('jobs.css.smallScreen', function() {
    	return combiner(
    		gulp.src('public/css/jobs.css'),
    		px2vw({
    			width: 360,
    			minPx: 2,
    			maxPx: 10000,
    			replace: true
    		}),
    		rename("jobs.smallScreen.css"),
    		gulp.dest('public/css'),
    		browserSync.stream()
    	).on('error', notify.onError({
    		"sound": false,
    	}));
    });
}
