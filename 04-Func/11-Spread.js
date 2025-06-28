// Índice de Spread e Rest Operators em JavaScript
// 1. Spread Operator (...)
//    - Definição: Expande elementos de arrays, objetos ou iteráveis em contextos como argumentos de funções, arrays literais ou objetos.
//    - Uso: Copiar arrays/objetos, combinar elementos, passar argumentos dinamicamente.
// 2. Rest Operator (...)
//    - Definição: Coleta múltiplos argumentos ou elementos em uma única variável (array) em funções ou desestruturação.
//    - Uso: Capturar argumentos variáveis em funções ou extrair partes de arrays/objetos.
// 3. Diferenças Principais
//    - Spread: Expande elementos para uso individual (saída).
//    - Rest: Agrupa elementos em um array (entrada).
//    - Contexto: Spread é usado em chamadas/declarações; Rest é usado em parâmetros/desestruturação.
// 4. Integração com Outros Conceitos
//    - Arguments: Rest substitui `arguments` em funções modernas, sendo mais explícito e flexível.
//    - Valores padrão/nullish: Combinam com Rest para entradas ausentes.
//    - Getters: Podem ser usados em objetos com Spread/Rest.
//    - Factory Functions/Construtoras: Spread e Rest facilitam manipulação de dados dinâmicos.

// Exemplo prático de Spread e Rest Operators

// 1. Spread Operator: Expandindo elementos
// Exemplo com arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2, 7]; // Spread para combinar arrays
console.log(combinado); // Saída: [1, 2, 3, 4, 5, 6, 7]

// Exemplo com objetos
const configPadrao = { tema: "claro", idioma: "pt-BR" };
const configUsuario = { idioma: "en-US", modo: "noturno" };
const configFinal = { ...configPadrao, ...configUsuario }; // Spread para mesclar objetos
console.log(configFinal); // Saída: { tema: 'claro', idioma: 'en-US', modo: 'noturno' }

// Spread em chamadas de função
function somar(a, b, c) {
  return (a ?? 0) + (b ?? 0) + (c ?? 0); // Usa nullish coalescing
}
const valores = [1, 2, 3];
console.log(somar(...valores)); // Saída: 6

// 2. Rest Operator: Coletando elementos
// Função com Rest para argumentos variáveis
function calcularTotal(...numeros) {
  // Rest coleta todos os argumentos em um array
  console.log("Arguments:", arguments); // Comparação com arguments
  return numeros.reduce(
    (total, num) => total + (typeof num === "number" ? num : num ?? 0),
    0
  );
}
console.log(calcularTotal(1, 2, null, "texto", 3));
// Saída:
// Arguments: { '0': 1, '1': 2, '2': null, '3': 'texto', '4': 3 }
// 6

// Rest em desestruturação
const [primeiro, ...resto] = [1, 2, 3, 4];
console.log(primeiro, resto); // Saída: 1, [2, 3, 4]

const { tema, ...outrasConfig } = configFinal;
console.log(tema, outrasConfig); // Saída: claro, { idioma: 'en-US', modo: 'noturno' }

// 3. Integração com Factory Function e Getters
function criarCalculadora() {
  let historico = [];

  return {
    // Método com Rest para somar valores
    somar: function (...valores) {
      const soma = valores.reduce((total, num) => total + (num ?? 0), 0);
      historico.push({ operacao: "soma", resultado: soma });
      return soma;
    },
    // Getter para histórico
    get historico() {
      return [...historico]; // Usa Spread para retornar cópia
    },
  };
}
const calc = criarCalculadora();
console.log(calc.somar(5, 10, null)); // Saída: 15
console.log(calc.historico); // Saída: [{ operacao: 'soma', resultado: 15 }]

// 4. Integração com Função Construtora e Contexto
function GerenciadorConfig(opcoes = {}) {
  this.config = {
    ...opcoes,
    tema: opcoes.tema ?? "claro",
    idioma: opcoes.idioma ?? "pt-BR",
  }; // Spread para mesclar
}

// Método no prototype usando Rest
GerenciadorConfig.prototype.atualizar = function (...updates) {
  // Rest coleta múltiplos objetos de atualização
  console.log("Arguments:", arguments); // Comparação com arguments
  updates.forEach((update) => {
    this.config = { ...this.config, ...update }; // Spread para mesclar atualizações
  });
};

// Getter no prototype
Object.defineProperty(GerenciadorConfig.prototype, "configFormatada", {
  get: function () {
    return `Tema: ${this.config.tema}, Idioma: ${this.config.idioma}`;
  },
});
const config = new GerenciadorConfig({ tema: "escuro" });
config.atualizar({ idioma: "en-US" }, { modo: "noturno" });
console.log(config.configFormatada); // Saída: Tema: escuro, Idioma: en-US
console.log(config.config); // Saída: { tema: 'escuro', idioma: 'en-US', modo: 'noturno' }

// // 5. Exemplo Combinado: Spread, Rest, Factory e Construtora
// const ModuloGerenciador = (function() {
//     // Função Construtora
//     function Configuracao(opcoes = {}) {
//         this.config = { ...opcoes, tema: opcoes.tema ?? 'claro' }; // Spread com nullish
//     }
//     Configuracao.prototype.getConfig = function() {
//         return { ...this.config }; // Spread para cópia
//     };

//     // Factory Function com Rest
//     function criarConfig(...opcoes) {
//         // Rest coleta múltiplos objetos de configuração
//         const config = opcoes.reduce((acc, curr) => ({ ...acc, ...curr }), { tema: 'claro' });
//         return {
//             getConfig: function() {
//                 return { ...config }; // Spread para cópia
//             },
//             // Método com bind para contexto
//             saudar: function(mensagem = 'Bem-vindo').bind({ tema: config.tema }) {
//                 return `${mensagem}, tema ${this.tema}!`;
//             }
//         };
//     }

//     // Interface pública
//     return {
//         criarConstrutora: (opcoes) => new Configuracao(opcoes),
//         criarFactory: criarConfig
//     };
// })();
const configConstrutora = ModuloGerenciador.criarConstrutora({
  tema: "escuro",
});
const configFactory = ModuloGerenciador.criarFactory(
  { tema: "noturno" },
  { idioma: "en-US" }
);
console.log(configConstrutora.getConfig()); // Saída: { tema: 'escuro' }
console.log(configFactory.getConfig()); // Saída: { tema: 'noturno', idioma: 'en-US' }
console.log(configFactory.saudar()); // Saída: Bem-vindo, tema noturno!

// Notas adicionais:
// - Spread Operator:
//   - Expande arrays, objetos ou iteráveis em elementos individuais.
//   - Ideal para cópias rasas, mesclagem de objetos/arrays, e passagem de argumentos.
//   - Exemplo: `[...array]` cria uma cópia; `{...objeto}` mescla propriedades.
// - Rest Operator:
//   - Coleta argumentos ou elementos em um array, substituindo `arguments` em funções modernas.
//   - Usado em parâmetros de funções (`function(...args)`) ou desestruturação (`const [a, ...rest] = array`).
// - Comparação com `arguments`:
//   - Rest é um array verdadeiro, permitindo métodos como `map`, `filter`; `arguments` é um objeto semelhante a array.
//   - Rest é mais explícito e só inclui argumentos passados diretamente (exclui argumentos implícitos como `this`).
// - Integração:
//   - Spread/Rest combinam bem com factory functions para criar/manipular objetos dinamicamente.
//   - Em funções construtoras, Spread pode mesclar configurações no `this`, e Rest pode coletar argumentos dinâmicos.
//   - Getters podem usar Spread para retornar cópias seguras de dados privados.
//   - Contexto (`call`, `apply`, `bind`) pode ser usado com métodos que utilizam Spread/Rest.
// - Compatibilidade: Spread e Rest são suportados em ES6+ (navegadores modernos e Node.js).
