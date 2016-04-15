var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('prod', function(callback){
  runSequence(
    'bower',
    'delete:prod',
    'scripts',
    'styles',
    'optimize',
    'inject',
    callback
  );
});
