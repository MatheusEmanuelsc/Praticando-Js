/* 
Enunciado:
Vamos criar uma classe para calcular a sequência de Fibonacci.
A sequência de Fibonacci é uma série de números onde cada número é a soma dos dois anteriores, começando com 0 e 1.
Exemplo:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
A classe deve ter um método que recebe um número inteiro positivo 'n'
e retorna um array com os 'n' primeiros números da sequência de Fibonacci.

A sequência de Fibonacci é frequentemente usada em matemática, ciência da computação e teoria dos números.
Tem aplicações em algoritmos, análise de complexidade e até mesmo em arte e natureza.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

// capturar os dados do terminal
let numero = parseInt(process.argv[2]);

// validar o valor
if(isNaN(numero) || numero < 0){
    console.error("Indique um valor inteiro positivo");
    process.exit(1);
}

class CalculadoraDeFibonacci {
    constructor(numero) {
        this.numero = numero;
    }

    calcular(){
        if(this.numero === 0) return [];
        if(this.numero === 1) return [0];

        const fibo = [0,1];
        for(let i = 2; i <= this.numero; i++){
            fibo[i] = fibo[i-2] + fibo[i-1];
        }
        return fibo;
    }
}

const calculadora = new CalculadoraDeFibonacci(numero);
const resultado = calculadora.calcular();
console.log(`Os primeiros ${numero} números da sequência de Fibonacci são:`);
console.log(resultado.join(", "));