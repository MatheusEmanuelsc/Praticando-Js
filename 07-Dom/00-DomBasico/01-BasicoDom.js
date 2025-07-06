/*
Resumo DOM - manipulação de conteúdo:

1. Obter valor de input → element.value
2. Obter conteúdo HTML → element.innerHTML
3. Obter conteúdo texto → element.textContent
4. Alterar conteúdo → atribuir a innerHTML ou textContent substitui o conteúdo
5. Adicionar conteúdo sem substituir → usar += com innerHTML/textContent
*/

////// Exemplos //////

// Suponha o HTML:
// <input id="meuInput" value="Texto inicial" />
// <div id="meuDiv">Conteúdo inicial</div>

const input = document.getElementById("meuInput");
const div = document.getElementById("meuDiv");

// 1. Obter valor do input
console.log(input.value); // "Texto inicial"

// 2. Obter conteúdo HTML do div
console.log(div.innerHTML); // "Conteúdo inicial"

// 3. Obter conteúdo texto do div
console.log(div.textContent); // "Conteúdo inicial"

// 4. Alterar conteúdo (substitui tudo)
div.innerHTML = "<p>Novo conteúdo <b>HTML</b></p>";
// Agora o div tem <p>Novo conteúdo <b>HTML</b></p>

// 5. Adicionar conteúdo sem substituir
div.innerHTML += "<p>Conteúdo adicionado</p>";
// Conteúdo anterior permanece, e adiciona o novo

// Também pode usar textContent para só texto
div.textContent += " Texto adicionado sem HTML";
// Isso adiciona texto simples, não interpreta tags HTML
