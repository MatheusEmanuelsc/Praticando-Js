/* 
Enunciado:
Vamos criar uma classe que vai ser responsável por calcular o IMC (Índice de Massa Corporal).
O IMC é calculado pela fórmula: IMC = peso / (altura * altura).

- O peso deve ser informado em quilogramas (kg);
- A altura deve ser informada em metros (m);

Na execução do script, o usuário deve informar:
O nome do usuário;
O peso do usuário;
A altura do usuário.
A aplicação deve exibir o IMC do usuário e uma mensagem indicando se ele está abaixo do peso, 
no peso ideal ou acima do peso.

Referência:
O IMC é classificado da seguinte forma:
- Abaixo do peso: IMC < 18.5
- Peso ideal: 18.5 <= IMC < 24.9
- Acima do peso: IMC >= 24.9

IMPORTANTE: O IMC não distingue entre massa magra e massa gorda, 
portanto, é apenas uma referência geral e não deve ser usado como um diagnóstico médico.

------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

// capturar os dados do terminal
let nome = process.argv[2];
let peso = parseFloat(process.argv[3]);
let altura = parseFloat(process.argv[4]);

// validar se os valores estão corretos
if(!nome || isNaN(peso) || isNaN(altura)){
    console.error("Por favor indique o nome, peso (kg) e altura (m)");
    process.exit(1);
}

class IMC {
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        // IMC = peso / (altura * altura)
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC(){
        let valor = this.calcularIMC();
        if(valor < 18.5){
            return "Abaixo do peso ideal";
        } else if(valor >= 18.5 && valor < 24.9) {
            return "Peso ideal";
        } else {
            return "Acima do peso ideal";
        }
    }
}

// obter os dados do IMC do indivíduo
console.log(`Calculando o IMC de ${nome}...`);
const imc = new IMC(nome, peso, altura);
console.log(`IMC: ${imc.calcularIMC().toFixed(2)}`);
console.log(`Classificação: ${imc.classificarIMC()}`);
