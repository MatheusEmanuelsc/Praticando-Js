// ==============================
// 📚 RESUMO DE MÉTODOS PARA ARRAYS DE OBJETOS
// ==============================

/*
| Método        | Descrição resumida                                                        |
|---------------|----------------------------------------------------------------------------|
| forEach()     | Itera sobre cada item (sem retornar novo array)                           |
| map()         | Cria novo array com os itens modificados                                  |
| filter()      | Retorna um novo array com itens que passam na condição                    |
| find()        | Retorna o primeiro item que satisfaz a condição                           |
| push()        | Adiciona novo item ao final do array                                      |
| splice()      | Insere, remove ou substitui itens em uma posição específica               |
| some()        | Retorna true se ao menos um item passar na condição                       |
| every()       | Retorna true se todos os itens passarem na condição                       |
| includes()    | Verifica se array contém um valor (não funciona direto com objetos)       |
| sort()        | Ordena os itens (passar função comparadora para objetos)                  |
| reduce()      | Reduz o array a um único valor (usado para somatórios, agrupamentos, etc) |
| concat()      | Junta dois arrays (sem alterar os originais)                              |
| Array.isArray()| Verifica se é um array                                                    |
| Array.from()  | Cria um array a partir de algo iterável (ex: NodeList, Set, etc.)         |
*/

// ==============================
// 📌 ARRAYS DE OBJETOS — CONCEITO
// ==============================

/*
Arrays podem conter objetos como elementos, sendo úteis para representar listas estruturadas,
como usuários, produtos, tarefas etc.
*/

const usuarios = [
  { id: 1, nome: "Ana", idade: 25 },
  { id: 2, nome: "Bruno", idade: 30 },
  { id: 3, nome: "Carlos", idade: 22 },
];

// ==============================
// 🔍 ACESSO A DADOS
// ==============================

console.log(usuarios[0]); // Acessa o primeiro objeto
console.log(usuarios[1].nome); // Acessa a propriedade "nome" do segundo objeto

// ==============================
// 🔁 PERCORRER O ARRAY
// ==============================

usuarios.forEach((usuario) => {
  console.log(`Nome: ${usuario.nome} | Idade: ${usuario.idade}`);
});

// ==============================
// 🔍 BUSCAR E FILTRAR
// ==============================

const usuarioCarlos = usuarios.find((u) => u.nome === "Carlos"); // Primeiro que satisfaz
const maioresDe25 = usuarios.filter((u) => u.idade > 25); // Todos que satisfazem

// ==============================
// 🛠️ TRANSFORMAR COM MAP
// ==============================

const nomesMaiusculos = usuarios.map((u) => ({
  ...u,
  nome: u.nome.toUpperCase(),
}));

// ==============================
// ➕ ADICIONAR NOVO ITEM
// ==============================

usuarios.push({ id: 4, nome: "Diana", idade: 28 });

// ==============================
// ➖ REMOVER ITEM (sem alterar original)
const semCarlos = usuarios.filter((u) => u.nome !== "Carlos");

// ==============================
// 📝 ATUALIZAR ITEM
const atualizarBruno = usuarios.map((u) =>
  u.nome === "Bruno" ? { ...u, idade: 35 } : u
);

// ==============================
// 📊 REDUZIR ARRAY (ex: somar idades)
const somaIdades = usuarios.reduce((total, u) => total + u.idade, 0);

// ==============================
// 🧠 VERIFICAR ALGUMA CONDIÇÃO
const alguemMenorQue20 = usuarios.some((u) => u.idade < 20);
const todosMaioresDe18 = usuarios.every((u) => u.idade >= 18);

// ==============================
// 🔢 ORDENAR OBJETOS POR IDADE
const ordenadoPorIdade = [...usuarios].sort((a, b) => a.idade - b.idade);

// ==============================
// 🧪 VERIFICAR SE É UM ARRAY
console.log(Array.isArray(usuarios)); // true

// ==============================
// 🧱 COPIAR OU CONCATENAR
const copiaUsuarios = [...usuarios]; // Spread para copiar
const concatenado = usuarios.concat([{ nome: "Elias" }]); // concat

// ==============================
// 🧩 Array.from (útil com NodeList, Sets, argumentos, etc)
const arrayDeNumeros = Array.from([1, 2, 3, 4]);

// ==============================
// ⚠️ includes() NÃO FUNCIONA DIRETO COM OBJETOS
// Este método compara por referência, não por conteúdo
const objetoTeste = { id: 1, nome: "Ana", idade: 25 };
console.log(usuarios.includes(objetoTeste)); // false (mesmo que o conteúdo seja igual)
