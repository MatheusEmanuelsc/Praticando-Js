/* 
Enunciado:
Multiplicar cada valor de um array por um número específico e retornar um novo array com os resultados.
Para este exercícios vamos usar o método `Array.map()`.
A coleção de números deve ser criada aleatoriamente, com 20 números entre 1 e 100.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

let numeros = criarNumerosAleatorios(20);
let multiplicador = 2367;

let numerosMultiplicados = numeros.map( n => n * multiplicador);

console.log("Array original: ", numeros.toString());
console.log("Array multiplicado: ", numerosMultiplicados.toString());

function criarNumerosAleatorios(qtd){
    let numeros = [];
    for(let i = 0; i < qtd; i++){
        numeros.push(Math.floor(Math.random() * 100) + 1);
    }
    return numeros;
}