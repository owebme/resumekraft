module.exports = function(){

    var path = "/var/www/resume/data/www/v2.resumekraft.ru",
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
    gulp.task('sftp-jptest.js', function () {
    	return gulp.src('public/js/jptest.build.js')
          .pipe(gulpSSH.sftp('write', path + '/public/js/jptest.build.js'));
    });
    gulp.task('sftp-public.js', function () {
    	return gulp.src('public/js/app.build.js')
          .pipe(gulpSSH.sftp('write', path + '/public/js/app.build.js'));
    });
    gulp.task('sftp-public.css', function () {
    	return gulp.src('public/css/style.css')
    	  .pipe(gulpSSH.sftp('write', path + '/public/css/style.css'));
    });
    gulp.task('sftp-public.mobile.js', function () {
    	return gulp.src('public/js/app.build.mobile.js')
          .pipe(gulpSSH.sftp('write', path + '/public/js/app.build.mobile.js'));
    });
    gulp.task('sftp-public.mobile.css', function () {
    	return gulp.src('public/css/style.mobile.css')
    	  .pipe(gulpSSH.sftp('write', path + '/public/css/style.mobile.css'));
    });
    gulp.task('sftp-public.mobile.smallScreen.css', function () {
    	return gulp.src('public/css/style.mobile.smallScreen.css')
    	  .pipe(gulpSSH.sftp('write', path + '/public/css/style.mobile.smallScreen.css'));
    });
    gulp.task('sftp-workflow.js', function () {
    	return gulp.src('preview/js/workflow.build.js')
          .pipe(gulpSSH.sftp('write', path + '/preview/js/workflow.build.js'));
    });
    gulp.task('sftp-workflow.css', function () {
    	return gulp.src('preview/css/style.css')
    	  .pipe(gulpSSH.sftp('write', path + '/preview/css/style.css'));
    });
    gulp.task('sftp-jobs.js', function () {
    	return gulp.src('public/js/app.build.jobs.js')
          .pipe(gulpSSH.sftp('write', path + '/public/js/app.build.jobs.js'));
    });
    gulp.task('sftp-jobs.css', function () {
    	return gulp.src('public/css/jobs.css')
    	  .pipe(gulpSSH.sftp('write', path + '/public/css/jobs.css'));
    });
    gulp.task('sftp-jobs.smallScreen.css', function () {
    	return gulp.src('public/css/jobs.smallScreen.css')
    	  .pipe(gulpSSH.sftp('write', path + '/public/css/jobs.smallScreen.css'));
    });
}
