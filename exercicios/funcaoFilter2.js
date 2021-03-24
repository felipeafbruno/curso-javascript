const produtos = [
    {nome: 'NoteBook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

Array.prototype.filter2 = function(callback) {
    const novoArray = []
    for(let i=0; i<this.length; i++) {
        if(callback(this[i], i, this) === true) {
            novoArray.push(this[i])
        } 
    }
    return novoArray
}

const caro = produto => produto.preco > 500    
const fragil = produto => produto.fragil === true 

const produtos_caros = produtos.filter2(caro).filter2(fragil)
console.log(produtos_caros)