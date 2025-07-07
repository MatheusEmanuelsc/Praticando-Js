// ÍNDICE
// 1. Introdução a JSON e Fetch API
// 2. Conceitos e Métodos
//    2.1. JSON.parse
//    2.2. JSON.stringify
//    2.3. fetch (GET)
//    2.4. fetch (POST)
//    2.5. Tratamento de Erros com fetch
//    2.6. async/await com fetch
// 3. Exemplo Prático com Todos os Conceitos

// 1. INTRODUÇÃO A JSON E FETCH API
// JSON (JavaScript Object Notation) é um formato leve para troca de dados, usado para representar objetos e arrays.
// JSON.parse e JSON.stringify convertem entre strings JSON e objetos JavaScript.
// Fetch API é uma interface moderna para realizar requisições HTTP (GET, POST, etc.), retornando Promises.
// Combina-se com async/await para um código assíncrono mais legível, ideal para interagir com APIs REST.

// 2. CONCEITOS E MÉTODOS

// 2.1. JSON.parse
// - Converte uma string JSON em um objeto JavaScript.
// - Lança SyntaxError se o JSON for inválido.
// - Útil para processar respostas de APIs ou dados armazenados.
const jsonParseExample = '{"name": "John", "age": 30}';
const parsebumButton = document.createElement("button");
jsonParseButton.textContent = "Testar JSON.parse";
jsonParseButton.addEventListener("click", () => {
  try {
    const obj = JSON.parse(jsonParseExample);
    const display = document.createElement("p");
    display.textContent = `JSON.parse: Nome=${obj.name}, Idade=${obj.age}`;
    document.body.appendChild(display);
  } catch (error) {
    const display = document.createElement("p");
    display.textContent = `Erro JSON.parse: ${error.message}`;
    document.body.appendChild(display);
  }
});
document.body.appendChild(jsonParseButton);

// 2.2. JSON.stringify
// - Converte um objeto JavaScript em uma string JSON.
// - Pode aceitar parâmetros opcionais: replacer (função para filtrar/transformar valores) e space (para formatação).
// - Útil para enviar dados em requisições ou armazenar objetos.
const jsonStringifyExample = { name: "John", age: 30 };
const jsonStringifyButton = document.createElement("button");
jsonStringifyButton.textContent = "Testar JSON.stringify";
jsonStringifyButton.addEventListener("click", () => {
  const jsonString = JSON.stringify(jsonStringifyExample, null, 2); // Formatação com 2 espaços
  const display = document.createElement("p");
  display.textContent = `JSON.stringify: ${jsonString}`;
  document.body.appendChild(display);
});
document.body.appendChild(jsonStringifyButton);

// 2.3. fetch (GET)
// - Realiza uma requisição HTTP GET para obter dados de um servidor.
// - Retorna uma Promise que resolve com um objeto Response.
// - Propriedades do Response: ok, status, json() (para parsear corpo como JSON).
const fetchGetButton = document.createElement("button");
fetchGetButton.textContent = "Testar fetch GET";
fetchGetButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP erro: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const display = document.createElement("p");
      display.textContent = `fetch GET: Nome=${data.name}, Email=${data.email}`;
      document.body.appendChild(display);
    })
    .catch((error) => {
      const display = document.createElement("p");
      display.textContent = `fetch GET erro: ${error.message}`;
      document.body.appendChild(display);
    });
});
document.body.appendChild(fetchGetButton);

// 2.4. fetch (POST)
// - Realiza uma requisição HTTP POST para enviar dados ao servidor.
// - Configura o método, cabeçalhos (ex.: Content-Type) e corpo (body) da requisição.
// - O corpo geralmente é uma string JSON (usando JSON.stringify).
const fetchPostButton = document.createElement("button");
fetchPostButton.textContent = "Testar fetch POST";
fetchPostButton.addEventListener("click", () => {
  const postData = { title: "Novo Post", body: "Conteúdo", userId: 1 };
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP erro: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const display = document.createElement("p");
      display.textContent = `fetch POST: ID=${data.id}, Título=${data.title}`;
      document.body.appendChild(display);
    })
    .catch((error) => {
      const display = document.createElement("p");
      display.textContent = `fetch POST erro: ${error.message}`;
      document.body.appendChild(display);
    });
});
document.body.appendChild(fetchPostButton);

// 2.5. Tratamento de Erros com fetch
// - fetch rejeita a Promise apenas em erros de rede, não em erros HTTP (ex.: 404, 500).
// - Verifique response.ok ou response.status para erros HTTP.
// - Use try/catch com async/await ou .catch com Promises para capturar erros.
const fetchErrorButton = document.createElement("button");
fetchErrorButton.textContent = "Testar erro fetch";
fetchErrorButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/invalid-url")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP erro: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const display = document.createElement("p");
      display.textContent = `fetch: Dados=${JSON.stringify(data)}`;
      document.body.appendChild(display);
    })
    .catch((error) => {
      const display = document.createElement("p");
      display.textContent = `fetch erro: ${error.message}`;
      document.body.appendChild(display);
    });
});
document.body.appendChild(fetchErrorButton);

// 2.6. async/await com fetch
// - Simplifica a manipulação de requisições fetch usando async/await.
// - Requer função async e uso de try/catch para erros.
// - Torna o código mais legível, semelhante a operações síncronas.
const fetchAsyncButton = document.createElement("button");
fetchAsyncButton.textContent = "Testar async/await com fetch";
fetchAsyncButton.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    if (!response.ok) throw new Error(`HTTP erro: ${response.status}`);
    const data = await response.json();
    const display = document.createElement("p");
    display.textContent = `async/await fetch: Nome=${data.name}, Email=${data.email}`;
    document.body.appendChild(display);
  } catch (error) {
    const display = document.createElement("p");
    display.textContent = `async/await fetch erro: ${error.message}`;
    document.body.appendChild(display);
  }
});
document.body.appendChild(fetchAsyncButton);

// 3. EXEMPLO PRÁTICO COM TODOS OS CONCEITOS
// Cria um contêiner para demonstrar todos os conceitos
const container = document.createElement("div");
container.style.border = "1px solid black";
container.style.padding = "10px";
container.style.margin = "10px";

// JSON.parse: Converter string JSON em objeto
const demoJsonParse = '{"id": 1, "title": "Post Exemplo"}';
const demoJsonParseButton = document.createElement("button");
demoJsonParseButton.textContent = "JSON.parse";
demoJsonParseButton.addEventListener("click", () => {
  try {
    const obj = JSON.parse(demoJsonParse);
    const display =
      document.getElementById("jsonParseDisplay") ||
      document.createElement("p");
    display.id = "jsonParseDisplay";
    display.textContent = `JSON.parse: ID=${obj.id}, Título=${obj.title}`;
    container.appendChild(display);
  } catch (error) {
    const display =
      document.getElementById("jsonParseDisplay") ||
      document.createElement("p");
    display.id = "jsonParseDisplay";
    display.textContent = `JSON.parse erro: ${error.message}`;
    container.appendChild(display);
  }
});
container.appendChild(demoJsonParseButton);

// JSON.stringify: Converter objeto em string JSON
const demoJsonStringify = { id: 2, title: "Outro Post" };
const demoJsonStringifyButton = document.createElement("button");
demoJsonStringifyButton.textContent = "JSON.stringify";
demoJsonStringifyButton.addEventListener("click", () => {
  const jsonString = JSON.stringify(demoJsonStringify, null, 2);
  const display =
    document.getElementById("jsonStringifyDisplay") ||
    document.createElement("p");
  display.id = "jsonStringifyDisplay";
  display.textContent = `JSON.stringify: ${jsonString}`;
  container.appendChild(display);
});
container.appendChild(demoJsonStringifyButton);

// fetch GET: Obter dados de API
const demoFetchGetButton = document.createElement("button");
demoFetchGetButton.textContent = "fetch GET";
demoFetchGetButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP erro: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const display =
        document.getElementById("fetchGetDisplay") ||
        document.createElement("p");
      display.id = "fetchGetDisplay";
      display.textContent = `fetch GET: Título=${data.title}`;
      container.appendChild(display);
    })
    .catch((error) => {
      const display =
        document.getElementById("fetchGetDisplay") ||
        document.createElement("p");
      display.id = "fetchGetDisplay";
      display.textContent = `fetch GET erro: ${error.message}`;
      container.appendChild(display);
    });
});
container.appendChild(demoFetchGetButton);

// fetch POST: Enviar dados para API
const demoFetchPostButton = document.createElement("button");
demoFetchPostButton.textContent = "fetch POST";
demoFetchPostButton.addEventListener("click", () => {
  const postData = { title: "Post Demo", body: "Conteúdo demo", userId: 1 };
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP erro: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const display =
        document.getElementById("fetchPostDisplay") ||
        document.createElement("p");
      display.id = "fetchPostDisplay";
      display.textContent = `fetch POST: ID=${data.id}, Título=${data.title}`;
      container.appendChild(display);
    })
    .catch((error) => {
      const display =
        document.getElementById("fetchPostDisplay") ||
        document.createElement("p");
      display.id = "fetchPostDisplay";
      display.textContent = `fetch POST erro: ${error.message}`;
      container.appendChild(display);
    });
});
container.appendChild(demoFetchPostButton);

// fetch com erro: Testar erro HTTP
const demoFetchErrorButton = document.createElement("button");
demoFetchErrorButton.textContent = "fetch com erro";
demoFetchErrorButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/invalid-url")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP erro: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const display =
        document.getElementById("fetchErrorDisplay") ||
        document.createElement("p");
      display.id = "fetchErrorDisplay";
      display.textContent = `fetch: Dados=${JSON.stringify(data)}`;
      container.appendChild(display);
    })
    .catch((error) => {
      const display =
        document.getElementById("fetchErrorDisplay") ||
        document.createElement("p");
      display.id = "fetchErrorDisplay";
      display.textContent = `fetch erro: ${error.message}`;
      container.appendChild(display);
    });
});
container.appendChild(demoFetchErrorButton);

// async/await com fetch: Requisição GET simplificada
const demoFetchAsyncButton = document.createElement("button");
demoFetchAsyncButton.textContent = "async/await com fetch";
demoFetchAsyncButton.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2"
    );
    if (!response.ok) throw new Error(`HTTP erro: ${response.status}`);
    const data = await response.json();
    const display =
      document.getElementById("fetchAsyncDisplay") ||
      document.createElement("p");
    display.id = "fetchAsyncDisplay";
    display.textContent = `async/await fetch: Título=${data.title}`;
    container.appendChild(display);
  } catch (error) {
    const display =
      document.getElementById("fetchAsyncDisplay") ||
      document.createElement("p");
    display.id = "fetchAsyncDisplay";
    display.textContent = `async/await fetch erro: ${error.message}`;
    container.appendChild(display);
  }
});
container.appendChild(demoFetchAsyncButton);

// Adiciona uma folha de estilo para melhorar a visualização
const styleSupport = document.createElement("style");
styleSupport.textContent = `
  div, button, p { margin: 5px; }
  button { padding: 5px 10px; cursor: pointer; }
  div { background-color: lightgray; padding: 10px; }
  p { background-color: white; padding: 5px; }
`;
document.head.appendChild(styleSupport);

// Adiciona o contêiner ao body
document.body.appendChild(container);
