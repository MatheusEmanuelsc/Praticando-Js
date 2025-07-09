/* 
Enunciado:
Verificar se uma coleção de números aleatórios são pares ou ímpares.
O script gera um conjunto de números aleatórios e verifica se cada número é par ou ímpar.
Deve ser usada uma função para gerar os números aleatórios e outra para verificar se são pares ou ímpares.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

const quantidade = 20;
let numeros = gerarNumerosAleatorios(quantidade);

// apresentar informação dos números (par ou ímpar)
numeros.forEach(numero => {
    const tipo = verificarParOuImpar(numero);
    console.log(`O número ${numero} é ${tipo}.`);
});

function gerarNumerosAleatorios(qtd){
    const numeros = [];
    for(let i = 0; i < qtd; i++){
        numeros.push(Math.floor(Math.random() * 1000));
    }
    return numeros;
}

function verificarParOuImpar(numero){
    return numero % 2 === 0 ? 'par': 'ímpar';
}