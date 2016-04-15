var gulp       = require('gulp');
var babel      = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var config     = require('../config').scripts;


gulp.task('scripts', function(){
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest));
});
