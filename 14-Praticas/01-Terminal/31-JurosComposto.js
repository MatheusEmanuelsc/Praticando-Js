/* 
Enunciado:
Neste exercício, o objetivo é criar uma classe que permita calcular juros compostos.
Juros compostos são juros calculados sobre o valor principal e também sobre os juros acumulados de períodos anteriores.
Portanto, ao indicar o valor principal, a taxa de juros e o tempo, a classe deve calcular o montante final.
O valor inicial, a taxa de juros e o tempo devem ser passados como parâmetros para o construtor da classe.
- valor inicial - é o dinheiro que você tem no início do período de cálculo.
- taxa de juros - é a porcentagem de juros que será aplicada ao valor inicial, neste caso por cada ano (12 meses).
- tempo - é o período de tempo em meses que os juros serão aplicados.

IMPORTANTE: Os juros compostos correspondem a juros capitalizados, ou seja, 
os juros anteriores são incorporados ao capital, e os juros futuros são calculados sobre esse novo capital.

Neste exemplo os juros compostos serão calculados mensalmente.

------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

// buscar dados ao terminal
let valorInicial = parseFloat(process.argv[2]);
let taxaJuros = parseFloat(process.argv[3]);
let tempo = parseInt(process.argv[4]);

// validar os valores
if(isNaN(valorInicial) || isNaN(taxaJuros) || isNaN(tempo)){
    console.error("Por favor indique o valor inicial, a taxa de juros e o tempo em meses");
    process.exit(1);
}

class JurosCompostos {
    constructor(valorInicial, taxaJuros, tempo){
        this.valorInicial = valorInicial;
        this.taxaJuros = taxaJuros;
        this.tempo = tempo;
    }

    calcularMontante(){

        let valoresNoTempo = [];
        let montanteFinal = this.valorInicial;
        const taxaDecimal = this.taxaJuros / 100;

        for(let i = 0; i < this.tempo; i++){
            montanteFinal += montanteFinal * taxaDecimal;
            valoresNoTempo.push(montanteFinal);
        }

        return { montanteFinal, valoresNoTempo };
    }
}

const jurosCompostos = new JurosCompostos(valorInicial, taxaJuros, tempo);
const valores = jurosCompostos.calcularMontante();
console.log(`O montante final após ${tempo} meses é: ${valores.montanteFinal.toFixed(2)} $`);

// histórico
valores.valoresNoTempo.forEach((valor, index) => {
    console.log(`Mês ${index + 1}: ${valor.toFixed(2)} $`);
});
