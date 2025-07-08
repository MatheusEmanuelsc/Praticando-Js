/*
    Define uma variavel myNumber e atribui um numero qualquer  ela.

    Nota: neste exercicio não se deve usar loop
    Apresente os resultados num formato de tabela , como no exemplo abaixo:
    2 x 1 = 2
    2 x 2 = 4
*/
let myNumber = 5;
let tabuada = [
  { operação: `${myNumber} x 1`, resultado: myNumber * 1 },
  { operação: `${myNumber} x 2`, resultado: myNumber * 2 },
  { operação: `${myNumber} x 3`, resultado: myNumber * 3 },
  { operação: `${myNumber} x 4`, resultado: myNumber * 4 },
  { operação: `${myNumber} x 5`, resultado: myNumber * 5 },
  { operação: `${myNumber} x 6`, resultado: myNumber * 6 },
  { operação: `${myNumber} x 7`, resultado: myNumber * 7 },
  { operação: `${myNumber} x 8`, resultado: myNumber * 8 },
  { operação: `${myNumber} x 9`, resultado: myNumber * 9 },
  { operação: `${myNumber} x 10`, resultado: myNumber * 10 },
];

console.table(tabuada);
