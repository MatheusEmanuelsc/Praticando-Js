// ============================================
// GUIA COMPLETO DO OBJETO MATH EM JAVASCRIPT
// ============================================

// O objeto Math é um objeto global que fornece propriedades e métodos
// para constantes e funções matemáticas. Não é um construtor, então
// você não pode criar instâncias dele.

console.log("=== PROPRIEDADES MATEMÁTICAS ===");

// Math.PI - Valor de π (pi)
console.log("Math.PI:", Math.PI); // 3.141592653589793

// Math.E - Número de Euler (base do logaritmo natural)
console.log("Math.E:", Math.E); // 2.718281828459045

// Math.LN2 - Logaritmo natural de 2
console.log("Math.LN2:", Math.LN2); // 0.6931471805599453

// Math.LN10 - Logaritmo natural de 10
console.log("Math.LN10:", Math.LN10); // 2.302585092994046

// Math.LOG2E - Logaritmo de E na base 2
console.log("Math.LOG2E:", Math.LOG2E); // 1.4426950408889634

// Math.LOG10E - Logaritmo de E na base 10
console.log("Math.LOG10E:", Math.LOG10E); // 0.4342944819032518

// Math.SQRT1_2 - Raiz quadrada de 1/2
console.log("Math.SQRT1_2:", Math.SQRT1_2); // 0.7071067811865476

// Math.SQRT2 - Raiz quadrada de 2
console.log("Math.SQRT2:", Math.SQRT2); // 1.4142135623730951

console.log("\n=== MÉTODOS DE ARREDONDAMENTO ===");

// Math.round() - Arredonda para o inteiro mais próximo
console.log("Math.round(4.7):", Math.round(4.7)); // 5
console.log("Math.round(4.4):", Math.round(4.4)); // 4
console.log("Math.round(-4.7):", Math.round(-4.7)); // -5

// Math.floor() - Arredonda para baixo (menor inteiro)
console.log("Math.floor(4.7):", Math.floor(4.7)); // 4
console.log("Math.floor(-4.7):", Math.floor(-4.7)); // -5

// Math.ceil() - Arredonda para cima (maior inteiro)
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // 5
console.log("Math.ceil(-4.7):", Math.ceil(-4.7)); // -4

// Math.trunc() - Remove a parte decimal (trunca)
console.log("Math.trunc(4.7):", Math.trunc(4.7)); // 4
console.log("Math.trunc(-4.7):", Math.trunc(-4.7)); // -4

console.log("\n=== OPERAÇÕES BÁSICAS ===");

// Math.abs() - Valor absoluto (sempre positivo)
console.log("Math.abs(-5):", Math.abs(-5)); // 5
console.log("Math.abs(5):", Math.abs(5)); // 5

// Math.pow() - Potenciação (base, expoente)
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8 (2³)
console.log("Math.pow(4, 0.5):", Math.pow(4, 0.5)); // 2 (√4)

// Math.sqrt() - Raiz quadrada
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4
console.log("Math.sqrt(2):", Math.sqrt(2)); // 1.4142135623730951

// Math.cbrt() - Raiz cúbica
console.log("Math.cbrt(8):", Math.cbrt(8)); // 2
console.log("Math.cbrt(27):", Math.cbrt(27)); // 3

console.log("\n=== FUNÇÕES TRIGONOMÉTRICAS ===");

// Todas as funções trigonométricas trabalham com radianos
// Para converter graus para radianos: graus * (Math.PI / 180)

// Math.sin() - Seno
console.log("Math.sin(Math.PI/2):", Math.sin(Math.PI / 2)); // 1 (sen 90°)
console.log("Math.sin(0):", Math.sin(0)); // 0 (sen 0°)

// Math.cos() - Cosseno
console.log("Math.cos(0):", Math.cos(0)); // 1 (cos 0°)
console.log("Math.cos(Math.PI):", Math.cos(Math.PI)); // -1 (cos 180°)

// Math.tan() - Tangente
console.log("Math.tan(0):", Math.tan(0)); // 0 (tan 0°)
console.log("Math.tan(Math.PI/4):", Math.tan(Math.PI / 4)); // 1 (tan 45°)

// Funções trigonométricas inversas
console.log("Math.asin(1):", Math.asin(1)); // π/2 (arcsen de 1)
console.log("Math.acos(0):", Math.acos(0)); // π/2 (arccos de 0)
console.log("Math.atan(1):", Math.atan(1)); // π/4 (arctan de 1)

// Math.atan2() - Arcotangente de y/x (útil para coordenadas)
console.log("Math.atan2(1, 1):", Math.atan2(1, 1)); // π/4

console.log("\n=== FUNÇÕES EXPONENCIAIS E LOGARITMOS ===");

// Math.exp() - e elevado a x
console.log("Math.exp(1):", Math.exp(1)); // e¹ = 2.718281828459045
console.log("Math.exp(0):", Math.exp(0)); // e⁰ = 1

// Math.log() - Logaritmo natural (base e)
console.log("Math.log(Math.E):", Math.log(Math.E)); // 1
console.log("Math.log(1):", Math.log(1)); // 0

// Math.log10() - Logaritmo base 10
console.log("Math.log10(100):", Math.log10(100)); // 2
console.log("Math.log10(1000):", Math.log10(1000)); // 3

// Math.log2() - Logaritmo base 2
console.log("Math.log2(8):", Math.log2(8)); // 3
console.log("Math.log2(16):", Math.log2(16)); // 4

console.log("\n=== FUNÇÕES DE COMPARAÇÃO ===");

// Math.max() - Maior valor entre os argumentos
console.log("Math.max(1, 3, 2):", Math.max(1, 3, 2)); // 3
console.log("Math.max(-1, -3, -2):", Math.max(-1, -3, -2)); // -1

// Math.min() - Menor valor entre os argumentos
console.log("Math.min(1, 3, 2):", Math.min(1, 3, 2)); // 1
console.log("Math.min(-1, -3, -2):", Math.min(-1, -3, -2)); // -3

// Para arrays, use spread operator
const numeros = [1, 5, 3, 9, 2];
console.log("Math.max(...numeros):", Math.max(...numeros)); // 9
console.log("Math.min(...numeros):", Math.min(...numeros)); // 1

console.log("\n=== GERAÇÃO DE NÚMEROS ALEATÓRIOS ===");

// Math.random() - Número aleatório entre 0 (inclusivo) e 1 (exclusivo)
console.log("Math.random():", Math.random()); // 0.123456789...

// Número aleatório entre 0 e 10
console.log("Aleatório 0-10:", Math.random() * 10);

// Número inteiro aleatório entre 1 e 10
console.log("Inteiro 1-10:", Math.floor(Math.random() * 10) + 1);

// Função para gerar números aleatórios em um intervalo
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Aleatório entre 5 e 15:", numeroAleatorio(5, 15));

console.log("\n=== FUNÇÕES HIPERBÓLICAS ===");

// Math.sinh() - Seno hiperbólico
console.log("Math.sinh(0):", Math.sinh(0)); // 0

// Math.cosh() - Cosseno hiperbólico
console.log("Math.cosh(0):", Math.cosh(0)); // 1

// Math.tanh() - Tangente hiperbólica
console.log("Math.tanh(0):", Math.tanh(0)); // 0

console.log("\n=== VERIFICAÇÕES ESPECIAIS ===");

// Math.sign() - Retorna o sinal do número
console.log("Math.sign(5):", Math.sign(5)); // 1
console.log("Math.sign(-5):", Math.sign(-5)); // -1
console.log("Math.sign(0):", Math.sign(0)); // 0

// Verificação de valores especiais
console.log("Math.sqrt(-1):", Math.sqrt(-1)); // NaN
console.log("Math.log(-1):", Math.log(-1)); // NaN
console.log("1/0:", 1 / 0); // Infinity
console.log("-1/0:", -1 / 0); // -Infinity

console.log("\n=== EXEMPLOS PRÁTICOS ===");

// Exemplo 1: Calcular distância entre dois pontos
function distancia(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log("Distância entre (0,0) e (3,4):", distancia(0, 0, 3, 4)); // 5

// Exemplo 2: Converter graus para radianos
function grausParaRadianos(graus) {
  return graus * (Math.PI / 180);
}
console.log("90° em radianos:", grausParaRadianos(90)); // π/2

// Exemplo 3: Converter radianos para graus
function radianosParaGraus(radianos) {
  return radianos * (180 / Math.PI);
}
console.log("π radianos em graus:", radianosParaGraus(Math.PI)); // 180

// Exemplo 4: Calcular área de um círculo
function areaCirculo(raio) {
  return Math.PI * Math.pow(raio, 2);
}
console.log("Área do círculo com raio 5:", areaCirculo(5)); // 78.54

// Exemplo 5: Normalizar ângulo entre 0 e 360 graus
function normalizarAngulo(angulo) {
  return ((angulo % 360) + 360) % 360;
}
console.log("Normalizar -45°:", normalizarAngulo(-45)); // 315

// Exemplo 6: Calcular hipotenusa
function hipotenusa(cateto1, cateto2) {
  return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
}
console.log("Hipotenusa de catetos 3 e 4:", hipotenusa(3, 4)); // 5

// Exemplo 7: Arredondar para número específico de casas decimais
function arredondar(numero, casas) {
  const fator = Math.pow(10, casas);
  return Math.round(numero * fator) / fator;
}
console.log("Arredondar 3.14159 para 2 casas:", arredondar(3.14159, 2)); // 3.14

console.log("\n=== DICAS IMPORTANTES ===");

// 1. Math não é um construtor, use diretamente
// ❌ Errado:
// const math = new Math();

// ✅ Correto:
// Math.PI

// 2. Todas as funções trigonométricas usam radianos
// Para trabalhar com graus, sempre converta

// 3. Math.random() nunca retorna 1, apenas valores < 1
// Para incluir o máximo, use Math.floor(Math.random() * (max - min + 1)) + min

// 4. Cuidado com precisão de ponto flutuante
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false
console.log("0.1 + 0.2:", 0.1 + 0.2); // 0.30000000000000004

// Para comparações precisas, use:
function saoIguais(a, b, tolerancia = 1e-10) {
  return Math.abs(a - b) < tolerancia;
}
console.log("0.1 + 0.2 é igual a 0.3:", saoIguais(0.1 + 0.2, 0.3)); // true
