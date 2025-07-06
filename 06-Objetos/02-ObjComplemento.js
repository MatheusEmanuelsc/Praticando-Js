// Resumo Completo: Tópicos Adicionais sobre Objetos em JavaScript

// Índice
// 1. Propriedades Computadas
// 2. Getters e Setters
// 3. Propriedades de Acessibilidade (writable, enumerable, configurable)
// 4. Objetos como Mapas (Comparação com Map)
// 5. Clonagem Profunda de Objetos
// 6. Validação de Objetos
// 7. Serialização e Desserialização (JSON)
// 8. Proxy de Objetos
// 9. Objetos e Imutabilidade Avançada
// 10. WeakMap para Referências Fracas

// ---------------------------------------------

// 1. Propriedades Computadas
// Permite definir nomes de propriedades dinamicamente usando expressões em colchetes
const prefixo = "user_";
const id = 123;
const usuario = {
  [prefixo + "nome"]: "Ana",
  [prefixo + "id"]: id,
  ["prop_" + Date.now()]: "timestamp",
};
console.log(usuario.user_nome); // "Ana"
console.log(usuario.user_id); // 123
console.log(Object.keys(usuario)); // ["user_nome", "user_id", "prop_..."]

// 2. Getters e Setters
// Define métodos que controlam o acesso e modificação de propriedades
const contaBancaria = {
  _saldo: 1000, // Convenção: '_' indica propriedade "privada"
  get saldo() {
    return this._saldo;
  },
  set saldo(valor) {
    if (valor >= 0) {
      this._saldo = valor;
    } else {
      console.log("Saldo não pode ser negativo!");
    }
  },
};
console.log(contaBancaria.saldo); // 1000
contaBancaria.saldo = 1500; // Usa o setter
console.log(contaBancaria.saldo); // 1500
contaBancaria.saldo = -100; // "Saldo não pode ser negativo!"
console.log(contaBancaria.saldo); // 1500 (não alterado)

// 3. Propriedades de Acessibilidade (writable, enumerable, configurable)
// Controla comportamento de propriedades com Object.defineProperty()
const objeto = {};
Object.defineProperty(objeto, "constante", {
  value: 42,
  writable: false, // Não pode ser modificada
  enumerable: false, // Não aparece em for...in ou Object.keys()
  configurable: false, // Não pode ser reconfigurada ou deletada
});
console.log(objeto.constante); // 42
objeto.constante = 100; // Não altera (em modo strict, lançaria erro)
console.log(objeto.constante); // 42
console.log(Object.keys(objeto)); // [] (não enumerável)
delete objeto.constante; // Não remove (não configurável)
console.log(objeto.constante); // 42

// 4. Objetos como Mapas (Comparação com Map)
// Objetos podem ser usados como mapas (chave-valor), mas Map é mais adequado para chaves não-string
const objetoMapa = {
  chave1: "valor1",
  123: "valor2", // Convertido para string
};
const mapa = new Map([
  ["chave1", "valor1"],
  [123, "valor2"], // Mantém 123 como número
  [{ id: 1 }, "objeto"], // Permite objetos como chaves
]);
console.log(objetoMapa[123]); // "valor2"
console.log(mapa.get(123)); // "valor2"
console.log(mapa.get({ id: 1 })); // undefined (objeto diferente)
mapa.set("novo", "valor");
console.log(mapa.has("novo")); // true
console.log(mapa.size); // 4 (número de pares)

// 5. Clonagem Profunda de Objetos
// Copia objetos aninhados para evitar referência compartilhada
const original = {
  nome: "teste",
  detalhes: { a: 1, b: { c: 2 } },
};
const copiaSuperficial = { ...original }; // Apenas nível superior
copiaSuperficial.detalhes.b.c = 3;
console.log(original.detalhes.b.c); // 3 (modificado, pois é referência)
const clonagemProfunda = JSON.parse(JSON.stringify(original)); // Clonagem profunda
clonagemProfunda.detalhes.b.c = 4;
console.log(original.detalhes.b.c); // 3 (não modificado)
console.log(clonagemProfunda.detalhes.b.c); // 4

// 6. Validação de Objetos
// Verifica estrutura ou tipos de propriedades em objetos
function validarUsuario(obj) {
  const schema = {
    nome: "string",
    idade: "number",
    ativo: "boolean",
  };
  for (let prop in schema) {
    if (!(prop in obj) || typeof obj[prop] !== schema[prop]) {
      return false;
    }
  }
  return true;
}
const usuarioValido = { nome: "João", idade: 25, ativo: true };
const usuarioInvalido = { nome: "Maria", idade: "30", ativo: true };
console.log(validarUsuario(usuarioValido)); // true
console.log(validarUsuario(usuarioInvalido)); // false

// 7. Serialização e Desserialização (JSON)
// Converte objetos para strings JSON e vice-versa
const dados = {
  nome: "Produto",
  preco: 99.99,
  categorias: ["eletrônicos", "informática"],
};
const jsonString = JSON.stringify(dados);
console.log(jsonString); // '{"nome":"Produto","preco":99.99,"ctap":"eletrônicos","informática"]}'
const objetoRestaurado = JSON.parse(jsonString);
console.log(objetoRestaurado); // { nome: "Produto", preco: 99.99, categorias: ["eletrônicos", "informática"] }
// Nota: Funções e propriedades como Date ou undefined não são serializadas
const comFuncao = { nome: "teste", fn: () => {} };
console.log(JSON.stringify(comFuncao)); // '{"nome":"teste"}'

// 8. Proxy de Objetos
// Intercepta operações em objetos para adicionar comportamento personalizado
const alvo = { nome: "teste", valor: 100 };
const proxy = new Proxy(alvo, {
  get(target, prop) {
    console.log(`Acessando propriedade: ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Alterando ${prop} para ${value}`);
    target[prop] = value;
    return true;
  },
});
console.log(proxy.nome); // "Acessando propriedade: nome" -> "teste"
proxy.valor = 200; // "Alterando valor para 200"
console.log(alvo.valor); // 200

// 9. Objetos e Imutabilidade Avançada
// Garante imutabilidade em objetos aninhados com bibliotecas ou técnicas manuais
function deepFreeze(obj) {
  Object.getOwnPropertyNames(obj).forEach((prop) => {
    if (typeof obj[prop] === "object" && obj[prop] !== null) {
      deepFreeze(obj[prop]); // Recursão para objetos aninhados
    }
  });
  return Object.freeze(obj);
}
const objImutavel = deepFreeze({
  nome: "teste",
  config: { ativo: true, dados: { x: 1 } },
});
// objImutavel.config.ativo = false; // Não funciona
// objImutavel.config.dados.x = 2; // Não funciona
console.log(objImutavel.config.dados.x); // 1

// 10. WeakMap para Referências Fracas
// Armazena pares chave-valor com chaves sendo objetos, sem impedi-los de serem coletados pelo garbage collector
const weakMap = new WeakMap();
const chaveObjeto = {};
weakMap.set(chaveObjeto, "valor secreto");
console.log(weakMap.get(chaveObjeto)); // "valor secreto"
// chaveObjeto = null; // Após isso, a entrada pode ser removida pelo garbage collector
const outroObjeto = {};
weakMap.set(outroObjeto, "outro valor");
console.log(weakMap.has(outroObjeto)); // true
// WeakMap não é iterável e não expõe suas chaves

// Resumo dos Conceitos Adicionais
// - Propriedades computadas permitem nomes dinâmicos baseados em expressões.
// - Getters e setters controlam acesso e modificação de propriedades.
// - Propriedades podem ter atributos (writable, enumerable, configurable) para controle fino.
// - Map é mais adequado que objetos para chaves não-string e pares dinâmicos.
// - Clonagem profunda evita referências compartilhadas em objetos aninhados.
// - Validação garante que objetos seguem uma estrutura esperada.
// - JSON serializa objetos para strings, mas não suporta funções ou tipos especiais.
// - Proxy permite interceptar operações em objetos.
// - Imutabilidade avançada protege objetos aninhados contra alterações.
// - WeakMap armazena dados com chaves fracas, permitindo garbage collection.
