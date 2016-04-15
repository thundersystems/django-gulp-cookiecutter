var gulp   = require('gulp');
var del    = require('del');
var config = require('../config').delete;

/**
 * Delete folders and files
 */
gulp.task('delete', function() {
  del(config.dev);
});

gulp.task('delete:prod', function() {
  del(config.prod);
});
