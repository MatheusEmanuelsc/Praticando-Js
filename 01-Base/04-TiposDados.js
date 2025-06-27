// 🔹 STRING (Texto): qualquer sequência de caracteres entre aspas simples, duplas ou crase
let nome = "Maria";
let sobrenome = "Silva";
let mensagem = `Olá, ${nome} ${sobrenome}`; // Template string (moderna)

console.log(typeof nome); // string

// 🔹 NUMBER (Números): pode ser inteiro ou decimal
let idade = 30;
let altura = 1.75;

console.log(typeof idade); // number
console.log(typeof altura); // number

// 🔹 BOOLEAN (Lógico): apenas true ou false
let aprovado = true;
let reprovado = false;

console.log(typeof aprovado); // boolean

// 🔹 NULL: valor intencionalmente "vazio" ou "ausente"
let resposta = null;

console.log(typeof resposta); // ⚠️ object (isso é um "bug" histórico do JS)

// 🔹 UNDEFINED: variável declarada mas ainda sem valor
let nota;
console.log(nota); // undefined
console.log(typeof nota); // undefined

// 🔹 OBJECT (Objeto): conjunto de dados com propriedades
let aluno = {
  nome: "João",
  idade: 22,
  ativo: true,
};

console.log(typeof aluno); // object
console.log(aluno.nome); // acessando propriedade

// 🔹 ARRAY: uma lista ordenada de valores (também é um tipo de objeto)
let frutas = ["maçã", "banana", "uva"];
console.log(typeof frutas); // object
console.log(frutas[1]); // banana

// 🔹 FUNCTION: funções também são tipos de dados em JavaScript
function saudacao() {
  return "Olá!";
}

console.log(typeof saudacao); // function

// 🔹 SYMBOL: valor único e imutável (avançado, pouco usado)
let simbolo = Symbol("id");
console.log(typeof simbolo); // symbol

// 🔹 BIGINT: para números inteiros muito grandes (acima do limite de Number)
let numeroGigante = 1234567890123456789012345678901234567890n;
console.log(typeof numeroGigante); // bigint

// ### ✅ Resumo dos tipos primitivos de dados:

// | Tipo        | Exemplo                        | Descrição                          |
// | ----------- | ------------------------------ | ---------------------------------- |
// | `string`    | `"texto"` ou `'texto'` ou \`\` | Texto                              |
// | `number`    | `42`, `3.14`                   | Número inteiro ou decimal          |
// | `boolean`   | `true`, `false`                | Valor lógico                       |
// | `null`      | `null`                         | Valor vazio intencional            |
// | `undefined` | `undefined`                    | Variável ainda sem valor atribuído |
// | `object`    | `{ nome: "Ana" }`, `[1, 2, 3]` | Objeto ou array                    |
// | `function`  | `function() {}`                | Função (também é um valor)         |
// | `symbol`    | `Symbol("id")`                 | Identificador único (avançado)     |
// | `bigint`    | `1234567890123n`               | Números gigantes                   |
