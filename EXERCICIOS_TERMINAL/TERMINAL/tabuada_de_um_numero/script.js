/* 
Enunciado:
Define uma variável myNumber e atribui um número qualquer a ela.
Apresente a tabuada desse número no terminal, de 1 a 10.

NOTA: neste exercício não deve usar loops.
Apresente os resultados num formato de tabela, como no exemplo abaixo:
2 x 1 = 2
2 x 2 = 4
...

------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

const myNumber = 5;
console.table([
    myNumber + " x 1 = " + (myNumber * 1),
    myNumber + " x 2 = " + (myNumber * 2),
    myNumber + " x 3 = " + (myNumber * 3),
    myNumber + " x 4 = " + (myNumber * 4),
    myNumber + " x 5 = " + (myNumber * 5),
    myNumber + " x 6 = " + (myNumber * 6),
    myNumber + " x 7 = " + (myNumber * 7),
    myNumber + " x 8 = " + (myNumber * 8),
    myNumber + " x 9 = " + (myNumber * 9),
    myNumber + " x 10 = " + (myNumber * 10),
]);