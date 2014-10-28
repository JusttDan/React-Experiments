var gulp 		= require('gulp');
var browserify 	= require('gulp-browserify');
var reactify 	= require('reactify');
var rename 		= require('gulp-rename');

gulp.task('default', ['build:react']);

gulp.task('build:react', function(){

	var main = gulp.src('./js/src/main.js');

	main.pipe(
		browserify({
			insertGlobals:true,
			transform: [reactify]
		})
	)
	.pipe(rename({suffix: ".min"}))
	.pipe(gulp.dest('./js'));

	return main;

});

gulp.task('watch', function(){
	gulp.watch(['./js/src/**/*.js'], ['build:react']);
});



