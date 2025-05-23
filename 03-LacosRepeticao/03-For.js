// ===== Estrutura for em JavaScript =====

// A estrutura for é usada para repetir um bloco de código
// quando já sabemos quantas vezes queremos que ele execute.

// Sintaxe básica do for:
// for (inicialização; condição; incremento) { ... }

for (let i = 1; i <= 5; i++) {
  // 'i' começa em 1
  // enquanto i for menor ou igual a 5, executa o bloco
  // após cada execução, i é incrementado (+1)
  console.log("Repetição número:", i);
}

// -----------------------------------------------------

// Podemos usar o for para percorrer arrays também

let frutas = ["maçã", "banana", "laranja"];

for (let i = 0; i < frutas.length; i++) {
  // 'i' começa em 0 (primeiro índice do array)
  // enquanto i for menor que o tamanho do array, executa
  // incrementa i a cada repetição
  console.log("Fruta:", frutas[i]);
}

// -----------------------------------------------------

// CUIDADO: se esquecer de atualizar a variável de controle (i++),
// pode criar um loop infinito (não acontece nesse caso pois está no for)

// -----------------------------------------------------

// RESUMO DO FOR:
// - Ideal quando você sabe quantas vezes quer repetir
// - Usa 3 partes: inicialização; condição; incremento
