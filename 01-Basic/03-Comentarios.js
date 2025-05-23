// 🔹 Comentário de linha única:
// Usamos duas barras (//) para fazer comentários de uma linha.
// Eles são ignorados na execução do código, servem só para explicações ou anotações.

let nome = "João"; // Este é um comentário no final da linha de código

/*
 🔹 Comentário de múltiplas linhas:
 Usamos barra + asterisco (/*) para abrir
 e asterisco + barra (* /) para fechar.
 Útil para explicações maiores, descrever blocos ou desativar partes temporariamente.
*/

let idade = 30;

/*
console.log("Este código está comentado e não será executado.");
alert("Esse também está dentro de um comentário de bloco.");
*/

// 🔹 Comentário para documentação (JSDoc):
// Muito usado para documentar funções ou objetos em projetos maiores.
// Começa com /** e pode incluir tags especiais como @param, @returns etc.

/**
 * Soma dois números e retorna o resultado.
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} - Resultado da soma
 */
function somar(a, b) {
  return a + b;
}

console.log(somar(5, 7)); // Resultado esperado: 12
