const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const todos_bolsistas = alunos.map(aluno => aluno.bolsista).reduce((resultado,bolsista) => resultado && bolsista)
console.log(todos_bolsistas)

const algum_bolsista = alunos.map(aluno => aluno.bolsista).reduce((resultado,bolsista) => resultado || bolsista)
console.log(algum_bolsista)