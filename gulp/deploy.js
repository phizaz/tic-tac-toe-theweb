var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
    	remoteUrl: 'git@github.com:phizaz/tic-tac-toe-theweb.git'
    }));
});