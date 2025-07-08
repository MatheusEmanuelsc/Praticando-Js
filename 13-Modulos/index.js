// ÍNDICE
// 1. Introdução a Módulos em JavaScript
// 2. Conceitos e Métodos
//    2.1. export
//    2.2. import
//    2.3. export default
//    2.4. import dinâmico
//    2.5. Reexportação
// 3. Exemplo Prático com Todos os Conceitos
// 4. Configuração para Executar Módulos no Navegador

// 1. INTRODUÇÃO A MÓDULOS EM JAVASCRIPT
// Módulos permitem organizar código em arquivos separados, promovendo reutilização e encapsulamento.
// ES Modules (ESM) é o padrão moderno, usando export e import para compartilhar código.
// Suportado em navegadores modernos e Node.js (com .mjs ou "type": "module" no package.json).
// Benefícios: escopo isolado, carregamento assíncrono, melhor manutenção.

// 2. CONCEITOS E MÉTODOS

// 2.1. export
// - Exporta funções, objetos, classes ou variáveis de um módulo para uso em outros arquivos.
// - Pode ser nomeado (export { nome }) ou individual (export const nome).
// - Exemplo: Exportar uma função e uma constante.
const exportExampleButton = document.createElement("button");
exportExampleButton.textContent = "Testar export";
exportExampleButton.addEventListener("click", () => {
  // Simula um módulo com exportações
  const module = {
    greet: function (name) {
      return `Olá, ${name}!`;
    },
    version: "1.0.0",
  };
  const display = document.createElement("p");
  display.textContent = `${module.greet("Usuário")} Versão: ${module.version}`;
  document.body.appendChild(display);
});
document.body.appendChild(exportExampleButton);

// 2.2. import
// - Importa exportações nomeadas ou padrão de outro módulo.
// - Sintaxe: import { nome } from './modulo.js' ou import nome from './modulo.js'.
// - Requer caminho relativo ou absoluto; no navegador, usa URLs ou caminhos locais.
const importExampleButton = document.createElement("button");
importExampleButton.textContent = "Testar import (simulado)";
importExampleButton.addEventListener("click", () => {
  // Simula importação de um módulo
  const simulatedModule = {
    add: (a, b) => a + b,
  };
  const display = document.createElement("p");
  display.textContent = `Import simulado: Soma 2 + 3 = ${simulatedModule.add(
    2,
    3
  )}`;
  document.body.appendChild(display);
});
document.body.appendChild(importExampleButton);

// 2.3. export default
// - Exporta um único valor padrão por módulo, importado sem chaves.
// - Ideal para módulos com uma funcionalidade principal.
// - Sintaxe: export default valor.
const defaultExportButton = document.createElement("button");
defaultExportButton.textContent = "Testar export default (simulado)";
defaultExportButton.addEventListener("click", () => {
  // Simula export default
  const defaultExport = function (message) {
    return `Mensagem padrão: ${message}`;
  };
  const display = document.createElement("p");
  display.textContent = defaultExport("Teste de exportação padrão");
  document.body.appendChild(display);
});
document.body.appendChild(defaultExportButton);

// 2.4. import dinâmico
// - Carrega módulos dinamicamente em tempo de execução usando import().
// - Retorna uma Promise, útil para carregamento sob demanda (lazy loading).
// - Sintaxe: import('./modulo.js').then(module => {...}).
const dynamicImportButton = document.createElement("button");
dynamicImportButton.textContent = "Testar import dinâmico (simulado)";
dynamicImportButton.addEventListener("click", async () => {
  // Simula import dinâmico
  const simulatedDynamicModule = {
    multiply: (a, b) => a * b,
  };
  const display = document.createElement("p");
  display.textContent = `Import dinâmico simulado: 4 * 5 = ${simulatedDynamicModule.multiply(
    4,
    5
  )}`;
  document.body.appendChild(display);
});
document.body.appendChild(dynamicImportButton);

// 2.5. Reexportação
// - Permite exportar novamente itens de outros módulos.
// - Útil para agregar exportações ou renomear.
// - Sintaxe: export { nome } from './modulo.js' ou export * from './modulo.js'.
const reexportButton = document.createElement("button");
reexportButton.textContent = "Testar reexportação (simulada)";
reexportButton.addEventListener("click", () => {
  // Simula reexportação
  const reexportedModule = {
    subtract: (a, b) => a - b,
  };
  const display = document.createElement("p");
  display.textContent = `Reexportação simulada: 10 - 3 = ${reexportedModule.subtract(
    10,
    3
  )}`;
  document.body.appendChild(display);
});
document.body.appendChild(reexportButton);

// 3. EXEMPLO PRÁTICO COM TODOS OS CONCEITOS
// Cria um contêiner para demonstrar todos os conceitos
const container = document.createElement("div");
container.style.border = "1px solid black";
container.style.padding = "10px";
container.style.margin = "10px";

// Simula um módulo com exportações nomeadas e padrão
const simulatedModule = {
  greet: (name) => `Olá, ${name}!`,
  version: "1.0.0",
  default: (message) => `Mensagem padrão: ${message}`,
  multiply: (a, b) => a * b,
  subtract: (a, b) => a - b,
};

// export: Exportações nomeadas
const demoExportButton = document.createElement("button");
demoExportButton.textContent = "export";
demoExportButton.addEventListener("click", () => {
  const display =
    document.getElementById("exportDisplay") || document.createElement("p");
  display.id = "exportDisplay";
  display.textContent = `${simulatedModule.greet("Usuário")} Versão: ${
    simulatedModule.version
  }`;
  container.appendChild(display);
});
container.appendChild(demoExportButton);

// import: Importações nomeadas
const demoImportButton = document.createElement("button");
demoImportButton.textContent = "import";
demoImportButton.addEventListener("click", () => {
  const display =
    document.getElementById("importDisplay") || document.createElement("p");
  display.id = "importDisplay";
  display.textContent = `Import: Soma simulada 2 + 3 = ${
    simulatedModule.add ? simulatedModule.add(2, 3) : "Função não disponível"
  }`;
  container.appendChild(display);
});
container.appendChild(demoImportButton);

// export default: Exportação padrão
const demoDefaultExportButton = document.createElement("button");
demoDefaultExportButton.textContent = "export default";
demoDefaultExportButton.addEventListener("click", () => {
  const display =
    document.getElementById("defaultExportDisplay") ||
    document.createElement("p");
  display.id = "defaultExportDisplay";
  display.textContent = simulatedModule.default("Teste padrão");
  container.appendChild(display);
});
container.appendChild(demoDefaultExportButton);

// import dinâmico: Carregamento sob demanda
const demoDynamicImportButton = document.createElement("button");
demoDynamicImportButton.textContent = "import dinâmico";
demoDynamicImportButton.addEventListener("click", async () => {
  const display =
    document.getElementById("dynamicImportDisplay") ||
    document.createElement("p");
  display.id = "dynamicImportDisplay";
  display.textContent = `Import dinâmico: 4 * 5 = ${simulatedModule.multiply(
    4,
    5
  )}`;
  container.appendChild(display);
});
container.appendChild(demoDynamicImportButton);

// Reexportação: Exportar de outro módulo
const demoReexportButton = document.createElement("button");
demoReexportButton.textContent = "Reexportação";
demoReexportButton.addEventListener("click", () => {
  const display =
    document.getElementById("reexportDisplay") || document.createElement("p");
  display.id = "reexportDisplay";
  display.textContent = `Reexportação: 10 - 3 = ${simulatedModule.subtract(
    10,
    3
  )}`;
  container.appendChild(display);
});
container.appendChild(demoReexportButton);

// 4. CONFIGURAÇÃO PARA EXECUTAR MÓDULOS NO NAVEGADOR
// Para executar ES Modules no navegador, o script deve ser carregado com type="module":
// <script type="module" src="es_modules.js"></script>
// Arquivos .js devem ser servidos via HTTP/HTTPS ou localhost (não file://).
// Exemplo de estrutura de arquivos:
// - index.html
// - es_modules.js (este arquivo)
// - utils.js (módulo simulado abaixo):
/*
// utils.js
export const greet = (name) => `Olá, ${name}!`;
export const version = '1.0.0';
export default (message) => `Mensagem padrão: ${message}`;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;
*/
// Para importar em es_modules.js:
// import { greet, version, multiply, subtract } from './utils.js';
// import defaultFn from './utils.js';

// Adiciona uma folha de estilo para melhorar a visualização
const styleSupport = document.createElement("style");
styleSupport.textContent = `
  div, button, p { margin: 5px; }
  button { padding: 5px 10px; cursor: pointer; }
  div { background-color: lightgray; padding: 10px; }
  p { background-color: white; padding: 5px; }
`;
document.head.appendChild(styleSupport);

// Adiciona o contêiner ao body
document.body.appendChild(container);
