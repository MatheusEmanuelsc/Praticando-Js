/* 
Enunciado:

Para resolver este exercício, você deve:
- permitir que o usuário passe uma frase como argumento no terminal;
- contar quantas vogais (a, e, i, o, u) existem na frase;
- recorrer a métodos de arrays para contar as vogais;
- exibir o resultado no terminal.

IMPORTANTE: vogais acentuadas não serão consideradas neste exercício.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

let  frase  =" seilar man";

const vogais = ['a','e','i','o','u'];

const  contadorVogais = frase
.toLowerCase()
.split('')
.filter(char => vogais.includes(char))
.length;

console.log(`A frase "${frase}" contem ${contadorVogais} vogais`);