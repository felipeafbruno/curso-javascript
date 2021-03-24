const fs = require("fs")

const caminho = __dirname + "/arquivo.json"

// Leitura de aquirvo sincrona
const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)


// Leitura de arquivo Assicrona
fs.readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(config.db.host)
})

fs.readdir(__dirname, "utf-8", (err, conteudo) => {
    console.log(conteudo)
})