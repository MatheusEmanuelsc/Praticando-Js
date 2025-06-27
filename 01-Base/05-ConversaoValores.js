// 🔹 typeof: usado para verificar o tipo de uma variável
let nome = "João";
console.log(typeof nome); // string

let idade = 25;
console.log(typeof idade); // number

let ativo = true;
console.log(typeof ativo); // boolean

let indefinido;
console.log(typeof indefinido); // undefined

let vazio = null;
console.log(typeof vazio); // ⚠️ object (bug antigo do JS)

// ----------------------
// 🔸 CONVERSÕES DE TIPOS
// ----------------------

// 🔹 String() → converte valor para string
let numero = 123;
let texto = String(numero); // "123"
console.log(typeof texto); // string

// Também funciona com boolean:
console.log(String(true)); // "true"
console.log(String(false)); // "false"

// 🔹 Number() → converte para número
let valor1 = "42";
let convertido = Number(valor1); // 42
console.log(typeof convertido); // number

// Se não puder converter, retorna NaN (Not a Number):
console.log(Number("abc")); // NaN

// 🔹 parseInt() → converte string para número inteiro
console.log(parseInt("123")); // 123
console.log(parseInt("123.45")); // 123 (ignora parte decimal)
console.log(parseInt("abc")); // NaN

// 🔹 parseFloat() → converte string para número com decimais
console.log(parseFloat("123.45")); // 123.45

// 🔹 Boolean() → converte para verdadeiro ou falso
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false (string vazia = falso)
console.log(Boolean("oi")); // true (qualquer texto ≠ vazio = true)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

// ----------------------
// 🔸 CONVERSÃO IMPLÍCITA
// ----------------------

// JavaScript converte automaticamente em algumas situações:

console.log("5" + 3); // "53" (3 foi convertido para string)
console.log("5" - 3); // 2   ("5" foi convertido para número)
console.log("10" * "2"); // 20

console.log(true + 1); // 2 (true vira 1)
console.log(false + 1); // 1 (false vira 0)

// ⚠️ Cuidado: o JS pode fazer conversões inesperadas
console.log("5" == 5); // true (== compara só o valor, não o tipo)
console.log("5" === 5); // false (=== compara valor E tipo)

// 🧠 DICA: Use `===` para evitar bugs com conversões implícitas

// ### ✅ Resumo:

// | Conversão    | Função         | Exemplo                       |
// | ------------ | -------------- | ----------------------------- |
// | Para string  | `String()`     | `String(123)` → `"123"`       |
// | Para número  | `Number()`     | `Number("42")` → `42`         |
// | Inteiro      | `parseInt()`   | `parseInt("10.5")` → `10`     |
// | Decimal      | `parseFloat()` | `parseFloat("10.5")` → `10.5` |
// | Para boolean | `Boolean()`    | `Boolean(0)` → `false`        |

// | Comparação | Explicação                                |
// | ---------- | ----------------------------------------- |
// | `==`       | Compara valores, ignora tipo              |
// | `===`      | Compara valores **e tipos** (recomendado) |
