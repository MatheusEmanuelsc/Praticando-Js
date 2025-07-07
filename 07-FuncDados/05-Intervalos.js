// Intervalos em JavaScript permitem executar código repetidamente ou após um atraso.

// setInterval: Executa uma função repetidamente em um intervalo de tempo especificado (em milissegundos).
const intervalo = setInterval(() => {
  console.log("Executa a cada 2 segundos");
}, 2000);

// clearInterval: Para a execução de um setInterval usando seu identificador.
setTimeout(() => {
  clearInterval(intervalo);
  console.log("Intervalo parado após 6 segundos");
}, 6000);

// setTimeout: Executa uma função uma única vez após um atraso especificado (em milissegundos).
setTimeout(() => {
  console.log("Executa após 3 segundos");
}, 3000);

// clearTimeout: Cancela a execução de um setTimeout antes que ele ocorra.
const timeout = setTimeout(() => {
  console.log("Este não será executado");
}, 5000);
clearTimeout(timeout);

// Observação: Tanto setInterval quanto setTimeout são assíncronos, não bloqueando a execução do código.
console.log("Este log aparece imediatamente");
