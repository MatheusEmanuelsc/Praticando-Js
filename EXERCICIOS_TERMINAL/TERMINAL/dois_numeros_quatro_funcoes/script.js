/* 
Enunciado:
Declara duas variáveis num1 e num2, e atribui a elas dois números inteiros.
Define quatro funções: soma, subtracao, multiplicacao e divisao.
Cada função recebe dois parâmetros e retorna o resultado da operação correspondente.

Apresentar os resultados no terminal com o seguinte formato:

a + b = resultado

------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

let num1 = 10;
let num2 = 5;

console.log(num1 + " + " + num2 + " = " + soma(num1, num2));
console.log(num1 + " - " + num2 + " = " + subtracao(num1, num2));
console.log(num1 + " x " + num2 + " = " + multiplicacao(num1, num2));
console.log(num1 + " : " + num2 + " = " + divisao(num1, num2));

function soma(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    if(b === 0){
        return "Erro: divisão por zero";
    }
    return a / b;
}