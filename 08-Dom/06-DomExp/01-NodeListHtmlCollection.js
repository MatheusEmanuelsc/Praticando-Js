// NodeList e HTMLCollection são objetos no JavaScript que representam coleções de nós (nodos) do DOM.
// Ambos são usados para acessar elementos HTML, mas possuem diferenças importantes.

// === NodeList ===
// Um NodeList é uma coleção de nós (nodes) retornada por métodos como querySelectorAll() ou childNodes.
// Pode conter qualquer tipo de nó (elementos, textos, comentários, etc.).
// É geralmente estático (não atualiza automaticamente com mudanças no DOM, exceto com childNodes).
const nodeList = document.querySelectorAll("div"); // Retorna um NodeList estático
// console.log(nodeList); // Exemplo de NodeList

// Características do NodeList:
// - Estático (querySelectorAll): não reflete mudanças no DOM após ser criado.
// - Dinâmico (childNodes): reflete mudanças no DOM em tempo real.
// - Suporta métodos como forEach para iteração.
// - Não é um array, mas pode ser convertido em um usando Array.from() ou spread operator (...).

// Métodos e propriedades do NodeList:
// - .length: retorna o número de nós na coleção.
// Exemplo:
const nodeListLength = nodeList.length; // Quantidade de nós
// - .item(index): retorna o nó no índice especificado (retorna null se inválido).
const firstNode = nodeList.item(0); // Primeiro nó
// - .forEach(callback): itera sobre os nós, executando a função callback para cada um.
//   - Parâmetros: (element, index, nodeList).
nodeList.forEach((node, index) => {
  // console.log(node, index); // Acessa cada nó e seu índice
});
// - .entries(), .keys(), .values(): métodos de iteração compatíveis com for...of.
for (const [index, node] of nodeList.entries()) {
  // console.log(index, node); // Itera com índice e nó
}
// Nota: Outros métodos de array (map, filter, etc.) exigem conversão para array.

// === HTMLCollection ===
// Um HTMLCollection é uma coleção de elementos HTML retornada por métodos como getElementsByTagName() ou getElementsByClassName().
// Contém apenas elementos HTML (não inclui nós de texto ou comentários).
// É sempre dinâmico, ou seja, reflete mudanças no DOM em tempo real.
const htmlCollection = document.getElementsByTagName("div"); // Retorna um HTMLCollection dinâmico
// console.log(htmlCollection); // Exemplo de HTMLCollection

// Características do HTMLCollection:
// - Dinâmico: atualiza automaticamente com mudanças no DOM.
// - Não suporta forEach diretamente; precisa ser convertido em array para usar métodos de array.
// - Pode ser acessado por índices ou nomes/IDs (se os elementos tiverem esses atributos).

// Métodos e propriedades do HTMLCollection:
// - .length: retorna o número de elementos na coleção.
// Exemplo:
const htmlCollectionLength = htmlCollection.length; // Quantidade de elementos
// - .item(index): retorna o elemento no índice especificado (retorna null se inválido).
const firstElement = htmlCollection.item(0); // Primeiro elemento
// - .namedItem(name): retorna o elemento com o ID ou name correspondente (retorna null se não encontrado).
const namedElement = htmlCollection.namedItem("myId"); // Elemento com id="myId"
// Nota: Não possui forEach, entries(), keys(), ou values(). Converta para array para iteração avançada.
const htmlArray = Array.from(htmlCollection);
// htmlArray.forEach(element => console.log(element)); // Agora suporta forEach

// === Diferenças Principais ===
// 1. Tipo de conteúdo:
//    - NodeList: pode incluir qualquer tipo de nó (elementos, textos, comentários).
//    - HTMLCollection: apenas elementos HTML.
// 2. Atualização:
//    - NodeList: geralmente estático (exceto childNodes).
//    - HTMLCollection: sempre dinâmico.
// 3. Métodos disponíveis:
//    - NodeList: suporta forEach, entries(), keys(), values() nativamente.
//    - HTMLCollection: suporta apenas item() e namedItem(); requer conversão para array para outros métodos.
// 4. Métodos que retornam:
//    - NodeList: querySelectorAll(), childNodes, etc.
//    - HTMLCollection: getElementsByTagName(), getElementsByClassName(), etc.

// === Recomendações de Uso ===
// - Use NodeList (querySelectorAll) quando:
//   - Você precisa de uma coleção estática para evitar alterações inesperadas.
//   - Você quer selecionar elementos com seletores CSS complexos (ex.: '.classe', '#id').
//   - Você precisa iterar diretamente com forEach ou trabalhar com nós não-elementos (como textos).
// Exemplo:
const staticNodes = document.querySelectorAll(".minha-classe"); // NodeList para seletores CSS
staticNodes.forEach((node) => (node.style.color = "blue"));

// - Use HTMLCollection (getElementsBy*) quando:
//   - Você precisa de uma coleção dinâmica que reflita mudanças no DOM em tempo real.
//   - Você está trabalhando com seleções baseadas em tags ou classes simples.
// Exemplo:
const liveDivs = document.getElementsByClassName("minha-classe"); // HTMLCollection dinâmico
// Adiciona uma nova div com a classe 'minha-classe' ao DOM
// liveDivs será atualizado automaticamente

// - Conversão para arrays:
//   - Converta NodeList ou HTMLCollection em array para usar métodos como map(), filter(), etc.
// Exemplo:
const nodeArray = [...nodeList]; // Spread operator
const htmlArray2 = Array.from(htmlCollection); // Array.from

// === Conclusão ===
// - Prefira querySelectorAll() (NodeList) para maior flexibilidade, seletores CSS e métodos de iteração nativos.
// - Use getElementsBy* (HTMLCollection) quando precisar de coleções dinâmicas ou acesso por nome/ID.
// - Converta para arrays quando precisar de métodos avançados de iteração/manipulação.
// - Cuidado com performance: coleções dinâmicas podem ser mais lentas em DOMs grandes.
