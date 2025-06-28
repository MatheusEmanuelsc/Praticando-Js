// Índice de Factory Functions em JavaScript
// 1. Definição
//    - Descrição: Funções que criam e retornam objetos, encapsulando a lógica de criação e permitindo reutilização.
//    - Objetivo: Criar instâncias de objetos com propriedades e métodos personalizados sem usar `new` ou classes.
// 2. Componentes Principais
//    - Função Criadora: Uma função que retorna um objeto com propriedades e métodos.
//    - Encapsulamento: Pode usar closures para manter dados privados.
//    - Flexibilidade: Permite personalização via parâmetros e argumentos dinâmicos.
// 3. Vantagens
//    - Simplicidade: Não depende de `new`, `this` ou prototypes diretamente.
//    - Encapsulamento: Permite variáveis privadas via closures.
//    - Reutilização: Facilita a criação de múltiplos objetos com configurações variadas.
// 4. Integração com Outros Conceitos
//    - Valores padrão e nullish: Usa parâmetros padrão ou `??` para entradas ausentes.
//    - Arguments: Permite lidar com argumentos dinâmicos.
//    - Contexto: Pode ser combinado com `call`, `apply`, ou `bind` para manipular `this`.
//    - Revealing Module Pattern: Pode ser usado dentro de módulos para criar fábricas encapsuladas.

// Exemplo prático de Factory Functions

// 1. Exemplo Básico: Factory Function para criar usuários
function criarUsuario(nome = "Anônimo", idade = 18) {
  // Usa parâmetros padrão para valores ausentes
  return {
    nome,
    idade,
    saudar: function (mensagem = "Olá") {
      return `${mensagem}, ${this.nome}! Idade: ${this.idade}`;
    },
  };
}
const usuario1 = criarUsuario("Alice", 25);
const usuario2 = criarUsuario(); // Usa valores padrão
console.log(usuario1.saudar()); // Saída: Olá, Alice! Idade: 25
console.log(usuario2.saudar("Oi")); // Saída: Oi, Anônimo! Idade: 18

// 2. Factory Function com Encapsulamento (Closure)
function criarContador() {
  // Variável privada mantida via closure
  let contador = 0;

  return {
    incrementar: function () {
      return ++contador;
    },
    decrementar: function () {
      return --contador;
    },
    obterValor: function () {
      return contador;
    },
  };
}
const contador1 = criarContador();
const contador2 = criarContador();
console.log(contador1.incrementar()); // Saída: 1
console.log(contador1.incrementar()); // Saída: 2
console.log(contador2.decrementar()); // Saída: -1
console.log(contador1.obterValor()); // Saída: 2 (contador1 é independente de contador2)

// 3. Factory Function com Arguments e Nullish Coalescing
function criarCalculadora() {
  // Variável privada para histórico
  let historico = [];

  return {
    somar: function (...args) {
      // Usa arguments para verificar argumentos passados
      console.log("Arguments:", arguments);
      // Soma apenas números, usando nullish coalescing para padrão
      const soma = Array.from(args).reduce((total, num) => {
        return total + (typeof num === "number" ? num : num ?? 0);
      }, 0);
      historico.push({ operacao: "soma", resultado: soma });
      return soma;
    },
    obterHistorico: function () {
      return historico;
    },
  };
}
const calc = criarCalculadora();
console.log(calc.somar(5, 10, null, "texto")); // Saída: 15
console.log(calc.obterHistorico()); // Saída: [{ operacao: 'soma', resultado: 15 }]

// 4. Exemplo Combinado: Factory com Contexto e Revealing Module Pattern
const GerenciadorFactory = (function () {
  // Escopo privado do módulo
  const configPadrao = {
    idioma: "pt-BR",
    tema: "claro",
  };

  // Factory Function dentro de um módulo
  function criarGerenciador(opcoes = {}) {
    // Mescla opções com valores padrão usando nullish coalescing
    const config = {
      idioma: opcoes.idioma ?? configPadrao.idioma,
      tema: opcoes.tema ?? configPadrao.tema,
    };

    // Função privada
    function processarMensagem(mensagem) {
      return `${mensagem} (idioma: ${config.idioma}, tema: ${config.tema})`;
    }

    return {
      // Método público que usa bind para fixar contexto
      enviarMensagem: processarMensagem.bind(
        null,
        opcoes.mensagem || "Bem-vindo"
      ),
      // Método que usa call para mudar contexto dinamicamente
      saudarComContexto: function (contexto, mensagem) {
        return processarMensagem.call(contexto, mensagem);
      },
      obterConfig: function () {
        return { ...config };
      },
    };
  }

  // Interface pública do módulo
  return {
    criar: criarGerenciador,
  };
})();
const gerenciador1 = GerenciadorFactory.criar({
  idioma: "en-US",
  tema: "escuro",
});
console.log(gerenciador1.enviarMensagem()); // Saída: Bem-vindo (idioma: en-US, tema: escuro)
console.log(gerenciador1.saudarComContexto({ nome: "Teste" }, "Oi")); // Saída: Oi (idioma: en-US, tema: escuro)
console.log(gerenciador1.obterConfig()); // Saída: { idioma: 'en-US', tema: 'escuro' }

const gerenciador2 = GerenciadorFactory.criar();
console.log(gerenciador2.enviarMensagem()); // Saída: Bem-vindo (idioma: pt-BR, tema: claro)

// Notas adicionais:
// - Factory Functions são alternativas leves às classes, não exigindo `new` ou manipulação de prototypes.
// - Closures permitem encapsulamento, mantendo variáveis privadas (como no Revealing Module Pattern).
// - Integração com `arguments` e parâmetros rest (...args) facilita o manejo de entradas dinâmicas.
// - Valores padrão e nullish coalescing (??) garantem robustez ao lidar com entradas ausentes ou inválidas.
// - Métodos como `call`, `apply` e `bind` podem ser usados para manipular o contexto `this` em métodos do objeto retornado.
// - Comparação com Revealing Module Pattern: Factories criam instâncias dinâmicas, enquanto o Revealing Module Pattern cria um único módulo.
// - Compatibilidade: Suportado em todas as versões do JavaScript; amplamente usado antes de ES6 Classes e módulos.
