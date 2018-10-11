const gulp = require('gulp');
const postcss = require('gulp-postcss');
const less = require('gulp-less');
const pxToVw = require('postcss-px-to-viewport');
const gap = require('gulp-append-prepend');
const del = require('del');
const concat = require('gulp-concat');
const autoprefixer = require('autoprefixer');

const assetsPath = './';
gulp.task('clean-css', function() {
  return del(['./build/**/css/']);
});
gulp.task('styles', ['clean-css'], function() {
  let processors = [
      autoprefixer,
  ];
  function createStream({files, isMobile}) {
      if (isMobile) {
          processors = [
              ...processors,
              pxToVw({viewportWidth: 1334})
          ]
      }
      return gulp.src(files)
          .pipe(gap.prependText(`@assets_path: "${assetsPath}";`))
          .pipe(less())
          .pipe(postcss(processors))
          .pipe(concat('main.css'))
          .pipe(gulp.dest('build/css'))
  }
  const cssStream = createStream({files: 'src/**/*.less', isMobile: false});

  return cssStream;

});