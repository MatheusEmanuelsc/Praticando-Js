/* 
Enunciado:
Vamos criar uma classe que vai indicar, de acordo com o a altura fornecida pelo usuário,
qual é o peso ideal, de acordo com a fórmula do IMC (Índice de Massa Corporal).
O IMC é calculado pela fórmula: IMC = peso / (altura * altura).


------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

// capturar os dados do terminal
let nome = process.argv[2];
let altura = parseFloat(process.argv[3]);

// verifica se os valores são válidos
if(!nome || isNaN(altura)){
    console.error("Indique o nome e altura em metros");
    process.exit(1);
}

// classe para indicar o peso ideal a partir da altura
class PesoIdeal {

    constructor(nome, altura){
        this.nome = nome;
        this.altura = altura;
    }

    calcularPesoIdeal(){
        const imcIdealMin = 18.5;
        const imcIdealMax = 24.9;

        const pesoIdealMinimo = imcIdealMin * (this.altura * this.altura);
        const pesoIdealMaximo = imcIdealMax * (this.altura * this.altura);

        return { pesoIdealMinimo, pesoIdealMaximo };
    }
}

// apresentar os dados no terminal
const pesoIdeal = new PesoIdeal(nome, altura);
const { pesoIdealMinimo, pesoIdealMaximo } = pesoIdeal.calcularPesoIdeal();
console.log(`Olá, ${nome}`);
console.log(`Para uma altura de ${altura} metros, o peso ideal está entre ${pesoIdealMinimo.toFixed(2)} kg e ${pesoIdealMaximo.toFixed(2)} kg.`);;
