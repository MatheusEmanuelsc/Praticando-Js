// ARGUMENTS em JavaScript - Explicação Completa

// O objeto 'arguments' é um objeto array-like que contém todos os argumentos
// passados para uma função quando ela é chamada. Ele está disponível apenas
// dentro de funções tradicionais (não arrow functions).

// 1. CONCEITO BÁSICO
function exemploBasico() {
  // 'arguments' contém todos os parâmetros passados para a função
  console.log(arguments); // Mostra todos os argumentos
  console.log(arguments.length); // Quantidade de argumentos
  console.log(arguments[0]); // Primeiro argumento
  console.log(arguments[1]); // Segundo argumento
}

exemploBasico("ola", "mundo", 123, true);
// Output: Arguments(4) ["ola", "mundo", 123, true]
// Output: 4
// Output: "ola"
// Output: "mundo"

// 2. DIFERENÇA ENTRE PARÂMETROS DEFINIDOS E ARGUMENTS
function funcaoComParametros(a, b) {
  console.log("Parâmetro a:", a);
  console.log("Parâmetro b:", b);
  console.log("Todos os arguments:", arguments);
  console.log("Total de arguments:", arguments.length);
}

funcaoComParametros(1, 2, 3, 4, 5);
// Output: Parâmetro a: 1
// Output: Parâmetro b: 2
// Output: Todos os arguments: Arguments(5) [1, 2, 3, 4, 5]
// Output: Total de arguments: 5

// 3. ARGUMENTS É ARRAY-LIKE, NÃO UM ARRAY REAL
function testeArrayLike() {
  // arguments parece um array, mas não é um array real
  console.log("É array?", Array.isArray(arguments)); // false
  console.log("Tem length?", arguments.length); // true

  // Não tem métodos de array como push, pop, map, etc.
  // arguments.push(6); // Erro! arguments.push is not a function

  // Para usar métodos de array, precisa converter:
  let arrayReal = Array.from(arguments);
  console.log("Array convertido:", arrayReal);
  arrayReal.push(6);
  console.log("Após push:", arrayReal);
}

testeArrayLike(1, 2, 3, 4, 5);

// 4. ITERANDO SOBRE ARGUMENTS
function iterarArguments() {
  // Método 1: for tradicional
  console.log("=== For tradicional ===");
  for (let i = 0; i < arguments.length; i++) {
    console.log(`Argumento ${i}:`, arguments[i]);
  }

  // Método 2: for...of (funciona porque arguments é iterável)
  console.log("=== For...of ===");
  for (let valor of arguments) {
    console.log("Valor:", valor);
  }

  // Método 3: convertendo para array e usando forEach
  console.log("=== Array.from + forEach ===");
  Array.from(arguments).forEach((valor, index) => {
    console.log(`Index ${index}:`, valor);
  });
}

iterarArguments("primeiro", "segundo", "terceiro");

// 5. FUNÇÃO COM NÚMERO VARIÁVEL DE ARGUMENTOS
function somar() {
  // Usando arguments para criar uma função que soma qualquer quantidade de números
  let soma = 0;

  for (let i = 0; i < arguments.length; i++) {
    // Verifica se é um número antes de somar
    if (typeof arguments[i] === "number") {
      soma += arguments[i];
    }
  }

  return soma;
}

console.log("Soma de 1,2,3:", somar(1, 2, 3)); // 6
console.log("Soma de 10,20,30,40:", somar(10, 20, 30, 40)); // 100
console.log("Soma com strings:", somar(1, "texto", 3, 4)); // 8 (ignora strings)

// 6. MODIFICANDO ARGUMENTS
function modificarArguments(a, b) {
  console.log("Antes - a:", a, "arguments[0]:", arguments[0]);

  // Em modo não-estrito, modificar arguments afeta os parâmetros
  arguments[0] = 999;

  console.log("Depois - a:", a, "arguments[0]:", arguments[0]);

  // Adicionar novos valores não cria novos parâmetros
  arguments[2] = "novo";
  console.log("arguments[2]:", arguments[2]);
}

modificarArguments(1, 2);

// 7. ARGUMENTS EM MODO ESTRITO
function modoEstrito(x, y) {
  "use strict";

  console.log("Antes - x:", x, "arguments[0]:", arguments[0]);

  // Em modo estrito, arguments e parâmetros são independentes
  arguments[0] = 100;

  console.log("Depois - x:", x, "arguments[0]:", arguments[0]);
  // x permanece inalterado, arguments[0] é modificado
}

modoEstrito(5, 10);

// 8. ARGUMENTS NÃO EXISTE EM ARROW FUNCTIONS
let arrowFunction = () => {
  // console.log(arguments); // ReferenceError: arguments is not defined
  console.log("Arrow functions não têm arguments");
};

// Para arrow functions, use rest parameters (...args)
let arrowComRest = (...args) => {
  console.log("Rest parameters:", args);
  console.log("É array?", Array.isArray(args)); // true
};

arrowComRest(1, 2, 3, 4);

// 9. ALTERNATIVA MODERNA: REST PARAMETERS
function restParameters(...numeros) {
  // Rest parameters cria um array real, não array-like
  console.log("Rest parameters:", numeros);
  console.log("É array?", Array.isArray(numeros)); // true

  // Pode usar métodos de array diretamente
  return numeros.map((n) => n * 2);
}

console.log("Dobrados:", restParameters(1, 2, 3, 4)); // [2, 4, 6, 8]

// 10. QUANDO USAR ARGUMENTS vs REST PARAMETERS
function exemploMisto(primeiro, segundo, ...resto) {
  console.log("Primeiro parâmetro:", primeiro);
  console.log("Segundo parâmetro:", segundo);
  console.log("Resto dos argumentos:", resto);
  console.log("Todos via arguments:", arguments);
}

exemploMisto("a", "b", "c", "d", "e");

// RESUMO:
// - arguments: objeto array-like disponível em funções tradicionais
// - Contém todos os argumentos passados para a função
// - Não é um array real, mas pode ser convertido
// - Não existe em arrow functions
// - Em modo estrito, é independente dos parâmetros
// - Rest parameters (...args) é a alternativa moderna recomendada
