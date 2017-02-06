var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var child = require('child_process');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('serve', () => {
  browserSync.init({
    files: ['_site/**'],
    port: 4000,
    server: {
      baseDir: '_site',
    }
  });
});

gulp.task('sass', function() {
  return gulp
    .src('./_sass/base.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('images', function() {
  return gulp
    .src('./_images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./images'));
});

gulp.task('jekyll', () => {
  var jekyll = child.spawn('bundle', ['exec', 'jekyll', 'build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  var jekyllLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) { gutil.log('Jekyll: ' + message) });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('watch:sass', function() {
  return gulp
    .watch('./_sass/**/*.scss', ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('watch:images', function() {
  return gulp
    .watch('./_images/**/*', ['images'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['sass', 'images', 'jekyll', 'watch:sass', 'watch:images', 'serve']);