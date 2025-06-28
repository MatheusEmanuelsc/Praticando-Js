// ==========================================
// 📘 RESUMO: Uso do `this` em JavaScript
// ==========================================

// 1. Dentro de um objeto (método): `this` se refere ao objeto
const pessoa = {
  nome: "João",
  falar: function () {
    console.log(this.nome); // "João"
  },
};
pessoa.falar();

// ------------------------------------------

// 2. Fora de qualquer objeto (modo não estrito): `this` é o objeto global
function foraObjeto() {
  console.log(this); // No navegador: window
}
foraObjeto();

// Em modo estrito: `this` será undefined
("use strict");
function testeEstrito() {
  console.log(this); // undefined
}
testeEstrito();

// ------------------------------------------

// 3. Arrow functions: não têm seu próprio `this`, herdam do escopo externo
const obj = {
  nome: "Maria",
  falar: () => {
    console.log(this.nome); // undefined (this do escopo global)
  },
};
obj.falar();

// ------------------------------------------

// 4. Funções chamadas com `call` ou `apply`: definem manualmente o `this`
function saudacao() {
  console.log("Olá, " + this.nome);
}

const usuario = { nome: "Ana" };

saudacao.call(usuario); // "Olá, Ana"
saudacao.apply(usuario); // "Olá, Ana"

// ------------------------------------------

// 5. Funções com `bind`: fixam permanentemente o `this`
const saudacaoFixada = saudacao.bind(usuario);
saudacaoFixada(); // "Olá, Ana"

// ------------------------------------------

// 6. Construtor com `new`: `this` é o novo objeto instanciado
function Pessoa(nome) {
  this.nome = nome;
}

const p1 = new Pessoa("Carlos");
console.log(p1.nome); // "Carlos"

// ------------------------------------------

// 7. Em eventos DOM: `this` é o elemento que recebeu o evento
const botao = document.createElement("button");
botao.textContent = "Clique aqui";
document.body.appendChild(botao);

botao.addEventListener("click", function () {
  console.log(this); // O próprio botão
});

// Com arrow function: `this` é herdado do escopo exterior (geralmente window)
botao.addEventListener("click", () => {
  console.log(this); // Window ou escopo superior
});

// ------------------------------------------

// 8. Diferença entre função normal e arrow function no `this`
const exemplo = {
  nome: "Lucas",
  normal: function () {
    console.log("Normal:", this.nome); // "Lucas"
  },
  arrow: () => {
    console.log("Arrow:", this.nome); // undefined (herda do escopo global)
  },
};

exemplo.normal();
exemplo.arrow();
