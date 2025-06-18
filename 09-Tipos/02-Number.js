// ============================================
// GUIA COMPLETO DO OBJETO NUMBER EM JAVASCRIPT
// ============================================

// O objeto Number é um wrapper para valores numéricos primitivos.
// Pode ser usado como construtor ou para acessar propriedades e métodos estáticos.

console.log("=== PROPRIEDADES ESTÁTICAS DO NUMBER ===");

// Number.MAX_VALUE - Maior número representável em JavaScript
console.log("Number.MAX_VALUE:", Number.MAX_VALUE); // 1.7976931348623157e+308

// Number.MIN_VALUE - Menor número positivo representável
console.log("Number.MIN_VALUE:", Number.MIN_VALUE); // 5e-324

// Number.MAX_SAFE_INTEGER - Maior inteiro seguro (2^53 - 1)
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991

// Number.MIN_SAFE_INTEGER - Menor inteiro seguro (-(2^53 - 1))
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -9007199254740991

// Number.POSITIVE_INFINITY - Infinito positivo
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY); // Infinity

// Number.NEGATIVE_INFINITY - Infinito negativo
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY); // -Infinity

// Number.NaN - Representa "Not a Number"
console.log("Number.NaN:", Number.NaN); // NaN

// Number.EPSILON - Menor diferença entre dois números representáveis
console.log("Number.EPSILON:", Number.EPSILON); // 2.220446049250313e-16

console.log("\n=== MÉTODOS ESTÁTICOS DE VERIFICAÇÃO ===");

// Number.isNaN() - Verifica se o valor é NaN (mais confiável que isNaN global)
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("Number.isNaN('abc'):", Number.isNaN("abc")); // false (diferente do isNaN global)
console.log("Number.isNaN(123):", Number.isNaN(123)); // false

// Comparação com isNaN global (cuidado!)
console.log("isNaN('abc'):", isNaN("abc")); // true (converte para número primeiro)
console.log("Number.isNaN('abc'):", Number.isNaN("abc")); // false (não converte)

// Number.isFinite() - Verifica se é um número finito
console.log("Number.isFinite(123):", Number.isFinite(123)); // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("Number.isFinite('123'):", Number.isFinite("123")); // false (não converte)

// Number.isInteger() - Verifica se é um número inteiro
console.log("Number.isInteger(123):", Number.isInteger(123)); // true
console.log("Number.isInteger(123.0):", Number.isInteger(123.0)); // true
console.log("Number.isInteger(123.45):", Number.isInteger(123.45)); // false
console.log("Number.isInteger('123'):", Number.isInteger("123")); // false

// Number.isSafeInteger() - Verifica se é um inteiro seguro
console.log("Number.isSafeInteger(123):", Number.isSafeInteger(123)); // true
console.log(
  "Number.isSafeInteger(Number.MAX_SAFE_INTEGER):",
  Number.isSafeInteger(Number.MAX_SAFE_INTEGER)
); // true
console.log(
  "Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1):",
  Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
); // false

console.log("\n=== MÉTODOS ESTÁTICOS DE CONVERSÃO ===");

// Number.parseInt() - Converte string para inteiro (similar ao parseInt global)
console.log("Number.parseInt('123'):", Number.parseInt("123")); // 123
console.log("Number.parseInt('123.45'):", Number.parseInt("123.45")); // 123
console.log("Number.parseInt('123abc'):", Number.parseInt("123abc")); // 123
console.log("Number.parseInt('abc123'):", Number.parseInt("abc123")); // NaN

// Com base numérica
console.log("Number.parseInt('1010', 2):", Number.parseInt("1010", 2)); // 10 (binário)
console.log("Number.parseInt('FF', 16):", Number.parseInt("FF", 16)); // 255 (hexadecimal)
console.log("Number.parseInt('77', 8):", Number.parseInt("77", 8)); // 63 (octal)

// Number.parseFloat() - Converte string para número decimal
console.log("Number.parseFloat('123.45'):", Number.parseFloat("123.45")); // 123.45
console.log("Number.parseFloat('123.45abc'):", Number.parseFloat("123.45abc")); // 123.45
console.log("Number.parseFloat('abc123.45'):", Number.parseFloat("abc123.45")); // NaN

console.log("\n=== CRIANDO OBJETOS NUMBER ===");

// Formas de criar números
const num1 = 123; // Literal numérico (primitivo)
const num2 = new Number(123); // Objeto Number
const num3 = Number(123); // Conversão para primitivo

console.log("typeof num1:", typeof num1); // number
console.log("typeof num2:", typeof num2); // object
console.log("typeof num3:", typeof num3); // number

// Comparação
console.log("num1 == num2:", num1 == num2); // true (conversão automática)
console.log("num1 === num2:", num1 === num2); // false (tipos diferentes)

console.log("\n=== MÉTODOS DE INSTÂNCIA ===");

const numero = 123.456789;

// toString() - Converte para string
console.log("numero.toString():", numero.toString()); // "123.456789"
console.log("(255).toString(16):", (255).toString(16)); // "ff" (hexadecimal)
console.log("(10).toString(2):", (10).toString(2)); // "1010" (binário)

// toFixed() - Fixa número de casas decimais
console.log("numero.toFixed(2):", numero.toFixed(2)); // "123.46"
console.log("numero.toFixed(0):", numero.toFixed(0)); // "123"
console.log("numero.toFixed(8):", numero.toFixed(8)); // "123.45678900"

// toPrecision() - Define precisão total (dígitos significativos)
console.log("numero.toPrecision(3):", numero.toPrecision(3)); // "123"
console.log("numero.toPrecision(5):", numero.toPrecision(5)); // "123.46"
console.log("numero.toPrecision(10):", numero.toPrecision(10)); // "123.4567890"

// toExponential() - Notação científica
console.log("numero.toExponential():", numero.toExponential()); // "1.23456789e+2"
console.log("numero.toExponential(2):", numero.toExponential(2)); // "1.23e+2"

// valueOf() - Retorna o valor primitivo
const objNumber = new Number(42);
console.log("objNumber.valueOf():", objNumber.valueOf()); // 42
console.log("typeof objNumber.valueOf():", typeof objNumber.valueOf()); // number

console.log("\n=== CONVERSÕES E COERÇÃO ===");

// Conversão explícita
console.log("Number('123'):", Number("123")); // 123
console.log("Number('123.45'):", Number("123.45")); // 123.45
console.log("Number('abc'):", Number("abc")); // NaN
console.log("Number(true):", Number(true)); // 1
console.log("Number(false):", Number(false)); // 0
console.log("Number(null):", Number(null)); // 0
console.log("Number(undefined):", Number(undefined)); // NaN

// Conversão com operador unário +
console.log("+'123':", +"123"); // 123
console.log("+'123.45':", +"123.45"); // 123.45
console.log("+'abc':", +"abc"); // NaN

// Coerção em operações
console.log("'5' * 2:", "5" * 2); // 10
console.log("'5' / 2:", "5" / 2); // 2.5
console.log("'5' - 2:", "5" - 2); // 3
console.log("'5' + 2:", "5" + 2); // "52" (concatenação!)

console.log("\n=== TRABALHANDO COM DIFERENTES BASES ===");

// Números em diferentes bases
const binario = 0b1010; // Prefixo 0b para binário
const octal = 0o77; // Prefixo 0o para octal
const hexadecimal = 0xff; // Prefixo 0x para hexadecimal

console.log("Binário 0b1010:", binario); // 10
console.log("Octal 0o77:", octal); // 63
console.log("Hexadecimal 0xFF:", hexadecimal); // 255

// Conversão para diferentes bases
const num = 255;
console.log("255 em binário:", num.toString(2)); // "11111111"
console.log("255 em octal:", num.toString(8)); // "377"
console.log("255 em hexadecimal:", num.toString(16)); // "ff"

console.log("\n=== NÚMEROS ESPECIAIS ===");

// Infinity e -Infinity
console.log("1 / 0:", 1 / 0); // Infinity
console.log("-1 / 0:", -1 / 0); // -Infinity
console.log("Infinity + 1:", Infinity + 1); // Infinity
console.log("Infinity / Infinity:", Infinity / Infinity); // NaN

// NaN (Not a Number)
console.log("0 / 0:", 0 / 0); // NaN
console.log("Math.sqrt(-1):", Math.sqrt(-1)); // NaN
console.log("NaN === NaN:", NaN === NaN); // false (NaN nunca é igual a si mesmo!)

// Verificações
console.log("isFinite(123):", isFinite(123)); // true
console.log("isFinite(Infinity):", isFinite(Infinity)); // false

console.log("\n=== PRECISÃO E PROBLEMAS COMUNS ===");

// Problema de precisão com ponto flutuante
console.log("0.1 + 0.2:", 0.1 + 0.2); // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false

// Solução para comparação de números decimais
function saoIguais(a, b, epsilon = Number.EPSILON) {
  return Math.abs(a - b) < epsilon;
}
console.log("0.1 + 0.2 é igual a 0.3:", saoIguais(0.1 + 0.2, 0.3)); // true

// Limitações com inteiros grandes
console.log("Number.MAX_SAFE_INTEGER + 1:", Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log("Number.MAX_SAFE_INTEGER + 2:", Number.MAX_SAFE_INTEGER + 2); // 9007199254740992 (mesmo resultado!)

// Para inteiros grandes, use BigInt
console.log(
  "BigInt(Number.MAX_SAFE_INTEGER) + 2n:",
  BigInt(Number.MAX_SAFE_INTEGER) + 2n
); // 9007199254740993n

console.log("\n=== FORMATAÇÃO DE NÚMEROS ===");

const preco = 1234.56;

// toLocaleString() - Formatação localizada
console.log("Formato brasileiro:", preco.toLocaleString("pt-BR")); // 1.234,56
console.log("Formato americano:", preco.toLocaleString("en-US")); // 1,234.56

// Formatação de moeda
console.log(
  "Moeda brasileira:",
  preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
); // R$ 1.234,56

console.log(
  "Moeda americana:",
  preco.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })
); // $1,234.56

// Formatação de porcentagem
const taxa = 0.1567;
console.log(
  "Porcentagem:",
  taxa.toLocaleString("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2,
  })
); // 15,67%

console.log("\n=== FUNÇÕES UTILITÁRIAS ===");

// Função para verificar se é um número válido
function isNumeroValido(valor) {
  return typeof valor === "number" && !isNaN(valor) && isFinite(valor);
}
console.log("isNumeroValido(123):", isNumeroValido(123)); // true
console.log("isNumeroValido('123'):", isNumeroValido("123")); // false
console.log("isNumeroValido(NaN):", isNumeroValido(NaN)); // false
console.log("isNumeroValido(Infinity):", isNumeroValido(Infinity)); // false

// Função para arredondar com precisão
function arredondarPrecisao(numero, casas) {
  const multiplicador = Math.pow(10, casas);
  return Math.round(numero * multiplicador) / multiplicador;
}
console.log("Arredondar 3.14159 para 2 casas:", arredondarPrecisao(3.14159, 2)); // 3.14

// Função para converter string em número com validação
function converterParaNumero(valor) {
  const numero = Number(valor);
  if (isNaN(numero)) {
    throw new Error(`"${valor}" não é um número válido`);
  }
  return numero;
}

try {
  console.log("Converter '123':", converterParaNumero("123")); // 123
  console.log("Converter 'abc':", converterParaNumero("abc")); // Erro
} catch (error) {
  console.log("Erro:", error.message);
}

// Função para limitar número a um intervalo
function limitarIntervalo(numero, min, max) {
  return Math.min(Math.max(numero, min), max);
}
console.log("Limitar 15 entre 5 e 10:", limitarIntervalo(15, 5, 10)); // 10
console.log("Limitar 3 entre 5 e 10:", limitarIntervalo(3, 5, 10)); // 5

console.log("\n=== EXEMPLOS PRÁTICOS ===");

// Exemplo 1: Validação de entrada numérica
function validarIdade(entrada) {
  const idade = Number(entrada);

  if (!Number.isInteger(idade)) {
    return "Idade deve ser um número inteiro";
  }

  if (idade < 0 || idade > 150) {
    return "Idade deve estar entre 0 e 150 anos";
  }

  return `Idade válida: ${idade} anos`;
}
console.log("Validar idade '25':", validarIdade("25"));
console.log("Validar idade '25.5':", validarIdade("25.5"));
console.log("Validar idade '200':", validarIdade("200"));

// Exemplo 2: Formatação de preços
function formatarPreco(valor, moeda = "BRL") {
  if (!isNumeroValido(valor)) {
    return "Preço inválido";
  }

  const opcoes = {
    style: "currency",
    currency: moeda,
    minimumFractionDigits: 2,
  };

  const locale = moeda === "BRL" ? "pt-BR" : "en-US";
  return valor.toLocaleString(locale, opcoes);
}
console.log("Formatar preço R$:", formatarPreco(1234.5));
console.log("Formatar preço US$:", formatarPreco(1234.5, "USD"));

// Exemplo 3: Calculadora de desconto
function calcularDesconto(preco, percentualDesconto) {
  if (!isNumeroValido(preco) || !isNumeroValido(percentualDesconto)) {
    return { erro: "Valores inválidos" };
  }

  if (percentualDesconto < 0 || percentualDesconto > 100) {
    return { erro: "Desconto deve estar entre 0% e 100%" };
  }

  const desconto = preco * (percentualDesconto / 100);
  const precoFinal = preco - desconto;

  return {
    precoOriginal: formatarPreco(preco),
    desconto: formatarPreco(desconto),
    precoFinal: formatarPreco(precoFinal),
    economia: `${percentualDesconto}%`,
  };
}

const resultado = calcularDesconto(100, 15);
console.log("Cálculo de desconto:", resultado);

console.log("\n=== DICAS IMPORTANTES ===");

// 1. Sempre use Number.isNaN() em vez de isNaN()
console.log("❌ isNaN('abc'):", isNaN("abc")); // true (faz conversão)
console.log("✅ Number.isNaN('abc'):", Number.isNaN("abc")); // false (não faz conversão)

// 2. Cuidado com a precisão de ponto flutuante
console.log("❌ 0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false
console.log(
  "✅ Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON:",
  Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON
); // true

// 3. Use Number.isSafeInteger() para validar inteiros grandes
console.log(
  "❌ Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2:",
  Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2
); // true (problema!)
console.log(
  "✅ Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1):",
  Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
); // false

// 4. Prefira literals em vez do construtor Number
console.log("❌ const num = new Number(42);"); // Cria objeto
console.log("✅ const num = 42;"); // Valor primitivo

// 5. Use toFixed() apenas para exibição, não para cálculos
const valor = 1.005;
console.log("toFixed(2):", valor.toFixed(2)); // "1.01" (pode ser impreciso)
console.log("Math.round():", Math.round(valor * 100) / 100); // 1.01 (mais preciso para cálculos)
