Array.prototype.forEach2 = function(callback) {
    for(indice; indice<this.length; indice++) {
        callback(this[indice], indice, this)
    }
}

const nomes = ['Pedro', 'Bernardete', 'Felipe']
nome = ''
indice = 0
nomes.forEach2(function(nome, indice, array) {
    console.log(`${indice+1}) ${nome}`)
    console.log(array)
})