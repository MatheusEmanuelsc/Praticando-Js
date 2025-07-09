/* 
Enunciado:
O JavaScript que usamos no browser não possui acesso direto ao sistema de arquivos
do computador por questões de segurança, para que não seja possível ler ou modificar arquivos.
Se isso fosse possível, qualquer site poderia ler seus arquivos pessoais,
como fotos, documentos e senhas, o que seria um grande risco à privacidade.

Se pretendemos usar o JavaScript para ler arquivos, precisamos usar o Node.js,
que é um ambiente de execução do JavaScript fora do browser.

Como temos o Node.js instalado, podemos criar um script que leia dados de um arquivo.
O objetivo deste exercício é ler dados de um arquivo de texto e exibir seu conteúdo no terminal.

------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

// importar o módulo 'fs' do NodeJS para manipulação de arquivos
const fs = require('fs');

// definir o caminho (path) do ficheiro de texto
const caminhoDoArquivo = './dados.txt';

function lerArquivo(caminho){

    fs.readFile(caminho, 'utf8', (erro, dados) => {
        if(erro){
            console.error("Aconteceu um erro a ler o arquivo.");
            return;
        }

        console.log("Conteúdo do arquivo:");
        console.log(dados);
    });
}

lerArquivo(caminhoDoArquivo);