/* 
Enunciado:
Crie um script que receba um argumento e que valide se o argumento foi passado corretamente.
Deve considerar esse argumento como o seu primeiro nome e imprimir no terminal a mensagem "Olá, [primeiro_nome]!".
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

// buscar o argumento no terminal
const argumentos = process.argv;
if(argumentos.length < 3){
    console.log("Por favor, insira o seu primeiro nome como argumento");
    process.exit(1);
}

const firstName = argumentos[2];
console.log(`Olá, ${firstName}!`);
process.exit(0);