/* 
Enunciado:
Cria um script que consiga apresentar no terminal quais são os argumentos passados na linha de comando.
Deves apresentar a lista de argumentos em formato de tabela.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

const argumentos = process.argv;
console.table(argumentos);