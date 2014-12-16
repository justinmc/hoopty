var gulp = require('gulp');
 
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var connect = require('gulp-connect');
 
var bases = {
  app: 'app/',
  dist: 'dist/',
};
 
var paths = {
  scripts: ['scripts/**/*.js', '!scripts/vendor/**/*.js'],
};
 
// Delete the dist directory
gulp.task('clean', function() {
  return gulp.src(bases.dist)
    .pipe(clean());
});
 
// Process scripts and concatenate them into one output file
gulp.task('scripts', ['clean'], function() {
  gulp.src(paths.scripts, {cwd: bases.app})
    .pipe(jshint())
    .pipe(jshint.reporter('default'));

  gulp.src('scripts/main.js', {cwd: bases.app})
    .pipe(browserify({
      debug: '!gulp.env.production'
    }))
    .pipe(concat('hoopty.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(bases.dist))
    .pipe(connect.reload());
});
 
gulp.task('connect', ['clean', 'scripts'], function() {
  return connect.server({
    root: 'dist',
    livereload: true
  });
});

// A development task to run anytime a file changes
gulp.task('watch', function() {
  gulp.watch('app/**/*', ['clean', 'scripts']);
});
 
// Define the default task as a sequence of the above tasks
gulp.task('default', ['clean', 'scripts']);
gulp.task('serve', ['clean', 'scripts', 'connect', 'watch']);
