// Índice de apply, call e bind em JavaScript
// 1. Método call
//    - Definição: Invoca uma função imediatamente, definindo o valor de `this` e passando argumentos individualmente.
//    - Uso: Ideal para chamar funções com um contexto específico e argumentos dinâmicos.
// 2. Método apply
//    - Definição: Invoca uma função imediatamente, definindo o valor de `this` e passando argumentos como um array.
//    - Uso: Útil quando os argumentos estão em um array ou objeto semelhante a array (ex.: arguments).
// 3. Método bind
//    - Definição: Cria uma nova função com um valor fixo de `this` e, opcionalmente, argumentos pré-definidos, sem invocar imediatamente.
//    - Uso: Ideal para criar funções com contexto fixo para uso posterior (ex.: em eventos ou callbacks).
// 4. Diferenças Principais
//    - call: Argumentos passados individualmente, execução imediata.
//    - apply: Argumentos passados como array, execução imediata.
//    - bind: Retorna nova função, não executa imediatamente.

// Exemplo prático de uso de call, apply e bind

// Objeto de exemplo para definir o contexto `this`
const usuario = {
  nome: "Alice",
  saudacao: function (mensagem, pontuacao = "!") {
    // Usa `this.nome` e parâmetros, com valor padrão para pontuacao
    return `${mensagem}, ${this.nome}${pontuacao}`;
  },
};

// 1. Método call
// Função que usa call para definir o contexto e passar argumentos individualmente
function demonstrarCall() {
  // Chama a função saudacao com `this` definido como `usuario` e argumentos passados diretamente
  const resultado = usuario.saudacao.call(usuario, "Olá", "!!!");
  console.log(resultado); // Saída: Olá, Alice!!!

  // Usando com outro objeto como contexto
  const outroUsuario = { nome: "Bob" };
  console.log(usuario.saudacao.call(outroUsuario, "Oi")); // Saída: Oi, Bob!
}
demonstrarCall();

// 2. Método apply
// Função que usa apply para definir o contexto e passar argumentos como array
function demonstrarApply() {
  // Chama a função saudacao com `this` definido como `usuario` e argumentos em um array
  const args = ["Bem-vindo", "?!"];
  const resultado = usuario.saudacao.apply(usuario, args);
  console.log(resultado); // Saída: Bem-vindo, Alice?!

  // Usando com arguments
  function encaminharArgs() {
    // `arguments` é um objeto semelhante a array, perfeito para apply
    return usuario.saudacao.apply(usuario, arguments);
  }
  console.log(encaminharArgs("Oi", "...")); // Saída: Oi, Alice...
}
demonstrarApply();

// 3. Método bind
// Função que usa bind para criar uma nova função com contexto fixo
function demonstrarBind() {
  // Cria uma nova função com `this` fixado em `usuario`
  const saudacaoFixa = usuario.saudacao.bind(usuario);
  console.log(saudacaoFixa("Oi")); // Saída: Oi, Alice!

  // Cria uma função com contexto e argumento pré-definido
  const saudacaoComMensagem = usuario.saudacao.bind(usuario, "Olá");
  console.log(saudacaoComMensagem("!!!")); // Saída: Olá, Alice!!!

  // Uso em eventos (exemplo simulado)
  const botao = {
    click: function () {
      console.log(this.saudacao("Clique"));
    },
  };
  botao.saudacao = usuario.saudacao.bind(usuario);
  botao.click(); // Saída: Clique, Alice!
}
demonstrarBind();

// 4. Exemplo combinado: Usando call, apply e bind com arguments
function processarValores(op, ...valores) {
  // Usa `arguments` para acessar todos os argumentos
  console.log("Arguments:", arguments);

  // Função interna que opera com base no tipo de operação
  const operacao = {
    tipo: op,
    somar: function () {
      return Array.from(arguments).reduce(
        (total, num) => total + (typeof num === "number" ? num : 0),
        0
      );
    },
  };

  // Usando call para executar com contexto dinâmico
  const resultadoCall = operacao.somar.call(operacao, ...valores);
  console.log("Resultado com call:", resultadoCall);

  // Usando apply para passar valores como array
  const resultadoApply = operacao.somar.apply(operacao, valores);
  console.log("Resultado com apply:", resultadoApply);

  // Usando bind para criar uma função com contexto fixo
  const somarFixa = operacao.somar.bind(operacao);
  console.log(
    "Resultado com bind (chamado depois):",
    somarFixa(10, 20, "texto", null)
  );

  return resultadoCall;
}
console.log(processarValores("soma", 5, 10, "texto", null));
// Saída:
// Arguments: { '0': 'soma', '1': 5, '2': 10, '3': 'texto', '4': null }
// Resultado com call: 15
// Resultado com apply: 15
// Resultado com bind (chamado depois): 30

// Notas adicionais:
// - call e apply executam a função imediatamente, enquanto bind retorna uma nova função para uso posterior.
// - apply é útil com arrays ou objetos semelhantes a arrays, como `arguments`, enquanto call é mais direto para argumentos individuais.
// - bind é ideal para eventos ou quando você precisa fixar o contexto `this` para chamadas futuras.
// - Integração com valores padrão: Use parâmetros padrão ou nullish coalescing (??) para garantir argumentos válidos.
// - Limitações: apply tem um limite no número de argumentos em alguns ambientes; call e bind são mais flexíveis nesse aspecto.
// - Compatibilidade: call, apply e bind são suportados em todas as versões modernas do JavaScript.
