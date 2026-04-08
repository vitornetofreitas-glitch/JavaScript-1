const livros = require('./listaLivros');

function maiorValor (arrProdutos, posicaoInicial) {
    let maisCaro = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) { 
        if (arrProdutos[atual].preco > arrProdutos[maisCaro].preco) {
            maisCaro= atual;
        }
    }
    return maisCaro;
}

module.exports = maiorValor;
