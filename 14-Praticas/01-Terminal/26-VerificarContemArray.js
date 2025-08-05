/* 
Enunciado:
Vamos criar um array com nomes "hardcoded" e passar como argumento para o script um valor.
Pretendemos verificar se o array contém o valor passado como argumento.

*/

let nomes = ["João", "Maria", "Ana", "José", "Pedro"];

     
let valor = process.argv[2];
if(!valor){
    console.log("Insira um nome para pesquisa");
    process.exit(1);
}

function arrayContemValor(array, valor){
    return array.includes(valor);
}

if(arrayContemValor(nomes, valor)){
    console.log(`O array contém o valor "${valor}"`);
} else {
    console.log(`O array não contém o valor "${valor}"`);
}

console.log("Array: ", nomes.join(", "));