/* 
Enunciado:
O usuário vai poder inserir várias palavras, e a aplicação deve ordenar essas palavras em ordem alfabética.
A aplicação deve exibir as palavras ordenadas no terminal.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

let palavras = process.argv.slice(2);

if(palavras.length === 0){
    console.error("Nenhuma palavra foi inserida.");
    process.exit(1);
}

// ordernar as palavras por ordem alfabética (crescente)

// palavras.sort();
// console.log("Palavras ordenadas alfabeticamente de forma crescente:");
// console.log(palavras.join(", "));

// ordernar as palavras por ordem alfabética (decrescente)

// palavras.sort();
// palavras.reverse();
// console.log("Palavras ordenadas alfabeticamente de forma decrescente:");
// console.log(palavras.join(", "));

// ordernar o array inicial sem modificar o original
const palavrasCrescente = [...palavras].sort();
const palavrasDecrescente = [...palavras].sort().reverse();
// ou
const palavrasCrescente1 = palavras.toSorted();
const palavrasDecrescente1 = palavras.toSorted().reverse();

console.log(palavras.join(", "));
console.log(palavrasCrescente.join(", "));
