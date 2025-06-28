// ========================================
// TUTORIAL COMPLETO: FUNÇÕES EM JAVASCRIPT
// ========================================

console.log("=== TUTORIAL DE FUNÇÕES EM JAVASCRIPT ===\n");

// ========================================
// 1. DECLARAÇÃO DE FUNÇÃO (Function Declaration)
// ========================================

/*
SINTAXE BÁSICA:
function nomeDaFuncao(parametros) {
    // código da função
    return valor; // opcional
}

CARACTERÍSTICAS DA FUNCTION DECLARATION:
✅ Hoisting: A função é "elevada" - pode ser chamada antes de ser declarada
✅ Tem nome próprio (não é anônima)
✅ Cria uma variável no escopo atual com o nome da função
✅ 'this' depende de como a função é chamada
✅ Pode ser redeclarada (sobrescrita)
*/

// Demonstrando hoisting (elevação) da function declaration
console.log("HOISTING - Chamando função antes de declarar:");
console.log(funcaoComHoisting()); // Funciona devido ao hoisting!

function funcaoComHoisting() {
  return "Esta função foi chamada antes de ser declarada!";
}
function saudar() {
  return "Olá! Bem-vindo ao tutorial de funções!";
}

// Chamando a função
console.log("1. Função sem parâmetros:");
console.log(saudar());
// Exemplo 1: Função simples sem parâmetros

// Exemplo 2: Função com parâmetros
function saudarPessoa(nome) {
  return `Olá, ${nome}! Como você está?`;
}

console.log("2. Função com um parâmetro:");
console.log(saudarPessoa("Maria"));
console.log(saudarPessoa("João"));
console.log("");

// Exemplo 3: Função com múltiplos parâmetros
function somar(a, b) {
  return a + b;
}

console.log("3. Função com múltiplos parâmetros:");
console.log(`2 + 3 = ${somar(2, 3)}`);
console.log(`10 + 5 = ${somar(10, 5)}`);
console.log("");

// ========================================
// 2. EXPRESSÃO DE FUNÇÃO (Function Expression)
// ========================================

/*
SINTAXE:
const nomeDaVariavel = function(parametros) {
    // código da função
    return valor;
};

CARACTERÍSTICAS DA FUNCTION EXPRESSION:
❌ SEM Hoisting: Não pode ser chamada antes de ser declarada
✅ Pode ser anônima (sem nome próprio)
✅ É atribuída a uma variável
✅ 'this' depende de como a função é chamada
❌ Não pode ser redeclarada se usar const/let
✅ Mais segura que function declaration

DIFERENÇAS PRINCIPAIS:
- Function Declaration: function minhaFuncao() {}
- Function Expression: const minhaFuncao = function() {};
*/

// Exemplo 4: Function Expression
const multiplicar = function (x, y) {
  return x * y;
};

console.log("4. Function Expression:");
console.log(`4 × 6 = ${multiplicar(4, 6)}`);
console.log(`7 × 3 = ${multiplicar(7, 3)}`);
console.log("");

// ========================================
// 3. ARROW FUNCTIONS (ES6+)
// ========================================

/*
SINTAXE:
const nomeDaFuncao = (parametros) => {
    return valor;
};

// Ou para uma linha:
const nomeDaFuncao = (parametros) => expressao;
*/

// Exemplo 5: Arrow Function básica
const dividir = (a, b) => {
  if (b !== 0) {
    return a / b;
  }
  return "Erro: Divisão por zero!";
};

console.log("5. Arrow Functions:");
console.log(`10 ÷ 2 = ${dividir(10, 2)}`);
console.log(`8 ÷ 0 = ${dividir(8, 0)}`);
console.log("");

// Exemplo 6: Arrow Function de uma linha
const quadrado = (x) => x * x; // Parênteses opcionais para um parâmetro
const cubo = (x) => x * x * x;

console.log("6. Arrow Functions de uma linha:");
console.log(`5² = ${quadrado(5)}`);
console.log(`3³ = ${cubo(3)}`);
console.log("");
