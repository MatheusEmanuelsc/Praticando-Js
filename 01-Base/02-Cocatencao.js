// Suponha que temos duas variáveis com valores de texto
let nome = "Maria";
let idade = 25;

// 📌 1. CONCATENAÇÃO CLÁSSICA (antiga) com operador `+`
let frase1 = "Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.";
console.log(frase1);

// Explicação:
// - Cada parte da string é "colada" com o operador +.
// - Funciona com strings e variáveis, mas fica confuso quando há muitas partes.

// 📌 2. CONCATENAÇÃO COM vírgula no console.log
console.log("Olá, meu nome é", nome, "e eu tenho", idade, "anos.");

// Explicação:
// - A vírgula separa os argumentos e o console exibe todos juntos com espaço.
// - Útil apenas para debug, não funciona para criar uma string única.

// 📌 3. TEMPLATE STRING (forma moderna e recomendada) usando crase ``
let frase2 = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(frase2);

// Explicação:
// - Usa crases (`) em vez de aspas.
// - Permite inserir variáveis diretamente com ${...}, facilitando a leitura.
// - Também suporta expressões, não só variáveis:

let anoAtual = 2025;
let anoNascimento = anoAtual - idade;
console.log(`Eu nasci em ${anoNascimento}.`); // Faz o cálculo dentro da string

// 📌 4. USANDO String.concat() (quase nunca usado hoje em dia)
let frase3 = "Olá, meu nome é ".concat(nome, " e eu tenho ", idade, " anos.");
console.log(frase3);

// Explicação:
// - `.concat()` é um método da string, mas pouco usado porque o `+` e o template string são mais práticos.
// - É mais comum em linguagens antigas ou em código muito legado.
