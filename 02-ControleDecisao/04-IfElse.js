// ===== Estrutura condicional if...else =====

let idade = 17;

// if verifica uma condição, se for verdadeira executa o bloco de código dentro das chaves
if (idade >= 18) {
  console.log("Você é maior de idade.");
}
// else é executado quando a condição do if for falsa
else {
  console.log("Você é menor de idade.");
}

// ------------------------------------------

// Podemos ter múltiplos "else if" para verificar várias condições

let nota = 75;

if (nota >= 90) {
  console.log("Excelente!");
} else if (nota >= 70) {
  console.log("Bom!");
} else if (nota >= 50) {
  console.log("Regular.");
} else {
  console.log("Precisa melhorar.");
}

// ------------------------------------------

// Exemplo prático com booleanos:

let estaChovendo = true;

if (estaChovendo) {
  console.log("Pegue o guarda-chuva.");
} else {
  console.log("Não precisa de guarda-chuva.");
}
