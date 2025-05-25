// ==============================
// 🎯 TRATAMENTO DE EXCEÇÕES
// ==============================

/*
 try:     bloco onde você coloca o código que pode gerar erro
 catch:   executado se um erro acontecer no try
 finally: (opcional) sempre executa, com ou sem erro
 throw:   serve para lançar manualmente um erro
*/

function dividir(a, b) {
  try {
    // Verifica se os argumentos são números
    if (typeof a !== "number" || typeof b !== "number") {
      // Lança um erro manualmente
      throw new Error("Os parâmetros devem ser números.");
    }

    // Verifica se o divisor é zero
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }

    // Se tudo estiver certo, realiza a divisão
    const resultado = a / b;
    console.log("Resultado:", resultado);
    return resultado;
  } catch (erro) {
    // Captura e exibe o erro
    console.error("Erro capturado:", erro.message);
  } finally {
    // Sempre executa, com ou sem erro
    console.log("Operação finalizada (try/catch/finally).");
  }
}

// ✅ Exemplo de uso:
dividir(10, 2); // Resultado: 5
dividir(10, 0); // Erro: divisão por zero
dividir(10, "a"); // Erro: parâmetros inválidos
