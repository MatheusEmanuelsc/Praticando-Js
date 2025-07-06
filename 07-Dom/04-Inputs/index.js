// ÍNDICE
// 1. Introdução à Manipulação de Inputs em Formulários no DOM
// 2. Métodos e Propriedades para Manipulação de Inputs
//    2.1. createElement (para criar inputs)
//    2.2. value
//    2.3. setAttribute/getAttribute
//    2.4. checked (para checkboxes e radios)
//    2.5. disabled
//    2.6. type
//    2.7. addEventListener (para eventos de input)
//    2.8. form (acesso ao formulário pai)
//    2.9. reset
//    2.10. submit
// 3. Exemplo Prático com Todos os Métodos

// 1. INTRODUÇÃO À MANIPULAÇÃO DE INPUTS EM FORMULÁRIOS NO DOM
// O DOM (Document Object Model) permite criar, configurar e interagir com elementos de entrada (inputs) em formulários dinamicamente.
// Inputs como <input>, <textarea> e <select> são usados para coletar dados do usuário, com propriedades e eventos para gerenciar valores, estados e interações.
// Boas práticas incluem validação, acessibilidade (ex.: atributos aria) e manipulação de eventos para formulários responsivos.

// 2. MÉTODOS E PROPRIEDADES PARA MANIPULAÇÃO DE INPUTS

// 2.1. createElement (para criar inputs)
// - Cria elementos como <input>, <textarea> ou <select> para uso em formulários.
// - Requer configuração de atributos (ex.: type, name) antes de ser adicionado ao DOM.
// - Essencial para construir formulários dinamicamente.
const createInputExample = document.createElement("input");
createInputExample.type = "text";
createInputExample.placeholder = "Digite seu nome";
document.body.appendChild(createInputExample);

// 2.2. value
// - Define ou obtém o valor atual de um input, textarea ou select.
// - Reflete o conteúdo digitado ou definido programaticamente.
// - Para selects, retorna o value da opção selecionada; para textareas, o texto inserido.
const valueExample = document.createElement("input");
valueExample.type = "text";
valueExample.value = "Valor inicial";
document.body.appendChild(valueExample);

// 2.3. setAttribute/getAttribute
// - Manipula atributos de inputs, como placeholder, name, id ou data-*.
// - Útil para atributos sem propriedades diretas ou para atributos personalizados.
// - Menos performático que propriedades nativas, mas mais genérico.
const attributeExample = document.createElement("input");
attributeExample.setAttribute("type", "email");
attributeExample.setAttribute("placeholder", "Digite seu e-mail");
const placeholderValue = attributeExample.getAttribute("placeholder");
const attrDisplay = document.createElement("p");
attrDisplay.textContent = `Placeholder: ${placeholderValue}`;
document.body.appendChild(attributeExample);
document.body.appendChild(attrDisplay);

// 2.4. checked
// - Define ou obtém o estado de seleção de checkboxes ou radios (true/false).
// - Usado para marcar/desmarcar opções dinamicamente.
// - Importante para formulários com escolhas múltiplas ou únicas.
const checkedExample = document.createElement("input");
checkedExample.type = "checkbox";
checkedExample.checked = true;
checkedExample.id = "checkExample";
const labelChecked = document.createElement("label");
labelChecked.htmlFor = "checkExample";
labelChecked.textContent = " Checkbox marcado";
document.body.appendChild(checkedExample);
document.body.appendChild(labelChecked);

// 2.5. disabled
// - Define ou obtém o estado de desabilitação de um input (true/false).
// - Inputs desabilitados não são interativos e não enviam dados em formulários.
// - Útil para controlar acesso condicionalmente.
const disabledExample = document.createElement("input");
disabledExample.type = "text";
disabledExample.disabled = true;
disabledExample.value = "Input desabilitado";
document.body.appendChild(disabledExample);

// 2.6. type
// - Define ou obtém o tipo de input (ex.: text, password, checkbox, radio, email).
// - Permite alterar o comportamento do input dinamicamente.
// - Alguns tipos (ex.: file) têm restrições de manipulação por segurança.
const typeExample = document.createElement("input");
typeExample.type = "password";
typeExample.value = "Senha";
document.body.appendChild(typeExample);

// 2.7. addEventListener (para eventos de input)
// - Adiciona listeners para eventos como input, change, focus, blur ou submit.
// - O evento 'input' dispara a cada alteração no valor; 'change' após confirmação.
// - Essencial para validação em tempo real e interatividade.
const eventExample = document.createElement("input");
eventExample.type = "text";
eventExample.placeholder = "Digite e veja o resultado";
eventExample.addEventListener("input", (e) => {
  const display =
    document.getElementById("eventDisplay") || document.createElement("p");
  display.id = "eventDisplay";
  display.textContent = `Você digitou: ${e.target.value}`;
  document.body.appendChild(display);
});
document.body.appendChild(eventExample);

// 2.8. form
// - Acessa o elemento <form> pai de um input, se houver.
// - Permite interagir com o formulário (ex.: validar ou submeter).
// - Útil para manipular múltiplos inputs dentro de um formulário.
const formExample = document.createElement("form");
const formInput = document.createElement("input");
formInput.type = "text";
formInput.name = "username";
formExample.appendChild(formInput);
const formDisplay = document.createElement("p");
formDisplay.textContent = `Input está em um formulário? ${!!formInput.form}`;
document.body.appendChild(formExample);
document.body.appendChild(formDisplay);

// 2.9. reset
// - Redefine os valores de todos os inputs de um formulário para seus estados iniciais.
// - Invocado no elemento <form>, não diretamente no input.
// - Útil para limpar formulários após submissão ou ação do usuário.
const resetExample = document.createElement("form");
const resetInput = document.createElement("input");
resetInput.type = "text";
resetInput.value = "Será resetado";
resetExample.appendChild(resetInput);
const resetButton = document.createElement("button");
resetButton.type = "button";
resetButton.textContent = "Resetar";
resetButton.onclick = () => resetExample.reset();
resetExample.appendChild(resetButton);
document.body.appendChild(resetExample);

// 2.10. submit
// - Dispara a submissão de um formulário programaticamente.
// - Invocado no elemento <form>, desencadeia o evento submit.
// - Útil para automação ou validação antes do envio.
const submitExample = document.createElement("form");
submitExample.action = "#";
const submitInput = document.createElement("input");
submitInput.type = "text";
submitInput.name = "data";
submitExample.appendChild(submitInput);
const submitButton = document.createElement("button");
submitButton.type = "button";
submitButton.textContent = "Submeter";
submitButton.onclick = () => submitExample.submit();
submitExample.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitDisplay = document.createElement("p");
  submitDisplay.textContent = "Formulário submetido!";
  document.body.appendChild(submitDisplay);
});
submitExample.appendChild(submitButton);
document.body.appendChild(submitExample);

// 3. EXEMPLO PRÁTICO COM TODOS OS MÉTODOS
// Cria um formulário para demonstrar todos os métodos em ação
const formContainer = document.createElement("form");
formContainer.style.border = "1px solid black";
formContainer.style.padding = "10px";
formContainer.style.margin = "10px";
formContainer.action = "#";

// Demonstração de cada método
const demoCreateElement = document.createElement("input");
demoCreateElement.type = "text";
demoCreateElement.placeholder = "Exemplo com createElement";
formContainer.appendChild(demoCreateElement);

const demoValue = document.createElement("input");
demoValue.type = "text";
demoValue.value = "Exemplo com value";
formContainer.appendChild(demoValue);

const demoAttribute = document.createElement("input");
demoAttribute.setAttribute("type", "email");
demoAttribute.setAttribute("placeholder", "Exemplo com setAttribute");
const attrDemoDisplay = document.createElement("p");
attrDemoDisplay.textContent = `Placeholder: ${demoAttribute.getAttribute(
  "placeholder"
)}`;
formContainer.appendChild(demoAttribute);
formContainer.appendChild(attrDemoDisplay);

const demoChecked = document.createElement("input");
demoChecked.type = "checkbox";
demoChecked.checked = true;
demoChecked.id = "demoCheck";
const labelDemoChecked = document.createElement("label");
labelDemoChecked.htmlFor = "demoCheck";
labelDemoChecked.textContent = " Exemplo com checked";
formContainer.appendChild(demoChecked);
formContainer.appendChild(labelDemoChecked);

const demoDisabled = document.createElement("input");
demoDisabled.type = "text";
demoDisabled.disabled = true;
demoDisabled.value = "Exemplo com disabled";
formContainer.appendChild(demoDisabled);

const demoType = document.createElement("input");
demoType.type = "password";
demoType.value = "Exemplo com type";
formContainer.appendChild(demoType);

const demoEvent = document.createElement("input");
demoEvent.type = "text";
demoEvent.placeholder = "Digite para ver o evento";
demoEvent.addEventListener("input", (e) => {
  const eventDemoDisplay =
    document.getElementById("demoEventDisplay") || document.createElement("p");
  eventDemoDisplay.id = "demoEventDisplay";
  eventDemoDisplay.textContent = `Evento input: ${e.target.value}`;
  formContainer.appendChild(eventDemoDisplay);
});
formContainer.appendChild(demoEvent);

const demoForm = document.createElement("input");
demoForm.type = "text";
demoForm.name = "demoInput";
const formDemoDisplay = document.createElement("p");
formDemoDisplay.textContent = `Input está em formulário? ${!!demoForm.form}`;
formContainer.appendChild(demoForm);
formContainer.appendChild(formDemoDisplay);

const demoReset = document.createElement("input");
demoReset.type = "text";
demoReset.value = "Será resetado";
const resetDemoButton = document.createElement("button");
resetDemoButton.type = "button";
resetDemoButton.textContent = "Resetar Formulário";
resetDemoButton.onclick = () => formContainer.reset();
formContainer.appendChild(demoReset);
formContainer.appendChild(resetDemoButton);

const demoSubmit = document.createElement("input");
demoSubmit.type = "text";
demoSubmit.name = "submitData";
const submitDemoButton = document.createElement("button");
submitDemoButton.type = "button";
submitDemoButton.textContent = "Submeter Formulário";
submitDemoButton.onclick = () => formContainer.submit();
formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitDemoDisplay =
    document.getElementById("submitDemoDisplay") || document.createElement("p");
  submitDemoDisplay.id = "submitDemoDisplay";
  submitDemoDisplay.textContent = "Formulário submetido!";
  formContainer.appendChild(submitDemoDisplay);
});
formContainer.appendChild(demoSubmit);
formContainer.appendChild(submitDemoButton);

// Adiciona uma folha de estilo para melhorar a visualização
const styleSupport = document.createElement("style");
styleSupport.textContent = `
  input, button, p, label { display: block; margin: 5px 0; }
  input[type="text"], input[type="email"], input[type="password"] { padding: 5px; width: 200px; }
  button { padding: 5px 10px; cursor: pointer; }
  form { background-color: lightgray; padding: 10px; }
`;
document.head.appendChild(styleSupport);

// Adiciona o formulário ao body
document.body.appendChild(formContainer);
