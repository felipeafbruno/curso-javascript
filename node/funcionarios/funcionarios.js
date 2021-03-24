const axios = require('axios')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const chineses = f => f.pais === 'China' 
const mulheres = f => f.genero === 'F'
const salarioMenor = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual 

const funcionarios = axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(chineses).filter(mulheres).reduce(salarioMenor))
})
