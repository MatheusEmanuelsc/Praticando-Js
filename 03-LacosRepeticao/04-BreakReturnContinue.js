// ===== break, continue e return em JavaScript =====

// --- break ---
// Encerra totalmente o loop quando é executado

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    // Quando i for igual a 5, o loop será interrompido completamente
    console.log("Parando o loop no número:", i);
    break;
  }
  console.log("Número:", i);
}

// -----------------------------------------------------

// --- continue ---
// Pula a iteração atual e vai para a próxima

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    // Quando i for igual a 3, pula essa iteração e continua com o próximo número
    console.log("Pulando o número:", i);
    continue;
  }
  console.log("Número válido:", i);
}

// -----------------------------------------------------

// --- return ---
// Interrompe a execução de uma função e retorna um valor (ou nada)

function verificarNumero(num) {
  if (num < 0) {
    // Se o número for negativo, retorna uma mensagem e encerra a função
    return "Número inválido";
  }

  // Se não for negativo, continua aqui e retorna outro resultado
  return "Número válido";
}

// Chamando a função e exibindo o resultado
console.log(verificarNumero(-5)); // → "Número inválido"
console.log(verificarNumero(10)); // → "Número válido"

// -----------------------------------------------------

// RESUMO:
// - break → interrompe o loop imediatamente
// - continue → pula a iteração atual do loop
// - return → sai de uma função e pode retornar um valor
