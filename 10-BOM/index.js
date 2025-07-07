// ÍNDICE
// 1. Introdução ao Browser Object Model (BOM)
// 2. Objetos e Métodos do BOM
//    2.1. window
//    2.2. navigator
//    2.3. location
//    2.4. history
//    2.5. screen
//    2.6. alert, confirm, prompt
//    2.7. setTimeout
//    2.8. setInterval
//    2.9. clearTimeout
//    2.10. clearInterval
//    2.11. requestAnimationFrame
//    2.12. document.cookie
//    2.13. localStorage
//    2.14. sessionStorage
// 3. Exemplo Prático com Todos os Objetos e Métodos

// 1. INTRODUÇÃO AO BROWSER OBJECT MODEL (BOM)
// O BOM (Browser Object Model) fornece interfaces para interagir com o navegador, fora do conteúdo da página (DOM).
// Inclui objetos como window, navigator, location, history, screen, além de cookies e armazenamento web (localStorage, sessionStorage).
// Permite gerenciar janelas, navegação, histórico, informações do dispositivo, temporização, animações e persistência de dados.

// 2. OBJETOS E MÉTODOS DO BOM

// 2.1. window
// - Objeto global que representa a janela do navegador, ponto de acesso para outros objetos do BOM e DOM.
// - Propriedades: innerWidth, innerHeight, document, etc.
// - Métodos: open(), close(), resizeTo(), setTimeout(), etc.
const windowExample = document.createElement("button");
windowExample.textContent = "Ver tamanho da janela";
windowExample.addEventListener("click", () => {
  const display = document.createElement("p");
  display.textContent = `Tamanho da janela: ${window.innerWidth}x${window.innerHeight}`;
  document.body.appendChild(display);
});
document.body.appendChild(windowExample);

// 2.2. navigator
// - Fornece informações sobre o navegador e dispositivo.
// - Propriedades: userAgent, language, platform, onLine.
// - Útil para detectar tipo de dispositivo ou conectividade.
const navigatorExample = document.createElement("button");
navigatorExample.textContent = "Ver informações do navegador";
navigatorExample.addEventListener("click", () => {
  const display = document.createElement("p");
  display.textContent = `Navegador: ${navigator.userAgent}, Online: ${navigator.onLine}`;
  document.body.appendChild(display);
});
document.body.appendChild(navigatorExample);

// 2.3. location
// - Representa a URL atual e permite manipulá-la.
// - Propriedades: href, pathname, search, hash.
// - Métodos: assign(), replace(), reload().
// - Útil para redirecionamentos ou análise de URL.
const locationExample = document.createElement("button");
locationExample.textContent = "Ver URL atual";
locationExample.addEventListener("click", () => {
  const display = document.createElement("p");
  display.textContent = `URL: ${location.href}, Caminho: ${location.pathname}`;
  document.body.appendChild(display);
});
document.body.appendChild(locationExample);

// 2.4. history
// - Controla o histórico de navegação da sessão.
// - Métodos: back(), forward(), go(), pushState(), replaceState().
// - Propriedade: length (número de entradas no histórico).
const historyExample = document.createElement("button");
historyExample.textContent = "Ver histórico";
historyExample.addEventListener("click", () => {
  const display = document.createElement("p");
  display.textContent = `Entradas no histórico: ${history.length}`;
  document.body.appendChild(display);
});
document.body.appendChild(historyExample);

// 2.5. screen
// - Fornece informações sobre a tela do dispositivo.
// - Propriedades: width, height, availWidth, availHeight, pixelDepth.
// - Útil para adaptar interfaces a diferentes resoluções.
const screenExample = document.createElement("button");
screenExample.textContent = "Ver informações da tela";
screenExample.addEventListener("click", () => {
  const display = document.createElement("p");
  display.textContent = `Tela: ${screen.width}x${screen.height}, Profundidade: ${screen.pixelDepth}`;
  document.body.appendChild(display);
});
document.body.appendChild(screenExample);

// 2.6. alert, confirm, prompt
// - Métodos do objeto window para interação com o usuário.
// - alert: Exibe mensagem simples.
// - confirm: Solicita confirmação (true/false).
// - prompt: Solicita entrada de texto (string ou null).
const dialogExample = document.createElement("button");
dialogExample.textContent = "Testar diálogos";
dialogExample.addEventListener("click", () => {
  alert("Este é um alerta!");
  const confirmed = confirm("Deseja continuar?");
  const input = prompt("Digite seu nome:");
  const display = document.createElement("p");
  display.textContent = `Confirmou: ${confirmed}, Nome: ${input || "Nenhum"}`;
  document.body.appendChild(display);
});
document.body.appendChild(dialogExample);

// 2.7. setTimeout
// - Executa uma função após um atraso especificado (em milissegundos).
// - Retorna um ID único para cancelamento com clearTimeout.
// - Sintaxe: setTimeout(função, atraso, [arg1, arg2, ...]).
const timeoutExample = document.createElement("button");
timeoutExample.textContent = "Iniciar setTimeout";
timeoutExample.addEventListener("click", () => {
  setTimeout(
    (msg) => {
      const display = document.createElement("p");
      display.textContent = `setTimeout: ${msg}`;
      document.body.appendChild(display);
    },
    1000,
    "Atraso de 1 segundo"
  );
});
document.body.appendChild(timeoutExample);

// 2.8. setInterval
// - Executa uma função repetidamente em intervalos fixos (em milissegundos).
// - Retorna um ID único para cancelamento com clearInterval.
// - Sintaxe: setInterval(função, intervalo, [arg1, arg2, ...]).
const intervalExample = document.createElement("button");
intervalExample.textContent = "Iniciar setInterval";
let intervalCount = 0;
intervalExample.addEventListener("click", () => {
  const intervalId = setInterval(() => {
    intervalCount++;
    const display =
      document.getElementById("intervalDisplay") || document.createElement("p");
    display.id = "intervalDisplay";
    display.textContent = `setInterval: Contagem ${intervalCount}`;
    document.body.appendChild(display);
    if (intervalCount >= 3) clearInterval(intervalId);
  }, 1000);
});
document.body.appendChild(intervalExample);

// 2.9. clearTimeout
// - Cancela um setTimeout antes de sua execução.
// - Requer o ID retornado por setTimeout.
// - Útil para evitar ações desnecessárias.
const clearTimeoutExample = document.create;
