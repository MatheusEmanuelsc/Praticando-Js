/* 
Enunciado:
Vamos criar um script que escreve dados em um arquivo.
Os dados que vamos escrever é a sequência da tabuada de um número fornecido via terminal.
A tabuada deve ser escrita em um arquivo chamado "tabuada.txt".
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

// carregar o módulo de 'fs' do NodeJS
const fs = require('fs');

// capturar o número da tabuada que vamos calcular e escrever no arquivo
const numero = parseInt(process.argv[2]);

// validar o número
if(isNaN(numero) || numero < 1){
    console.error("Indique um valor numérico positivo maior que zero.");
    process.exit(1);
}

function gerarTabuada(numero){
    let tabuada = '';
    for(let i = 1; i <= 10; i++){
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }
    return tabuada;
}

const tabuada = gerarTabuada(numero);

// escrever o resultado num arquivo
fs.writeFile('tabuada.txt', tabuada, (erro) => {
    if(erro){
        console.error("Erro ao escrever o arquivo", erro);
        process.exit(1);
    }
    console.log(`Tabuada do ${numero} escrita com sucesso no arquivo "tabuada.txt"`);
});