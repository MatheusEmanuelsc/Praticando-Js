/* 
Enunciado:
Vamos buscar os dados gerados no exercício anterior e trazer para o interior da pasta
deste novo script.
Agora vamos ler o arquivo "dados.json" e exibir os dados no terminal em formato de tabela.
Isso significa que vamos ter que "tratar" os dados lidos do arquivo JSON
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

const path = "./dados.json";
const fs = require('fs');
fs.readFile(path, 'utf8', (erro, data) => {
    if(erro){
        console.error("Aconteceu um erro na leitura do arquivo");
        process.exit(1);
    }

    try {
        const dados = JSON.parse(data);
        console.table(dados);
    } catch(error) {
        console.error("Aconteceu um erro na leitura do arquivo", error.message);
    }
});
