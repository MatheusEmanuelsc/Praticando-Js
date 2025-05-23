// ===== Operador Ternário =====

// É uma forma abreviada do if...else
// Sintaxe:
// condição ? valor_se_verdadeiro : valor_se_falso

let idade = 18;

// Exemplo simples:
let podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // "Pode beber"

// Equivalente a:
// if (idade >= 18) {
//   podeBeber = "Pode beber";
// } else {
//   podeBeber = "Não pode beber";
// }

// Outro exemplo com números
let nota = 7;
let resultado = nota >= 6 ? "Aprovado" : "Reprovado";
console.log(resultado); // "Aprovado"

// Operador ternário pode ser aninhado (embora evite para não ficar confuso)
let saldo = 0;
let status = saldo > 0 ? "Positivo" : saldo === 0 ? "Zerado" : "Negativo";
console.log(status); // "Zerado"

// Use operador ternário para expressões rápidas e simples de decisão
