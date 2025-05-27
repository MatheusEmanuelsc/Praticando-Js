// ========================================
// 9. IIFE (Immediately Invoked Function Expression)
// ========================================

// Exemplo 12: IIFE
console.log("12. IIFE (Immediately Invoked Function Expression):");

(function () {
  const mensagemPrivada = "Esta função é executada imediatamente!";
  console.log(mensagemPrivada);
})();

// IIFE com parâmetros
(function (nome) {
  console.log(`Olá, ${nome}! Esta é uma IIFE com parâmetro.`);
})("JavaScript");

console.log("");

// ========================================
// 10. MÉTODOS DE OBJETOS
// ========================================

// Exemplo 13: Funções como métodos de objetos
const calculadora = {
  nome: "Calculadora Básica",

  // Método tradicional
  somar: function (a, b) {
    return a + b;
  },

  // Método com sintaxe ES6
  subtrair(a, b) {
    return a - b;
  },

  // Arrow function (cuidado com 'this')
  mostrarInfo: () => {
    return "Calculadora em JavaScript";
  },

  // Método que usa 'this'
  apresentar() {
    return `Eu sou a ${this.nome}`;
  },
};

console.log("13. Métodos de objetos:");
console.log(`Soma: ${calculadora.somar(15, 25)}`);
console.log(`Subtração: ${calculadora.subtrair(20, 8)}`);
console.log(calculadora.mostrarInfo());
console.log(calculadora.apresentar());
console.log("");

// ========================================
// 11. RECURSÃO
// ========================================

// Exemplo 14: Função recursiva para calcular fatorial
function fatorial(n) {
  // Caso base
  if (n <= 1) {
    return 1;
  }
  // Chamada recursiva
  return n * fatorial(n - 1);
}

console.log("14. Recursão:");
console.log(`Fatorial de 5: ${fatorial(5)}`); // 5! = 120
console.log(`Fatorial de 0: ${fatorial(0)}`); // 0! = 1
console.log("");

// Exemplo 15: Fibonacci recursivo
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("15. Fibonacci recursivo:");
console.log("Sequência de Fibonacci (primeiros 8 números):");
for (let i = 0; i < 8; i++) {
  console.log(`F(${i}) = ${fibonacci(i)}`);
}
console.log("");

// ========================================
// 12. FUNÇÕES DE ALTA ORDEM (Higher-Order Functions)
// ========================================

// Exemplo 16: map, filter, reduce
console.log("16. Funções de alta ordem:");

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map: transforma cada elemento
const quadrados = numeros.map((x) => x * x);
console.log(`Números originais: ${numeros}`);
console.log(`Quadrados: ${quadrados}`);

// filter: filtra elementos
const pares = numeros.filter((x) => x % 2 === 0);
console.log(`Números pares: ${pares}`);

// reduce: reduce array a um único valor
const soma = numeros.reduce((acc, x) => acc + x, 0);
console.log(`Soma de todos os números: ${soma}`);
console.log("");

// ========================================
// 13. TRATAMENTO DE ERROS EM FUNÇÕES
// ========================================

// Exemplo 17: Função com tratamento de erros
function dividirSeguro(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Ambos os parâmetros devem ser números");
    }
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida");
    }
    return a / b;
  } catch (error) {
    return `Erro: ${error.message}`;
  }
}

console.log("17. Tratamento de erros:");
console.log(`20 ÷ 4 = ${dividirSeguro(20, 4)}`);
console.log(`10 ÷ 0 = ${dividirSeguro(10, 0)}`);
console.log(`'abc' ÷ 2 = ${dividirSeguro("abc", 2)}`);
console.log("");

// ========================================
// 14. ASYNC/AWAIT (Funções Assíncronas)
// ========================================

// Exemplo 18: Função assíncrona
async function buscarDados() {
  try {
    console.log("18. Funções assíncronas:");
    console.log("Buscando dados...");

    // Simula uma operação assíncrona
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Dados encontrados com sucesso!");
    return { id: 1, nome: "Dados de teste" };
  } catch (error) {
    console.log(`Erro ao buscar dados: ${error.message}`);
  }
}

// Chamando função assíncrona
buscarDados().then((dados) => {
  if (dados) {
    console.log(`Resultado: ${JSON.stringify(dados)}`);
  }
});

// ========================================
// RESUMO DOS CONCEITOS
// ========================================

console.log("\n=== RESUMO DOS CONCEITOS APRENDIDOS ===");
console.log(`
  1. ✅ Declaração de função (function declaration)
  2. ✅ Expressão de função (function expression)
  3. ✅ Arrow functions (ES6+)
  4. ✅ Parâmetros padrão
  5. ✅ Rest parameters (...args)
  6. ✅ Funções como parâmetros (callbacks)
  7. ✅ Funções anônimas
  8. ✅ Closures (fechamentos)
  9. ✅ IIFE (Immediately Invoked Function Expression)
  10. ✅ Métodos de objetos
  11. ✅ Recursão
  12. ✅ Funções de alta ordem (map, filter, reduce)
  13. ✅ Tratamento de erros
  14. ✅ Funções assíncronas (async/await)
  `);

console.log("🎉 Parabéns! Você completou o tutorial de funções em JavaScript!");
