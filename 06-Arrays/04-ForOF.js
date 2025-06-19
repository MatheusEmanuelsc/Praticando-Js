// ===== Estrutura for...of em JavaScript =====

// O for...of é usado para percorrer elementos de forma direta,
// principalmente em arrays, strings, e outros iteráveis.

// Exemplo com array:
let frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
  // A cada repetição, a variável 'fruta' recebe o próximo valor do array
  console.log("Fruta atual:", fruta);
}

// -----------------------------------------------------

// Exemplo com string:
let palavra = "Olá";

for (let letra of palavra) {
  // A cada repetição, 'letra' recebe o próximo caractere da string
  console.log("Letra:", letra);
}

// -----------------------------------------------------

// Importante: for...of NÃO funciona diretamente com objetos
// Para objetos, usamos for...in

let pessoa = { nome: "Ana", idade: 30 };

// Isso NÃO funciona:
// for (let valor of pessoa) { ... } → ERRO

// -----------------------------------------------------

// RESUMO DO for...of:
// - Serve para percorrer **valores** de arrays, strings e outros iteráveis
// - Mais simples e legível do que um for tradicional ao lidar com arrays
