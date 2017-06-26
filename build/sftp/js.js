module.exports = function(){

    var path = "/var/www/resume/data/resumenext.ru",
        gulpSSH = new GulpSSH({
    	ignoreErrors: false,
    	sshConfig: {
        	host: '5.101.124.21',
        	port: 22,
        	username: 'root',
        	password: '6T9Qxia2XyrrD68W'
        }
    })

    gulp.task('sftp-clear-cache', function () {
      return gulpSSH
        .exec(['rm -r /var/cache/nginx/resume_temp/*'], {filePath: 'sftp.log'})
        .pipe(gulp.dest('./logs'))
    });
    gulp.task('sftp-assets.js', function () {
    	return gulp.src(['assets/js/libs.js',
            'assets/js/app.build.js'
        ])
        .pipe(gulpSSH.dest(path + '/assets/js/'));
    });
    gulp.task('sftp-assets.css', function () {
    	return gulp.src(['assets/css/style.css',
            'assets/css/style.largeScreen.css',
            'assets/css/style.mobile.css',
            'assets/css/style.mobile.smallScreen.css',
            'assets/css/premium.css',
            'assets/css/premium.largeScreen.css',
            'assets/css/premium.smallScreen.css'
        ])
        .pipe(gulpSSH.dest(path + '/assets/css/'));
    });
    gulp.task('sftp-premium.js', function () {
    	return gulp.src(['assets/js/premium/app.build.js',
            'assets/js/premium/config.js',
            'assets/js/premium/init.js'
        ])
        .pipe(gulpSSH.dest(path + '/assets/js/premium/'));
    });
    gulp.task('sftp-public.js', function () {
    	return gulp.src(['public/js/jptest.build.js',
            'public/js/app.build.js',
            'public/js/app.build.mobile.js',
            'public/js/app.build.resume.js',
            'public/js/app.promo.build.js',
            'public/js/app.build.jobs.js',
            'public/js/init.js'
        ])
        .pipe(gulpSSH.dest(path + '/public/js/'));
    });
    gulp.task('sftp-resume.js', function () {
    	return gulp.src(['public/js/resume/config.js',
            'public/js/resume/init.js'
        ])
        .pipe(gulpSSH.dest(path + '/public/js/resume/'));
    });
    gulp.task('sftp-public.css', function () {
    	return gulp.src(['public/css/style.css',
            'public/css/style.mobile.css',
            'public/css/style.mobile.smallScreen.css',
            'public/css/jobs.css',
            'public/css/jobs.smallScreen.css'
        ])
        .pipe(gulpSSH.dest(path + '/public/css/'));
    });
    gulp.task('sftp-workflow.js', function () {
    	return gulp.src('preview/js/workflow.build.js')
        .pipe(gulpSSH.dest(path + '/preview/js/'));
    });
    gulp.task('sftp-workflow.css', function () {
    	return gulp.src('preview/css/style.css')
        .pipe(gulpSSH.dest(path + '/preview/css/'));
    });
    gulp.task('sftp-resume.css', function () {
    	return gulp.src(['assets/css/appResume/basic/templates/style.css',
        'assets/css/appResume/basic/templates/style.view.css'])
        .pipe(gulpSSH.dest(path + '/assets/css/appResume/basic/templates/'));
    });

}
