/* 
Enunciado:
Verificar se um número é par ou ímpar.
O script recebe um número como argumento, valida se é um número inteiro e verifica se é par ou ímpar.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

const numero = process.argv[2];
if(isNaN(numero) || !Number.isInteger(Number(numero))) {
    console.error('O número não é válido. Deve ser um valor inteiro.');
    process.exit(1);
} else {
    const num = Number(numero);
    if(num % 2 === 0){
        console.log(`O número ${num} é par.`);
    } else {
        console.log(`O número ${num} é ímpar.`);
    }
}