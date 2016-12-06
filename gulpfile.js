// ================================================================================================================================
// VARIABLES
// ================================================================================================================================
const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const CacheBuster = require('gulp-cachebust');
const cachebust = new CacheBuster();
const less = require('gulp-less');
const babel = require('gulp-babel');
const del = require('del');
const uglify = require('gulp-uglify');
const print = require('gulp-print');
const path = require('path');



// ================================================================================================================================
// TASKS
// ===================================================================================================================================
gulp.task('concat', function() {
  // gulp.src(['./js/adventureCard.js','./js/app.js','./js/contactCtrl.js','./js/homeCtrl.js','./js/locationsCtrl.js','./js/packagesCtrl.js','./js/services/mainService.js'])
  gulp.src(['./js/app.js','./js/**/*.js','./login/loginCtrl.js','./login/loginService.js','./checkout/checkoutCtrl.js'])
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./dist'))
})

gulp.task('build-css', function(){
  gulp.src('./css/*')
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(cachebust.resources())  // for old files that are not getting replaced as they should
  .pipe(concat('styles.css')) // writing files into one file under this name
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist'));
})
gulp.task('build-js', function() {
   return gulp.src(['js/**/*.js','./login/loginCtrl.js','./login/loginService.js','./checkout/checkoutCtrl.js'])

      .pipe(sourcemaps.init())
      .pipe(print())

      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))

      // .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('less', function () {
  return gulp.src('./css/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('build', ['build-css'], function() {
  return gulp.src('index.html')
  .pipe(cachebust.references())
  .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function() {
  return gulp.watch(['./index.html','./partials/*.html', './css/*.*css', './js/**/*.js','./login/loginCtrl.js','./login/loginService.js','./checkout/checkoutCtrl.js'], ['build-js','build-css','build']);
});
