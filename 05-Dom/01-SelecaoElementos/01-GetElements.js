// Selecionando elementos no DOM usando métodos getElements*
// Esses métodos retornam coleções (HTMLCollection ou NodeList) e são amplamente usados para manipular elementos HTML.

// 1. getElementsByTagName: Seleciona elementos pela tag HTML
// Retorna uma HTMLCollection (coleção dinâmica) de elementos com a tag especificada
const paragrafos = document.getElementsByTagName("p");
// Exemplo de uso: Iterando sobre todos os parágrafos
for (let i = 0; i < paragrafos.length; i++) {
  paragrafos[i].style.color = "blue"; // Altera a cor do texto de todos os <p>
}

// 2. getElementsByClassName: Seleciona elementos pela classe CSS
// Retorna uma HTMLCollection de elementos que possuem a classe especificada
const elementosComClasse = document.getElementsByClassName("minha-classe");
// Exemplo: Adicionando um fundo amarelo a todos os elementos com a classe "minha-classe"
for (let elemento of elementosComClasse) {
  elemento.style.backgroundColor = "yellow";
}

// 3. getElementById: Seleciona um único elemento pelo seu ID
// Retorna um elemento único (ou null se não encontrado), já que IDs são únicos
const elementoPorId = document.getElementById("meu-id");
// Exemplo: Alterando o texto de um elemento com ID "meu-id"
if (elementoPorId) {
  elementoPorId.textContent = "Texto alterado!";
}

// 4. getElementsByName: Seleciona elementos pelo atributo 'name'
// Retorna uma NodeList de elementos com o valor do atributo 'name' especificado
const inputsPorNome = document.getElementsByName("meu-nome");
// Exemplo: Marcando todos os inputs com name="meu-nome"
inputsPorNome.forEach((input) => {
  input.checked = true; // Útil para inputs de formulários como radio ou checkbox
});

// Observação: Diferenças entre HTMLCollection e NodeList
// - HTMLCollection (getElementsByTagName, getElementsByClassName) é dinâmica: reflete mudanças no DOM
// - NodeList (getElementsByName, querySelectorAll) pode ser estática ou dinâmica dependendo do método
// Exemplo de conversão para array para facilitar manipulação
const paragrafosArray = Array.from(paragrafos);
paragrafosArray.forEach((p) => (p.style.fontWeight = "bold"));

// Comparação com querySelector/querySelectorAll (métodos mais modernos)
// Embora getElements* sejam úteis, querySelector/querySelectorAll oferecem maior flexibilidade
// Exemplo com querySelectorAll (seleciona todos os elementos com uma classe)
const elementosModernos = document.querySelectorAll(".minha-classe");
// Exemplo com querySelector (seleciona o primeiro elemento com um ID)
const unicoElemento = document.querySelector("#meu-id");

// Exemplo prático combinando métodos
function destacarElementos() {
  // Seleciona todos os <div> com a classe "destaque"
  const divsDestaque = document.getElementsByClassName("destaque");
  // Itera e adiciona uma borda
  for (let div of divsDestaque) {
    div.style.border = "2px solid red";
  }

  // Seleciona um elemento específico por ID
  const header = document.getElementById("cabecalho");
  if (header) {
    header.style.backgroundColor = "lightgray";
  }

  // Seleciona todos os inputs com name="opcao"
  const opcoes = document.getElementsByName("opcao");
  opcoes.forEach((opcao) => {
    opcao.value = "selecionado"; // Altera o valor dos inputs
  });
}

// Chama a função para aplicar as alterações
destacarElementos();

// Nota: Os métodos getElements* são suportados em todos os navegadores e são performáticos para seleções simples,
// mas para seleções mais complexas (ex.: seletores CSS avançados), querySelector/querySelectorAll são recomendados.
