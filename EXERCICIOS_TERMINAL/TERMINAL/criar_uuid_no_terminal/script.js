/* 
Enunciado:
Cria um script que gera um UUID (v4) e o imprime no terminal.

NOTA: este UUID (Universally Unique Identifier) vai ser criado com JS puro, sem bibliotecas externas.
Apenas com caracteres alfanuméricos válidos na escala hexadecimal (0-9, a-f) e com o formato padrão de UUID.

exemplo de UUID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

IMPORTANTE: não vai ser criado com a norma RFC 4122 (que é a norma que define o UUID v4), mas
sim apenas com o formato padrão de UUID.

------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

function generateUUID(){
    let uuid = '';
    for(let i = 0; i < 36; i++){

        if(i === 8 || i === 13 || i === 18 || i === 23){
            uuid += '-';
        } else {
            uuid += Math.floor(Math.random() * 16).toString(16);
        }
    }
    return uuid;
}

console.log(generateUUID());