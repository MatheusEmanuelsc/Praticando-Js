// ===== RESUMO DOS PRINCIPAIS MÉTODOS DE ARRAY EM JAVASCRIPT =====
// push()      → Adiciona elemento no final do array
// pop()       → Remove o último elemento do array
// unshift()   → Adiciona elemento no início do array
// shift()     → Remove o primeiro elemento do array
// length      → Retorna o tamanho do array
// includes()  → Verifica se um valor existe no array (retorna true/false)
// indexOf()   → Retorna o índice de um valor no array (ou -1 se não existir)
// splice()    → Remove ou substitui elementos a partir de um índice
// sort()      → Ordena os elementos do array (alfabética por padrão)
// join()      → Junta os elementos em uma string, com separador definido
// for         → Percorre o array por índice
// for...of    → Percorre diretamente os valores do array

// ===== EXEMPLOS DE USO =====

let frutas = ["maçã", "banana", "laranja"]; // array com 3 elementos

// Acessando elementos pelo índice
console.log(frutas[0]); // "maçã"
console.log(frutas[1]); // "banana"
console.log(frutas[2]); // "laranja"

// Modificando um elemento
frutas[1] = "uva";
console.log(frutas); // ["maçã", "uva", "laranja"]

// push() → adiciona no final
frutas.push("abacaxi");
console.log(frutas); // ["maçã", "uva", "laranja", "abacaxi"]

// pop() → remove o último
frutas.pop();
console.log(frutas); // ["maçã", "uva", "laranja"]

// unshift() → adiciona no início
frutas.unshift("morango");
console.log(frutas); // ["morango", "maçã", "uva", "laranja"]

// shift() → remove o primeiro
frutas.shift();
console.log(frutas); // ["maçã", "uva", "laranja"]

// length → tamanho do array
console.log("Quantidade de frutas:", frutas.length); // 3

// Percorrendo com for
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]);
}

// for...of → percorre os valores
for (let fruta of frutas) {
  console.log("For...of fruta:", fruta);
}

// includes() → verifica existência
console.log(frutas.includes("maçã")); // true

// indexOf() → índice de um valor
console.log(frutas.indexOf("uva")); // 1

// splice() → remove elementos (a partir do índice 1, remove 1)
frutas.splice(1, 1);
console.log(frutas); // ["maçã", "laranja"]

// sort() → ordena elementos
let numeros = [5, 1, 3];
numeros.sort(); // ordena como strings: [1, 3, 5]
console.log("Números ordenados:", numeros);

// join() → transforma em string separada por vírgula
console.log(frutas.join(", ")); // "maçã, laranja"
