/* 
Enunciado:
O objetivo deste exercício é efetuar o cálculo do fatorial de um número inteiro positivo.
O fatorial de um número 'n' é o produto de todos os números inteiros positivos de 1 até n.
O produto significa que o fatorial de 5 (5!) é 5 * 4 * 3 * 2 * 1 = 120.

Os factoriais são frequentemente usados em matemática, estatística e ciência da computação.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

let numero = parseInt(process.argv[2]);

// validar o número
if(isNaN(numero) || numero < 0){
    console.error("O valor tem que ser um número inteiro positivo");
    process.exit(1);
}

class CalculadoraDeFatorial{
    constructor(numero){
        this.numero = numero;
    }

    calcular(){
        if(this.numero === 0 || this.numero === 1){
            return 1;
        }

        let resultado = 1;
        for(let i = 2; i <= this.numero; i++){
            resultado *= i;
        }

        return resultado
    }
}

const calculadora = new CalculadoraDeFatorial(numero);
const resultado = calculadora.calcular();
console.log(`O fatorial de ${numero} é: ${resultado}`);