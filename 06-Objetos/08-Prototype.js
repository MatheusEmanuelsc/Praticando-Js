// =====================================================
// RESUMO COMPLETO: PROTOTYPES EM JAVASCRIPT
// =====================================================

// Prototype é o mecanismo fundamental de herança em JavaScript.
// TUDO em JavaScript é baseado em prototypes - inclusive as classes ES6
// são apenas "açúcar sintático" sobre o sistema de prototypes.

// =====================================================
// 1. CONCEITOS FUNDAMENTAIS
// =====================================================

// Todo objeto em JavaScript tem uma propriedade interna [[Prototype]]
// que aponta para outro objeto (o prototype)
// Quando você acessa uma propriedade, o JavaScript procura:
// 1. No próprio objeto
// 2. No prototype do objeto
// 3. No prototype do prototype (cadeia de prototypes)
// 4. Até chegar em null

// Exemplo básico de como funciona
const obj = {
  nome: "João",
};

// obj tem um prototype que é Object.prototype
console.log(obj.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (fim da cadeia)

// Quando chamamos obj.toString(), JavaScript procura:
// 1. Em obj (não encontra)
// 2. Em Object.prototype (encontra toString)
console.log(obj.toString()); // "[object Object]"

// =====================================================
// 2. FUNCTION CONSTRUCTOR (FORMA CLÁSSICA)
// =====================================================

// Antes das classes ES6, usávamos function constructors
// para criar "classes" usando prototypes

// Function constructor - convenção: primeira letra maiúscula
function Pessoa(nome, idade) {
  // Propriedades da instância (próprias de cada objeto)
  this.nome = nome;
  this.idade = idade;
}

// Adicionando métodos ao prototype da função
// Todos os objetos criados com 'new Pessoa' compartilharão estes métodos
Pessoa.prototype.falar = function () {
  return `${this.nome} está falando`;
};

Pessoa.prototype.envelhecer = function () {
  this.idade++;
  return `${this.nome} agora tem ${this.idade} anos`;
};

// Propriedade no prototype (compartilhada por todas as instâncias)
Pessoa.prototype.especie = "Homo sapiens";

// Criando instâncias
const pessoa1 = new Pessoa("Maria", 30);
const pessoa2 = new Pessoa("João", 25);

// Cada instância tem suas próprias propriedades
console.log(pessoa1.nome); // "Maria"
console.log(pessoa2.nome); // "João"

// Mas compartilham os métodos do prototype
console.log(pessoa1.falar === pessoa2.falar); // true (mesmo método)
console.log(pessoa1.falar()); // "Maria está falando"
console.log(pessoa2.falar()); // "João está falando"

// Verificando a cadeia de prototypes
console.log(pessoa1.__proto__ === Pessoa.prototype); // true
console.log(Pessoa.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null

// =====================================================
// 3. PROTOTYPE CHAIN (CADEIA DE PROTOTYPES)
// =====================================================

// Demonstrando como a busca por propriedades funciona na cadeia

function Animal(tipo) {
  this.tipo = tipo;
}

Animal.prototype.respirar = function () {
  return `${this.tipo} está respirando`;
};

Animal.prototype.dormir = function () {
  return `${this.tipo} está dormindo`;
};

function Cachorro(nome, raca) {
  // Chamando o constructor pai (similar ao super())
  Animal.call(this, "Cachorro");
  this.nome = nome;
  this.raca = raca;
}

// Configurando herança: Cachorro herda de Animal
// Criamos um novo objeto que tem Animal.prototype como prototype
Cachorro.prototype = Object.create(Animal.prototype);

// Restaurando o constructor (Object.create remove essa referência)
Cachorro.prototype.constructor = Cachorro;

// Adicionando métodos específicos de Cachorro
Cachorro.prototype.latir = function () {
  return `${this.nome} está latindo: Au au!`;
};

// Sobrescrevendo método do pai
Cachorro.prototype.dormir = function () {
  return `${this.nome} está dormindo como um cachorro`;
};

const dog = new Cachorro("Rex", "Labrador");

// Propriedades próprias
console.log(dog.nome); // "Rex" (própria)
console.log(dog.tipo); // "Cachorro" (própria, vinda de Animal)

// Métodos da cadeia de prototypes
console.log(dog.latir()); // "Rex está latindo: Au au!" (Cachorro.prototype)
console.log(dog.dormir()); // "Rex está dormindo como um cachorro" (sobrescrito)
console.log(dog.respirar()); // "Cachorro está respirando" (Animal.prototype)

// Verificando a cadeia
console.log(dog.__proto__ === Cachorro.prototype); // true
console.log(Cachorro.prototype.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.__proto__ === Object.prototype); // true

// =====================================================
// 4. MÉTODOS PARA TRABALHAR COM PROTOTYPES
// =====================================================

// Object.create() - cria objeto com prototype específico
const protoObj = {
  saudar: function () {
    return `Olá, eu sou ${this.nome}`;
  },
  tipo: "Humano",
};

const pessoa = Object.create(protoObj);
pessoa.nome = "Ana";

console.log(pessoa.saudar()); // "Olá, eu sou Ana"
console.log(pessoa.tipo); // "Humano" (vem do prototype)

// Object.getPrototypeOf() - obtém o prototype de um objeto
console.log(Object.getPrototypeOf(pessoa) === protoObj); // true

// Object.setPrototypeOf() - define o prototype de um objeto (não recomendado para performance)
const novoProto = {
  despedir: function () {
    return `Tchau, ${this.nome}`;
  },
};

Object.setPrototypeOf(pessoa, novoProto);
console.log(pessoa.despedir()); // "Tchau, Ana"

// hasOwnProperty() - verifica se propriedade é própria (não herdada)
function Carro(marca) {
  this.marca = marca;
}

Carro.prototype.acelerar = function () {
  return "Vruum!";
};

const carro = new Carro("Toyota");

console.log(carro.hasOwnProperty("marca")); // true (propriedade própria)
console.log(carro.hasOwnProperty("acelerar")); // false (vem do prototype)
console.log("acelerar" in carro); // true (existe no objeto ou prototype)

// Object.keys() vs Object.getOwnPropertyNames()
console.log(Object.keys(carro)); // ["marca"] (só próprias)
console.log(Object.getOwnPropertyNames(carro)); // ["marca"] (só próprias)

// =====================================================
// 5. PROTOTYPE DINÂMICO
// =====================================================

// Prototypes são dinâmicos - mudanças afetam todas as instâncias

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

const produto1 = new Produto("Notebook", 2000);
const produto2 = new Produto("Mouse", 50);

// Adicionando método depois que objetos já foram criados
Produto.prototype.aplicarDesconto = function (porcentagem) {
  this.preco = this.preco * (1 - porcentagem / 100);
  return `Desconto aplicado! Novo preço: R$ ${this.preco}`;
};

// Ambos os objetos agora têm o novo método
console.log(produto1.aplicarDesconto(10)); // "Desconto aplicado! Novo preço: R$ 1800"
console.log(produto2.aplicarDesconto(20)); // "Desconto aplicado! Novo preço: R$ 40"

// Modificando método existente
Produto.prototype.toString = function () {
  return `${this.nome}: R$ ${this.preco}`;
};

console.log(produto1.toString()); // "Notebook: R$ 1800"
console.log(produto2.toString()); // "Mouse: R$ 40"

// =====================================================
// 6. PROTOTYPE vs __proto__ vs prototype
// =====================================================

// Conceitos que geram confusão:

// 1. __proto__ (não padrão, mas amplamente suportado)
//    É a propriedade que aponta para o prototype do objeto
function MinhaFuncao() {}
const obj1 = new MinhaFuncao();
console.log(obj1.__proto__ === MinhaFuncao.prototype); // true

// 2. .prototype (existe apenas em funções)
//    É o objeto que será usado como prototype para instâncias criadas com 'new'
console.log(typeof MinhaFuncao.prototype); // "object"
console.log(MinhaFuncao.prototype.constructor === MinhaFuncao); // true

// 3. [[Prototype]] (propriedade interna)
//    É a propriedade interna real, acessível via Object.getPrototypeOf()
console.log(Object.getPrototypeOf(obj1) === MinhaFuncao.prototype); // true

// =====================================================
// 7. PROTOTYPES DE TIPOS NATIVOS
// =====================================================

// JavaScript permite modificar prototypes de tipos nativos
// (não recomendado em produção, mas útil para entender)

// Adicionando método a Array.prototype
Array.prototype.ultimo = function () {
  return this[this.length - 1];
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.ultimo()); // 5

// Todos os arrays agora têm esse método
const outroArr = ["a", "b", "c"];
console.log(outroArr.ultimo()); // "c"

// Adicionando método a String.prototype
String.prototype.inverter = function () {
  return this.split("").reverse().join("");
};

console.log("JavaScript".inverter()); // "tpircSavaJ"

// Verificando cadeia de prototypes dos tipos nativos
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true

console.log("texto".__proto__ === String.prototype); // true
console.log(String.prototype.__proto__ === Object.prototype); // true

// =====================================================
// 8. COMPARAÇÃO: PROTOTYPE vs CLASSES ES6
// =====================================================

// O que você faz com classes ES6...
class VeiculoES6 {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  acelerar() {
    return `${this.marca} ${this.modelo} acelerando`;
  }

  static criarGenerico() {
    return new VeiculoES6("Genérico", "Modelo");
  }
}

// ...é equivalente a isso com prototypes:
function VeiculoPrototype(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

VeiculoPrototype.prototype.acelerar = function () {
  return `${this.marca} ${this.modelo} acelerando`;
};

VeiculoPrototype.criarGenerico = function () {
  return new VeiculoPrototype("Genérico", "Modelo");
};

// Ambos funcionam da mesma forma internamente
const v1 = new VeiculoES6("Toyota", "Corolla");
const v2 = new VeiculoPrototype("Honda", "Civic");

console.log(v1.acelerar()); // "Toyota Corolla acelerando"
console.log(v2.acelerar()); // "Honda Civic acelerando"

console.log(v1.__proto__ === VeiculoES6.prototype); // true
console.log(v2.__proto__ === VeiculoPrototype.prototype); // true

// =====================================================
// 9. EXEMPLO PRÁTICO COMPLETO COM PROTOTYPES
// =====================================================

// Sistema de formas geométricas usando apenas prototypes

// Classe base
function Forma(cor) {
  this.cor = cor;
}

Forma.prototype.obterCor = function () {
  return this.cor;
};

Forma.prototype.definirCor = function (novaCor) {
  this.cor = novaCor;
};

// Método que será sobrescrito nas classes filhas
Forma.prototype.calcularArea = function () {
  throw new Error("Método calcularArea deve ser implementado pela subclasse");
};

Forma.prototype.descricao = function () {
  return `Forma de cor ${this.cor} com área ${this.calcularArea()}`;
};

// Classe filha: Retângulo
function Retangulo(cor, largura, altura) {
  Forma.call(this, cor); // Chama constructor pai
  this.largura = largura;
  this.altura = altura;
}

// Configurando herança
Retangulo.prototype = Object.create(Forma.prototype);
Retangulo.prototype.constructor = Retangulo;

// Implementando método abstrato
Retangulo.prototype.calcularArea = function () {
  return this.largura * this.altura;
};

Retangulo.prototype.calcularPerimetro = function () {
  return 2 * (this.largura + this.altura);
};

// Classe filha: Círculo
function Circulo(cor, raio) {
  Forma.call(this, cor);
  this.raio = raio;
}

Circulo.prototype = Object.create(Forma.prototype);
Circulo.prototype.constructor = Circulo;

Circulo.prototype.calcularArea = function () {
  return Math.PI * this.raio * this.raio;
};

Circulo.prototype.calcularCircunferencia = function () {
  return 2 * Math.PI * this.raio;
};

// Testando o sistema
const retangulo = new Retangulo("azul", 10, 5);
const circulo = new Circulo("vermelho", 3);

console.log(retangulo.descricao()); // "Forma de cor azul com área 50"
console.log(circulo.descricao()); // "Forma de cor vermelho com área 28.27..."
console.log(retangulo.calcularPerimetro()); // 30
console.log(circulo.calcularCircunferencia()); // 18.84...

// Verificando instanceof (funciona com herança por prototype)
console.log(retangulo instanceof Retangulo); // true
console.log(retangulo instanceof Forma); // true
console.log(circulo instanceof Circulo); // true
console.log(circulo instanceof Forma); // true

// =====================================================
// 10. MÉTODOS ÚTEIS PARA DEBUG E INSPEÇÃO
// =====================================================

function debugPrototype(obj) {
  console.log("=== DEBUG PROTOTYPE ===");

  // Propriedades próprias do objeto
  console.log("Propriedades próprias:", Object.getOwnPropertyNames(obj));

  // Caminhando pela cadeia de prototypes
  let proto = Object.getPrototypeOf(obj);
  let nivel = 1;

  while (proto !== null) {
    console.log(`Nível ${nivel} prototype:`, proto.constructor.name);
    console.log(`Métodos disponíveis:`, Object.getOwnPropertyNames(proto));
    proto = Object.getPrototypeOf(proto);
    nivel++;
  }
}

// Testando função de debug
const testObj = new Circulo("verde", 5);
debugPrototype(testObj);

// =====================================================
// RESUMO DOS CONCEITOS PRINCIPAIS:
// =====================================================

/*
1. PROTOTYPE: Mecanismo fundamental de herança em JavaScript
2. PROTOTYPE CHAIN: Cadeia de busca por propriedades/métodos
3. __proto__: Propriedade que aponta para o prototype do objeto
4. .prototype: Propriedade das funções que define o prototype das instâncias
5. Object.create(): Cria objeto com prototype específico
6. HERANÇA: Implementada através da cadeia de prototypes
7. DINAMISMO: Prototypes podem ser modificados em tempo de execução
8. COMPARTILHAMENTO: Métodos no prototype são compartilhados entre instâncias
9. FUNCTION CONSTRUCTOR: Forma clássica de criar "classes" com prototypes
10. ES6 CLASSES: Açúcar sintático sobre o sistema de prototypes

O sistema de prototypes é a base de toda orientação a objetos em JavaScript.
Entender prototypes é essencial para compreender como JavaScript funciona
internamente, mesmo quando usando sintaxe moderna de classes.
*/
