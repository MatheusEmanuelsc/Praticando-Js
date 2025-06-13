/*
Resumo dos tópicos sobre Objetos em JavaScript:

Criação de objetos           → Usar chaves {} para definir pares chave: valor.
Acesso a propriedades        → Via dot notation (obj.prop) ou bracket notation (obj["prop"]).
Adição/Alteração             → Atribuir valor a uma propriedade existente ou nova.
Remoção de propriedades      → Usar delete para remover propriedades.
Desestruturação de objetos   → Extrair propriedades em variáveis.
Métodos                     → Funções dentro do objeto como propriedades.
Propriedades dinâmicas       → Usar colchetes para nome de propriedade variável.
Iteração                     → Percorrer propriedades com for...in.
Object.keys(), values(), entries() → Métodos para pegar arrays de chaves, valores ou pares.
Spread operator com objetos  → Copiar ou combinar objetos usando ...
*/

/////// Exemplos ///////

// --- Criação de objeto ---
const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Engenheiro",
};

// --- Acesso a propriedades ---
// Dot notation:
console.log(pessoa.nome); // "João"
// Bracket notation:
console.log(pessoa["idade"]); // 30

// --- Adição / Alteração ---
pessoa.idade = 31; // Alterar idade
pessoa.cidade = "São Paulo"; // Adicionar nova propriedade
console.log(pessoa);

// --- Remoção de propriedade ---
delete pessoa.profissao;
console.log(pessoa);

// --- Desestruturação ---
const { nome, cidade } = pessoa;
console.log(nome, cidade); // "João" "São Paulo"

// --- Métodos ---
const objComMetodo = {
  saudacao() {
    console.log("Olá!");
  },
  soma(a, b) {
    return a + b;
  },
};
objComMetodo.saudacao(); // Olá!
console.log(objComMetodo.soma(2, 3)); // 5

// --- Propriedades dinâmicas ---
const chave = "cor";
const carro = {
  marca: "Ford",
  [chave]: "vermelho", // chave dinâmica
};
console.log(carro.cor); // "vermelho"

// --- Iteração com for...in ---
for (let prop in pessoa) {
  console.log(prop + ": " + pessoa[prop]);
}

// --- Object.keys(), values() e entries() ---
console.log(Object.keys(pessoa)); // ["nome", "idade", "cidade"]
console.log(Object.values(pessoa)); // ["João", 31, "São Paulo"]
console.log(Object.entries(pessoa)); // [["nome","João"], ["idade",31], ["cidade","São Paulo"]]

// --- Spread operator com objetos ---
// Copiar ou combinar objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combinado = { ...obj1, ...obj2 };
console.log(combinado); // {a: 1, b: 3, c: 4} (obj2 sobrescreve obj1 para a propriedade b)
