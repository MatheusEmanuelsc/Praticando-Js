/* 
Enunciado:
Neste exercício, você deve criar uma classe para calcular o desconto no preço de um produto
aplicando uma taxa percentual de desconto.
A classe deve ter um método que recebe o preço original do produto e retorna um objeto 
com o preço original, o valor do desconto e o preço final após aplicar o desconto.
Os valores serão capturados via parametros do terminal.

IMPORTANTE: O cálculo do desconto deve ser feito considerando que o preço original já inclui o imposto.
Portanto, o método deve calcular o preço sem imposto antes de aplicar o desconto.
Isso significa que o preço original deve ser dividido pelo fator (1 + taxa de imposto/100) 
para obter o preço sem imposto, e então aplicar a taxa de desconto sobre esse valor.

------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

// buscar os dados do terminal
const args = process.argv.slice(2);

// validar a existência dos dados necessários
if(args.length !== 2){
    console.error("Defina os dois valores: preço (com imposto) e valor do imposto");
    process.exit(1);
}

const precoOriginal = parseFloat(args[0]);
const taxaDesconto = parseFloat(args[1]);

// validar os valores
if(isNaN(precoOriginal) || isNaN(taxaDesconto)){
    console.error("Defina os dois valores: preço (com imposto) e valor do imposto");
    process.exit(1);
}

// classe de desconto
class CalculadoraDeDesconto {
    constructor(taxaDesconto) {
        this.taxaDesconto = taxaDesconto
    }

    calcular(precoComImposto){
        const precoSemImposto = precoComImposto / (1 + this.taxaDesconto / 100);
        const valordDesconto = precoComImposto - precoSemImposto;

        return {
            precoOriginal: precoComImposto.toFixed(2),
            valordDesconto: valordDesconto.toFixed(2),
            precoFinal: precoSemImposto.toFixed(2)
        };
    }
}

const calculadora = new CalculadoraDeDesconto(taxaDesconto);
const resultado = calculadora.calcular(precoOriginal);

// exibir o resultado final
console.log("Resultado do cálculo do desconto:");
console.log(`Preço original: ${resultado.precoOriginal} $`);
console.log(`Valor do desconto: ${resultado.valordDesconto} $`);
console.log(`Preço final: ${resultado.precoFinal} $`);