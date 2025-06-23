// Índice de Eventos em JavaScript
// 1. Eventos de Mouse
//    - click: Disparado quando o usuário clica em um elemento.
//    - dblclick: Disparado quando o usuário clica duas vezes rapidamente.
//    - mouseover: Disparado quando o ponteiro do mouse entra em um elemento.
//    - mouseout: Disparado quando o ponteiro do mouse sai de um elemento.
// 2. Eventos de Teclado
//    - keydown: Disparado quando uma tecla é pressionada.
//    - keyup: Disparado quando uma tecla é solta.
//    - keypress: Disparado quando uma tecla é pressionada e solta (obsoleto, evite usar).
// 3. Eventos de Formulário
//    - submit: Disparado quando um formulário é enviado.
//    - change: Disparado quando o valor de um elemento de formulário muda.
//    - input: Disparado quando o valor de um input ou textarea é alterado.
// 4. Eventos de Janela
//    - load: Disparado quando a página termina de carregar.
//    - resize: Disparado quando a janela do navegador é redimensionada.
//    - scroll: Disparado quando o usuário rola a página.
// 5. Eventos de Toque (Touch)
//    - touchstart: Disparado quando o usuário toca um elemento.
//    - touchend: Disparado quando o usuário remove o dedo de um elemento.
//    - touchmove: Disparado quando o usuário move o dedo na tela.

// Exemplo prático de como lidar com eventos em JavaScript

// Selecionando elementos do DOM para demonstração
const button = document.querySelector("#myButton");
const input = document.querySelector("#myInput");
const form = document.querySelector("#myForm");
const div = document.querySelector("#myDiv");

// 1. Eventos de Mouse
// O evento 'click' é disparado quando o usuário clica em um elemento
button.addEventListener("click", () => {
  console.log("Botão clicado!");
});

// O evento 'dblclick' é disparado quando o usuário clica duas vezes rapidamente
button.addEventListener("dblclick", () => {
  console.log("Botão clicado duas vezes!");
});

// O evento 'mouseover' é disparado quando o ponteiro do mouse entra no elemento
div.addEventListener("mouseover", () => {
  console.log("Mouse entrou na div!");
});

// O evento 'mouseout' é disparado quando o ponteiro do mouse sai do elemento
div.addEventListener("mouseout", () => {
  console.log("Mouse saiu da div!");
});

// 2. Eventos de Teclado
// O evento 'keydown' é disparado quando uma tecla é pressionada
input.addEventListener("keydown", (event) => {
  console.log(`Tecla pressionada: ${event.key}`);
});

// O evento 'keyup' é disparado quando uma tecla é solta
input.addEventListener("keyup", (event) => {
  console.log(`Tecla solta: ${event.key}`);
});

// 3. Eventos de Formulário
// O evento 'submit' é disparado quando o formulário é enviado
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o comportamento padrão de recarregar a página
  console.log("Formulário enviado!");
});

// O evento 'change' é disparado quando o valor de um input muda e perde o foco
input.addEventListener("change", () => {
  console.log(`Valor do input mudou: ${input.value}`);
});

// O evento 'input' é disparado a cada alteração no valor do input
input.addEventListener("input", () => {
  console.log(`Valor do input em tempo real: ${input.value}`);
});

// 4. Eventos de Janela
// O evento 'load' é disparado quando a página termina de carregar
window.addEventListener("load", () => {
  console.log("Página totalmente carregada!");
});

// O evento 'resize' é disparado quando a janela do navegador é redimensionada
window.addEventListener("resize", () => {
  console.log("Janela redimensionada!");
});

// O evento 'scroll' é disparado quando o usuário rola a página
window.addEventListener("scroll", () => {
  console.log("Página rolada!");
});

// 5. Eventos de Toque
// O evento 'touchstart' é disparado quando o usuário toca um elemento
div.addEventListener("touchstart", () => {
  console.log("Toque iniciado na div!");
});

// O evento 'touchend' é disparado quando o usuário remove o dedo
div.addEventListener("touchend", () => {
  console.log("Toque finalizado na div!");
});

// O evento 'touchmove' é disparado quando o usuário move o dedo na tela
div.addEventListener("touchmove", () => {
  console.log("Toque movido na div!");
});

// Observação: Para testar eventos de toque, use um dispositivo com tela sensível ao toque ou emule em ferramentas de desenvolvimento do navegador.

// Notas adicionais:
// - O método addEventListener é a forma recomendada para adicionar eventos, pois permite múltiplos ouvintes para o mesmo evento.
// - Use event.preventDefault() para evitar comportamentos padrão do navegador, como no evento 'submit'.
// - O objeto 'event' passado para as funções de callback contém informações úteis, como event.target (elemento que disparou o evento) e event.key (tecla pressionada).
