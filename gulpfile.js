var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var indent = require('gulp-indent');
var gap = require('gulp-append-prepend');
var del = require('del');
var replace = require('gulp-replace');
var path = require('path');

var paths = {
  includes: [
    'src/select2/multi-checkboxes/dropdown.js',
    'src/select2/multi-checkboxes/results.js',
    'src/select2/multi-checkboxes/selection.js'
  ]
};

function clean() {
  return del(['build/select2.multi-checkboxes*.js']);
};

function build() {
  return gulp.src(paths.includes)
    .pipe(replace('define([', function() {
      var pathObj = path.parse(path.relative('src', this.file.path));
      var name = path.format(Object.assign({}, pathObj, { ext: null, base: null }));
      return 'define(\'' + name + '\', [';
    }))
    .pipe(concat('select2.multi-checkboxes.js', { newLine: '\n\n' }))
    .pipe(indent())
    .pipe(gap.prependFile('build/wrapper.start.js', { trim: false }))
    .pipe(gap.appendFile('build/wrapper.end.js', { trim: false, separator: '' }))
    .pipe(gulp.dest('build'));
};

function minify() {
  return gulp.src('build/select2.multi-checkboxes.js')
    .pipe(uglify())
    .pipe(rename('select2.multi-checkboxes.min.js'))
    .pipe(gulp.dest('build'));
};

var build = gulp.series(build, minify);

exports.clean = clean;
exports.minify = minify;
exports.build = build;

exports.default = build;
