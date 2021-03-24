const { series, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
                .pipe(sass().on('error', sass.logError)) // converter todo os arquivos .scss para arquivos .css
                .pipe(uglifycss({ 'ugliComments': true }))
                .pipe(concat('estilo.min.css'))
                .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/**/*.html')
                .pipe(gulp.dest('build/html'))
}

exports.default = series(
    parallel(transformacaoCSS, copiarHTML)
)
