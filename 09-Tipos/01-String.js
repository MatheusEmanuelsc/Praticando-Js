// ===============================================
// TUTORIAL COMPLETO: TIPO STRING EM JAVASCRIPT
// ===============================================

// 1. O QUE É UMA STRING?
// String é um tipo de dado primitivo que representa texto
// É uma sequência de caracteres (letras, números, símbolos)

// 2. CRIANDO STRINGS - DIFERENTES FORMAS
// =====================================

// Aspas simples
let nome = "João";

// Aspas duplas
let sobrenome = "Silva";

// Template literals (crases) - permite interpolação
let nomeCompleto = `${nome} ${sobrenome}`;

// Construtor String (menos comum)
let cidade = new String("São Paulo");

console.log(nome, sobrenome, nomeCompleto); // João Silva João Silva

// 3. PROPRIEDADES BÁSICAS
// =======================

let frase = "JavaScript é incrível!";

// length - retorna o número de caracteres
console.log(frase.length); // 20

// Strings são indexadas começando do 0
console.log(frase[0]); // J
console.log(frase[10]); // é

// 4. MÉTODOS FUNDAMENTAIS DE STRING
// =================================

// 4.1 MÉTODOS DE BUSCA E LOCALIZAÇÃO
// ----------------------------------

let texto = "Aprendendo JavaScript com exemplos práticos";

// indexOf() - encontra a primeira ocorrência
console.log(texto.indexOf("JavaScript")); // 11
console.log(texto.indexOf("Python")); // -1 (não encontrou)

// lastIndexOf() - encontra a última ocorrência
console.log(texto.lastIndexOf("a")); // 37

// includes() - verifica se contém substring
console.log(texto.includes("JavaScript")); // true
console.log(texto.includes("Python")); // false

// startsWith() - verifica se começa com
console.log(texto.startsWith("Apren")); // true

// endsWith() - verifica se termina com
console.log(texto.endsWith("práticos")); // true

// 4.2 MÉTODOS DE EXTRAÇÃO
// -----------------------

// substring() - extrai parte da string
console.log(texto.substring(0, 10)); // "Aprendendo"
console.log(texto.substring(11, 21)); // "JavaScript"

// slice() - similar ao substring, mas aceita índices negativos
console.log(texto.slice(-9)); // "práticos" (últimos 9 caracteres)
console.log(texto.slice(0, 10)); // "Aprendendo"

// charAt() - retorna caractere na posição específica
console.log(texto.charAt(0)); // "A"
console.log(texto.charAt(11)); // "J"

// 4.3 MÉTODOS DE TRANSFORMAÇÃO
// ----------------------------

let exemplo = "  JavaScript é FANTÁSTICO  ";

// toLowerCase() - converte para minúsculas
console.log(exemplo.toLowerCase()); // "  javascript é fantástico  "

// toUpperCase() - converte para maiúsculas
console.log(exemplo.toUpperCase()); // "  JAVASCRIPT É FANTÁSTICO  "

// trim() - remove espaços do início e fim
console.log(exemplo.trim()); // "JavaScript é FANTÁSTICO"

// trimStart() - remove espaços só do início
console.log(exemplo.trimStart()); // "JavaScript é FANTÁSTICO  "

// trimEnd() - remove espaços só do fim
console.log(exemplo.trimEnd()); // "  JavaScript é FANTÁSTICO"

// 4.4 MÉTODOS DE SUBSTITUIÇÃO
// ---------------------------

let mensagem = "Eu amo Python. Python é incrível!";

// replace() - substitui primeira ocorrência
console.log(mensagem.replace("Python", "JavaScript"));
// "Eu amo JavaScript. Python é incrível!"

// replaceAll() - substitui todas as ocorrências
console.log(mensagem.replaceAll("Python", "JavaScript"));
// "Eu amo JavaScript. JavaScript é incrível!"

// 4.5 MÉTODOS DE DIVISÃO E JUNÇÃO
// ------------------------------

let lista = "maçã,banana,laranja,uva";

// split() - divide string em array
let frutas = lista.split(",");
console.log(frutas); // ["maçã", "banana", "laranja", "uva"]

// Exemplo com espaços
let palavras = "JavaScript é uma linguagem poderosa";
let arrayPalavras = palavras.split(" ");
console.log(arrayPalavras); // ["JavaScript", "é", "uma", "linguagem", "poderosa"]

// 5. CONCATENAÇÃO DE STRINGS
// ==========================

let primeiro = "Olá";
let segundo = "Mundo";

// Operador + (concatenação tradicional)
let resultado1 = primeiro + " " + segundo + "!";
console.log(resultado1); // "Olá Mundo!"

// Template literals (forma moderna e recomendada)
let resultado2 = `${primeiro} ${segundo}!`;
console.log(resultado2); // "Olá Mundo!"

// concat() - método de concatenação
let resultado3 = primeiro.concat(" ", segundo, "!");
console.log(resultado3); // "Olá Mundo!"

// 6. TEMPLATE LITERALS AVANÇADO
// =============================

let produto = "Notebook";
let preco = 2500;
let desconto = 10;

// Expressões dentro de template literals
let oferta = `
🛒 OFERTA ESPECIAL!
Produto: ${produto}
Preço original: R$ ${preco}
Desconto: ${desconto}%
Preço final: R$ ${preco - (preco * desconto) / 100}
Total economizado: R$ ${(preco * desconto) / 100}
`;

console.log(oferta);

// 7. ESCAPE DE CARACTERES ESPECIAIS
// =================================

// Aspas dentro de strings
let citacao1 = 'Ele disse: "JavaScript é incrível!"';
let citacao2 = "Ela respondeu: 'Concordo totalmente!'";
let citacao3 = `Todos gritaram: "Viva o JavaScript!"`;

console.log(citacao1);
console.log(citacao2);
console.log(citacao3);

// Outros caracteres especiais
let especiais = "Linha 1\nLinha 2\tcom tab\nCaminho: C:\\Users\\João";
console.log(especiais);

// 8. COMPARAÇÃO DE STRINGS
// ========================

let str1 = "JavaScript";
let str2 = "javascript";
let str3 = "JavaScript";

console.log(str1 === str2); // false (case sensitive)
console.log(str1 === str3); // true
console.log(str1.toLowerCase() === str2.toLowerCase()); // true

// 9. CONVERSÃO PARA STRING
// ========================

let numero = 123;
let booleano = true;
let objeto = { nome: "João" };

// toString()
console.log(numero.toString()); // "123"
console.log(booleano.toString()); // "true"

// String()
console.log(String(numero)); // "123"
console.log(String(booleano)); // "true"
console.log(String(objeto)); // "[object Object]"

// Concatenação implícita
console.log(numero + ""); // "123"

// 10. MÉTODOS ÚTEIS ADICIONAIS
// ============================

let codigo = "ABC123XYZ";

// repeat() - repete string
console.log("Ha".repeat(3)); // "HaHaHa"

// padStart() - adiciona caracteres no início
console.log(codigo.padStart(12, "0")); // "000ABC123XYZ"

// padEnd() - adiciona caracteres no fim
console.log(codigo.padEnd(12, "*")); // "ABC123XYZ***"

// 11. VERIFICAÇÕES E VALIDAÇÕES COMUNS
// ====================================

function validarString(str) {
  // Verificar se é string
  console.log(`É string: ${typeof str === "string"}`);

  // Verificar se não está vazia
  console.log(`Não está vazia: ${str.length > 0}`);

  // Verificar se não é só espaços
  console.log(`Tem conteúdo: ${str.trim().length > 0}`);

  // Verificar se contém apenas letras
  console.log(`Só letras: ${/^[a-zA-ZÀ-ÿ\s]+$/.test(str)}`);

  // Verificar se é email (básico)
  console.log(`É email: ${str.includes("@") && str.includes(".")}`);
}

validarString("João Silva");

// 12. EXEMPLOS PRÁTICOS
// =====================

// Função para formatar nome
function formatarNome(nome) {
  return nome
    .trim() // Remove espaços extras
    .toLowerCase() // Converte para minúsculas
    .split(" ") // Divide em palavras
    .map(
      (palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1) // Primeira letra maiúscula
    )
    .join(" "); // Junta as palavras
}

console.log(formatarNome("  jOÃO sILVA santos  ")); // "João Silva Santos"

// Função para extrair iniciais
function extrairIniciais(nomeCompleto) {
  return nomeCompleto
    .trim()
    .split(" ")
    .map((nome) => nome.charAt(0).toUpperCase())
    .join(".");
}

console.log(extrairIniciais("João Silva Santos")); // "J.S.S"

// Função para censurar palavras
function censurarTexto(texto, palavrasProibidas) {
  let textoCensurado = texto;
  palavrasProibidas.forEach((palavra) => {
    let censura = "*".repeat(palavra.length);
    textoCensurado = textoCensurado.replaceAll(palavra, censura);
  });
  return textoCensurado;
}

let textoOriginal = "Este texto contém palavras ruins e feias";
let palavrasRuins = ["ruins", "feias"];
console.log(censurarTexto(textoOriginal, palavrasRuins));
// "Este texto contém palavras ***** e *****"

// ===============================================
// RESUMO DOS PRINCIPAIS MÉTODOS:
// ===============================================

/*
BUSCA E LOCALIZAÇÃO:
- indexOf(), lastIndexOf() - encontrar posição
- includes() - verificar se contém
- startsWith(), endsWith() - verificar início/fim

EXTRAÇÃO:
- substring(), slice() - extrair partes
- charAt() - pegar caractere específico

TRANSFORMAÇÃO:
- toLowerCase(), toUpperCase() - alterar case
- trim(), trimStart(), trimEnd() - remover espaços

SUBSTITUIÇÃO:
- replace(), replaceAll() - substituir texto

DIVISÃO:
- split() - dividir em array

FORMATAÇÃO:
- repeat() - repetir string
- padStart(), padEnd() - adicionar padding

PROPRIEDADES:
- length - tamanho da string
*/
