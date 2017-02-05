var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var child = require('child_process');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
var minifyCSS = require('gulp-minify-css');

var SASS_INPUT = './_sass/*.scss';
var siteRoot = '_site';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });
});

gulp.task('sass', function() {
  return gulp
    .src(SASS_INPUT)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('jekyll', () => {
  var jekyll = child.spawn('jekyll', ['build',
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
    .watch(SASS_INPUT, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['sass', 'jekyll', 'watch:sass', 'serve']);