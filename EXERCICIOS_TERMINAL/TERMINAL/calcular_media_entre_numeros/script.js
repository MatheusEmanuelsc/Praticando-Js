/* 
Enunciado:
Calcular a média entre números inteiros fornecidos pelo usuário.
O usuário pode fornecer quantos números quiser, e o script deve calcular a média desses números.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

const numeros = process.argv.slice(2).map(Number);

// verifica se foram fornecidos números
if(numeros.length === 0){
    console.error("Não foram inseridos números.");
    process.exit(1);
}

// verificar se tudo o que foi inserido é válido
if(numeros.some(isNaN)){
    console.error("Tem que indicar apenas números");
    process.exit(1);
}

const total = numeros.reduce((acc, num) => acc + num, 0);
const media = total / numeros.length;
console.log(`A média dos números fornecidos é: ${media}`);
