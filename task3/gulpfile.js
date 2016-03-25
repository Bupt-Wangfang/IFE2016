var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
	var files = [
	'**/*.html',
	'**/*.css',
	'**/*.js'
	];
    browserSync.init(files,{
        server: {
            baseDir: "./"
        }
    });
});
//动态页面
//gulp.task('browser-sync', function() {
//    browserSync.init({
//        proxy: "yourlocal.dev"
//    });
//});
//******stackoverflow commits start******
//BrowserSync extremely slow!!!The solution is quite simple - but illogical imho. I had my local instance running under http://project.local. Changing it to http://project.dev solved the issue. I'm running OS X.
//
//Works. But... but... why? – henrijs Nov 7 '14 at 8:42
//
//:-) If you are running OS X as well, I guess it has something to do with DNS lookups (Bonjour is using the .local domain as well). – Rico Leuthold Nov 7 '14 at 16:01
//
//Amazing tip for mac users. Thanks so much! – Armel Larcier Nov 15 '14 at 16:13
//
//Had the same issue on Linux Ubuntu 14 and changing my URL from 'local.domain.co.uk' to 'domain.dev' worked perfectly! So thank you as never would of solved it otherwise. – Josh Davies Mar 26 at 11:44
//
//This works on Ubuntu 14.10. An explanation as to why a .com slows browserSync down would be nice though. – fauxnoir Jun 11 at 21:10
//******stackoverflow commits end******
gulp.task('default',['browser-sync']); //定义默认任务
