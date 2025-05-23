// ===== Estrutura for...in em JavaScript =====

// O for...in é usado para percorrer as **chaves** (nomes das propriedades)
// de um objeto ou os índices de um array.

// Exemplo com objeto:
let pessoa = {
  nome: "Carlos",
  idade: 28,
  cidade: "São Paulo",
};

for (let chave in pessoa) {
  // A cada repetição, 'chave' recebe o nome de uma propriedade (ex: "nome", "idade")
  // Para acessar o valor, usamos pessoa[chave]
  console.log("Propriedade:", chave, "→ Valor:", pessoa[chave]);
}

// -----------------------------------------------------

// Exemplo com array:
let cores = ["vermelho", "verde", "azul"];

for (let indice in cores) {
  // Aqui 'indice' será uma string com o índice do array (ex: "0", "1", "2")
  // Para acessar o valor, usamos cores[indice]
  console.log("Índice:", indice, "→ Cor:", cores[indice]);
}

// -----------------------------------------------------

// Diferença importante:
// - for...in percorre as CHAVES (nomes das propriedades ou índices)
// - for...of percorre os VALORES diretamente (não funciona em objetos)

// -----------------------------------------------------

// RESUMO DO for...in:
// - Usado para objetos (e também funciona com arrays, mas com índices)
// - Retorna as chaves/propriedades
