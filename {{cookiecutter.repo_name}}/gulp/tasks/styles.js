var gulp          = require('gulp');
var plumber       = require('gulp-plumber');
var inject        = require('gulp-inject');
var bowerFiles    = require('main-bower-files');
var sourcemaps    = require('gulp-sourcemaps');
var sass          = require('gulp-sass');
var postcss       = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');
var mqpacker      = require('css-mqpacker');
var config        = require('../config').styles;

// handle error function
function onError (err) {
  console.log(err);
  this.emit('end');
}

// postCss processors
var processors = [
  // adds vendor prefix (options)
  autoprefixer(config.postcss.autoprefixer),
  // compacts mediaqueries
  mqpacker(config.postcss.mqpacker)
];

gulp.task('styles', function () {
  return gulp.src(config.src)
    // monkey patches stream to enable error event
    .pipe(plumber({
      errorHandler: onError
    }))
    // installs bower dependencies
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), config.inject.options))
    // starts writing sourcemaps
    .pipe(sourcemaps.init())
    // compile sass with libsass
    .pipe(sass())
    // passes css through postcss processors
    .pipe(postcss(processors))
    // write sourcemaps
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest));
});
