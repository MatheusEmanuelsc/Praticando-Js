// Índice de Funções Construtoras vs Factory Functions em JavaScript
// 1. Funções Construtoras
//    - Definição: Funções chamadas com `new` para criar objetos, usando `this` para definir propriedades e métodos, com suporte a prototype para compartilhamento.
//    - Características: Dependem de `new`, usam prototype para métodos compartilhados, suportam herança via prototype chain.
// 2. Factory Functions
//    - Definição: Funções que retornam objetos diretamente, usando closures para encapsulamento, sem depender de `new` ou prototype.
//    - Características: Encapsulamento via closures, criação explícita de objetos, maior flexibilidade em retorno.
// 3. Comparação: Funções Construtoras vs Factory Functions
//    - Uso de `new`: Construtoras requerem `new`; factories não.
//    - Encapsulamento: Construtoras usam propriedades privadas convencionais ou `#`; factories usam closures.
//    - Métodos: Construtoras compartilham métodos via prototype; factories criam métodos por instância ou via objetos retornados.
//    - Herança: Construtoras suportam herança via prototype; factories requerem composição manual.
//    - Contexto (`this`): Construtoras dependem de `this`; factories evitam `this`.
// 4. Integração com Outros Conceitos
//    - Valores padrão/nullish: Ambos podem usar parâmetros padrão e `??` para entradas ausentes.
//    - Arguments: Ambos podem processar argumentos dinâmicos.
//    - Getters: Ambos podem incluir getters para acesso controlado.
//    - Contexto (`call`, `apply`, `bind`): Construtoras manipulam `this` diretamente; factories podem usar em métodos retornados.

// Exemplo prático: Funções Construtoras vs Factory Functions

// 1. Função Construtora: Criando um Usuário
function Usuario(nome = "Anônimo", idade = 18) {
  // Propriedades definidas no `this`
  this.nome = nome ?? "Desconhecido";
  this.idade = typeof idade === "number" ? idade : 18;
}

// Método compartilhado via prototype
Usuario.prototype.saudar = function (mensagem = "Olá") {
  return `${mensagem}, ${this.nome}! Idade: ${this.idade}`;
};

// Getter no prototype
Object.defineProperty(Usuario.prototype, "detalhes", {
  get: function () {
    return `Nome: ${this.nome}, Idade: ${this.idade}`;
  },
});
const usuario1 = new Usuario("Alice", 25);
console.log(usuario1.saudar()); // Saída: Olá, Alice! Idade: 25
console.log(usuario1.detalhes); // Saída: Nome: Alice, Idade: 25

// 2. Factory Function: Criando um Usuário
function criarUsuario(nome = "Anônimo", idade = 18) {
  // Dados privados via closure
  let dados = {
    nome: nome ?? "Desconhecido",
    idade: typeof idade === "number" ? idade : 18,
  };

  return {
    // Métodos e getter definidos no objeto retornado
    saudar: function (mensagem = "Olá") {
      return `${mensagem}, ${dados.nome}! Idade: ${dados.idade}`;
    },
    get detalhes() {
      return `Nome: ${dados.nome}, Idade: ${dados.idade}`;
    },
    atualizar: function (novoNome, novaIdade) {
      dados.nome = novoNome ?? dados.nome;
      dados.idade = typeof novaIdade === "number" ? novaIdade : dados.idade;
    },
  };
}
const usuario2 = criarUsuario("Bob", 30);
console.log(usuario2.saudar()); // Saída: Olá, Bob! Idade: 30
console.log(usuario2.detalhes); // Saída: Nome: Bob, Idade: 30
usuario2.atualizar("Charlie", 35);
console.log(usuario2.detalhes); // Saída: Nome: Charlie, Idade: 35

// 3. Comparação com Arguments e Contexto
function TesteConstrutora() {
  // Usa arguments para processar entradas dinâmicas
  this.valores = Array.from(arguments).map((item) => item ?? 0);
}

// // Método no prototype com bind
// TesteConstrutora.prototype.processar = function(mensagem).bind(this) {
//     return `${mensagem}: ${this.valores.join(', ')}`;
// };
const teste1 = new TesteConstrutora(1, null, 3, "texto");
console.log(teste1.processar("Valores")); // Saída: Valores: 1, 0, 3, 0

function criarTesteFactory() {
  // Usa arguments para processar entradas dinâmicas
  const valores = Array.from(arguments).map((item) => item ?? 0);

  return {
    processar: function (mensagem = "Resultado") {
      return `${mensagem}: ${valores.join(", ")}`;
    },
    // Getter para acessar valores
    get valores() {
      return valores;
    },
  };
}
const teste2 = criarTesteFactory(1, null, 3, "texto");
console.log(teste2.processar()); // Saída: Resultado: 1, 0, 3, 0
console.log(teste2.valores); // Saída: [1, 0, 3, 0]

// 4. Exemplo Combinado: Construtora e Factory em um Módulo
const Gerenciador = (function () {
  // Função Construtora
  function Configuracao(opcoes = {}) {
    this.config = {
      tema: opcoes.tema ?? "claro",
      idioma: opcoes.idioma ?? "pt-BR",
    };
  }
  Configuracao.prototype.getConfig = function () {
    return this.config;
  };

  // Factory Function
  function criarConfig(opcoes = {}) {
    const config = {
      tema: opcoes.tema ?? "claro",
      idioma: opcoes.idioma ?? "pt-BR",
    };
    return {
      getConfig: function () {
        return config;
      },
      // Método com call para contexto dinâmico
      saudar: function (contexto, mensagem = "Bem-vindo") {
        return `${mensagem}, tema ${contexto.tema || config.tema}!`;
      },
    };
  }

  // Interface pública (Revealing Module Pattern)
  return {
    criarConstrutora: (opcoes) => new Configuracao(opcoes),
    criarFactory: criarConfig,
  };
})();
const configConstrutora = Gerenciador.criarConstrutora({ tema: "escuro" });
const configFactory = Gerenciador.criarFactory({ tema: "escuro" });
console.log(configConstrutora.getConfig()); // Saída: { tema: 'escuro', idioma: 'pt-BR' }
console.log(configFactory.getConfig()); // Saída: { tema: 'escuro', idioma: 'pt-BR' }
console.log(configFactory.saudar({ tema: "custom" })); // Saída: Bem-vindo, tema custom!

// Notas adicionais:
// - Funções Construtoras:
//   - Requerem `new` para criar instâncias corretamente; sem `new`, `this` pode apontar para o escopo global (ou undefined em strict mode).
//   - Métodos no prototype são compartilhados, economizando memória.
//   - Suportam herança via prototype chain, ideal para estruturas complexas.
// - Factory Functions:
//   - Não requerem `new`, tornando-as mais intuitivas e seguras.
//   - Encapsulamento via closures, ideal para dados privados sem convenções como `_nome`.
//   - Criam métodos por instância, o que pode consumir mais memória se muitos objetos forem criados.
// - Comparação Direta:
//   - Construtoras são melhores para herança e desempenho com muitas instâncias (via prototype).
//   - Factories são mais flexíveis para encapsulamento e composição, sem dependência de `this`.
//   - Construtoras podem ser mais verbosas com prototype; factories são mais diretas.
// - Integração: Ambos podem usar valores padrão, nullish coalescing, `arguments`, getters, e manipulação de contexto (`call`, `apply`, `bind`).
// - Compatibilidade: Ambos são suportados em todas as versões do JavaScript; construtoras são mais tradicionais, enquanto factories são populares em código moderno.
