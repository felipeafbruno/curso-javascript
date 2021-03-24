const gulp = require('gulp')
const { series } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(callback) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, // retirado os comentarios do arquivo que serpa processado
            presets: ['env'] // será transformado tudo que há de mais mordeno no código para uma versão mais compatível da linguagem JS
        }))
        .on('error', err => console.log(err))
        .pipe(uglify()) // arquivo será mimificado
        .pipe(concat('codigo.min.js')) // concatena o conteúdo de todos os arquivos transpilados para um unico arquivo codigo.min.js
        .pipe(gulp.dest('build'))
}

function fim(cb) {
    console.log('Fim')
    return cb()
} 

exports.default = series(transformacaoJS, fim)