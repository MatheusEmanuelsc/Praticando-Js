// Índice do Revealing Module Pattern em JavaScript
// 1. Definição
//    - Descrição: Um padrão que usa uma IIFE (Immediately Invoked Function Expression) para criar um escopo privado e expor apenas métodos/variáveis específicos como uma interface pública.
//    - Objetivo: Encapsulamento, evitando poluição do escopo global e protegendo dados privados.
// 2. Componentes Principais
//    - Escopo Privado: Variáveis e funções definidas dentro da IIFE, não acessíveis diretamente de fora.
//    - Interface Pública: Objeto retornado pela IIFE que expõe métodos e propriedades selecionados.
// 3. Vantagens
//    - Encapsulamento: Protege dados privados, expondo apenas o necessário.
//    - Clareza: Nomenclatura explícita dos métodos públicos.
//    - Modularidade: Facilita a manutenção e reutilização do código.
// 4. Integração com Outros Conceitos
//    - Uso com `arguments`: Manipula argumentos dinâmicos.
//    - Valores padrão: Integra parâmetros padrão ou nullish coalescing para entradas.
//    - Contexto (`this`): Pode ser combinado com call, apply ou bind para controle de contexto.

// Exemplo prático do Revealing Module Pattern

// 1. Exemplo Básico: Contador
const Contador = (function () {
  // Escopo privado: variáveis e funções não acessíveis diretamente
  let contador = 0;

  // Função privada
  function incrementar() {
    contador++;
    return contador;
  }

  // Função privada
  function decrementar() {
    contador--;
    return contador;
  }

  // Interface pública: expõe apenas métodos selecionados
  return {
    incrementarContador: incrementar,
    decrementarContador: decrementar,
    obterValor: function () {
      return contador;
    },
  };
})();
console.log(Contador.obterValor()); // Saída: 0
console.log(Contador.incrementarContador()); // Saída: 1
console.log(Contador.decrementarContador()); // Saída: 0
// console.log(Contador.contador); // Erro: contador não está definido (privado)

// 2. Exemplo com Parâmetros e Arguments
const Calculadora = (function () {
  // Escopo privado
  let historico = [];

  // Função privada que usa arguments
  function somar() {
    // Usa arguments para somar todos os números passados
    const soma = Array.from(arguments).reduce((total, num) => {
      // Usa valor padrão 0 para não-números
      return total + (typeof num === "number" ? num : 0);
    }, 0);
    historico.push({ operacao: "soma", resultado: soma });
    return soma;
  }

  // Função privada que usa parâmetros padrão
  function multiplicar(a = 1, b = 1) {
    const resultado = a * b;
    historico.push({ operacao: "multiplicação", resultado });
    return resultado;
  }

  // Interface pública
  return {
    somarValores: somar,
    multiplicarValores: multiplicar,
    obterHistorico: function () {
      return historico;
    },
  };
})();
console.log(Calculadora.somarValores(5, 10, "texto")); // Saída: 15
console.log(Calculadora.multiplicarValores(2, 3)); // Saída: 6
console.log(Calculadora.multiplicarValores()); // Saída: 1 (usa valores padrão)
console.log(Calculadora.obterHistorico());
// Saída: [
//   { operacao: 'soma', resultado: 15 },
//   { operacao: 'multiplicação', resultado: 6 },
//   { operacao: 'multiplicação', resultado: 1 }
// ]

// 3. Exemplo com Contexto (usando bind)
const GerenciadorUsuario = (function () {
  // Escopo privado
  const usuario = { nome: "Alice", idade: 25 };

  // Função privada que usa `this`
  function saudacao(mensagem = "Olá") {
    return `${mensagem}, ${this.nome}! Idade: ${this.idade}`;
  }

  // Função privada para atualizar dados
  function atualizarIdade(novaIdade) {
    if (typeof novaIdade === "number") {
      usuario.idade = novaIdade;
    }
  }

  // Interface pública
  return {
    saudar: saudacao.bind(usuario), // Fixa o contexto `this` como `usuario`
    atualizar: atualizarIdade,
    obterUsuario: function () {
      return { ...usuario }; // Retorna uma cópia para proteger o original
    },
  };
})();
console.log(GerenciadorUsuario.saudar("Oi")); // Saída: Oi, Alice! Idade: 25
GerenciadorUsuario.atualizar(30);
console.log(GerenciadorUsuario.obterUsuario()); // Saída: { nome: 'Alice', idade: 30 }

// 4. Exemplo Combinado: Integração com nullish, arguments e contexto
const GerenciadorConfig = (function () {
  // Escopo privado
  let config = {
    tema: "claro",
    idioma: "pt-BR",
  };

  // Função privada que usa nullish coalescing e arguments
  function configurar(...args) {
    // Usa arguments para processar configurações dinâmicas
    console.log("Arguments:", arguments);

    // Aplica valores padrão com ??
    const novaConfig = {
      tema: args[0]?.tema ?? config.tema,
      idioma: args[0]?.idioma ?? config.idioma,
    };

    // Atualiza apenas se os valores não forem nullish
    config.tema = novaConfig.tema ?? config.tema;
    config.idioma = novaConfig.idioma ?? config.idioma;

    return config;
  }

  // Função privada que usa call para mudar contexto
  function aplicarContexto(mensagem) {
    return this.saudacao.call({ nome: config.tema }, mensagem);
  }

  // Interface pública
  return {
    configurar: configurar,
    aplicarSaudacao: aplicarContexto,
    obterConfig: function () {
      return { ...config };
    },
  };
})();
console.log(GerenciadorConfig.configurar({ tema: "escuro", idioma: null }));
// Saída:
// Arguments: { '0': { tema: 'escuro', idioma: null } }
// { tema: 'escuro', idioma: 'pt-BR' }
console.log(GerenciadorConfig.aplicarSaudacao("Teste")); // Saída: Teste, escuro!
console.log(GerenciadorConfig.obterConfig()); // Saída: { tema: 'escuro', idioma: 'pt-BR' }

// Notas adicionais:
// - O Revealing Module Pattern usa uma IIFE para criar um escopo privado, garantindo que variáveis internas não vazem para o escopo global.
// - A interface pública é um objeto retornado, onde os métodos são mapeados para funções privadas, permitindo nomes mais claros.
// - Integração com `arguments`: Útil para processar argumentos dinâmicos dentro de funções privadas.
// - Valores padrão e nullish coalescing (??, ??=) podem ser usados para lidar com entradas inválidas ou ausentes.
// - bind, call e apply podem ser usados para manipular o contexto `this` em métodos públicos ou privados.
// - Limitações: Não suporta herança nativa facilmente; para isso, considere padrões como Module Pattern com prototypes ou ES6 Classes.
// - Compatibilidade: Suportado em todas as versões do JavaScript, amplamente usado antes da adoção de módulos ES6.
