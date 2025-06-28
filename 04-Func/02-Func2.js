// ========================================
// 4. PARÂMETROS PADRÃO (Default Parameters)
// ========================================

// Exemplo 7: Parâmetros com valores padrão
function criarMensagem(nome = "Usuário", idade = 18) {
  return `Nome: ${nome}, Idade: ${idade} anos`;
}

console.log("7. Parâmetros padrão:");
console.log(criarMensagem()); // Usa valores padrão
console.log(criarMensagem("Ana")); // Usa nome fornecido, idade padrão
console.log(criarMensagem("Carlos", 25)); // Usa ambos fornecidos
console.log("");

// ========================================
// 5. REST PARAMETERS (...args)
// ========================================

// Exemplo 8: Função que aceita número variável de argumentos
function somarTodos(...numeros) {
  let soma = 0;
  for (let numero of numeros) {
    soma += numero;
  }
  return soma;
}

console.log("8. Rest Parameters:");
console.log(`Soma de 1, 2, 3: ${somarTodos(1, 2, 3)}`);
console.log(`Soma de 5, 10, 15, 20: ${somarTodos(5, 10, 15, 20)}`);
console.log(`Soma de apenas 42: ${somarTodos(42)}`);
console.log("");

// ========================================
// 6. FUNÇÕES COMO PARÂMETROS (Callbacks)
// ========================================

// Exemplo 9: Função que recebe outra função como parâmetro
function executarOperacao(a, b, operacao) {
  return operacao(a, b);
}

// Definindo algumas operações
const adicao = (x, y) => x + y;
const subtracao = (x, y) => x - y;
const multiplicacao = (x, y) => x * y;

console.log("9. Funções como parâmetros (Callbacks):");
console.log(`10 + 5 = ${executarOperacao(10, 5, adicao)}`);
console.log(`10 - 5 = ${executarOperacao(10, 5, subtracao)}`);
console.log(`10 × 5 = ${executarOperacao(10, 5, multiplicacao)}`);
console.log("");

// ========================================
// 7. FUNÇÕES ANÔNIMAS
// ========================================

// Exemplo 10: Usando funções anônimas com setTimeout
console.log("10. Funções anônimas:");
console.log("Executando função anônima em 1 segundo...");

setTimeout(function () {
  console.log("Esta é uma função anônima executada após 1 segundo!");
}, 1000);

// Com arrow function
setTimeout(() => {
  console.log("Esta é uma arrow function anônima executada após 2 segundos!");
}, 2000);

console.log("");

// ========================================
// 8. CLOSURES (Fechamentos)
// ========================================

// Exemplo 11: Demonstração de closure
function criarContador() {
  let count = 0; // Variável privada

  return function () {
    count++; // Acessa variável do escopo pai
    return count;
  };
}

console.log("11. Closures:");
const contador1 = criarContador();
const contador2 = criarContador();

console.log(`Contador 1: ${contador1()}`); // 1
console.log(`Contador 1: ${contador1()}`); // 2
console.log(`Contador 2: ${contador2()}`); // 1 (independente)
console.log(`Contador 1: ${contador1()}`); // 3
console.log("");
