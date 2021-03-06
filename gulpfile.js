var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jsstyle = require('jshint-stylish');

var paths = {
  src: ['./lib/**/*.js', './controllers/**/*.js', './routers/**/*.js', './test/**/*.js', './index.js', './gulpfile.js']
};

gulp.task('default', ['jshint']);

gulp.task('jshint', function(){
  return gulp.src(paths.src)
             .pipe(jshint())
             .pipe(jshint.reporter(jsstyle))
             .pipe(jshint.reporter('fail'));
});
