// ÍNDICE
// 1. Introdução à Manipulação de Texto no DOM
// 2. Métodos para Inserção e Manipulação de Texto
// 2.1. textContent
// 2.2. innerText
// 2.3. innerHTML
// 2.4. createTextNode
// 2.5. insertAdjacentText
// 2.6. value (para elementos de formulário)
// 3. Exemplo Prático com Todos os Métodos

// 1. INTRODUÇÃO À MANIPULAÇÃO DE TEXTO NO DOM
// O DOM (Document Object Model) permite manipular o conteúdo de uma página web dinamicamente.
// A manipulação de texto envolve inserir, alterar ou remover texto em elementos HTML.
// Cada método tem características específicas, como segurança, desempenho e suporte a HTML.

// 2. MÉTODOS PARA INSERÇÃO E MANIPULAÇÃO DE TEXTO

// 2.1. textContent
// - Define ou obtém o conteúdo de texto puro de um elemento e seus descendentes.
// - Ignora qualquer marcação HTML, tratando-a como texto.
// - Seguro contra injeções de código (XSS), pois não interpreta HTML.
// - Melhor desempenho que innerText, pois não considera estilos CSS.
const textContentExample = document.createElement('p');
textContentExample.textContent = 'Este é um texto puro <b>não interpretado</b>';
document.body.appendChild(textContentExample);

// 2.2. innerText
// - Similar ao textContent, mas considera a visibilidade do elemento (CSS display).
// - Mais lento, pois leva em conta o layout e estilos aplicados.
// - Não é suportado em todos os navegadores da mesma forma (ex.: Firefox antigo).
const innerTextExample = document.createElement('p');
innerTextExample.innerText = 'Texto visível com <b>innerText</b>';
document.body.appendChild(innerTextExample);

// 2.3. innerHTML
// - Define ou obtém o conteúdo HTML de um elemento, interpretando tags HTML.
// - Permite inserir texto com formatação ou elementos HTML.
// - Deve ser usado com cuidado devido ao risco de injeção de código (XSS).
const innerHTMLExample = document.createElement('div');
innerHTMLExample.innerHTML = 'Texto com <b>negrito</b> e <i>itálico</i>';
document.body.appendChild(innerHTMLExample);

// 2.4. createTextNode
// - Cria um nó de texto puro, que pode ser inserido no DOM.
// - Útil para adicionar texto de forma segura, sem interpretar HTML.
// - Requer um passo adicional para anexar o nó ao DOM.
const textNodeExample = document.createElement('p');
const textNode = document.createTextNode('Texto criado com createTextNode');
textNodeExample.appendChild(textNode);
document.body.appendChild(textNodeExample);

// 2.5. insertAdjacentText
// - Insere texto em posições específicas em relação a um elemento (beforebegin, afterbegin, beforeend, afterend).
// - Seguro, pois não interpreta HTML, apenas texto puro.
// - Flexível para posicionamento sem modificar o conteúdo existente.
const adjacentTextExample = document.createElement('div');
adjacentTextExample.insertAdjacentText('afterbegin', 'Texto inserido no início');
adjacentTextExample.insertAdjacentText('beforeend', ' e no final');
document.body.appendChild(adjacentTextExample);

// 2.6. value
// - Usado em elementos de formulário (input, textarea, select) para manipular texto digitado.
// - Permite obter ou definir o valor atual do campo.
// - Não manipula o DOM diretamente, mas o conteúdo do elemento.
const inputExample = document.createElement('input');
inputExample.type = 'text';
inputExample.value = 'Texto inicial do input';
document.body.appendChild(inputExample);

// 3. EXEMPLO PRÁTICO COM TODOS OS MÉTODOS
// Cria um contêiner para demonstrar todos os métodos em ação
const container = document.createElement('div');
container.style.border = '1px solid black';
container.style.padding = '10px';
container.style.margin = '10px';

// Demonstração de cada método
const demoTextContent = document.createElement('p');
demoTextContent.textContent = 'Exemplo com textContent: Texto puro';
container.appendChild(demoTextContent);

const demoInnerText = document.createElement('p');
demoInnerText.innerText = 'Exemplo com innerText: Texto visível';
container.appendChild(demoInnerText);

const demoInnerHTML = document.createElement('p');
demoInnerHTML.innerHTML = 'Exemplo com <b>innerHTML</b>: Texto formatado';
container.appendChild(demoInnerHTML);

const demoTextNode = document.createElement('p');
const textNodeDemo = document.createTextNode('Exemplo com createTextNode');
demoTextNode.appendChild(textNodeDemo);
container.appendChild(demoTextNode);

const demoAdjacentText = document.createElement('p');
demoAdjacentText.insertAdjacentText('afterbegin', 'Exemplo com insertAdjacentText: ');
demoAdjacentText.insertAdjacentText('beforeend', 'Texto posicionado');
container.appendChild(demoAdjacentText);

const demoInput = document.createElement('input');
demoInput.type = 'text';
demoInput.value = 'Exemplo com input.value';
container.appendChild(demoInput);

// Adiciona o contêiner ao body
document.body.appendChild(container);