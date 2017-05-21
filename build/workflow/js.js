module.exports = function(){

    gulp.task('workflow.libs', function() {
    	return gulp.src(['assets/js/libs/jquery.min.js',
            'assets/js/libs/modernizr.custom.js',
            'assets/js/libs/underscore-min.js',
            'assets/js/libs/baobab.js',
            'assets/js/libs/riot-3.3.2/riot+compiler.update.js',
            'assets/js/libs/afterlag-js/dist/afterlag.min.js',
            'assets/js/components/commons/app.js',
            'assets/js/components/commons/request.js',
            'assets/js/components/commons/common.js',
            'assets/js/components/commons/modules.js',
            'assets/js/components/commons/utils.js',
            'assets/js/components/commons/afterlag.js',
            'assets/js/plugins/share.js',
            'assets/js/store/resume/premium/colors.js'])
    		.pipe(concat('workflow.libs.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./preview/js'));
    });

    gulp.task('workflow.templates', function() {
    	return gulp.src(['preview/modules/resumeImport.html',
            'assets/templates/v3/modules/notify.html',
            'assets/templates/ui/icons/social/icon-fb.html',
            'assets/templates/ui/icons/social/icon-vk.html',
            'assets/templates/ui/icons/social/icon-tw.html',
            'assets/templates/ui/icons/social/icon-dk.html',
            'assets/templates/ui/icons/social/icon-gl.html'])
    		.pipe(riot())
    		.pipe(concat('workflow.templates.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./preview/js'));
    });

    gulp.task('workflow.build', function() {
    	return gulp.src(['preview/js/workflow.libs.js',
            'preview/js/workflow.templates.js',
            'preview/js/config.js',
            'preview/js/init.js'])
    		.pipe(concat('workflow.v2.build.js'))
            .pipe(uglify())
    		.pipe(gulp.dest('./preview/js'));
    });
}
