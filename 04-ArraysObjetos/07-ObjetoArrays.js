// ==============================
// 📚 ÍNDICE – OBJETOS COM ARRAYS
// ==============================

/*
1. Definição e estrutura
2. Acessar e percorrer arrays dentro de objetos
3. Adicionar elementos em arrays de objetos
4. Usar map/filter/reduce com arrays internos
5. Atualizar/remover itens dos arrays internos
6. Dicas úteis (spread, cópias, verificação)
*/

// ==============================
// 📦 1. DEFINIÇÃO E ESTRUTURA
// ==============================

// Objetos podem conter arrays como propriedades (ex: um usuário com várias tarefas)

const usuario = {
  nome: "Lucas",
  idade: 29,
  tarefas: ["Estudar", "Treinar", "Ler"],
};

const empresa = {
  nome: "TechDev",
  funcionarios: [
    { nome: "Ana", cargo: "Dev" },
    { nome: "Bruno", cargo: "Designer" },
  ],
};

// ==============================
// 🔍 2. ACESSAR E PERCORRER ARRAYS INTERNOS
// ==============================

console.log(usuario.tarefas[0]); // Acessa a primeira tarefa
console.log(empresa.funcionarios[1].nome); // Acessa nome do segundo funcionário

// Percorrendo tarefas do usuário:
usuario.tarefas.forEach((tarefa, i) => {
  console.log(`Tarefa ${i + 1}: ${tarefa}`);
});

// Percorrendo lista de funcionários:
empresa.funcionarios.forEach((f) => {
  console.log(`${f.nome} trabalha como ${f.cargo}`);
});

// ==============================
// ➕ 3. ADICIONAR ELEMENTOS AO ARRAY DENTRO DO OBJETO
// ==============================

// Adicionando uma nova tarefa
usuario.tarefas.push("Meditar");

// Adicionando novo funcionário
empresa.funcionarios.push({ nome: "Carlos", cargo: "QA" });

// ==============================
// 🛠️ 4. USAR map/filter/reduce EM ARRAYS INTERNOS
// ==============================

// Criar novo array com tarefas em maiúsculo
const tarefasMaiusculas = usuario.tarefas.map((t) => t.toUpperCase());

// Filtrar funcionários por cargo
const devs = empresa.funcionarios.filter((f) => f.cargo === "Dev");

// Somar número de caracteres de todas as tarefas
const totalLetrasTarefas = usuario.tarefas.reduce(
  (total, t) => total + t.length,
  0
);

// ==============================
// ✏️ 5. ATUALIZAR OU REMOVER ITENS DE ARRAYS INTERNOS
// ==============================

// Atualizar tarefa pelo índice
usuario.tarefas[1] = "Academia";

// Atualizar cargo de um funcionário
empresa.funcionarios = empresa.funcionarios.map((f) =>
  f.nome === "Ana" ? { ...f, cargo: "Tech Lead" } : f
);

// Remover uma tarefa específica
usuario.tarefas = usuario.tarefas.filter((t) => t !== "Ler");

// Remover funcionário pelo nome
empresa.funcionarios = empresa.funcionarios.filter((f) => f.nome !== "Bruno");

// ==============================
// 💡 6. DICAS ÚTEIS
// ==============================

// 🧪 Verificar se uma propriedade é array
console.log(Array.isArray(usuario.tarefas)); // true

// 📤 Usar spread para copiar arrays internos
const copiaTarefas = [...usuario.tarefas];

// 🔄 Clonar objeto inteiro com arrays preservados
const novoUsuario = {
  ...usuario,
  tarefas: [...usuario.tarefas],
};

// ⚠️ Lembre que includes() não funciona diretamente com objetos
console.log(usuario.tarefas.includes("Meditar")); // Funciona (valores primitivos)
console.log(empresa.funcionarios.includes({ nome: "Ana", cargo: "Tech Lead" })); // false (objetos são comparados por referência)
