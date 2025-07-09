/* 
Enunciado:
Neste exercício, vamos criar uma coleção de dados (objetos)
Cada objeto deve ter as seguintes propriedades:
- id: um número inteiro único
- nome: uma string representando o nome de uma pessoa
- email: uma string representando o email da pessoa
Após a criação da coleção, vamos escrever esses dados em um arquivo JSON chamado "dados.json".
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

let dados = [];

for(let i = 1; i <= 10; i++){
    dados.push({
        id: i,
        nome: `Pessoa ${i}`,
        email: `pessoa${i}@gmail.com`
    });
}

// importar o módulo fs do NodeJs
const fs = require('fs');

const dadosJson = JSON.stringify(dados, null, 2);

// escrever dados no arquivo
fs.writeFile('dados.json', dadosJson, (erro) => {
    if(erro){
        console.error("Aconteceu um erro na escrita do arquivo");
        process.exit(1);
    }
    console.log("Dados escritos com sucesso.");
});