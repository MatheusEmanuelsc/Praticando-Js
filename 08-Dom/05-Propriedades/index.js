// ÍNDICE
// 1. Introdução à Navegação e Estrutura no DOM
// 2. Métodos para Navegação e Manipulação da Estrutura
//    2.1. parentNode
//    2.2. childNodes
//    2.3. firstChild
//    2.4. lastChild
//    2.5. nextSibling
//    2.6. previousSibling
//    2.7. children
//    2.8. firstElementChild
//    2.9. lastElementChild
//    2.10. nextElementSibling
//    2.11. previousElementSibling
//    2.12. querySelector
//    2.13. querySelectorAll
// 3. Exemplo Prático com Todos os Métodos

// 1. INTRODUÇÃO À NAVEGAÇÃO E ESTRUTURA NO DOM
// O DOM (Document Object Model) representa a estrutura de uma página web como uma árvore de nós (elementos, texto, comentários, etc.).
// Navegação no DOM permite acessar e manipular nós com base em sua hierarquia (pai, filho, irmão).
// Métodos de consulta (querySelector, querySelectorAll) oferecem seleção precisa usando seletores CSS.

// 2. MÉTODOS PARA NAVEGAÇÃO E MANIPULAÇÃO DA ESTRUTURA

// 2.1. parentNode
// - Retorna o nó pai de um elemento ou nó (pode ser elemento, texto ou comentário).
// - Útil para acessar o contêiner de um elemento e manipular sua estrutura.
// - Retorna null se o nó for o documento raiz (ex.: document).
const parentNodeExample = document.createElement("div");
const child = document.createElement("p");
child.textContent = "Filho";
parentNodeExample.appendChild(child);
document.body.appendChild(parentNodeExample);
const parent = child.parentNode; // Retorna o div
const parentDisplay = document.createElement("p");
parentDisplay.textContent = `Pai do parágrafo: ${parent.tagName}`;
document.body.appendChild(parentDisplay);

// 2.2. childNodes
// - Retorna uma NodeList com todos os nós filhos (elementos, texto, comentários).
// - Inclui nós não-elementos (ex.: espaços em branco), o que pode exigir filtragem.
// - Útil para iterar sobre todos os filhos de um nó.
const childNodesExample = document.createElement("div");
childNodesExample.innerHTML = "<p>Filho 1</p><p>Filho 2</p>";
const childNodes = childNodesExample.childNodes; // Inclui texto e elementos
const childNodesDisplay = document.createElement("p");
childNodesDisplay.textContent = `Número de nós filhos: ${childNodes.length}`;
document.body.appendChild(childNodesExample);
document.body.appendChild(childNodesDisplay);

// 2.3. firstChild
// - Retorna o primeiro nó filho (elemento, texto ou comentário).
// - Pode retornar nós de texto (ex.: espaços em branco), exigindo cuidado.
// - Útil para acessar o primeiro item em uma lista de filhos.
const firstChildExample = document.createElement("div");
firstChildExample.innerHTML = "<span>Primeiro</span><span>Segundo</span>";
const firstChild = firstChildExample.firstChild; // Pode ser texto ou elemento
const firstChildDisplay = document.createElement("p");
firstChildDisplay.textContent = `Primeiro filho: ${firstChild.nodeName}`;
document.body.appendChild(firstChildExample);
document.body.appendChild(firstChildDisplay);

// 2.4. lastChild
// - Retorna o último nó filho (elemento, texto ou comentário).
// - Similar a firstChild, inclui nós não-elementos.
// - Útil para acessar o último item em uma lista de filhos.
const lastChildExample = document.createElement("div");
lastChildExample.innerHTML = "<span>Primeiro</span><span>Último</span>";
const lastChild = lastChildExample.lastChild; // Pode ser texto ou elemento
const lastChildDisplay = document.createElement("p");
lastChildDisplay.textContent = `Último filho: ${lastChild.nodeName}`;
document.body.appendChild(lastChildExample);
document.body.appendChild(lastChildDisplay);

// 2.5. nextSibling
// - Retorna o próximo nó irmão (elemento, texto ou comentário).
// - Inclui nós não-elementos, como espaços em branco.
// - Útil para navegar sequencialmente entre irmãos.
const nextSiblingExample = document.createElement("div");
nextSiblingExample.innerHTML = "<p>Primeiro</p><p>Segundo</p>";
const firstP = nextSiblingExample.querySelector("p");
const nextSibling = firstP.nextSibling; // Pode ser texto ou próximo elemento
const nextSiblingDisplay = document.createElement("p");
nextSiblingDisplay.textContent = `Próximo irmão: ${nextSibling.nodeName}`;
document.body.appendChild(nextSiblingExample);
document.body.appendChild(nextSiblingDisplay);

// 2.6. previousSibling
// - Retorna o nó irmão anterior (elemento, texto ou comentário).
// - Similar a nextSibling, inclui nós não-elementos.
// - Útil para navegação reversa entre irmãos.
const previousSiblingExample = document.createElement("div");
previousSiblingExample.innerHTML = "<p>Primeiro</p><p>Segundo</p>";
const secondP = previousSiblingExample.querySelectorAll("p")[1];
const previousSibling = secondP.previousSibling; // Pode ser texto ou elemento anterior
const previousSiblingDisplay = document.createElement("p");
previousSiblingDisplay.textContent = `Irmão anterior: ${previousSibling.nodeName}`;
document.body.appendChild(previousSiblingExample);
document.body.appendChild(previousSiblingDisplay);

// 2.7. children
// - Ret retornada uma HTMLCollection com apenas os elementos filhos (exclui texto e comentários).
// - Mais específico que childNodes, ideal para trabalhar apenas com elementos.
// - Dinâmico, reflete alterações na estrutura do DOM.
const childrenExample = document.createElement("div");
childrenExample.innerHTML = "<p>Filho 1</p><p>Filho 2</p>";
const children = childrenExample.children; // Apenas elementos
const childrenDisplay = document.createElement("p");
childrenDisplay.textContent = `Número de elementos filhos: ${children.length}`;
document.body.appendChild(childrenExample);
document.body.appendChild(childrenDisplay);

// 2.8. firstElementChild
// - Retorna o primeiro elemento filho, ignorando nós de texto ou comentários.
// - Mais confiável que firstChild para acessar elementos diretamente.
// - Retorna null se não houver elementos filhos.
const firstElementChildExample = document.createElement("div");
firstElementChildExample.innerHTML = "Texto <span>Primeiro elemento</span>";
const firstElementChild = firstElementChildExample.firstElementChild; // Retorna <span>
const firstElementChildDisplay = document.createElement("p");
firstElementChildDisplay.textContent = `Primeiro elemento filho: ${
  firstElementChild ? firstElementChild.tagName : "Nenhum"
}`;
document.body.appendChild(firstElementChildExample);
document.body.appendChild(firstElementChildDisplay);

// 2.9. lastElementChild
// - Retorna o último elemento filho, ignorando nós de texto ou comentários.
// - Similar a firstElementChild, mas para o último elemento.
// - Retorna null se não houver elementos filhos.
const lastElementChildExample = document.createElement("div");
lastElementChildExample.innerHTML =
  "<span>Primeiro</span> Texto <span>Último elemento</span>";
const lastElementChild = lastElementChildExample.lastElementChild; // Retorna <span>
const lastElementChildDisplay = document.createElement("p");
lastElementChildDisplay.textContent = `Último elemento filho: ${
  lastElementChild ? lastElementChild.tagName : "Nenhum"
}`;
document.body.appendChild(lastElementChildExample);
document.body.appendChild(lastElementChildDisplay);

// 2.10. nextElementSibling
// - Retorna o próximo elemento irmão, ignorando nós de texto ou comentários.
// - Mais confiável que nextSibling para navegação entre elementos.
// - Retorna null se não houver próximo elemento irmão.
const nextElementSiblingExample = document.createElement("div");
nextElementSiblingExample.innerHTML = "<p>Primeiro</p><p>Segundo</p>";
const firstPElement = nextElementSiblingExample.querySelector("p");
const nextElementSibling = firstPElement.nextElementSibling; // Retorna segundo <p>
const nextElementSiblingDisplay = document.createElement("p");
nextElementSiblingDisplay.textContent = `Próximo elemento irmão: ${
  nextElementSibling ? nextElementSibling.tagName : "Nenhum"
}`;
document.body.appendChild(nextElementSiblingExample);
document.body.appendChild(nextElementSiblingDisplay);

// 2.11. previousElementSibling
// - Retorna o elemento irmão anterior, ignorando nós de texto ou comentários.
// - Mais confiável que previousSibling para navegação entre elementos.
// - Retorna null se não houver elemento irmão anterior.
const previousElementSiblingExample = document.createElement("div");
previousElementSiblingExample.innerHTML = "<p>Primeiro</p><p>Segundo</p>";
const secondPElement = previousElementSiblingExample.querySelectorAll("p")[1];
const previousElementSibling = secondPElement.previousElementSibling; // Retorna primeiro <p>
const previousElementSiblingDisplay = document.createElement("p");
previousElementSiblingDisplay.textContent = `Elemento irmão anterior: ${
  previousElementSibling ? previousElementSibling.tagName : "Nenhum"
}`;
document.body.appendChild(previousElementSiblingExample);
document.body.appendChild(previousElementSiblingDisplay);

// 2.12. querySelector
// - Retorna o primeiro elemento que corresponde a um seletor CSS.
// - Extremamente flexível, suporta seletores complexos (ex.: '.classe', '#id', '[atributo]').
// - Retorna null se nenhum elemento for encontrado.
const querySelectorExample = document.createElement("div");
querySelectorExample.innerHTML = '<p class="test">Elemento com classe</p>';
const selectedElement = querySelectorExample.querySelector(".test"); // Retorna o <p>
const querySelectorDisplay = document.createElement("p");
querySelectorDisplay.textContent = `Elemento selecionado: ${
  selectedElement ? selectedElement.tagName : "Nenhum"
}`;
document.body.appendChild(querySelectorExample);
document.body.appendChild(querySelectorDisplay);

// 2.13. querySelectorAll
// - Retorna uma NodeList com todos os elementos que correspondem a um seletor CSS.
// - Similar a querySelector, mas retorna todos os elementos, não apenas o primeiro.
// - Útil para manipular múltiplos elementos de uma vez.
const querySelectorAllExample = document.createElement("div");
querySelectorAllExample.innerHTML =
  '<p class="test">Item 1</p><p class="test">Item 2</p>';
const selectedElements = querySelectorAllExample.querySelectorAll(".test"); // Retorna NodeList com dois <p>
const querySelectorAllDisplay = document.createElement("p");
querySelectorAllDisplay.textContent = `Número de elementos selecionados: ${selectedElements.length}`;
document.body.appendChild(querySelectorAllExample);
document.body.appendChild(querySelectorAllDisplay);

// 3. EXEMPLO PRÁTICO COM TODOS OS MÉTODOS
// Cria um contêiner para demonstrar todos os métodos em ação
const container = document.createElement("div");
container.style.border = "1px solid black";
container.style.padding = "10px";
container.style.margin = "10px";
container.innerHTML = `
  <div id="parent">
    <p class="item">Item 1</p>
    <p class="item">Item 2</p>
    <span>Item 3</span>
  </div>
`;

// Demonstração de cada método
const demoParentNode = container.querySelector(".item");
const demoParent = demoParentNode.parentNode;
const demoParentDisplay = document.createElement("p");
demoParentDisplay.textContent = `Pai do primeiro item: ${demoParent.tagName}`;
container.appendChild(demoParentDisplay);

const demoChildNodes = container.querySelector("#parent");
const demoChildNodesList = demoChildNodes.childNodes;
const demoChildNodesDisplay = document.createElement("p");
demoChildNodesDisplay.textContent = `Nós filhos do contêiner: ${demoChildNodesList.length}`;
container.appendChild(demoChildNodesDisplay);

const demoFirstChild = container.querySelector("#parent");
const demoFirstChildNode = demoFirstChild.firstChild;
const demoFirstChildDisplay = document.createElement("p");
demoFirstChildDisplay.textContent = `Primeiro filho: ${demoFirstChildNode.nodeName}`;
container.appendChild(demoFirstChildDisplay);

const demoLastChild = container.querySelector("#parent");
const demoLastChildNode = demoLastChild.lastChild;
const demoLastChildDisplay = document.createElement("p");
demoLastChildDisplay.textContent = `Último filho: ${demoLastChildNode.nodeName}`;
container.appendChild(demoLastChildDisplay);

const demoNextSibling = container.querySelector(".item");
const demoNextSiblingNode = demoNextSibling.nextSibling;
const demoNextSiblingDisplay = document.createElement("p");
demoNextSiblingDisplay.textContent = `Próximo irmão: ${demoNextSiblingNode.nodeName}`;
container.appendChild(demoNextSiblingDisplay);

const demoPreviousSibling = container.querySelectorAll(".item")[1];
const demoPreviousSiblingNode = demoPreviousSibling.previousSibling;
const demoPreviousSiblingDisplay = document.createElement("p");
demoPreviousSiblingDisplay.textContent = `Irmão anterior: ${demoPreviousSiblingNode.nodeName}`;
container.appendChild(demoPreviousSiblingDisplay);

const demoChildren = container.querySelector("#parent");
const demoChildrenList = demoChildren.children;
const demoChildrenDisplay = document.createElement("p");
demoChildrenDisplay.textContent = `Elementos filhos: ${demoChildrenList.length}`;
container.appendChild(demoChildrenDisplay);

const demoFirstElementChild = container.querySelector("#parent");
const demoFirstElement = demoFirstElementChild.firstElementChild;
const demoFirstElementDisplay = document.createElement("p");
demoFirstElementDisplay.textContent = `Primeiro elemento filho: ${
  demoFirstElement ? demoFirstElement.tagName : "Nenhum"
}`;
container.appendChild(demoFirstElementDisplay);

const demoLastElementChild = container.querySelector("#parent");
const demoLastElement = demoLastElementChild.lastElementChild;
const demoLastElementDisplay = document.createElement("p");
demoLastElementDisplay.textContent = `Último elemento filho: ${
  demoLastElement ? demoLastElement.tagName : "Nenhum"
}`;
container.appendChild(demoLastElementDisplay);

const demoNextElementSibling = container.querySelector(".item");
const demoNextElement = demoNextElementSibling.nextElementSibling;
const demoNextElementDisplay = document.createElement("p");
demoNextElementDisplay.textContent = `Próximo elemento irmão: ${
  demoNextElement ? demoNextElement.tagName : "Nenhum"
}`;
container.appendChild(demoNextElementDisplay);

const demoPreviousElementSibling = container.querySelectorAll(".item")[1];
const demoPreviousElement = demoPreviousElementSibling.previousElementSibling;
const demoPreviousElementDisplay = document.createElement("p");
demoPreviousElementDisplay.textContent = `Elemento irmão anterior: ${
  demoPreviousElement ? demoPreviousElement.tagName : "Nenhum"
}`;
container.appendChild(demoPreviousElementDisplay);

const demoQuerySelector = container.querySelector(".item");
const demoQuerySelectorDisplay = document.createElement("p");
demoQuerySelectorDisplay.textContent = `Elemento selecionado (.item): ${
  demoQuerySelector ? demoQuerySelector.tagName : "Nenhum"
}`;
container.appendChild(demoQuerySelectorDisplay);

const demoQuerySelectorAll = container.querySelectorAll(".item");
const demoQuerySelectorAllDisplay = document.createElement("p");
demoQuerySelectorAllDisplay.textContent = `Elementos selecionados (.item): ${demoQuerySelectorAll.length}`;
container.appendChild(demoQuerySelectorAllDisplay);

// Adiciona uma folha de estilo para melhorar a visualização
const styleSupport = document.createElement("style");
styleSupport.textContent = `
  div, p, span { margin: 5px; }
  #parent { background-color: lightgray; padding: 10px; }
  .item { background-color: lightblue; padding: 5px; }
  span { background-color: lightcoral; padding: 5px; }
`;
document.head.appendChild(styleSupport);

// Adiciona o contêiner ao body
document.body.appendChild(container);
