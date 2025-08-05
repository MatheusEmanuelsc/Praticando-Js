/* 
Enunciado:
Separar números pares e ímpares de um array utilizando o método `Array.filter()`.
A coleção de números deve ser criada aleatoriamente, com 20 números entre 1 e 100.
Deve ser apresentado o array original, o array de números pares e o array de números ímpares.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/


function gerarNumeros(numeroMaximo) {
   return Math.floor((Math.random() * numeroMaximo) + 1)
}
let numeros =[];
function criarArray(qtd) {
    
    for (let i = 0; i <qtd; i++) {
        numeros.push(gerarNumeros(100))
        
    }
    return numeros
}

console.log('Numeros gerados : '+criarArray(20));

let numerosPares = numeros.filter(n => n % 2 === 0);
let numerosImpares = numeros.filter(n => n % 2 !== 0);

console.log('Numeros pares : ' + numerosPares);

console.log('Numeros impares : ' + numerosImpares);