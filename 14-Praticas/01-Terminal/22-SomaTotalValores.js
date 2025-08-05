/* 
Enunciado:
Somar o total dos valores de um array utilizando o método `Array.reduce()`.
A coleção de números deve ser criada aleatoriamente, com 20 números entre 1 e 100.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

function criarNumerosAleatorios(qtd){
    let numeros = [];
    for(let i = 0; i < qtd; i++){
        numeros.push(Math.floor(Math.random() * 100) + 1);
    }
    return numeros;
}

const numeros = criarNumerosAleatorios(2);

let total = numeros.reduce((acc, num) => acc + num, 0);
console.log(numeros);
console.log(`Total: ${total}`);