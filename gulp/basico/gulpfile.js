const gulp = require('gulp')
const {series, parallel } = require('gulp')
// const series = gulp.series // const { series } = require('gulp')

function antes1 (callback) {
    console.log("Tarefa antes 1")
    return callback()
}

function antes2 (callback) {
    console.log("Tarefa antes 1")
    return callback()
}

function copiar(callback) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')    
        .pipe(gulp.dest('pastaB'))
    return callback()
}

const fim = (callback) =>  {
    console.log("Tarefa fim")
    return callback()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)