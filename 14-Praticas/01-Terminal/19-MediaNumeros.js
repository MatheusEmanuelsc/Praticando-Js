/* 
Enunciado:

O usuário pode fornecer quantos números quiser, e o script deve calcular a média desses números.

*/



const args = process.argv.slice(2);


const numeros = args
  .map(arg => parseInt(arg))
  .filter(num => !isNaN(num));


function calcularMedia() {
  if (numeros.length === 0) {
    console.log('Nenhum número válido foi fornecido para calcular a média.');
    return;
  }


  const soma = numeros.reduce((acc, num) => acc + num, 0);

  const media = soma / numeros.length;

  console.log(`A média dos números fornecidos é: ${media}`);
}

calcularMedia();