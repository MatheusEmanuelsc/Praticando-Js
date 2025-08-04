// Enunciado:
// Verificar se uma coleção de números aleatórios são pares ou ímpares.
// O script gera um conjunto de números aleatórios e verifica se cada número é par ou ímpar.


let quantidade = 20;

function gerarValores(quantidade) {
    let  numeros = [];
    let  numerosPar = [];
    let  numerosImpar = [];
    
    for (let i = 1; i <= quantidade; i++) {
      numeros.push(   Math.floor(Math.random()*100));
        
    }
    
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 ===0) {
            numerosPar.push(numeros[i]);
            continue
        }
        numerosImpar.push(numeros[i]);
    }

    console.log(`Numeros: ${numeros}`);
    console.log(`Numeros Par: ${numerosPar}`);
    console.log(`Numeros Impar: ${numerosImpar}`);
}
 gerarValores(quantidade);