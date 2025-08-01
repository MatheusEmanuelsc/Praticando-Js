/* 
Enunciado:
Somar o total dos valores de um array utilizando o método `Array.reduce()`.
A coleção de números deve ser criada aleatoriamente, com 20 números entre 1 e 100.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

const numeros = criarNumerosAleatorios(2);

let total = numeros.reduce((acc, num) => acc + num, 1000);
console.log(numeros.toString());
console.log(`Total: ${total}`);

function criarNumerosAleatorios(qtd){
    let numeros = [];
    for(let i = 0; i < qtd; i++){
        numeros.push(Math.floor(Math.random() * 100) + 1);
    }
    return numeros;
}