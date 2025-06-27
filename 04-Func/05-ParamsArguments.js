// Índice de Parâmetros e Arguments em JavaScript
// 1. Parâmetros (params)
//    - Definição: Variáveis nomeadas declaradas na definição de uma função para receber valores quando a função é chamada.
//    - Tipos:
//      - Parâmetros nomeados: Variáveis específicas listadas na declaração da função.
//      - Parâmetros padrão (default): Valores padrão atribuídos a parâmetros caso nenhum valor seja passado.
//      - Parâmetros rest (...): Coleta todos os argumentos restantes em um array.
// 2. Objeto Arguments
//    - Definição: Um objeto semelhante a um array disponível dentro de funções que contém todos os argumentos passados, independentemente dos parâmetros declarados.
//    - Características:
//      - Permite acessar argumentos não declarados como parâmetros.
//      - Útil para funções com número variável de argumentos.
//      - Não é um array verdadeiro, mas pode ser convertido em um (usando spread ou Array.from).

// Exemplo prático de uso de parâmetros e arguments em funções

// 1. Parâmetros (params)
// Função com parâmetros nomeados
function soma(a, b) {
  // 'a' e 'b' são parâmetros nomeados
  return a + b;
}
console.log(soma(2, 3)); // Saída: 5

// Função com parâmetros padrão
function saudacao(nome = "Visitante") {
  // 'nome' tem um valor padrão 'Visitante' caso nenhum argumento seja passado
  return `Olá, ${nome}!`;
}
console.log(saudacao("Alice")); // Saída: Olá, Alice!
console.log(saudacao()); // Saída: Olá, Visitante!

// Função com parâmetros rest
function somarTudo(...numeros) {
  // '...numeros' coleta todos os argumentos em um array
  return numeros.reduce((total, num) => total + num, 0);
}
console.log(somarTudo(1, 2, 3, 4)); // Saída: 10
console.log(somarTudo(5, 10)); // Saída: 15

// 2. Objeto Arguments
function mostrarArgumentos() {
  // O objeto 'arguments' contém todos os argumentos passados para a função
  console.log("Arguments:", arguments);
  // Convertendo arguments em array para usar métodos de array
  const argsArray = Array.from(arguments);
  console.log("Arguments como array:", argsArray);
}
mostrarArgumentos(1, "teste", true);
// Saída:
// Arguments: { '0': 1, '1': 'teste', '2': true }
// Arguments como array: [1, 'teste', true]

// Exemplo combinado: Parâmetros e Arguments
function combinar(a, b, ...rest) {
  // 'a' e 'b' são parâmetros nomeados, '...rest' coleta argumentos restantes
  console.log("Parâmetro a:", a);
  console.log("Parâmetro b:", b);
  console.log("Parâmetros rest:", rest);
  console.log("Objeto arguments:", arguments);

  // Somando todos os argumentos usando arguments
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      total += arguments[i];
    }
  }
  return total;
}
console.log(combinar(1, 2, 3, 4, "texto"));
// Saída:
// Parâmetro a: 1
// Parâmetro b: 2
// Parâmetros rest: [3, 4, 'texto']
// Objeto arguments: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 'texto' }
// Total: 10 (soma apenas números)

// Notas adicionais:
// - Parâmetros rest (...nome) são preferíveis ao objeto arguments em funções modernas, pois são mais flexíveis e legíveis.
// - O objeto arguments não está disponível em arrow functions ( () => {} ).
// - Evite modificar o objeto arguments diretamente, pois pode levar a comportamentos inesperados.
// - Parâmetros padrão são úteis para evitar verificações manuais de undefined.
// - Use Array.from(arguments) ou [...arguments] para converter arguments em um array verdadeiro.
