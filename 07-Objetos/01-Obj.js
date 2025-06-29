// Guia Completo: Objetos em JavaScript

// Índice
// 1. Introdução aos Objetos
// 2. Criação de Objetos
// 3. Propriedades e Métodos
// 4. Acessando Propriedades
// 5. Modificando Objetos
// 6. Métodos de Objeto
// 7. This em Objetos
// 8. Iteração sobre Objetos
// 9. Objetos Aninhados
// 10. Desestruturação de Objetos
// 11. Métodos Úteis do Object
// 12. Protótipos e Herança

// ---------------------------------------------

// 1. Introdução aos Objetos
// Objetos são estruturas de dados que armazenam coleções de propriedades
// Cada propriedade é um par chave-valor
// Objetos são mutáveis e podem conter diferentes tipos de dados

const pessoa = {
  nome: "João", // propriedade string
  idade: 30, // propriedade number
  ativo: true, // propriedade boolean
  hobbies: ["leitura", "música"], // propriedade array
};

// 2. Criação de Objetos

// Método 1: Literal de objeto (mais comum)
const carro1 = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2023,
};

// Método 2: Construtor Object()
const carro2 = new Object();
carro2.marca = "Honda";
carro2.modelo = "Civic";
carro2.ano = 2022;

// Método 3: Object.create()
const veiculo = {
  tipo: "automóvel",
  acelerar: function () {
    return "Acelerando...";
  },
};
const carro3 = Object.create(veiculo);
carro3.marca = "Ford";

// Método 4: Função construtora
function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}
const carro4 = new Carro("BMW", "X5", 2023);

// 3. Propriedades e Métodos

const usuario = {
  // Propriedades: armazenam dados
  nome: "Maria",
  email: "maria@email.com",
  idade: 25,

  // Métodos: funções dentro do objeto
  apresentar: function () {
    return `Olá, eu sou ${this.nome}`;
  },

  // Método com sintaxe ES6 (mais limpa)
  saudar() {
    return `Oi! Meu email é ${this.email}`;
  },

  // Método arrow function (cuidado com 'this')
  info: () => {
    // Arrow functions não têm seu próprio 'this'
    return "Informações do usuário";
  },
};

// 4. Acessando Propriedades

const produto = {
  nome: "Notebook",
  preco: 2500,
  "cor-principal": "preto", // propriedade com hífen
  categoria: {
    tipo: "eletrônicos",
    subcategoria: "informática",
  },
};

// Notação de ponto (mais comum)
console.log(produto.nome); // "Notebook"
console.log(produto.preco); // 2500

// Notação de colchetes (necessária para propriedades com caracteres especiais)
console.log(produto["cor-principal"]); // "preto"

// Acessando propriedades aninhadas
console.log(produto.categoria.tipo); // "eletrônicos"

// Usando variáveis para acessar propriedades
const propriedade = "preco";
console.log(produto[propriedade]); // 2500

// Verificando se propriedade existe
console.log("nome" in produto); // true
console.log(produto.hasOwnProperty("preco")); // true

// 5. Modificando Objetos

const livro = {
  titulo: "JavaScript Guide",
  autor: "Autor Desconhecido",
  paginas: 300,
};

// Modificando propriedades existentes
livro.autor = "João Silva";
livro["paginas"] = 350;

// Adicionando novas propriedades
livro.isbn = "978-0123456789";
livro.disponivel = true;

// Adicionando métodos
livro.resumo = function () {
  return `${this.titulo} tem ${this.paginas} páginas`;
};

// Removendo propriedades
delete livro.disponivel;

// Tentativa de modificar objeto congelado
const objetoCongelado = Object.freeze({ nome: "Teste" });
// objetoCongelado.nome = "Novo"; // Não funciona em modo strict

// 6. Métodos de Objeto

const calculadora = {
  resultado: 0,

  // Método para somar
  somar(a, b) {
    this.resultado = a + b;
    return this; // Retorna o próprio objeto para encadeamento
  },

  // Método para multiplicar
  multiplicar(fator) {
    this.resultado *= fator;
    return this;
  },

  // Método para obter resultado
  obterResultado() {
    return this.resultado;
  },

  // Método para resetar
  reset() {
    this.resultado = 0;
    return this;
  },
};

// Encadeamento de métodos (method chaining)
const resultado = calculadora.somar(5, 3).multiplicar(2).obterResultado(); // 16

// 7. This em Objetos

const conta = {
  titular: "Pedro",
  saldo: 1000,

  // 'this' refere-se ao objeto atual
  depositar(valor) {
    this.saldo += valor;
    return `Novo saldo: R$ ${this.saldo}`;
  },

  // Problema com arrow functions
  sacarArrow: (valor) => {
    // 'this' não aponta para o objeto conta
    // this.saldo -= valor; // Erro!
    return "Arrow function não tem 'this' próprio";
  },

  // Método que retorna função
  criarFuncaoSaque() {
    // Salvando referência do 'this'
    const self = this;
    return function (valor) {
      self.saldo -= valor;
      return `Saque realizado. Saldo: R$ ${self.saldo}`;
    };
  },

  // Usando bind para preservar 'this'
  obterInfoConta: function () {
    return `Titular: ${this.titular}, Saldo: R$ ${this.saldo}`;
  },
};

// Chamando métodos
console.log(conta.depositar(500)); // "Novo saldo: R$ 1500"

// Problema ao atribuir método a variável
const metodoDepositar = conta.depositar;
// metodoDepositar(100); // Erro! 'this' é undefined

// Solução com bind
const depositarComBind = conta.depositar.bind(conta);
console.log(depositarComBind(200)); // Funciona corretamente

// 8. Iteração sobre Objetos

const empresa = {
  nome: "TechCorp",
  funcionarios: 50,
  setor: "Tecnologia",
  ativa: true,
  fundacao: 2020,
};

// for...in - itera sobre propriedades enumeráveis
console.log("=== for...in ===");
for (let propriedade in empresa) {
  console.log(`${propriedade}: ${empresa[propriedade]}`);
}

// Object.keys() - retorna array com as chaves
console.log("=== Object.keys() ===");
const chaves = Object.keys(empresa);
chaves.forEach((chave) => {
  console.log(`${chave}: ${empresa[chave]}`);
});

// Object.values() - retorna array com os valores
console.log("=== Object.values() ===");
const valores = Object.values(empresa);
console.log(valores); // ["TechCorp", 50, "Tecnologia", true, 2020]

// Object.entries() - retorna array de arrays [chave, valor]
console.log("=== Object.entries() ===");
const entradas = Object.entries(empresa);
entradas.forEach(([chave, valor]) => {
  console.log(`${chave} -> ${valor}`);
});

// Iteração com map em Object.entries()
const propriedadesHTML = Object.entries(empresa)
  .map(([chave, valor]) => `<li>${chave}: ${valor}</li>`)
  .join("");

// 9. Objetos Aninhados

const escola = {
  nome: "Colégio Exemplo",
  endereco: {
    rua: "Rua das Flores, 123",
    cidade: "São Paulo",
    cep: "01234-567",
    coordenadas: {
      latitude: -23.5505,
      longitude: -46.6333,
    },
  },
  turmas: [
    {
      serie: "1º Ano",
      alunos: [
        { nome: "Ana", idade: 15, notas: [8.5, 9.0, 7.5] },
        { nome: "Bruno", idade: 16, notas: [7.0, 8.0, 9.5] },
      ],
    },
    {
      serie: "2º Ano",
      alunos: [{ nome: "Carlos", idade: 16, notas: [9.0, 8.5, 8.0] }],
    },
  ],

  // Método para calcular média de um aluno
  calcularMedia(nomeAluno) {
    for (let turma of this.turmas) {
      const aluno = turma.alunos.find((a) => a.nome === nomeAluno);
      if (aluno) {
        const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / aluno.notas.length;
      }
    }
    return null;
  },

  // Método para listar todos os alunos
  listarAlunos() {
    const todosAlunos = [];
    this.turmas.forEach((turma) => {
      turma.alunos.forEach((aluno) => {
        todosAlunos.push({
          ...aluno,
          serie: turma.serie,
        });
      });
    });
    return todosAlunos;
  },
};

// Acessando propriedades aninhadas
console.log(escola.endereco.cidade); // "São Paulo"
console.log(escola.endereco.coordenadas.latitude); // -23.5505

// Usando optional chaining (ES2020) para evitar erros
console.log(escola.endereco?.coordenadas?.altitude); // undefined (sem erro)

// 10. Desestruturação de Objetos

const funcionario = {
  nome: "Alice",
  cargo: "Desenvolvedora",
  salario: 8000,
  departamento: "TI",
  endereco: {
    cidade: "Rio de Janeiro",
    estado: "RJ",
  },
  habilidades: ["JavaScript", "Python", "React"],
};

// Desestruturação básica
const { nome, cargo, salario } = funcionario;
console.log(nome, cargo, salario); // "Alice" "Desenvolvedora" 8000

// Renomeando variáveis durante desestruturação
const { nome: nomeFuncionario, cargo: posicao } = funcionario;
console.log(nomeFuncionario, posicao); // "Alice" "Desenvolvedora"

// Valores padrão
const { nome: nomeEmp, bonus = 0 } = funcionario;
console.log(bonus); // 0 (valor padrão)

// Desestruturação aninhada
const {
  endereco: { cidade, estado },
} = funcionario;
console.log(cidade, estado); // "Rio de Janeiro" "RJ"

// Desestruturação com rest operator
const { nome: n, cargo: c, ...outrasInfo } = funcionario;
console.log(outrasInfo); // Objeto com salario, departamento, endereco, habilidades

// Desestruturação em parâmetros de função
function apresentarFuncionario({ nome, cargo, departamento }) {
  return `${nome} trabalha como ${cargo} no departamento ${departamento}`;
}
console.log(apresentarFuncionario(funcionario));

// Desestruturação em arrays dentro de objetos
const {
  habilidades: [primeirHabilidade, segundaHabilidade],
} = funcionario;
console.log(primeirHabilidade, segundaHabilidade); // "JavaScript" "Python"

// 11. Métodos Úteis do Object

const produto2 = {
  id: 1,
  nome: "Smartphone",
  preco: 1200,
  categoria: "eletrônicos",
};

// Object.assign() - copia propriedades de um objeto para outro
const produtoAtualizado = Object.assign({}, produto2, {
  preco: 1100,
  promocao: true,
});
console.log(produtoAtualizado);

// Spread operator (ES6) - alternativa mais moderna ao Object.assign()
const produtoComDesconto = {
  ...produto2,
  preco: produto2.preco * 0.9,
  desconto: "10%",
};

// Object.freeze() - torna objeto imutável
const produtoCongelado = Object.freeze({ ...produto2 });
// produtoCongelado.preco = 1000; // Não funciona

// Object.seal() - permite modificar propriedades existentes, mas não adicionar/remover
const produtoSelado = Object.seal({ ...produto2 });
produtoSelado.preco = 1300; // Funciona
// produtoSelado.cor = "azul"; // Não funciona

// Object.defineProperty() - define propriedade com controle detalhado
Object.defineProperty(produto2, "descricao", {
  value: "Produto de alta qualidade",
  writable: false, // Não pode ser alterada
  enumerable: true, // Aparece em for...in
  configurable: false, // Não pode ser deletada
});

// Object.getOwnPropertyDescriptor() - obtém descrição da propriedade
const descricaoPropriedade = Object.getOwnPropertyDescriptor(produto2, "nome");
console.log(descricaoPropriedade);

// Object.hasOwnProperty() vs 'in' operator
console.log(produto2.hasOwnProperty("nome")); // true
console.log("toString" in produto2); // true (método herdado)
console.log(produto2.hasOwnProperty("toString")); // false

// Object.getPrototypeOf() - obtém o protótipo do objeto
console.log(Object.getPrototypeOf(produto2) === Object.prototype); // true

// 12. Protótipos e Herança

// Criando um protótipo base
const Animal = {
  // Propriedades compartilhadas
  vivo: true,

  // Métodos compartilhados
  dormir() {
    return `${this.nome} está dormindo`;
  },

  comer(comida) {
    return `${this.nome} está comendo ${comida}`;
  },
};

// Criando objetos que herdam de Animal
const cachorro = Object.create(Animal);
cachorro.nome = "Rex";
cachorro.raca = "Labrador";
cachorro.latir = function () {
  return `${this.nome} está latindo: Au au!`;
};

const gato = Object.create(Animal);
gato.nome = "Miau";
gato.raca = "Siamês";
gato.miar = function () {
  return `${this.nome} está miando: Miau miau!`;
};

// Testando herança
console.log(cachorro.comer("ração")); // "Rex está comendo ração"
console.log(gato.dormir()); // "Miau está dormindo"
console.log(cachorro.latir()); // "Rex está latindo: Au au!"

// Verificando cadeia de protótipos
console.log(Object.getPrototypeOf(cachorro) === Animal); // true
console.log(cachorro.isPrototypeOf === Object.prototype.isPrototypeOf); // true

// Função construtora com protótipo
function Veiculo(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

// Adicionando métodos ao protótipo
Veiculo.prototype.acelerar = function () {
  return `${this.marca} ${this.modelo} está acelerando`;
};

Veiculo.prototype.frear = function () {
  return `${this.marca} ${this.modelo} está freando`;
};

// Criando instâncias
const carro = new Veiculo("Toyota", "Corolla");
const moto = new Veiculo("Honda", "CB600");

console.log(carro.acelerar()); // "Toyota Corolla está acelerando"
console.log(moto.frear()); // "Honda CB600 está freando"

// Verificando instanceof
console.log(carro instanceof Veiculo); // true
console.log(carro instanceof Object); // true

// Resumo dos Conceitos Principais
// Os objetos em JavaScript são estruturas fundamentais que permitem organizar e manipular dados de forma eficiente.
// Eles oferecem flexibilidade através de diferentes métodos de criação, manipulação dinâmica de propriedades, herança via protótipos e diversos métodos utilitários para trabalhar com suas propriedades e valores.

// Pontos-chave para lembrar:
// - Objetos são mutáveis por padrão
// - Propriedades podem ser acessadas por notação de ponto ou colchetes
// - Métodos são funções dentro de objetos
// - O `this` em métodos refere-se ao objeto atual
// - Arrow functions não têm `this` próprio
// - Desestruturação facilita a extração de propriedades
// - Objetos podem ser aninhados e iterar através de vários métodos
// - Protótipos permitem herança e compartilhamento de propriedades/métodos
