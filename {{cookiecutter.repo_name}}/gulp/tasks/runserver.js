// Task used to run the default Django runserver
var gulp   = require('gulp');
var spawn = require('child_process').spawn;


gulp.task('runserver', function() {
    var env = Object.create( process.env );
    env.PYTHONUNBUFFERED = '1';
    var child = spawn('python', ['manage.py', 'runserver', '8010', '--settings={{cookiecutter.repo_name}}.settings.dev'], {
      detached: false,
      stdio: 'inherit',
      env: env
    });
});
