// 🔹 Operadores Aritméticos Básicos em JavaScript

let a = 10;
let b = 3;

// ➕ Soma
let soma = a + b;
console.log("Soma:", soma); // 13

// ➖ Subtração
let subtracao = a - b;
console.log("Subtração:", subtracao); // 7

// ✖️ Multiplicação
let multiplicacao = a * b;
console.log("Multiplicação:", multiplicacao); // 30

// ➗ Divisão
let divisao = a / b;
console.log("Divisão:", divisao); // 3.333...

// ➗ Resto da Divisão (módulo)
let resto = a % b;
console.log("Resto da divisão:", resto); // 1

// ** Exponenciação (potência)
let potencia = a ** b; // equivale a Math.pow(a, b)
console.log("Exponenciação:", potencia); // 1000

// 🔸 Incremento e Decremento

let x = 5;

// Pós-incremento: primeiro usa, depois soma
console.log("x:", x); // 5
console.log("x++:", x++); // 5 → depois vira 6
console.log("x depois do pós-incremento:", x); // 6

// Pré-incremento: soma antes de usar
console.log("++x:", ++x); // 7

// Pós-decremento
console.log("x--:", x--); // 7 → depois vira 6
console.log("x depois do pós-decremento:", x); // 6

// Pré-decremento
console.log("--x:", --x); // 5

// ------------------------------

// 🧠 Dica: Você pode usar os operadores diretamente em expressões
let resultado = (10 + 5) * 2; // Parênteses são usados como na matemática
console.log("Resultado final:", resultado); // 30
