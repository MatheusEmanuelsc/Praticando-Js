// Node e Element são conceitos fundamentais no DOM (Document Object Model) do JavaScript.
// Ambos representam partes da árvore do DOM, mas têm diferenças importantes em termos de escopo e funcionalidade.

// === Node ===
// Um Node é a unidade básica do DOM, representando qualquer tipo de nó na árvore do DOM.
// Pode ser um elemento HTML, texto, comentário, documento, etc.
// Todos os objetos no DOM (incluindo Element) herdam de Node.
const nodeExample = document.createTextNode("Exemplo de texto"); // Um Node de tipo texto
// console.log(nodeExample); // Exemplo de Node (Text)

// Tipos de Node (alguns exemplos):
// - Node.ELEMENT_NODE (1): nó de elemento HTML (<div>, <p>, etc.).
// - Node.TEXT_NODE (3): nó de texto.
// - Node.COMMENT_NODE (8): nó de comentário (<!-- -->).
// - Node.DOCUMENT_NODE (9): nó do documento (document).

// Propriedades principais do Node:
// - .nodeType: retorna o tipo do nó (número, ex.: 1 para elemento, 3 para texto).
const nodeType = nodeExample.nodeType; // 3 (TEXT_NODE)
// - .nodeName: retorna o nome do nó (ex.: 'DIV' para elementos, '#text' para texto).
const nodeName = nodeExample.nodeName; // '#text'
// - .nodeValue: retorna ou define o valor do nó (ex.: conteúdo de texto para TEXT_NODE).
nodeExample.nodeValue = "Novo texto"; // Altera o conteúdo do nó de texto
// - .parentNode: retorna o nó pai.
const parent = nodeExample.parentNode; // Nó pai ou null
// - .childNodes: retorna um NodeList com os nós filhos (inclui elementos, textos, comentários).
const childNodes = document.body.childNodes; // NodeList de filhos
// - .firstChild, .lastChild: retorna o primeiro/último nó filho.
const firstChild = document.body.firstChild; // Primeiro nó filho
// - .nextSibling, .previousSibling: retorna o próximo/anterior nó irmão.
const nextSibling = nodeExample.nextSibling; // Próximo nó irmão ou null

// Métodos principais do Node:
// - .appendChild(node): adiciona um nó como último filho.
const newNode = document.createElement("div");
document.body.appendChild(newNode); // Adiciona <div> ao body
// - .removeChild(node): remove um nó filho.
document.body.removeChild(newNode); // Remove o nó filho
// - .replaceChild(newNode, oldNode): substitui um nó filho por outro.
const newText = document.createTextNode("Novo");
document.body.replaceChild(newText, firstChild); // Substitui o primeiro filho
// - .cloneNode(deep): clona o nó (deep=true inclui filhos).
const clonedNode = nodeExample.cloneNode(false); // Clona apenas o nó
// - .contains(node): verifica se um nó é descendente deste nó.
const hasNode = document.body.contains(newNode); // true ou false

// === Element ===
// Um Element é um tipo específico de Node que representa um elemento HTML (como <div>, <p>, <span>).
// Herda de Node, mas possui propriedades e métodos adicionais específicos para elementos HTML.
const elementExample = document.createElement("div"); // Um Element (DIV)
// console.log(elementExample); // Exemplo de Element (<div>)

// Características do Element:
// - Representa apenas nós do tipo ELEMENT_NODE (nodeType = 1).
// - Oferece métodos e propriedades específicos para manipulação de atributos, classes, estilos, etc.

// Propriedades principais do Element:
// - .tagName: retorna o nome da tag em maiúsculas (ex.: 'DIV').
const tagName = elementExample.tagName; // 'DIV'
// - .id, .className: acessa ou define o ID ou classe do elemento.
elementExample.id = "meuId"; // Define o ID
elementExample.className = "minhaClasse"; // Define a classe
// - .classList: retorna um DOMTokenList para manipular classes.
elementExample.classList.add("outraClasse"); // Adiciona uma classe
// - .attributes: retorna uma NamedNodeMap com os atributos do elemento.
const attributes = elementExample.attributes; // Lista de atributos
// - .innerHTML, .outerHTML: acessa ou define o conteúdo HTML interno/incluindo o elemento.
elementExample.innerHTML = "<p>Conteúdo</p>"; // Define conteúdo HTML
// - .textContent: acessa ou define o conteúdo de texto (ignora HTML).
elementExample.textContent = "Texto puro"; // Define texto
// - .children: retorna um HTMLCollection com os elementos filhos (apenas ELEMENT_NODE).
const children = elementExample.children; // HTMLCollection de elementos filhos
// - .firstElementChild, .lastElementChild: retorna o primeiro/último elemento filho.
const firstElementChild = elementExample.firstElementChild; // Primeiro elemento filho
// - .nextElementSibling, .previousElementSibling: retorna o próximo/anterior elemento irmão.
const nextElement = elementExample.nextElementSibling; // Próximo elemento irmão

// Métodos principais do Element:
// - .getAttribute(name): retorna o valor de um atributo.
const attrValue = elementExample.getAttribute("id"); // 'meuId'
// - .setAttribute(name, value): define o valor de um atributo.
elementExample.setAttribute("data-info", "valor"); // Adiciona data-info="valor"
// - .removeAttribute(name): remove um atributo.
elementExample.removeAttribute("data-info"); // Remove o atributo
// - .querySelector(selector), .querySelectorAll(selector): seleciona elemento(s) dentro do elemento.
const nestedElement = elementExample.querySelector(".minhaClasse"); // Primeiro elemento com classe
// - .classList.add/remove/toggle/contains: manipula classes.
elementExample.classList.toggle("ativa"); // Alterna a classe 'ativa'
// - .matches(selector): verifica se o elemento corresponde a um seletor CSS.
const isMatch = elementExample.matches("#meuId"); // true ou false

// === Diferenças Principais ===
// 1. Escopo:
//    - Node: qualquer tipo de nó no DOM (elementos, textos, comentários, etc.).
//    - Element: apenas nós do tipo ELEMENT_NODE (elementos HTML).
// 2. Propriedades e métodos:
//    - Node: propriedades/métodos genéricos para todos os tipos de nós (ex.: nodeType, appendChild).
//    - Element: propriedades/métodos específicos para elementos HTML (ex.: classList, querySelector).
// 3. Herança:
//    - Element herda de Node, então todos os métodos/propriedades de Node estão disponíveis em Element.
//    - Node não tem acesso aos métodos/propriedades específicos de Element (ex.: classList).
// 4. Uso comum:
//    - Node: usado para manipulações genéricas do DOM, incluindo nós não-elementos.
//    - Element: usado para manipulações específicas de elementos HTML (atributos, estilos, classes).

// === Recomendações de Uso ===
// - Use Node quando:
//   - Você precisa manipular nós que não são elementos HTML, como texto ou comentários.
//   - Você está trabalhando com a estrutura genérica do DOM (ex.: childNodes para incluir textos).
// Exemplo:
const textNode = document.createTextNode("Texto dinâmico");
document.body.appendChild(textNode); // Adiciona nó de texto ao body

// - Use Element quando:
//   - Você está manipulando elementos HTML (ex.: alterando classes, atributos, ou conteúdo HTML).
//   - Você precisa de seletores CSS ou manipulação de estilos/classes.
// Exemplo:
const divElement = document.createElement("div");
divElement.classList.add("minhaClasse");
divElement.textContent = "Elemento HTML";
document.body.appendChild(divElement); // Adiciona elemento ao body

// - Conversão entre Node e Element:
//   - Verifique o nodeType antes de usar métodos específicos de Element.
// Exemplo:
if (nodeExample.nodeType === Node.ELEMENT_NODE) {
  nodeExample.classList.add("classe"); // Seguro, pois é um Element
}

// === Conclusão ===
// - Use Node para manipulações genéricas do DOM ou quando trabalhar com nós não-elementos (texto, comentários).
// - Use Element para manipulações específicas de elementos HTML, como atributos, classes, ou seletores CSS.
// - Sempre verifique nodeType se não tiver certeza do tipo de nó para evitar erros.
// - Combine métodos de Node e Element conforme necessário, aproveitando a herança.
