// ÍNDICE
// 1. Introdução à Manipulação de Atributos no DOM
// 2. Métodos para Manipulação de Atributos
//    2.1. setAttribute
//    2.2. getAttribute
//    2.3. removeAttribute
//    2.4. hasAttribute
//    2.5. dataset
//    2.6. Propriedades de Atributos (acesso direto)
// 3. Exemplo Prático com Todos os Métodos

// 1. INTRODUÇÃO À MANIPULAÇÃO DE ATRIBUTOS NO DOM
// O DOM (Document Object Model) permite manipular atributos de elementos HTML dinamicamente.
// Atributos são propriedades como id, class, title, src, data-*, etc., que definem comportamento ou metadados.
// Cada método tem características específicas, como segurança, facilidade de uso e suporte a atributos personalizados.

// 2. MÉTODOS PARA MANIPULAÇÃO DE ATRIBUTOS

// 2.1. setAttribute
// - Define ou atualiza o valor de um atributo em um elemento.
// - Aceita qualquer nome de atributo, incluindo atributos personalizados.
// - Substitui o valor existente, se houver.
// - Útil para manipular atributos que não possuem propriedades diretas no DOM.
const setAttributeExample = document.createElement("img");
setAttributeExample.setAttribute("alt", "Imagem de exemplo");
setAttributeExample.setAttribute("src", "https://via.placeholder.com/100");
document.body.appendChild(setAttributeExample);

// 2.2. getAttribute
// - Obtém o valor de um atributo de um elemento.
// - Retorna null se o atributo não existir.
// - Útil para verificar valores de atributos, incluindo os personalizados.
const getAttributeExample = document.createElement("a");
getAttributeExample.setAttribute("href", "https://example.com");
const hrefValue = getAttributeExample.getAttribute("href"); // Retorna 'https://example.com'
const getAttrDisplay = document.createElement("p");
getAttrDisplay.textContent = `Valor do href: ${hrefValue}`;
document.body.appendChild(getAttrDisplay);

// 2.3. removeAttribute
// - Remove um atributo de um elemento.
// - Útil para limpar atributos desnecessários ou redefinir comportamento.
// - Não afeta o conteúdo do elemento, apenas seus metadados.
const removeAttributeExample = document.createElement("input");
removeAttributeExample.setAttribute("disabled", "");
removeAttributeExample.removeAttribute("disabled"); // Remove o atributo disabled
document.body.appendChild(removeAttributeExample);

// 2.4. hasAttribute
// - Verifica se um elemento possui um atributo específico.
// - Retorna true ou false, útil para lógica condicional.
// - Funciona com qualquer atributo, incluindo os personalizados.
const hasAttributeExample = document.createElement("div");
hasAttributeExample.setAttribute("data-test", "valor");
const hasAttr = hasAttributeExample.hasAttribute("data-test"); // Retorna true
const hasAttrDisplay = document.createElement("p");
hasAttrDisplay.textContent = `Possui data-test? ${hasAttr}`;
document.body.appendChild(hasAttrDisplay);

// 2.5. dataset
// - Acessa ou define atributos personalizados (data-*).
// - Disponível em elementos HTML5, acessado via objeto dataset.
// - Seguro e conveniente para manipular metadados personalizados.
const datasetExample = document.createElement("div");
datasetExample.dataset.info = "Informação personalizada";
const datasetValue = datasetExample.dataset.info; // Retorna 'Informação personalizada'
const datasetDisplay = document.createElement("p");
datasetDisplay.textContent = `Dataset info: ${datasetValue}`;
document.body.appendChild(datasetDisplay);

// 2.6. Propriedades de Atributos (acesso direto)
// - Muitos atributos têm propriedades correspondentes no DOM (ex.: id, className, src, value).
// - Permite manipulação direta sem usar setAttribute/getAttribute.
// - Mais rápido e legível, mas limitado a atributos padrão (não personalizados).
const propExample = document.createElement("input");
propExample.id = "meuInput";
propExample.value = "Texto do input";
propExample.className = "minhaClasse";
document.body.appendChild(propExample);

// 3. EXEMPLO PRÁTICO COM TODOS OS MÉTODOS
// Cria um contêiner para demonstrar todos os métodos em ação
const container = document.createElement("div");
container.style.border = "1px solid black";
container.style.padding = "10px";
container.style.margin = "10px";

// Demonstração de cada método
const demoSetAttribute = document.createElement("img");
demoSetAttribute.setAttribute("alt", "Imagem de demonstração");
demoSetAttribute.setAttribute("src", "https://via.placeholder.com/50");
container.appendChild(demoSetAttribute);

const demoGetAttribute = document.createElement("a");
demoGetAttribute.setAttribute("href", "https://example.com");
const hrefDemo = demoGetAttribute.getAttribute("href");
const demoGetAttrDisplay = document.createElement("p");
demoGetAttrDisplay.textContent = `Valor do href: ${hrefDemo}`;
container.appendChild(demoGetAttrDisplay);

const demoRemoveAttribute = document.createElement("input");
demoRemoveAttribute.setAttribute("disabled", "");
demoRemoveAttribute.textContent = "Input inicialmente desabilitado";
demoRemoveAttribute.removeAttribute("disabled"); // Remove o atributo
container.appendChild(demoRemoveAttribute);

const demoHasAttribute = document.createElement("div");
demoHasAttribute.setAttribute("data-status", "ativo");
const hasAttrDemo = demoHasAttribute.hasAttribute("data-status");
const demoHasAttrDisplay = document.createElement("p");
demoHasAttrDisplay.textContent = `Possui data-status? ${hasAttrDemo}`;
container.appendChild(demoHasAttrDisplay);

const demoDataset = document.createElement("div");
demoDataset.dataset.example = "Exemplo de dataset";
const datasetDemo = demoDataset.dataset.example;
const demoDatasetDisplay = document.createElement("p");
demoDatasetDisplay.textContent = `Dataset example: ${datasetDemo}`;
container.appendChild(demoDatasetDisplay);

const demoProp = document.createElement("div");
demoProp.id = "demoId";
demoProp.className = "demoClass";
demoProp.textContent = `Div com id: ${demoProp.id} e classe: ${demoProp.className}`;
container.appendChild(demoProp);

// Adiciona o contêiner ao body
document.body.appendChild(container);
