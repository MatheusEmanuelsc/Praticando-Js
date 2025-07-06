// Resumo sobre querySelector/querySelectorAll e comparação com métodos getElements*
// Este script demonstra o uso de querySelector/querySelectorAll e compara com getElements*

// Índice:
// 1. querySelector: Seleciona o primeiro elemento com base em um seletor CSS
// 2. querySelectorAll: Seleciona todos os elementos com base em um seletor CSS
// 3. Comparação com métodos getElements*
// 4. Exemplo prático combinando métodos
// 5. Observações

// 1. querySelector: Seleciona o primeiro elemento que corresponde ao seletor CSS
const elementoPorId = document.querySelector("#meu-id");
// Exemplo: Alterando o texto de um elemento com ID "meu-id"
if (elementoPorId) {
  elementoPorId.textContent = "Texto alterado via querySelector!";
}

// 2. querySelectorAll: Seleciona todos os elementos que correspondem ao seletor CSS
const elementosPorClasse = document.querySelectorAll(".minha-classe");
// Exemplo: Adicionando fundo amarelo a todos os elementos com a classe "minha-classe"
elementosPorClasse.forEach((el) => {
  el.style.backgroundColor = "yellow";
});

// 3. Comparação com métodos getElements*
// getElementsByTagName: Seleciona elementos por tag HTML, retorna HTMLCollection (dinâmica)
const paragrafos = document.getElementsByTagName("p");
// Exemplo: Alterando a cor do texto de todos os <p>
for (let i = 0; i < paragrafos.length; i++) {
  paragrafos[i].style.color = "blue";
}

// getElementsByClassName: Seleciona elementos por classe, retorna HTMLCollection (dinâmica)
const elementosComClasse = document.getElementsByClassName("minha-classe");
// Exemplo: Adicionando borda vermelha a elementos com a classe "minha-classe"
for (let elemento of elementosComClasse) {
  elemento.style.border = "2px solid red";
}

// getElementById: Seleciona um único elemento por ID, retorna elemento ou null
const unicoElemento = document.getElementById("meu-id");
// Exemplo: Alterando o fundo de um elemento com ID "meu-id"
if (unicoElemento) {
  unicoElemento.style.backgroundColor = "lightgray";
}

// getElementsByName: Seleciona elementos por atributo name, retorna NodeList
const inputsPorNome = document.getElementsByName("meu-nome");
// Exemplo: Marcando todos os inputs com name="meu-nome"
inputsPorNome.forEach((input) => {
  input.checked = true; // Útil para inputs de formulários como radio ou checkbox
});

// 4. Exemplo prático combinando métodos
function destacarElementos() {
  // Usando querySelectorAll para selecionar todas as <div> com classe "destaque"
  const divsDestaque = document.querySelectorAll("div.destaque");
  divsDestaque.forEach((div) => {
    div.style.border = "3px solid green"; // Adiciona borda verde
  });

  // Usando getElementById para selecionar um elemento específico
  const header = document.getElementById("cabecalho");
  if (header) {
    header.style.fontWeight = "bold"; // Torna o texto em negrito
  }

  // Usando getElementsByName para selecionar inputs com name="opcao"
  const opcoes = document.getElementsByName("opcao");
  opcoes.forEach((opcao) => {
    opcao.value = "selecionado"; // Altera o valor dos inputs
  });

  // Usando querySelector para selecionar o primeiro elemento com uma classe
  const primeiroDestaque = document.querySelector(".destaque");
  if (primeiroDestaque) {
    primeiroDestaque.style.backgroundColor = "lightblue"; // Altera o fundo do primeiro
  }
}

// Chama a função para aplicar as alterações
destacarElementos();

// 5. Observações
// - querySelector/querySelectorAll usam seletores CSS, permitindo maior flexibilidade
// - getElements* retornam HTMLCollection (dinâmica) ou NodeList, menos flexíveis
// - querySelectorAll retorna NodeList estática, ideal para evitar mudanças inesperadas no DOM
// - getElements* são mais performáticos para seleções simples (ex.: por tag ou classe)
// - Para seleções complexas (ex.: seletores CSS aninhados), querySelector/querySelectorAll são recomendados
// - Exemplo
