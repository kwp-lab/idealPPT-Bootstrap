const { series } = require('gulp');
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

gulp.task('browser-sync-start',  function(cb) {
	browserSync.init({
		proxy: "localhost:3000",
        files: ["public/**/*.*"],
        port: 7000,
	}, cb);
});

gulp.task("nodemon-start", (cb)=>{
    var started = false;
	
	return nodemon({
		script: 'dev.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
})

exports.watch = series("nodemon-start", "browser-sync-start")