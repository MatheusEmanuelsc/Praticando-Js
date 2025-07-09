/* 
Enunciado:
Separar números pares e ímpares de um array utilizando o método `Array.filter()`.
A coleção de números deve ser criada aleatoriamente, com 20 números entre 1 e 100.
Deve ser apresentado o array original, o array de números pares e o array de números ímpares.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

let min = 1;
let max = 100;
let totalNumeros = 20;
let numeros = criarNumerosAleatorios(totalNumeros, min, max);

// criar dois arrays, um para os números pares e outro para os ímpares
let numerosPares =  numeros.filter(numero => numero % 2 === 0);
let numerosImpares =  numeros.filter(numero => numero % 2 !== 0);

// exibir os resultados
console.log("Número originais: ", numeros.toString());
console.log("Número pares: ", numerosPares.toString());
console.log("Número ímpares: ", numerosImpares.toString());

function criarNumerosAleatorios(total, min, max){
    let numeros = [];
    for(let i = 0; i < total; i++){
        numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numeros;
}