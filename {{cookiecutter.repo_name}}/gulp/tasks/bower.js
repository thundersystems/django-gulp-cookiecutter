var gulp = require('gulp');
var exec = require('child_process').exec;

// exec a 'bower install' inside a child_process
gulp.task('bower', function (cb) {
    exec('bower install', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
