/* 
Enunciado:
O objetivo deste exercício é criar uma classe que permita calcular juros simples.
Juros simples são juros calculados apenas sobre o valor principal, sem considerar juros acumulados de períodos anteriores.
Portanto, ao indicar o valor principal, a taxa de juros e o tempo, a classe deve calcular o montante final.
O valor inicial, a taxa de juros e o tempo devem ser passados como parâmetros para o construtor da classe.
- valor inicial - é o dinheiro que você tem no início do período de cálculo.
- taxa de juros - é a porcentagem de juros que será aplicada ao valor inicial, neste caso por cada ano (12 meses).
- tempo - é o período de tempo em meses que os juros serão aplicados.

------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

// capturar os dados do terminal
let valorInicial = parseFloat(process.argv[2]);
let taxaJuros = parseFloat(process.argv[3]);
let tempo = parseInt(process.argv[4]);

// validar os valores
if(isNaN(valorInicial) || isNaN(taxaJuros) || isNaN(tempo)){
    console.error("Indique o valor inicial, a taxa de juros e o tempo em meses");
    process.exit(1);
}

class JurosSimples {

    constructor(vi, tj, meses){
        this.valorInicial = vi;
        this.taxaJuros = tj;
        this.tempo = meses;
    }

    calcularMontante(){
        // M = P + (P * i * t)
        return this.valorInicial + (this.valorInicial * (this.taxaJuros / 100) * (this.tempo / 12));
    }

}

const jurosSimples = new JurosSimples(valorInicial, taxaJuros, tempo);
const montanteFinal = jurosSimples.calcularMontante();
console.log(`O montante final após ${tempo} meses é: ${montanteFinal.toFixed(2)} $`);