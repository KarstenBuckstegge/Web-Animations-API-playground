var gulp = require('gulp');

gulp.task('default', function() {
  
});

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');

// Setup directories to work with
var dirs = {
  build: 'build',
  src: {
    js: 'src/js',
    sass: 'src/styles'
  },
  dest: {
    js: 'js',
    css: 'css'
  }
};

// Build CSS
gulp.task('css', function () {
  return gulp.src([dirs.src.sass + '/main.scss'])
  	.pipe(sourcemaps.init())
    	.pipe(sass())
    .pipe(autoprefixer('last 2 version', 'ie 9'))
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(dirs.dest.css));
});

// Build JS
gulp.task('js', function () {
  return gulp.src([
    dirs.src.js + '/index.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest(dirs.dest.js));
});

// Main task: watch
gulp.task('watch', ['build'], function () {
  
  // livereload.listen();
  // watch('css/styles.css').on('change', livereload.changed);
  // Watch CSS
  watch([
    dirs.src.sass + '/**/*.scss'
  ], 
  function (files, cb) {
    gulp.start('css', cb);
  });

  // Watch JS
  watch([
  	dirs.src.js + '/**/*.js'
  ],
  function (files, cb) {
    gulp.start('js', cb);
  });
});

// Alias task: dev
gulp.task('dev', ['watch']);

// Main task: build
gulp.task('build', [
  'css',
  'js'
]);

// Default task
gulp.task('default', ['build']);
