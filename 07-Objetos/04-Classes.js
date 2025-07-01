// =====================================================
// RESUMO COMPLETO: CLASSES EM JAVASCRIPT
// =====================================================

// Classes foram introduzidas no ES6 (2015) como uma forma mais limpa
// de trabalhar com programação orientada a objetos em JavaScript.
// Elas são "açúcar sintático" sobre o sistema de protótipos existente.

// =====================================================
// 1. DECLARAÇÃO BÁSICA DE CLASSE
// =====================================================

class Pessoa {
  // O constructor é um método especial que é executado
  // automaticamente quando uma nova instância é criada
  constructor(nome, idade) {
    // 'this' refere-se à instância atual da classe
    this.nome = nome; // Propriedade pública
    this.idade = idade; // Propriedade pública
  }

  // Método público - pode ser chamado em qualquer instância
  falar() {
    return `${this.nome} está falando`;
  }

  // Método público com parâmetros
  cumprimentar(outraPessoa) {
    return `${this.nome} cumprimentou ${outraPessoa}`;
  }
}

// Criando instâncias (objetos) da classe
const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Maria", 25);

console.log(pessoa1.nome); // "João"
console.log(pessoa1.falar()); // "João está falando"
console.log(pessoa1.cumprimentar("Ana")); // "João cumprimentou Ana"

// =====================================================
// 2. PROPRIEDADES E MÉTODOS PRIVADOS (ES2022)
// =====================================================

class ContaBancaria {
  // Propriedade privada - só pode ser acessada dentro da classe
  // O símbolo # indica que é privada
  #saldo = 0;
  #numeroConta;

  constructor(numeroConta, saldoInicial = 0) {
    this.titular = ""; // Propriedade pública
    this.#numeroConta = numeroConta;
    this.#saldo = saldoInicial;
  }

  // Método público para acessar propriedade privada
  getSaldo() {
    return this.#saldo;
  }

  // Método público para modificar propriedade privada
  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      return `Depósito de R$${valor} realizado. Saldo atual: R$${this.#saldo}`;
    }
    return "Valor inválido para depósito";
  }

  // Método privado - só pode ser chamado dentro da classe
  #validarSaque(valor) {
    return valor > 0 && valor <= this.#saldo;
  }

  // Método público que usa método privado
  sacar(valor) {
    if (this.#validarSaque(valor)) {
      this.#saldo -= valor;
      return `Saque de R$${valor} realizado. Saldo atual: R$${this.#saldo}`;
    }
    return "Saque inválido";
  }
}

const conta = new ContaBancaria("12345", 1000);
console.log(conta.getSaldo()); // 1000
console.log(conta.depositar(500)); // "Depósito de R$500 realizado..."
// console.log(conta.#saldo);       // ERRO! Propriedade privada não acessível

// =====================================================
// 3. HERANÇA - EXTENDS E SUPER
// =====================================================

// Classe pai (superclasse)
class Animal {
  constructor(nome, especie) {
    this.nome = nome;
    this.especie = especie;
    this.energia = 100;
  }

  dormir() {
    this.energia += 20;
    return `${this.nome} dormiu e recuperou energia`;
  }

  mover() {
    this.energia -= 10;
    return `${this.nome} se moveu`;
  }
}

// Classe filha (subclasse) - herda de Animal
class Cachorro extends Animal {
  constructor(nome, raca) {
    // super() chama o constructor da classe pai
    // DEVE ser a primeira linha no constructor da classe filha
    super(nome, "Canino");
    this.raca = raca;
    this.alegria = 100;
  }

  // Método específico da classe filha
  latir() {
    this.energia -= 5;
    return `${this.nome} está latindo: Au au!`;
  }

  // Sobrescrevendo (override) método da classe pai
  mover() {
    // Chamando o método da classe pai com super
    const resultado = super.mover();
    this.alegria += 10;
    return resultado + " e ficou mais alegre!";
  }

  // Método que usa propriedades herdadas e próprias
  brincar() {
    this.energia -= 15;
    this.alegria += 20;
    return `${this.nome} (${this.raca}) está brincando!`;
  }
}

const dog = new Cachorro("Rex", "Labrador");
console.log(dog.nome); // "Rex" (herdado)
console.log(dog.especie); // "Canino" (definido no super)
console.log(dog.raca); // "Labrador" (próprio)
console.log(dog.latir()); // "Rex está latindo: Au au!"
console.log(dog.mover()); // "Rex se moveu e ficou mais alegre!"

// =====================================================
// 4. MÉTODOS E PROPRIEDADES ESTÁTICAS
// =====================================================

class Matematica {
  // Propriedade estática - pertence à classe, não às instâncias
  static PI = 3.14159;
  static contadorCalculos = 0;

  // Método estático - pode ser chamado sem criar instância
  // Não tem acesso ao 'this' da instância
  static somar(a, b) {
    this.contadorCalculos++; // 'this' aqui refere-se à classe
    return a + b;
  }

  static calcularAreaCirculo(raio) {
    this.contadorCalculos++;
    return this.PI * raio * raio; // Usando propriedade estática
  }

  // Método estático que retorna informações da classe
  static getInfo() {
    return `Cálculos realizados: ${this.contadorCalculos}`;
  }
}

// Chamando métodos estáticos diretamente na classe
console.log(Matematica.somar(5, 3)); // 8
console.log(Matematica.PI); // 3.14159
console.log(Matematica.calcularAreaCirculo(5)); // 78.53975
console.log(Matematica.getInfo()); // "Cálculos realizados: 2"

// Não é necessário criar instância para usar métodos estáticos
// const math = new Matematica(); // Desnecessário para métodos estáticos

// =====================================================
// 5. GETTERS E SETTERS
// =====================================================

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this._preco = preco; // Convenção: _ indica "pseudo-privado"
    this._desconto = 0;
  }

  // Getter - permite acessar como propriedade, mas executa função
  get preco() {
    const precoComDesconto = this._preco * (1 - this._desconto);
    return `R$ ${precoComDesconto.toFixed(2)}`;
  }

  // Setter - permite definir valor como propriedade, mas executa função
  set preco(novoPreco) {
    if (novoPreco >= 0) {
      this._preco = novoPreco;
    } else {
      console.log("Preço não pode ser negativo");
    }
  }

  get desconto() {
    return `${(this._desconto * 100).toFixed(1)}%`;
  }

  set desconto(porcentagem) {
    if (porcentagem >= 0 && porcentagem <= 100) {
      this._desconto = porcentagem / 100;
    } else {
      console.log("Desconto deve estar entre 0 e 100%");
    }
  }

  // Getter calculado - sempre retorna valor atualizado
  get resumo() {
    return `${this.nome}: ${this.preco} (desconto: ${this.desconto})`;
  }
}

const produto = new Produto("Notebook", 2000);
console.log(produto.preco); // "R$ 2000.00"

produto.desconto = 10; // Usando setter
console.log(produto.preco); // "R$ 1800.00"
console.log(produto.desconto); // "10.0%"
console.log(produto.resumo); // "Notebook: R$ 1800.00 (desconto: 10.0%)"

produto.preco = 2500; // Usando setter
console.log(produto.preco); // "R$ 2250.00"

// =====================================================
// 6. EXEMPLO PRÁTICO COMPLETO
// =====================================================

// Sistema de funcionários com herança e funcionalidades avançadas
class Funcionario {
  static #proximoId = 1; // Propriedade estática privada
  static funcionarios = []; // Lista de todos os funcionários

  constructor(nome, salarioBase) {
    this.id = Funcionario.#proximoId++;
    this.nome = nome;
    this.salarioBase = salarioBase;
    this.dataContratacao = new Date();

    // Adicionando à lista estática
    Funcionario.funcionarios.push(this);
  }

  // Getter para calcular tempo de trabalho
  get tempoTrabalho() {
    const agora = new Date();
    const anos = (agora - this.dataContratacao) / (1000 * 60 * 60 * 24 * 365);
    return `${anos.toFixed(1)} anos`;
  }

  // Método que pode ser sobrescrito pelas classes filhas
  calcularSalario() {
    return this.salarioBase;
  }

  // Método estático para buscar funcionário
  static buscarPorId(id) {
    return this.funcionarios.find((func) => func.id === id);
  }

  static get totalFuncionarios() {
    return this.funcionarios.length;
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, salarioBase, linguagens = []) {
    super(nome, salarioBase);
    this.linguagens = linguagens;
    this.projetos = 0;
  }

  // Sobrescrevendo método da classe pai
  calcularSalario() {
    const salarioBase = super.calcularSalario();
    const bonusLinguagens = this.linguagens.length * 200;
    const bonusProjetos = this.projetos * 100;
    return salarioBase + bonusLinguagens + bonusProjetos;
  }

  adicionarProjeto() {
    this.projetos++;
    return `${this.nome} agora tem ${this.projetos} projeto(s)`;
  }

  get perfil() {
    return `${this.nome} - Dev ${this.linguagens.join(", ")} - ${
      this.projetos
    } projetos`;
  }
}

class Gerente extends Funcionario {
  constructor(nome, salarioBase) {
    super(nome, salarioBase);
    this.equipe = [];
  }

  adicionarMembro(funcionario) {
    this.equipe.push(funcionario);
    return `${funcionario.nome} adicionado à equipe de ${this.nome}`;
  }

  calcularSalario() {
    const salarioBase = super.calcularSalario();
    const bonusEquipe = this.equipe.length * 500;
    return salarioBase + bonusEquipe;
  }

  get resumoEquipe() {
    return `${this.nome} gerencia ${this.equipe.length} pessoas`;
  }
}

// Testando o sistema completo
const dev1 = new Desenvolvedor("Alice", 5000, [
  "JavaScript",
  "Python",
  "React",
]);
const dev2 = new Desenvolvedor("Bob", 4500, ["Java", "Spring"]);
const gerente = new Gerente("Carlos", 8000);

dev1.adicionarProjeto();
dev1.adicionarProjeto();

gerente.adicionarMembro(dev1);
gerente.adicionarMembro(dev2);

console.log(dev1.perfil); // "Alice - Dev JavaScript, Python, React - 2 projetos"
console.log(`Salário Alice: R$ ${dev1.calcularSalario()}`); // Salário base + bonus
console.log(gerente.resumoEquipe); // "Carlos gerencia 2 pessoas"
console.log(`Total funcionários: ${Funcionario.totalFuncionarios}`); // 3

// Buscando funcionário por ID
const funcionarioEncontrado = Funcionario.buscarPorId(1);
console.log(`Funcionário ID 1: ${funcionarioEncontrado.nome}`); // "Alice"

// =====================================================
// RESUMO DOS CONCEITOS PRINCIPAIS:
// =====================================================

/*
1. CLASSES: Template para criar objetos com propriedades e métodos
2. CONSTRUCTOR: Método especial executado ao criar nova instância
3. THIS: Referência à instância atual da classe
4. PROPRIEDADES PRIVADAS (#): Só acessíveis dentro da própria classe
5. HERANÇA (extends): Classe filha herda características da classe pai
6. SUPER: Palavra-chave para acessar métodos/constructor da classe pai
7. MÉTODOS ESTÁTICOS: Pertencem à classe, não às instâncias
8. GETTERS/SETTERS: Controlam acesso e modificação de propriedades
9. SOBRESCRITA: Redefinir método herdado na classe filha
10. ENCAPSULAMENTO: Controlar acesso às propriedades e métodos

Classes oferecem uma sintaxe mais limpa e familiar para programação
orientada a objetos, mantendo a flexibilidade do JavaScript.
*/
