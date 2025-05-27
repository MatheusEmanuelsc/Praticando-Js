// ========================================
// GUIA COMPLETO: "use strict" EM JAVASCRIPT
// ========================================

"use strict"; // Ativa o modo estrito

console.log("=== GUIA COMPLETO DO 'use strict' ===\n");

// ========================================
// 1. O QUE É O "use strict"?
// ========================================

/*
🎯 DEFINIÇÃO:
O "use strict" é uma diretiva que ativa o Strict Mode (Modo Estrito) do JavaScript.
Foi introduzido no ECMAScript 5 (ES5) em 2009.

📍 COMO USAR:
- Coloque "use strict"; no topo do arquivo (modo global)
- Ou no topo de uma função (modo local)
- Deve ser a primeira declaração (antes de qualquer código)
*/

console.log("1. Strict Mode está ativo neste arquivo!");

// ========================================
// 2. FORMAS DE DECLARAR "use strict"
// ========================================

// FORMA 1: Modo Global (afeta todo o arquivo)
("use strict"); // ← Já declarado no topo

// FORMA 2: Modo Local (apenas dentro da função)
function exemploLocalStrict() {
  "use strict";
  console.log("2. Strict mode apenas nesta função");
  return "Função com strict mode local";
}

// FORMA 3: Módulos ES6 (sempre em strict mode)
// export function minhaFuncao() {} // Automaticamente em strict mode

console.log(exemploLocalStrict());
console.log("");

// ========================================
// 3. PRINCIPAIS MUDANÇAS DO STRICT MODE
// ========================================

console.log("3. === PRINCIPAIS MUDANÇAS DO STRICT MODE ===");

// 3.1 VARIÁVEIS NÃO DECLARADAS
console.log("\n3.1 Variáveis não declaradas:");
try {
  // Em modo normal: cria variável global automaticamente
  // Em strict mode: lança erro
  // minhaVariavel = "Isso causará erro!"; // ❌ ReferenceError
  console.log("✅ Strict mode previne variáveis globais acidentais");
} catch (error) {
  console.log(`❌ Erro capturado: ${error.message}`);
}

// Forma correta:
let minhaVariavel = "Declarada corretamente";
console.log(`✅ Variável declarada: ${minhaVariavel}`);

// 3.2 PARÂMETROS DUPLICADOS
console.log("\n3.2 Parâmetros duplicados:");
// function exemploRuim(a, a) { // ❌ Erro em strict mode
//     return a;
// }

function exemploCorreto(a, b) {
  // ✅ Correto
  return a + b;
}
console.log(`✅ Função com parâmetros únicos: ${exemploCorreto(5, 3)}`);

// 3.3 COMPORTAMENTO DO 'this'
console.log("\n3.3 Comportamento do 'this':");

function testarThis() {
  console.log(`'this' em strict mode: ${this}`); // undefined
  return this;
}

const resultado = testarThis();
console.log(`✅ Em strict mode, 'this' é undefined em funções soltas`);

// 3.4 PALAVRAS RESERVADAS
console.log("\n3.4 Palavras reservadas protegidas:");
// Em strict mode, estas palavras não podem ser usadas como variáveis:
// implements, interface, let, package, private, protected, public, static, yield

/*
try {
    let implements = "erro"; // ❌ Erro em strict mode
} catch (error) {
    console.log("❌ Palavra reservada não pode ser usada");
}
*/

console.log("✅ Palavras reservadas são protegidas");

// ========================================
// 4. EXEMPLOS PRÁTICOS DE ERROS PREVENIDOS
// ========================================

console.log("\n4. === EXEMPLOS DE ERROS PREVENIDOS ===");

// 4.1 ATRIBUIÇÃO A PROPRIEDADES NÃO-GRAVÁVEIS
console.log("\n4.1 Propriedades não-graváveis:");
try {
  const obj = {};
  Object.defineProperty(obj, "prop", {
    value: 42,
    writable: false,
  });

  // obj.prop = 100; // ❌ Erro em strict mode (silencioso em modo normal)
  console.log(
    "✅ Tentativa de modificar propriedade não-gravável foi bloqueada"
  );
} catch (error) {
  console.log(`❌ Erro: ${error.message}`);
}

// 4.2 DELETE EM VARIÁVEIS
console.log("\n4.2 Delete em variáveis:");
try {
  let minhaVar = "teste";
  // delete minhaVar; // ❌ Erro em strict mode
  console.log("✅ Delete em variáveis não é permitido");
} catch (error) {
  console.log(`❌ Erro: ${error.message}`);
}

// 4.3 NÚMEROS OCTAIS
console.log("\n4.3 Números octais:");
try {
  // const octal = 010; // ❌ Erro em strict mode (antigo formato octal)
  const octal = 0o10; // ✅ Formato correto ES6
  console.log(`✅ Número octal correto: ${octal}`);
} catch (error) {
  console.log(`❌ Erro: ${error.message}`);
}

// ========================================
// 5. COMPARAÇÃO: COM E SEM STRICT MODE
// ========================================

console.log("\n5. === COMPARAÇÃO: COM E SEM STRICT MODE ===");

// Simulando comportamento sem strict mode (em comentários)
console.log(`
📊 TABELA COMPARATIVA:

Situação                    | Modo Normal      | Strict Mode
----------------------------|------------------|------------------
Variável não declarada      | Cria global      | ❌ ReferenceError  
Parâmetros duplicados       | Usa o último     | ❌ SyntaxError
'this' em função solta      | window/global    | undefined
Delete variável             | Ignora (false)   | ❌ SyntaxError
Propriedade não-gravável    | Ignora silencio  | ❌ TypeError
Números octais (010)        | Funciona         | ❌ SyntaxError
Palavras reservadas         | Funciona         | ❌ SyntaxError
`);

// ========================================
// 6. VANTAGENS DO STRICT MODE
// ========================================

console.log("6. === VANTAGENS DO STRICT MODE ===");
console.log(`
🎯 BENEFÍCIOS:

✅ SEGURANÇA:
   • Previne criação acidental de variáveis globais
   • Detecta erros que seriam silenciosos
   • Protege contra modificações perigosas

✅ DEPURAÇÃO:
   • Erros são lançados imediatamente
   • Mais fácil encontrar problemas no código
   • Comportamento mais previsível

✅ PERFORMANCE:
   • Alguns engines otimizam melhor código strict
   • Elimina comportamentos lentos do JavaScript

✅ FUTURO:
   • Prepara código para versões futuras
   • Muitas funcionalidades ES6+ assumem strict mode
   • Padrão em módulos ES6
`);

// ========================================
// 7. QUANDO USAR STRICT MODE
// ========================================

console.log("7. === QUANDO USAR STRICT MODE ===");
console.log(`
🎯 RECOMENDAÇÕES:

✅ SEMPRE USE EM:
   • Projetos novos
   • Código moderno (ES6+)
   • Aplicações grandes
   • Código em produção

⚠️  CUIDADO EM:
   • Código legado existente
   • Bibliotecas de terceiros antigas
   • Código que mistura strict e não-strict

🚀 DICA:
   • Módulos ES6 são automaticamente strict
   • Ferramentas como Babel/TypeScript aplicam automaticamente
   • Considere usar linters (ESLint) com regras strict
`);

// ========================================
// 8. EXEMPLOS PRÁTICOS DE USO
// ========================================

console.log("\n8. === EXEMPLOS PRÁTICOS ===");

// 8.1 FUNÇÃO COM VALIDAÇÃO STRICT
function calcularIdade(anoNascimento) {
  "use strict";

  // Validação rigorosa
  if (typeof anoNascimento !== "number") {
    throw new TypeError("Ano deve ser um número");
  }

  if (anoNascimento < 1900 || anoNascimento > new Date().getFullYear()) {
    throw new RangeError("Ano inválido");
  }

  const anoAtual = new Date().getFullYear();
  return anoAtual - anoNascimento;
}

try {
  console.log(`Idade calculada: ${calcularIdade(1990)} anos`);
} catch (error) {
  console.log(`Erro na validação: ${error.message}`);
}

// 8.2 CLASSE COM STRICT MODE (ES6)
class PessoaStrictMode {
  constructor(nome, idade) {
    // Classes são automaticamente em strict mode
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos`;
  }
}

const pessoa = new PessoaStrictMode("João", 30);
console.log(pessoa.apresentar());

// ========================================
// 9. RESUMO E BOAS PRÁTICAS
// ========================================

console.log("\n9. === RESUMO E BOAS PRÁTICAS ===");
console.log(`
🎯 RESUMO FINAL:

✅ O QUE FAZER:
   1. Use "use strict"; em todo código novo
   2. Coloque no topo do arquivo ou função
   3. Declare todas as variáveis com let/const
   4. Use ferramentas como ESLint
   5. Teste seu código rigorosamente

❌ O QUE EVITAR:
   1. Misturar código strict e não-strict
   2. Aplicar strict mode em código legado sem testes
   3. Ignorar erros lançados pelo strict mode
   4. Usar var (prefira let/const)
   5. Parâmetros duplicados ou palavras reservadas

🚀 CONCLUSÃO:
O strict mode torna JavaScript mais seguro, mais rápido e mais previsível.
É uma ferramenta essencial para desenvolvimento moderno!
`);

console.log("🎉 Guia completo do 'use strict' finalizado!");

// ========================================
// 10. CÓDIGO DE TESTE FINAL
// ========================================

// Função para testar se strict mode está ativo
function verificarStrictMode() {
  return (function () {
    return !this;
  })();
}

console.log(
  `\n🔍 Verificação final: Strict mode está ${
    verificarStrictMode() ? "ATIVO" : "INATIVO"
  }`
);
