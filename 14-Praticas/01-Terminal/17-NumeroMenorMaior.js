/* 
Enunciado:
Encontrar o número mais alto e o número mais baixo num array que é construído
aleatoriamente com números inteiros entre 1 e 1000.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

const numeros  = criarNumerosAleatorios(10);

function criarNumerosAleatorios(quantidadeDeNumeros) {
    const numeros = [];

    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numeros.push( Math.floor(Math.random()*1000)+1);
        
    }
    return numeros
}



const numeroMaisAlto = Math.max(...numeros);
console.log(`O número mais alto é: ${numeroMaisAlto}`);


const numeroMaisBaixo = Math.min(...numeros);
console.log(`O número mais baixo é: ${numeroMaisBaixo}`);
