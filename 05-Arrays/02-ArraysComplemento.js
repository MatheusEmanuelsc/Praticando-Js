/*
Resumo dos tópicos correlatos a arrays:

Spread (...)           → "Espalha" os elementos de um array para outro array ou chamada de função.
Rest (...)             → Coleta parâmetros ou elementos restantes em um array dentro de funções ou desestruturação.
Desestruturação        → Extrai valores de arrays (ou objetos) em variáveis separadas.
Concatenação (concat)  → Junta dois ou mais arrays em um novo array, sem modificar os originais.
Cópia de arrays        → Cria uma cópia rasa (shallow) de um array para evitar referência ao original.
Array.from()           → Cria um array a partir de um objeto iterável, como string ou set.
Array.isArray()        → Verifica se uma variável é um array (retorna true/false).
indexOf()              → Retorna o índice da primeira ocorrência de um valor, ou -1 se não existir.
*/

/////// Exemplos ///////

// --- Spread Operator (...)
// Espalha elementos de um array para criar outro ou passar argumentos
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Copia arr1 e adiciona novos elementos
console.log(arr2); // [1, 2, 3, 4, 5]

// Usar spread para passar elementos como argumentos
function soma(a, b, c) {
  return a + b + c;
}
const valores = [10, 20, 30];
console.log(soma(...valores)); // 60

// --- Rest Operator (...)
// Coleta os argumentos restantes em um array
function somaTudo(...numeros) {
  return numeros.reduce((acc, val) => acc + val, 0);
}
console.log(somaTudo(1, 2, 3, 4)); // 10

// Usar rest na desestruturação
const nums = [10, 20, 30, 40];
const [primeiro, ...resto] = nums;
console.log(primeiro); // 10
console.log(resto); // [20, 30, 40]

// --- Desestruturação ---
// Extrai valores de um array em variáveis
const coordenadas = [5, 15];
const [x, y] = coordenadas;
console.log(x, y); // 5 15

// --- Concatenação com concat() ---
// Junta arrays em um novo array, sem alterar os originais
const a = [1, 2];
const b = [3, 4];
const c = a.concat(b);
console.log(c); // [1, 2, 3, 4]

// --- Cópia de arrays ---
// Copia um array para evitar alterar o original
const original = ["a", "b", "c"];
const copia = original.slice();
console.log(copia); // ['a', 'b', 'c']

// Também pode copiar com spread
const copia2 = [...original];
console.log(copia2); // ['a', 'b', 'c']

// --- Array.from() ---
// Cria um array a partir de um iterável (string, set, etc)
const palavra = "Olá";
const letras = Array.from(palavra);
console.log(letras); // ['O', 'l', 'á']

// --- Array.isArray() ---
// Verifica se uma variável é um array (true/false)
console.log(Array.isArray(letras)); // true
console.log(Array.isArray("texto")); // false

// --- indexOf() ---
// Retorna o índice da primeira ocorrência ou -1 se não encontrado
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas.indexOf("banana")); // 1
console.log(frutas.indexOf("uva")); // -1
