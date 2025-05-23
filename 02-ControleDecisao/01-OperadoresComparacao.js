// ===== Operadores de Comparação (Operadores de Decisão) =====

let a = 10;
let b = 5;

// >  (maior que)
console.log("10 > 5 =", a > b); // true, porque 10 é maior que 5

// <  (menor que)
console.log("10 < 5 =", a < b); // false, porque 10 não é menor que 5

// >= (maior ou igual a)
console.log("10 >= 10 =", a >= 10); // true, porque 10 é igual a 10

// <= (menor ou igual a)
console.log("5 <= 10 =", b <= a); // true, porque 5 é menor que 10

// ==  (igualdade de valor, mas não verifica tipo)
console.log("10 == '10' =", a == "10"); // true, porque o valor é igual (converte o tipo)

// === (igualdade estrita, valor e tipo)
console.log("10 === '10' =", a === "10"); // false, porque tipo diferente (number e string)

// !=  (diferente, só valor)
console.log("10 != '5' =", a != "5"); // true, porque 10 é diferente de 5

// !== (diferente estrito, valor ou tipo)
console.log("10 !== '10' =", a !== "10"); // true, porque tipo é diferente

// ### Resumo dos Operadores de Comparação

// | Operador | Descrição                        | Exemplo       | Resultado |
// | -------- | -------------------------------- | ------------- | --------- |
// | `>`      | Maior que                        | `10 > 5`      | `true`    |
// | `<`      | Menor que                        | `10 < 5`      | `false`   |
// | `>=`     | Maior ou igual a                 | `10 >= 10`    | `true`    |
// | `<=`     | Menor ou igual a                 | `5 <= 10`     | `true`    |
// | `==`     | Igualdade (valor)                | `10 == '10'`  | `true`    |
// | `===`    | Igualdade estrita (valor + tipo) | `10 === '10'` | `false`   |
// | `!=`     | Diferente (valor)                | `10 != '5'`   | `true`    |
// | `!==`    | Diferente estrito (valor + tipo) | `10 !== '10'` | `true`    |
