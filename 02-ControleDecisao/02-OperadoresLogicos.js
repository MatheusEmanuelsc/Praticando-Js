// ===== Operadores Lógicos em JavaScript =====

// Declaramos duas variáveis booleanas para exemplo
let a = true;
let b = false;

// 1. Operador E lógico (AND) -> &&
// Retorna true apenas se ambos os valores forem true
console.log("true && false =", a && b); // false, porque b é false
console.log("true && true =", a && true); // true, ambos true

// 2. Operador OU lógico (OR) -> ||
// Retorna true se pelo menos um dos valores for true
console.log("true || false =", a || b); // true, porque a é true
console.log("false || false =", b || false); // false, ambos false

// 3. Operador NÃO lógico (NOT) -> !
// Inverte o valor booleano: true vira false, false vira true
console.log("!true =", !a); // false
console.log("!false =", !b); // true

// ---------------------------------------------

// Exemplos práticos

let idade = 20;
let temCarteira = true;

// Usando && para verificar duas condições: idade >= 18 e tem carteira
let podeDirigir = idade >= 18 && temCarteira;
console.log("Pode dirigir? ", podeDirigir); // true, porque ambas condições são verdadeiras

let estaChovendo = false;
let temGuardaChuva = false;

// Verificar se vai se molhar: está chovendo e não tem guarda-chuva
let vaiSeMolhar = estaChovendo && !temGuardaChuva;
console.log("Vai se molhar? ", vaiSeMolhar); // false, porque não está chovendo

// ---------------------------------------------

// Curto-circuito lógico:

// No operador && (AND), se o primeiro valor for false, não avalia o segundo valor, porque o resultado já é false
console.log(false && "Qualquer coisa"); // false

// No operador || (OR), se o primeiro valor for true, não avalia o segundo valor, porque o resultado já é true
console.log(true || "Qualquer coisa"); // true

// Exemplo de valor padrão usando ||:
// Se a variável nome for falsa (string vazia, null, undefined), será usado "Usuário Anônimo"
let nome = "" || "Usuário Anônimo";
console.log("Nome:", nome); // Usuário Anônimo
