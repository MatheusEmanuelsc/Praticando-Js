/* 
Enunciado:
Define uma variável myNumber e atribui um número qualquer a ela.
Apresente a tabuada desse número no terminal, de 1 a 10.

Deves usar um loop para gerar os resultados.
Apresente os resultados num formato de tabela, como no exemplo abaixo:
2 x 1 = 2
2 x 2 = 4
...

------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

const myNumber = 5;
let results = [];

for(let i = 1; i <= 10; i++){
    results.push(myNumber + " x " + i + " = " + (myNumber * i));
}

console.table(results);