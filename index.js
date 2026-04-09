const livros = [
    { titulo: "Chapeuzinho Vermelho", preco: 25 },
    { titulo: "Minecraft", preco: 29 },
    { titulo: "Alice no país das maravilhas", preco: 35 },
    { titulo: "Branca de Neve", preco: 30 },
    { titulo: "Cidades de Papel", preco: 15 },
    { titulo: "Castelo da Elseve", preco: 40 }
];

// Função que encontra o índice do maior valor a partir de uma posição
function buscaMaiorValor(arr, posicaoInicial) {
    let maior = posicaoInicial;

    for (let atual = posicaoInicial; atual < arr.length; atual++) {
        // Se o preço atual for MAIOR que o preço do maior encontrado até agora
        if (arr[atual].preco > arr[maior].preco) {
            maior = atual;
        }
    }
    return maior;
}

// Algoritmo Selection Sort adaptado para ordem decrescente
for (let atual = 0; atual < livros.length - 1; atual++) {
    // 1. Encontra o índice do livro mais caro no restante da lista
    let maior = buscaMaiorValor(livros, atual);

    // 2. Guarda as informações dos objetos para a troca
    let livroAtual = livros[atual];
    let livroMaiorPreco = livros[maior];

    // 3. Realiza a "dança das cadeiras" (troca de posições)
    livros[atual] = livroMaiorPreco;
    livros[maior] = livroAtual;
    
    console.log(`Posição atual ${atual}: trocando ${livroAtual.titulo} por ${livroMaiorPreco.titulo}`);
}

console.log("--- Lista Ordenada (Mais caro para o mais barato) ---");
console.log(livros);
