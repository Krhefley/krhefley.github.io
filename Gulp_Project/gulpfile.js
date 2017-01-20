// Include gulp
var gulp = require('gulp');

//include sass plugin
var sass = require('gulp-sass');

//include browser sync
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('/Users/krhefley/Documents/Sites/krhefley.github.io/css/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('/Users/krhefley/Documents/Sites/krhefley.github.io/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//watch function
gulp.task('watch', ['browserSync','sass' ],function(){
  gulp.watch('/Users/krhefley/Documents/Sites/krhefley.github.io/css/*.scss', ['sass']); 
  gulp.watch('/Users/krhefley/Documents/Sites/krhefley.github.io/*.css', browserSync.reload);
  gulp.watch('/Users/krhefley/Documents/Sites/krhefley.github.io/*.html', browserSync.reload);
  gulp.watch('/Users/krhefley/Documents/Sites/krhefley.github.io/*.js', browserSync.reload); 
  // Other watchers
})

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: 'http://localhost/krhefley.github.io/',
  })
})


