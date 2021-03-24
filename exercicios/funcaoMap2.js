Array.prototype.map2 = function(callback) {
    let novaArray = []
    for(let i=0; i<this.length; i++) {
       novaArray.push(callback(this[i]))
    }

    return novaArray
}

const carrinho = [
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":13.90}',
    '{"nome":"Kit de Lapis", "preco":41.22}',
    '{"nome":"Caneta", "preco":7.50}'
]

const precos = carrinho.map2(function(produto) {
    return JSON.parse(produto).preco 
})

console.log(precos)