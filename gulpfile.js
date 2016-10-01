var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var notify  = require('gulp-notify');
var source = require('vinyl-source-stream');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('mocha', function() {
  return gulp.src(['test/javascripts/*.js'], { read: false })
    .pipe(mocha({ reporter: 'list'}))
    .on('error', gutil.log);
});

gulp.task('watch-mocha', function() {
    gulp.watch(['public/javascripts/**', 'test/javascripts/**'], ['mocha']);
});

gulp.task('browserify-app', function() {
  browserify('./app/javascripts/app.js', {debug: true})
    .transform(babelify, {presets: ['es2015', 'react']})
    .bundle()
    .on('error', function (err) {
      notify.onError('Error: <%= error.message %>')
      .apply(this, Array.prototype.slice.call(arguments));
      this.emit('end');
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/javascripts'))
    .pipe(notify({
      title: 'Browserify task successed',
      message: new Date(),
    }));
});
gulp.task('watch-app', ['browserify-app'], function() {
  gulp.watch('app/javascripts/*.js', ['browserify-app']);
  gulp.watch('app/javascripts/**/*.js', ['browserify-app']);
});
