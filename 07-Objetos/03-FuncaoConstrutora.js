// Resumo: Funções Construtoras em JavaScript

// Função construtora: modelo para criar objetos com 'new'
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const pessoa = new Pessoa("João", 30);
console.log(pessoa.nome); // "João"
console.log(pessoa.idade); // 30

// Protótipo: adiciona métodos compartilhados entre instâncias
Pessoa.prototype.saudar = function () {
  return `Oi, sou ${this.nome}`;
};
const pessoa2 = new Pessoa("Maria", 25);
console.log(pessoa.saudar()); // "Oi, sou João"
console.log(pessoa2.saudar()); // "Oi, sou Maria"

// Verificação de instância com instanceof
console.log(pessoa instanceof Pessoa); // true
console.log(pessoa instanceof Object); // true

// Herança: uma função construtora herda de outra
function Estudante(nome, idade, curso) {
  Pessoa.call(this, nome, idade); // Chama construtor pai
  this.curso = curso;
}
Estudante.prototype = Object.create(Pessoa.prototype);
Estudante.prototype.constructor = Estudante;
Estudante.prototype.estudar = function () {
  return `${this.nome} está estudando ${this.curso}`;
};
const estudante = new Estudante("Ana", 20, "Ciência da Computação");
console.log(estudante.saudar()); // "Oi, sou Ana"
console.log(estudante.estudar()); // "Ana está estudando Ciência da Computação"
console.log(estudante instanceof Estudante); // true
console.log(estudante instanceof Pessoa); // true

// Propriedades estáticas: pertencem à função, não às instâncias
function Contador() {
  Contador.total = (Contador.total || 0) + 1;
  this.id = Contador.total;
}
const c1 = new Contador();
const c2 = new Contador();
console.log(c1.id); // 1
console.log(c2.id); // 2
console.log(Contador.total); // 2

// Encapsulamento simples: usa closure para "privacidade"
function Conta(saldoInicial) {
  let saldo = saldoInicial;
  this.depositar = function (valor) {
    saldo += valor;
    return saldo;
  };
  this.verSaldo = function () {
    return saldo;
  };
}
const conta = new Conta(100);
console.log(conta.verSaldo()); // 100
console.log(conta.depositar(50)); // 150
console.log(conta.saldo); // undefined (não acessível)

// Validação de 'new': evita erros com 'this'
function Livro(titulo) {
  if (!(this instanceof Livro)) {
    throw new Error("Use 'new' para criar Livro");
  }
  this.titulo = titulo;
}
const livro = new Livro("JS Avançado");
console.log(livro.titulo); // "JS Avançado"
// Livro("Erro"); // Lança erro

// Resumo dos Conceitos
// - Funções construtoras criam objetos com 'new', definindo propriedades via 'this'.
// - Métodos no protótipo são compartilhados, otimizando memória.
// - 'instanceof' verifica se um objeto é instância de uma construtora.
// - Herança usa 'call' e 'Object.create' para conectar protótipos.
// - Propriedades estáticas pertencem à função construtora.
// - Encapsulamento simula privacidade com variáveis locais e closures.
// - Valide o uso de 'new' para evitar erros com 'this'.
