/* 
Enunciado:
Verificar se um número é primo. Um número é considerado primo se ele for 
maior que 1 e não tiver divisores além de 1 e ele mesmo.

O número é passado como argumento do script.

Qual é a importância de saber se um número é primo?
A importância de saber se um número é primo está relacionada a várias áreas da matemática e da ciência da computação,
incluindo teoria dos números, criptografia e algoritmos de pesquisa.

Os números primos são:
2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97...

------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

const numero = parseInt(process.argv[2]);
if(isNaN(numero) || numero < 2) {
    console.error("Por favor insira um número inteiro superior a 1.");
    process.exit(1);
}

// verifica se o número é primo ou não
if(isPrimo(numero)){
    console.log(`O número ${numero} é primo.`);
} else {
    console.log(`O número ${numero} não é primo.`);
}

function isPrimo(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true; 
}