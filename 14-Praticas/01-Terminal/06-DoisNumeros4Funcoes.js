// Declara duas variáveis num1 e num2, e atribui a elas dois números inteiros.
// Define quatro funções: soma, subtracao, multiplicacao e divisao.
// Cada função recebe dois parâmetros e retorna o resultado da operação correspondente.

// Apresentar os resultados no terminal com o seguinte formato:

// a + b = resultado

let num1 = 7;
let num2 = 5;

function soma(val1, val2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

function subtracao(val1, val2) {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
}

function multiplicacao(val1, val2) {
  console.log(`${num1} x ${num2} = ${num1 * num2}`);
}

function divisao(val1, val2) {
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
}

soma(num1, num2);
subtracao(num1, num2);
multiplicacao(num1, num2);
divisao(num1, num2);
