module.exports = function(){

    gulp.task('styleguide.css', function() {
    	return combiner(
    		gulp.src('public/1v2/css/styleguide.scss'),
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
    		gulp.dest('public/1v2/css'),
    		browserSync.stream()
    	).on('error', notify.onError({
    		"sound": false,
    	}));
    });
}
