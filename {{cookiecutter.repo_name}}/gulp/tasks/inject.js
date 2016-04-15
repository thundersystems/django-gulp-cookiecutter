var gulp       = require('gulp');
var inject     = require('gulp-inject');
var config     = require('../config').inject;

var source = gulp.src(config.assets, {read: false});

/*
 * Injects bundled files in production
 */

gulp.task('inject', function () {
  gulp.src(config.src)
    .pipe(inject(source, config.options))
    .pipe(gulp.dest(config.dest));
});
