// Índice de Valores Padrão em JavaScript
// 1. Parâmetros Padrão em Funções
//    - Definição: Valores atribuídos a parâmetros de funções quando nenhum argumento é passado ou é undefined.
//    - Uso: Simplifica a lógica de verificação de valores undefined.
// 2. Operador Nullish Coalescing (??) para Valores Padrão
//    - Definição: Fornece um valor padrão quando a variável ou expressão é nullish (`null` ou `undefined`).
//    - Diferença do operador OR (||): Apenas considera `null` e `undefined`, não outros valores falsy.
// 3. Operador de Atribuição Nullish (??=)
//    - Definição: Atribui um valor padrão a uma variável apenas se ela for nullish.
// 4. Valores Padrão em Objetos (Destruturação)
//    - Definição: Define valores padrão ao desestruturar objetos quando as propriedades são undefined.
//    - Uso: Útil para extrair propriedades com valores fallback.
// 5. Valores Padrão em Outros Contextos
//    - Exemplo: Uso de valores padrão em variáveis ou configurações iniciais.

// Exemplo prático de uso de valores padrão em diferentes contextos

// 1. Parâmetros Padrão em Funções
// Função com parâmetros padrão
function criarMensagem(nome = "Usuário", saudacao = "Olá") {
  // 'nome' e 'saudacao' recebem valores padrão se não forem fornecidos
  return `${saudacao}, ${nome}!`;
}
console.log(criarMensagem("Alice")); // Saída: Olá, Alice!
console.log(criarMensagem(undefined, "Oi")); // Saída: Oi, Usuário!
console.log(criarMensagem()); // Saída: Olá, Usuário!

// Função com parâmetro padrão dinâmico
function calcularDesconto(preco, desconto = preco * 0.1) {
  // 'desconto' usa o valor de 'preco' para calcular um padrão
  return preco - desconto;
}
console.log(calcularDesconto(100)); // Saída: 90 (desconto padrão de 10%)
console.log(calcularDesconto(100, 20)); // Saída: 80 (desconto fornecido)

// 2. Operador Nullish Coalescing (??) para Valores Padrão
// Função que usa ?? para definir valores padrão
function configurarPerfil(nome, idade) {
  // Usa ?? para atribuir valores padrão apenas para nullish
  const nomePadrao = nome ?? "Anônimo";
  const idadePadrao = idade ?? 18;
  return { nome: nomePadrao, idade: idadePadrao };
}
console.log(configurarPerfil("Bob", 25)); // Saída: { nome: 'Bob', idade: 25 }
console.log(configurarPerfil(null, undefined)); // Saída: { nome: 'Anônimo', idade: 18 }
console.log(configurarPerfil("", 0)); // Saída: { nome: '', idade: 0 } (não usa padrão para falsy)

// Comparação com operador OR (||)
function compararPadrões(valor) {
  console.log("Com ||:", valor || "Padrão");
  console.log("Com ??:", valor ?? "Padrão");
}
compararPadrões(0);
// Saída:
// Com ||: Padrão (0 é falsy)
// Com ??: 0 (0 não é nullish)
compararPadrões(null);
// Saída:
// Com ||: Padrão (null é falsy e nullish)
// Com ??: Padrão (null é nullish)

// 3. Operador de Atribuição Nullish (??=)
// Função que usa ??= para atribuir valores padrão
function ajustarConfiguracao(config) {
  // Atribui valores padrão apenas se as propriedades forem nullish
  config.tema ??= "claro";
  config.idioma ??= "pt-BR";
  return config;
}
let config1 = { tema: null, idioma: undefined };
console.log(ajustarConfiguracao(config1));
// Saída: { tema: 'claro', idioma: 'pt-BR' }

let config2 = { tema: "escuro", idioma: "" };
console.log(ajustarConfiguracao(config2));
// Saída: { tema: 'escuro', idioma: '' } ('' não é nullish)

// 4. Valores Padrão em Destruturação de Objetos
// Função que usa desestruturação com valores padrão
function processarUsuario({ nome = "Desconhecido", idade = 18 } = {}) {
  // Valores padrão para propriedades e objeto vazio como padrão
  return `Usuário: ${nome}, Idade: ${idade}`;
}
console.log(processarUsuario({ nome: "Alice", idade: 25 })); // Saída: Usuário: Alice, Idade: 25
console.log(processarUsuario({ nome: "Bob" })); // Saída: Usuário: Bob, Idade: 18
console.log(processarUsuario()); // Saída: Usuário: Desconhecido, Idade: 18

// 5. Valores Padrão em Outros Contextos
// Exemplo: Inicialização de variáveis com valores padrão
function inicializarApp(opcoes) {
  // Usa objeto arguments para verificar argumentos passados
  console.log("Arguments:", arguments);

  // Define configurações padrão com objeto
  const configuracoesPadrao = {
    modo: "produção",
    debug: false,
  };

  // Mescla opções fornecidas com padrões usando operador de espalhamento
  const configuracoes = { ...configuracoesPadrao, ...opcoes };
  return configuracoes;
}
console.log(inicializarApp({ modo: "desenvolvimento" }));
// Saída:
// Arguments: { '0': { modo: 'desenvolvimento' } }
// { modo: 'desenvolvimento', debug: false }

console.log(inicializarApp());
// Saída:
// Arguments: {}
// { modo: 'produção', debug: false }

// Notas adicionais:
// - Parâmetros padrão em funções são avaliados no momento da chamada, permitindo valores dinâmicos.
// - O operador ?? é preferível a || quando você quer evitar que valores falsy (como 0 ou '') sejam substituídos por padrões.
// - O operador ??= é útil para inicializar variáveis ou propriedades apenas quando necessário.
// - Destruturação com valores padrão é uma forma elegante de lidar com objetos que podem estar incompletos.
// - Use o operador de espalhamento (...) para mesclar objetos com configurações padrão de forma eficiente.
// - O objeto arguments pode ser usado para verificar argumentos passados, mas não diferencia nullish diretamente.
