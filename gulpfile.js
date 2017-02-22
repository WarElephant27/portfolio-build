/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano 
 gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename 
 gulp-livereload gulp-cache del gulp-nunjucks gulp-connect gulp--save-dev
 */

var gulp = require('gulp'),
  connect = require('gulp-connect');
  nunjucks = require('gulp-nunjucks-render');
  sass = require('gulp-sass');


// Scripts
gulp.task('scripts', function() {
  return gulp.src('./app/scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

/* connect server */
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

/* Compile Nunjucks partials */
gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucks({
      path: ['app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('dist'))
});

/* compile sass */
gulp.task('sass', function () {
  return gulp.src('./app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

/* reload HTML */
gulp.task('html', function () {
  gulp.src('./dist/*.html')
    .pipe(connect.reload());
});

/* reload CSS */
gulp.task('css', function () {
  gulp.src('./dist/styles/*.css')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  //watch sass files
  gulp.watch('./app/**/*.scss', gulp.parallel('sass'));

  //watch nunjucks files 
  gulp.watch('./app/**/*.nunjucks', gulp.parallel('nunjucks'));

  // // Watch HTML in dist dir
  // gulp.watch(['./dist/*.html'], ['html']);
  gulp.watch('./dist/*.html', gulp.parallel('html'));


  // // Watch CSS 
  // gulp.watch(['./dist/styles/*.css'], ['css']);
  gulp.watch('./dist/styles/*.css', gulp.parallel('css'));

  // // Watch .js files
  // gulp.watch('./dist/scripts/**/*.js', ['scripts']);
  gulp.watch('./dist/scripts/**/*.js', gulp.parallel('scripts'));

});

/* stick connect and watch tasks together */
gulp.task('build', gulp.series(
  gulp.parallel('connect', 'watch')
));

/* connect server and watch */
gulp.task('default', gulp.series('build'));








