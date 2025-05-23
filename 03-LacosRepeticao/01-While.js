// ===== Laço de repetição while em JavaScript =====

// O loop while executa um bloco de código ENQUANTO a condição for verdadeira.

// Exemplo básico:
let contador = 1;

// Enquanto a variável 'contador' for menor ou igual a 5...
while (contador <= 5) {
  // Mostra o valor atual do contador no console
  console.log("Contador:", contador);

  // Incrementa o valor de 'contador' para evitar loop infinito
  contador++;
}

// -----------------------------------------------------

// Exemplo com uma condição que já começa falsa:
let numero = 10;

// Aqui o loop não será executado nenhuma vez,
// porque a condição já começa como falsa (10 < 5 é false)
while (numero < 5) {
  console.log("Este número nunca será mostrado:", numero);
}

// -----------------------------------------------------

// ATENÇÃO: cuidado com loops infinitos!
// Este tipo de erro acontece quando você esquece de alterar a variável da condição.
// Exemplo (NÃO FAÇA ISSO!):
// while (true) {
//   console.log("Loop infinito...");
// }

// Sempre tenha certeza de que a condição vai se tornar falsa em algum momento.
