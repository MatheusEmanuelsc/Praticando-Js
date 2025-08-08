/* 
Enunciado:
Neste exercício, você irá criar uma classe que calcula porcentagens.
A classe deve ter um método que recebe dois números: o valor total e o valor parcial.
O método deve retornar a porcentagem do valor parcial em relação ao valor total.
Os valores devem ser passados como argumentos para o método.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

const args = process.argv.slice(2);

// validar se temos os valores necessários
if(args.length != 2 || isNaN(args[0]) | isNaN(args[1])){
    console.error("Por favor indique dois valores");
    process.exit(1);
}

const valorTotal = parseFloat(args[0]);
const valorParcial = parseFloat(args[1]);

class CalculadoraPorcentagem{
    calcularPorcentagem(valorTotal, valorParcial){
        if(valorTotal === 0){
            throw new Error("O valor total não pode ser zero!");
        }
        return (valorParcial / valorTotal) * 100;
    }
}

const calculadoraDePorcentagem = new CalculadoraPorcentagem();

try {
    
    const porcentagem = calculadoraDePorcentagem.calcularPorcentagem(valorTotal, valorParcial);
    console.log(`A porcentagem de ${valorParcial} em relação ao ${valorTotal} é: ${porcentagem.toFixed(2)} %`);
} catch (error) {
    console.error(error);
}