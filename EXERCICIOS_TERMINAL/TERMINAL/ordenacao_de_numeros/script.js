/* 
Enunciado:
A aplicação vai gerar uma coleção de 20 números aleatórios entre 0 e 2000 e a coleção deve ser
ordenada em ordem crescente e decrescente.
A aplicação deve exibir os números ordenados no terminal.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

let numeros = Array.from({length: 20}, () => Math.floor(Math.random() * 2000));

// forma incorreta de ordenação
// numeros.sort();
// console.log(numeros.join(", "));

// forma correta de ordenação
// numeros.sort((a, b) => a - b);
// console.log(numeros.join(", "));

// ordenação crescente para novo array
let numerosCrescente = [...numeros].sort((a, b) => a - b);
let numerosCrescente1 = numeros.toSorted((a, b) => a - b);
// console.log(numerosCrescente1.join(", "));

// ordenação decrescente para o array original
// numeros.sort((a, b) => b - a);

// ordenação decrescente para novo array
let numerosDecrescente = [...numeros].sort((a, b) => b - a);
let numerosDecrescente1 = numeros.toSorted((a, b) => b - a);
console.log(numerosDecrescente.join(", "));
