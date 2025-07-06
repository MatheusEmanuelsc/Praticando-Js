// ÍNDICE
// 1. Introdução à Manipulação de Elementos e HTML no DOM
// 2. Métodos para Manipulação de Elementos e HTML
//    2.1. createElement
//    2.2. appendChild
//    2.3. remove
//    2.4. replaceChild
//    2.5. insertAdjacentElement
//    2.6. cloneNode
//    2.7. innerHTML
//    2.8. insertAdjacentHTML
// 3. Exemplo Prático com Todos os Métodos

// 1. INTRODUÇÃO À MANIPULAÇÃO DE ELEMENTOS E HTML NO DOM
// O DOM (Document Object Model) permite criar, inserir, modificar, clonar ou remover elementos HTML dinamicamente.
// A manipulação de HTML envolve adicionar ou alterar conteúdo HTML diretamente, enquanto a manipulação de elementos foca em nós do DOM.
// Cada método tem características específicas, como segurança, flexibilidade e desempenho.

// 2. MÉTODOS PARA MANIPULAÇÃO DE ELEMENTOS E HTML

// 2.1. createElement
// - Cria um novo elemento HTML com a tag especificada (ex.: 'div', 'p', 'span').
// - O elemento criado não é automaticamente adicionado ao DOM; requer métodos como appendChild.
// - Ideal para construir elementos dinamicamente antes de configurá-los.
const createElementExample = document.createElement("p");
createElementExample.textContent = "Elemento criado com createElement";
document.body.appendChild(createElementExample);

// 2.2. appendChild
// - Adiciona um nó (elemento ou texto) como último filho de um elemento pai.
// - Retorna o nó adicionado, permitindo encadeamento.
// - Não duplica elementos já no DOM; move-os se já existirem.
const appendChildExample = document.createElement("div");
const child = document.createElement("span");
child.textContent = "Filho adicionado com appendChild";
appendChildExample.appendChild(child);
document.body.appendChild(appendChildExample);

// 2.3. remove
// - Remove um elemento do DOM.
// - Método moderno (suportado em navegadores recentes), elimina a necessidade de usar removeChild do pai.
// - Simples e direto, mas não suportado em navegadores muito antigos (ex.: IE < 11).
const removeExample = document.createElement("p");
removeExample.textContent = "Este elemento será removido";
document.body.appendChild(removeExample);
setTimeout(() => removeExample.remove(), 2000); // Remove após 2 segundos

// 2.4. replaceChild
// - Substitui um nó filho por outro no elemento pai.
// - Requer acesso ao pai e ao nó a ser substituído.
// - Útil para trocar elementos sem remover todos os filhos.
const replaceChildExample = document.createElement("div");
const oldChild = document.createElement("p");
oldChild.textContent = "Elemento antigo";
replaceChildExample.appendChild(oldChild);
const newChild = document.createElement("p");
newChild.textContent = "Elemento novo";
replaceChildExample.replaceChild(newChild, oldChild);
document.body.appendChild(replaceChildExample);

// 2.5. insertAdjacentElement
// - Insere um elemento em uma posição específica relativa ao elemento alvo (beforebegin, afterbegin, beforeend, afterend).
// - Flexível para posicionamento sem manipular diretamente os filhos do pai.
// - Requer um elemento já criado, diferente de insertAdjacentHTML.
const insertAdjacentElementExample = document.createElement("div");
const adjacentElement = document.createElement("span");
adjacentElement.textContent = "Inserido com insertAdjacentElement";
insertAdjacentElementExample.insertAdjacentElement(
  "afterbegin",
  adjacentElement
);
document.body.appendChild(insertAdjacentElementExample);

// 2.6. cloneNode
// - Cria uma cópia de um nó (elemento ou texto), com ou sem seus filhos.
// - Parâmetro deep (true/false) define se os filhos são clonados.
// - Útil para duplicar elementos sem modificar o original.
const cloneNodeExample = document.createElement("p");
cloneNodeExample.textContent = "Elemento original";
const clone = cloneNodeExample.cloneNode(true);
clone.textContent = "Elemento clonado com cloneNode";
document.body.appendChild(cloneNodeExample);
document.body.appendChild(clone);

// 2.7. innerHTML
// - Define ou obtém o conteúdo HTML de um elemento como uma string, interpretando tags.
// - Permite criar múltiplos elementos de uma vez, mas é menos seguro devido a riscos de XSS.
// - Substitui todo o conteúdo interno do elemento.
const innerHTMLExample = document.createElement("div");
innerHTMLExample.innerHTML = "<p>Texto com <b>negrito</b> via innerHTML</p>";
document.body.appendChild(innerHTMLExample);

// 2.8. insertAdjacentHTML
// - Insere uma string HTML em posições específicas (beforebegin, afterbegin, beforeend, afterend).
// - Similar a insertAdjacentElement, mas trabalha com HTML bruto.
// - Cuidado com XSS; útil para adicionar conteúdo complexo dinamicamente.
const insertAdjacentHTMLExample = document.createElement("div");
insertAdjacentHTMLExample.insertAdjacentHTML(
  "beforeend",
  "<p>HTML inserido com insertAdjacentHTML</p>"
);
document.body.appendChild(insertAdjacentHTMLExample);

// 3. EXEMPLO PRÁTICO COM TODOS OS MÉTODOS
// Cria um contêiner para demonstrar todos os métodos em ação
const container = document.createElement("div");
container.style.border = "1px solid black";
container.style.padding = "10px";
container.style.margin = "10px";

// Demonstração de cada método
const demoCreateElement = document.createElement("p");
demoCreateElement.textContent = "Exemplo com createElement";
container.appendChild(demoCreateElement);

const demoAppendChild = document.createElement("div");
const appendChildSpan = document.createElement("span");
appendChildSpan.textContent = "Exemplo com appendChild";
demoAppendChild.appendChild(appendChildSpan);
container.appendChild(demoAppendChild);

const demoRemove = document.createElement("p");
demoRemove.textContent = "Exemplo com remove (desaparece em 2s)";
container.appendChild(demoRemove);
setTimeout(() => demoRemove.remove(), 2000);

const demoReplaceChild = document.createElement("div");
const oldChildDemo = document.createElement("p");
oldChildDemo.textContent = "Elemento antigo para replaceChild";
demoReplaceChild.appendChild(oldChildDemo);
const newChildDemo = document.createElement("p");
newChildDemo.textContent = "Elemento novo via replaceChild";
demoReplaceChild.replaceChild(newChildDemo, oldChildDemo);
container.appendChild(demoReplaceChild);

const demoInsertAdjacentElement = document.createElement("div");
const adjacentElementDemo = document.createElement("span");
adjacentElementDemo.textContent = "Exemplo com insertAdjacentElement";
demoInsertAdjacentElement.insertAdjacentElement(
  "afterbegin",
  adjacentElementDemo
);
container.appendChild(demoInsertAdjacentElement);

const demoCloneNode = document.createElement("p");
demoCloneNode.textContent = "Exemplo original para cloneNode";
const cloneDemo = demoCloneNode.cloneNode(true);
cloneDemo.textContent = "Exemplo clonado com cloneNode";
container.appendChild(demoCloneNode);
container.appendChild(cloneDemo);

const demoInnerHTML = document.createElement("div");
demoInnerHTML.innerHTML = "<p>Exemplo com <b>innerHTML</b></p>";
container.appendChild(demoInnerHTML);

const demoInsertAdjacentHTML = document.createElement("div");
demoInsertAdjacentHTML.insertAdjacentHTML(
  "beforeend",
  "<p>Exemplo com <i>insertAdjacentHTML</i></p>"
);
container.appendChild(demoInsertAdjacentHTML);

// Adiciona uma folha de estilo para melhorar a visualização
const styleSupport = document.createElement("style");
styleSupport.textContent = `
  div, p, span { margin: 5px; }
  p { background-color: lightgray; padding: 5px; }
  span { background-color: lightblue; padding: 3px; }
`;
document.head.appendChild(styleSupport);

// Adiciona o contêiner ao body
document.body.appendChild(container);
