const fs = require("fs")

const produto = {
    nome: 'Celuar',
    preco: 2599.99,
    desconto: 0.15
}

const caminho = __dirname + "/arquivoGerado.json"

fs.writeFile(caminho, JSON.stringify(produto), err => {
    console.log(err || "Arquivo salvo!!!")
})