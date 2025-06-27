// Índice de Nullish em JavaScript
// 1. Valores Nullish
//    - Definição: Valores que são `null` ou `undefined`.
//    - Características: Representam ausência de valor ou valor não definido.
// 2. Operador Nullish Coalescing (??)
//    - Definição: Retorna o operando da direita se o da esquerda for nullish (`null` ou `undefined`); caso contrário, retorna o da esquerda.
//    - Diferença do operador OR (||): O `||` considera valores falsy (como 0, '', false), enquanto o `??` considera apenas `null` e `undefined`.
// 3. Nullish Coalescing Assignment (??=)
//    - Definição: Atribui um valor à variável apenas se ela for nullish (`null` ou `undefined`).
//    - Uso: Simplifica a lógica de atribuição condicional para valores nullish.

// Exemplo prático de uso de valores nullish e operadores relacionados

// 1. Valores Nullish
// Demonstração de como `null` e `undefined` são tratados
function verificarNullish(valor) {
  // Verifica se o valor é null ou undefined
  if (valor === null || valor === undefined) {
    return "O valor é nullish";
  }
  return `O valor é: ${valor}`;
}
console.log(verificarNullish(null)); // Saída: O valor é nullish
console.log(verificarNullish(undefined)); // Saída: O valor é nullish
console.log(verificarNullish(0)); // Saída: O valor é: 0
console.log(verificarNullish("")); // Saída: O valor é:

// 2. Operador Nullish Coalescing (??)
// Função que usa ?? para fornecer um valor padrão apenas para nullish
function obterNome(nome) {
  // Retorna 'nome' se não for nullish; caso contrário, retorna 'Anônimo'
  return nome ?? "Anônimo";
}
console.log(obterNome("Alice")); // Saída: Alice
console.log(obterNome(null)); // Saída: Anônimo
console.log(obterNome(undefined)); // Saída: Anônimo
console.log(obterNome("")); // Saída:  (string vazia não é nullish)
console.log(obterNome(0)); // Saída: 0 (zero não é nullish)

// Comparação com o operador OR (||) para destacar diferenças
function compararOperadores(valor) {
  console.log("Usando ||:", valor || "Padrão");
  console.log("Usando ??:", valor ?? "Padrão");
}
compararOperadores(0);
// Saída:
// Usando ||: Padrão (0 é falsy, então || usa o valor padrão)
// Usando ??: 0 (0 não é nullish, então ?? mantém o valor)
compararOperadores("");
// Saída:
// Usando ||: Padrão (string vazia é falsy)
// Usando ??:  (string vazia não é nullish)
compararOperadores(null);
// Saída:
// Usando ||: Padrão (null é falsy e nullish)
// Usando ??: Padrão (null é nullish)

// 3. Nullish Coalescing Assignment (??=)
// Função que usa ??= para atribuir valores apenas se a variável for nullish
function configurarUsuario(usuario) {
  // Atribui valores padrão apenas se as propriedades forem nullish
  usuario.nome ??= "Usuário Desconhecido";
  usuario.idade ??= 18;
  return usuario;
}
let usuario1 = { nome: null, idade: undefined };
console.log(configurarUsuario(usuario1));
// Saída: { nome: 'Usuário Desconhecido', idade: 18 }

let usuario2 = { nome: "Bob", idade: 0 };
console.log(configurarUsuario(usuario2));
// Saída: { nome: 'Bob', idade: 0 } (0 e 'Bob' não são nullish, então não são alterados)

// Exemplo combinado: Usando nullish em uma função prática
function criarPerfil(nome, idade, email) {
  // Usa ?? para definir valores padrão e ??= para ajustar propriedades
  let perfil = {
    nome: nome ?? "Sem Nome",
    idade: idade ?? 18,
    email: email ?? "sem-email@exemplo.com",
  };

  // Ajusta email com ??= se for nullish
  perfil.email ??= "contato@exemplo.com";

  // Demonstração de verificação com arguments
  console.log("Arguments recebidos:", arguments);
  return perfil;
}
console.log(criarPerfil("Alice", null, undefined));
// Saída:
// Arguments recebidos: { '0': 'Alice', '1': null, '2': undefined }
// { nome: 'Alice', idade: 18, email: 'contato@exemplo.com' }

console.log(criarPerfil(undefined, 25, ""));
// Saída:
// Arguments recebidos: { '0': undefined, '1': 25, '2': '' }
// { nome: 'Sem Nome', idade: 25, email: '' }

// Notas adicionais:
// - O operador ?? é ideal para lidar com valores padrão sem interferir em valores falsy como 0, '' ou false.
// - O operador ??= é útil para inicializar variáveis ou propriedades apenas quando necessário.
// - O objeto arguments pode ser usado para acessar todos os argumentos, mas não diferencia valores nullish diretamente.
// - Evite confundir ?? com ||; use ?? quando quiser tratar apenas `null` e `undefined` como valores padrão.
// - Compatibilidade: ?? e ??= são suportados em navegadores modernos e Node.js (ES2020+).
