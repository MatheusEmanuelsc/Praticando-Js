// ===== RESUMO DOS MÉTODOS DE ARRAY EM JAVASCRIPT (COMPLEMENTO) =====
// every()       → Verifica se TODOS os elementos do array passam em um teste (retorna true/false)
// some()        → Verifica se PELO MENOS UM elemento do array passa em um teste (retorna true/false)
// reduce()      → Reduz o array a um único valor, aplicando uma função acumuladora
// reduceRight() → Similar ao reduce(), mas percorre o array da direita para a esquerda
// find()        → Retorna o PRIMEIRO elemento que passa em um teste
// findIndex()   → Retorna o ÍNDICE do primeiro elemento que passa em um teste
// forEach()     → Executa uma função para cada elemento do array (sem retorno)
// slice()       → Retorna uma cópia de uma parte do array, sem modificar o original
// reverse()     → Inverte a ordem dos elementos do array (modifica o original)
// flat()        → Achata um array aninhado em um único array
// flatMap()     → Mapeia cada elemento e achata o resultado em um único array
// lastIndexOf() → Retorna o ÍNDICE da última ocorrência de um valor, ou -1 se não existir
// fill()        → Preenche o array com um valor estático, em um intervalo definido
// keys()        → Retorna um iterador com os índices do array
// values()      → Retorna um iterador com os valores do array
// entries()     → Retorna um iterador com pares [índice, valor] do array
// Array.of()    → Cria um array a partir de argumentos passados

// ===== TÓPICOS CORRELATOS =====
// Arrow Functions → Usadas frequentemente em métodos de array para callbacks concisos
// Copia Profunda  → Cria uma cópia completa de arrays aninhados

// ----- every() -----
// Verifica se todos os elementos do array satisfazem uma condição. Retorna true/false.
const numsEvery = [2, 4, 6, 8];
const todosPares = numsEvery.every((num) => num % 2 === 0); // true
// Se um elemento falhar (ex.: 3), retorna false
const numsMisturados = [2, 3, 4];
const todosParesMisturados = numsMisturados.every((num) => num % 2 === 0); // false

// ----- some() -----
// Verifica se pelo menos um elemento satisfaz a condição. Retorna true/false.
const numsSome = [1, 3, 4];
const temPar = numsSome.some((num) => num % 2 === 0); // true
// Retorna false se nenhum elemento satisfizer
const numsImpares = [1, 3, 5];
const temParImpar = numsImpares.some((num) => num % 2 === 0); // false

// ----- reduce() -----
// Reduz o array a um único valor, acumulando resultados com uma função de callback.
// Recebe acumulador, elemento atual, índice (opcional) e array (opcional).
const numsReduce = [1, 2, 3, 4];
const soma = numsReduce.reduce((acc, num) => acc + num, 0); // 6 (0 + 1 + 2 + 3)
// Pode ser usado para outros tipos de redução, como concatenar strings
const palavras = ["Olá", "mundo"];
const frase = palavras.reduce((acc, palavra) => acc + " " + palavra, ""); // ' Olá mundo'

// ----- reduceRight() -----
// Similar ao reduce(), mas itera da direita para a esquerda.
const numsReduceRight = [1, 2, 3];
const somaReversa = numsReduceRight.reduceRight((acc, num) => acc + num, 0); // 6
// Útil para operações onde a ordem importa, como concatenar strings ao contrário
const palavrasReversas = ["mundo", "Olá"];
const fraseReversa = palavrasReversas.reduceRight(
  (acc, palavra) => acc + " " + palavra,
  ""
); // ' Olá mundo'

// ----- find() -----
// Retorna o primeiro elemento que satisfaz a condição ou undefined se nenhum passar.
const numsFind = [1, 2, 3, 4];
const primeiroPar = numsFind.find((num) => num % 2 === 0); // 2
// Retorna undefined se nada for encontrado
const semPar = [1, 3, 5];
const parNaoEncontrado = semPar.find((num) => num % 2 === 0); // undefined

// ----- findIndex() -----
// Retorna o índice do primeiro elemento que satisfaz a condição ou -1 se nenhum passar.
const numsFindIndex = [1, 2, 3, 4];
const indicePar = numsFindIndex.findIndex((num) => num % 2 === 0); // 1
// Retorna -1 se nada for encontrado
const semParIndex = [1, 3, 5];
const indiceNaoEncontrado = semParIndex.findIndex((num) => num % 2 === 0); // -1

// ----- forEach() -----
// Executa uma função para cada elemento. Não retorna nada (undefined).
const numsForEach = [1, 2, 3];
numsForEach.forEach((num, index) => console.log(`Índice ${index}: ${num}`));
// Exemplo: Modificar um array externo
const resultados = [];
numsForEach.forEach((num) => resultados.push(num * 2)); // resultados = [2, 4, 6]

// ----- slice() -----
// Retorna uma cópia de parte do array (início inclusivo, fim exclusivo). Não modifica o original.
const numsSlice = [1, 2, 3, 4, 5];
const parte = numsSlice.slice(1, 4); // [2, 3, 4]
// Pode omitir o fim para copiar até o final
const doInicio = numsSlice.slice(2); // [3, 4, 5]

// ----- reverse() -----
// Inverte a ordem dos elementos no array original. Modifica o array.
const numsReverse = [1, 2, 3];
numsReverse.reverse(); // [3, 2, 1]
// Também retorna o array invertido
const arrayInvertido = [4, 5, 6].reverse(); // [6, 5, 4]

// ----- flat() -----
// Achata um array aninhado até a profundidade especificada (padrão: 1).
const aninhado = [1, [2, 3], [4, [5]]];
const achatado = aninhado.flat(); // [1, 2, 3, 4, [5]]
const achatadoProfundo = aninhado.flat(2); // [1, 2, 3, 4, 5]

// ----- flatMap() -----
// Combina map() e flat(), aplicando uma função que retorna arrays e achatando o resultado.
const numsFlatMap = [1, 2, 3];
const mapeadoAchatado = numsFlatMap.flatMap((num) => [num, num * 2]); // [1, 2, 2, 4, 3, 6]

// ----- lastIndexOf() -----
// Retorna o índice da última ocorrência de um valor ou -1 se não existir.
const numsLastIndexOf = [1, 2, 2, 3];
const ultimoDois = numsLastIndexOf.lastIndexOf(2); // 2
// Retorna -1 se o valor não existe
const naoExiste = numsLastIndexOf.lastIndexOf(5); // -1

// ----- fill() -----
// Preenche o array com um valor estático em um intervalo (modifica o original).
const numsFill = [1, 2, 3, 4];
numsFill.fill(0, 1, 3); // [1, 0, 0, 4]
// Pode preencher todo o array
const todoZero = [1, 2, 3].fill(0); // [0, 0, 0]

// ----- keys() -----
// Retorna um iterador com os índices do array.
const numsKeys = ["a", "b", "c"];
for (const indice of numsKeys.keys()) {
  console.log(indice); // 0, 1, 2
}
// Pode ser convertido em array
const indices = [...numsKeys.keys()]; // [0, 1, 2]

// ----- values() -----
// Retorna um iterador com os valores do array.
const numsValues = ["a", "b", "c"];
for (const valor of numsValues.values()) {
  console.log(valor); // 'a', 'b', 'c'
}
// Pode ser convertido em array
const valores = [...numsValues.values()]; // ['a', 'b', 'c']

// ----- entries() -----
// Retorna um iterador com pares [índice, valor].
const numsEntries = ["a", "b", "c"];
for (const [indice, valor] of numsEntries.entries()) {
  console.log(`${indice}: ${valor}`); // '0: a', '1: b', '2: c'
}
// Pode ser convertido em array
const entradas = [...numsEntries.entries()]; // [[0, 'a'], [1, 'b'], [2, 'c']]

// ----- Array.of() -----
// Cria um array a partir de argumentos passados.
const novoArray = Array.of(1, "dois", true); // [1, 'dois', true]
// Diferente de Array(3), que cria [,,,] (array vazio com 3 posições)
const arrayVazio = Array(3); // [undefined, undefined, undefined]

// ----- Arrow Functions em Arrays -----
// Funções de seta são usadas em métodos de array para callbacks concisos.
const numsArrow = [1, 2, 3];
const quadrados = numsArrow.map((n) => n * n); // [1, 4, 9]
// Evitam problemas com 'this' em callbacks
const objeto = { fator: 2, dobrar: (nums) => nums.map((n) => n * this.fator) };

// ----- Copia Profunda (Deep Copy) -----
// Cria uma cópia completa de arrays aninhados, evitando referência.
const aninhadoCopia = [
  [1, 2],
  [3, 4],
];
const copiaProfunda = JSON.parse(JSON.stringify(aninhadoCopia));
// Modificar a cópia não afeta o original
copiaProfunda[0][0] = 99; // aninhadoCopia permanece [[1, 2], [3, 4]]
