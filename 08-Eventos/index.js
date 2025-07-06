// ÍNDICE
// 1. Introdução à Manipulação de Eventos no DOM
// 2. Métodos para Manipulação de Eventos
//    2.1. addEventListener
//    2.2. removeEventListener
//    2.3. dispatchEvent
//    2.4. event.target
//    2.5. event.preventDefault
//    2.6. event.stopPropagation
//    2.7. CustomEvent
// 3. Lista de Eventos por Categoria
//    3.1. Eventos de Mouse
//    3.2. Eventos de Teclado
//    3.3. Eventos de Formulário
//    3.4. Eventos de Janela/Documento
//    3.5. Eventos de Toque
//    3.6. Outros Eventos Comuns
// 4. Exemplo Prático com Eventos Selecionados

// 1. INTRODUÇÃO À MANIPULAÇÃO DE EVENTOS NO DOM
// O DOM (Document Object Model) permite detectar e responder a interações do usuário ou mudanças no estado da página por meio de eventos.
// Eventos são categorizados por tipo (mouse, teclado, formulário, etc.) e manipulados com métodos como addEventListener.
// Esta seção lista os eventos comuns e demonstra sua aplicação em exemplos práticos.

// 2. MÉTODOS PARA MANIPULAÇÃO DE EVENTOS

// 2.1. addEventListener
// - Associa uma função a um evento específico em um elemento (ex.: click, input).
// - Suporta opções como capture (captura na fase de propagação) e once (executa uma vez).
// - Sintaxe: element.addEventListener(evento, função, [opções]).
const clickExample = document.createElement("button");
clickExample.textContent = "Clique aqui";
clickExample.addEventListener("click", () => {
  const display = document.createElement("p");
  display.textContent = "Botão clicado!";
  document.body.appendChild(display);
});
document.body.appendChild(clickExample);

// 2.2. removeEventListener
// - Remove um listener previamente adicionado, exigindo a mesma função usada.
// - Útil para evitar memória desnecessária ou desativar comportamentos.
// - Funções anônimas não podem ser removidas diretamente.
const removeEventExample = document.createElement("button");
removeEventExample.textContent = "Remover evento";
const handler = () => alert("Evento acionado!");
removeEventExample.addEventListener("click", handler);
removeEventExample.addEventListener(
  "click",
  () => {
    removeEventExample.removeEventListener("click", handler);
    const display = document.createElement("p");
    display.textContent = "Evento removido!";
    document.body.appendChild(display);
  },
  { once: true }
);
document.body.appendChild(removeEventExample);

// 2.3. dispatchEvent
// - Dispara um evento programaticamente em um elemento.
// - Usado para simular interações ou disparar eventos personalizados.
// - Requer um objeto Event ou CustomEvent.
const dispatchEventExample = document.createElement("button");
dispatchEventExample.textContent = "Disparar evento";
dispatchEventExample.addEventListener("customEvent", () => {
  const display = document.createElement("p");
  display.textContent = "Evento personalizado disparado!";
  document.body.appendChild(display);
});
dispatchEventExample.addEventListener("click", () => {
  dispatchEventExample.dispatchEvent(new Event("customEvent"));
});
document.body.appendChild(dispatchEventExample);

// 2.4. event.target
// - Retorna o elemento que disparou o evento, útil para delegação de eventos.
// - Permite identificar dinamicamente o elemento interagido.
// - Comum em contêineres com múltiplos elementos filhos.
const targetExample = document.createElement("div");
targetExample.innerHTML = "<button>Botão 1</button><button>Botão 2</button>";
targetExample.addEventListener("click", (e) => {
  const display = document.createElement("p");
  display.textContent = `Clicado em: ${e.target.textContent}`;
  document.body.appendChild(display);
});
document.body.appendChild(targetExample);

// 2.5. event.preventDefault
// - Cancela o comportamento padrão de um evento (ex.: submissão de formulário, clique em link).
// - Não impede a propagação do evento para outros elementos.
// - Essencial para controlar ações padrão do navegador.
const preventDefaultExample = document.createElement("form");
preventDefaultExample.action = "#";
preventDefaultExample.innerHTML = '<input type="submit" value="Enviar">';
preventDefaultExample.addEventListener("submit", (e) => {
  e.preventDefault();
  const display = document.createElement("p");
  display.textContent = "Submissão impedida!";
  document.body.appendChild(display);
});
document.body.appendChild(preventDefaultExample);

// 2.6. event.stopPropagation
// - Impede a propagação de um evento (bubbling ou capturing) para outros elementos.
// - Útil para isolar eventos em elementos específicos.
// - Não afeta o comportamento padrão do evento.
const stopPropagationExample = document.createElement("div");
stopPropagationExample.innerHTML = "<button>Botão interno</button>";
stopPropagationExample.addEventListener("click", () => {
  const display = document.createElement("p");
  display.textContent = "Div clicada!";
  document.body.appendChild(display);
});
const innerButton = stopPropagationExample.querySelector("button");
innerButton.addEventListener("click", (e) => {
  e.stopPropagation();
  const display = document.createElement("p");
  display.textContent = "Botão clicado, propagação parada!";
  document.body.appendChild(display);
});
document.body.appendChild(stopPropagationExample);

// 2.7. CustomEvent
// - Cria eventos personalizados com dados adicionais via propriedade detail.
// - Ideal para comunicação entre componentes ou lógica personalizada.
// - Sintaxe: new CustomEvent(evento, { detail: dados }).
const customEventExample = document.createElement("button");
customEventExample.textContent = "Evento personalizado";
customEventExample.addEventListener("myEvent", (e) => {
  const display = document.createElement("p");
  display.textContent = `Evento personalizado: ${e.detail.message}`;
  document.body.appendChild(display);
});
customEventExample.addEventListener("click", () => {
  customEventExample.dispatchEvent(
    new CustomEvent("myEvent", { detail: { message: "Dados personalizados" } })
  );
});
document.body.appendChild(customEventExample);

// 3. LISTA DE EVENTOS POR CATEGORIA
// 3.1. Eventos de Mouse
// - click: Clique com botão principal.
// - dblclick: Clique duplo.
// - mousedown: Botão do mouse pressionado.
// - mouseup: Botão do mouse liberado.
// - mouseover: Mouse entra no elemento.
// - mouseout: Mouse sai do elemento.
// - mousemove: Mouse se move sobre o elemento.
// - contextmenu: Clique com botão direito.
// Exemplo: click já demonstrado em addEventListener.

// 3.2. Eventos de Teclado
// - keydown: Tecla pressionada.
// - keyup: Tecla liberada.
// - keypress: Tecla pressionada (obsoleto, prefira keydown).
// Exemplo de keydown:
const keydownExample = document.createElement("input");
keydownExample.type = "text";
keydownExample.placeholder = "Digite uma tecla";
keydownExample.addEventListener("keydown", (e) => {
  const display = document.createElement("p");
  display.textContent = `Tecla pressionada: ${e.key}`;
  document.body.appendChild(display);
});
document.body.appendChild(keydownExample);

// 3.3. Eventos de Formulário
// - submit: Formulário enviado.
// - change: Valor do input/select/textarea alterado e confirmado.
// - input: Valor do input/textarea alterado (em tempo real).
// - focus: Elemento recebe foco.
// - blur: Elemento perde foco.
// - reset: Formulário resetado.
// Exemplo: submit já demonstrado em preventDefault.

// 3.4. Eventos de Janela/Documento
// - load: Página ou recurso (ex.: imagem) carregado.
// - resize: Janela redimensionada.
// - scroll: Página ou elemento rolado.
// - DOMContentLoaded: DOM completamente carregado, sem esperar recursos.
// Exemplo de scroll:
document.addEventListener("scroll", () => {
  const display = document.createElement("p");
  display.textContent = `Página rolada! Posição: ${window.scrollY}`;
  document.body.appendChild(display);
});

// 3.5. Eventos de Toque
// - touchstart: Toque iniciado em um elemento.
// - touchmove: Toque movido sobre um elemento.
// - touchend: Toque finalizado.
// - touchcancel: Toque interrompido (ex.: chamada recebida).
// Exemplo de touchstart:
const touchExample = document.createElement("div");
touchExample.textContent = "Toque aqui";
touchExample.addEventListener("touchstart", () => {
  const display = document.createElement("p");
  display.textContent = "Toque detectado!";
  document.body.appendChild(display);
});
document.body.appendChild(touchExample);

// 3.6. Outros Eventos Comuns
// - mouseenter: Mouse entra no elemento (não propaga para filhos).
// - mouseleave: Mouse sai do elemento (não propaga para filhos).
// - copy: Conteúdo copiado.
// - paste: Conteúdo colado.
// - drag: Elemento arrastado.
// - drop: Elemento solto em área de drop.
// Exemplo de copy:
const copyExample = document.createElement("input");
copyExample.type = "text";
copyExample.value = "Copie este texto";
copyExample.addEventListener("copy", () => {
  const display = document.createElement("p");
  display.textContent = "Texto copiado!";
  document.body.appendChild(display);
});
document.body.appendChild(copyExample);

// 4. EXEMPLO PRÁTICO COM EVENTOS SELECIONADOS
// Cria um contêiner para demonstrar eventos de cada categoria
const container = document.createElement("div");
container.style.border = "1px solid black";
container.style.padding = "10px";
container.style.margin = "10px";

// Mouse: click
const demoClick = document.createElement("button");
demoClick.textContent = "Clique (Mouse)";
demoClick.addEventListener("click", () => {
  const display = document.createElement("p");
  display.textContent = "Evento click (mouse)!";
  container.appendChild(display);
});
container.appendChild(demoClick);

// Teclado: keydown
const demoKeydown = document.createElement("input");
demoKeydown.type = "text";
demoKeydown.placeholder = "Digite (Teclado)";
demoKeydown.addEventListener("keydown", (e) => {
  const display =
    document.getElementById("keydownDisplay") || document.createElement("p");
  display.id = "keydownDisplay";
  display.textContent = `Tecla pressionada: ${e.key}`;
  container.appendChild(display);
});
container.appendChild(demoKeydown);

// Formulário: input
const demoInput = document.createElement("input");
demoInput.type = "text";
demoInput.placeholder = "Digite (Formulário)";
demoInput.addEventListener("input", (e) => {
  const display =
    document.getElementById("inputDisplay") || document.createElement("p");
  display.id = "inputDisplay";
  display.textContent = `Digitado: ${e.target.value}`;
  container.appendChild(display);
});
container.appendChild(demoInput);

// Formulário: submit
const demoForm = document.createElement("form");
demoForm.action = "#";
demoForm.innerHTML =
  '<input type="text" placeholder="Formulário"><input type="submit" value="Enviar">';
demoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const display = document.createElement("p");
  display.textContent = "Formulário submetido!";
  container.appendChild(display);
});
container.appendChild(demoForm);

// Janela: scroll (adicionado ao container para simulação)
container.style.height = "200px";
container.style.overflow = "auto";
container.innerHTML += '<div style="height: 400px;">Role para baixo</div>';
container.addEventListener("scroll", () => {
  const display =
    document.getElementById("scrollDisplay") || document.createElement("p");
  display.id = "scrollDisplay";
  display.textContent = `Rolagem detectada: ${container.scrollTop}px`;
  container.appendChild(display);
});

// Toque: touchstart
const demoTouch = document.createElement("button");
demoTouch.textContent = "Toque aqui (Toque)";
demoTouch.addEventListener("touchstart", () => {
  const display = document.createElement("p");
  display.textContent = "Evento touchstart!";
  container.appendChild(display);
});
container.appendChild(demoTouch);

// Outro: copy
const demoCopy = document.createElement("input");
demoCopy.type = "text";
demoCopy.value = "Copie este texto";
demoCopy.addEventListener("copy", () => {
  const display = document.createElement("p");
  display.textContent = "Texto copiado!";
  container.appendChild(display);
});
container.appendChild(demoCopy);

// Adiciona uma folha de estilo para melhorar a visualização
const styleSupport = document.createElement("style");
styleSupport.textContent = `
  div, button, form, input, p { margin: 5px; }
  button, input[type="submit"] { padding: 5px 10px; cursor: pointer; }
  input[type="text"] { padding: 5px; width: 200px; }
  form, div { background-color: lightgray; padding: 10px; }
  p { background-color: white; padding: 5px; }
`;
document.head.appendChild(styleSupport);

// Adiciona o contêiner ao body
document.body.appendChild(container);
