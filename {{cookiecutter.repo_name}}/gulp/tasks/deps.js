var gulp       = require('gulp');
var inject     = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var config     = require('../config').deps;

/*
 * injects project, django apps and third party dependencies in the base template
 */

gulp.task('deps', function () {
  gulp.src(config.src)

    // injects bower dependencies
    .pipe(inject(
      gulp.src(bowerFiles(), {read: false}), config.bower.options)
    )

    // injects project dependencies
    .pipe(inject(
      gulp.src(config.project.assets, {read: false}), config.project.options)
    )

    // writes the processed base template
    .pipe(gulp.dest(config.dest));
});
