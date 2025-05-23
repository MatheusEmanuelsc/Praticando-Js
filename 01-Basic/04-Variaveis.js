// 🔹 VAR (forma antiga de declarar variáveis)
var nome = "Ana";
console.log(nome);

// Problema do var: ele é "function-scoped", ou seja, pode causar confusões em blocos
// e permite redeclaração sem erro, o que pode gerar bugs:
var nome = "Carlos"; // Isso é permitido com var
console.log(nome); // Resultado: Carlos

// 🔹 LET (forma moderna de declarar variáveis mutáveis)
let idade = 25;
console.log(idade);

// let NÃO permite redeclarar a mesma variável no mesmo escopo
// let idade = 30; // ❌ ERRO: já foi declarada
idade = 30; // ✅ Podemos atualizar o valor
console.log(idade);

// let é "block-scoped", ou seja, respeita o escopo de bloco (como if, for, etc.)
if (true) {
  let cidade = "São Paulo";
  console.log("Dentro do bloco:", cidade);
}
// console.log("Fora do bloco:", cidade); // ❌ ERRO: cidade não está visível aqui

// 🔹 CONST (forma moderna de declarar variáveis constantes)
const PI = 3.14159;
console.log("Valor de PI:", PI);

// const NÃO pode ser redeclarado nem reatribuído
// PI = 3.14; // ❌ ERRO: não pode alterar
// const PI = 3.14; // ❌ ERRO: não pode redeclarar

// MAS objetos e arrays com const PODEM ter seus **dados internos** alterados
const pessoa = { nome: "Lucas", idade: 20 };
pessoa.nome = "Pedro"; // ✅ podemos mudar a propriedade
console.log(pessoa);

// 🔹 BOAS PRÁTICAS:
// - Use `const` por padrão
// - Use `let` somente se você **precisar alterar o valor**
// - Evite `var` (a menos que esteja lidando com código legado)
