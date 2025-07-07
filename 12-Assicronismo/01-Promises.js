/*
# 📘 RESUMO: Funções Assíncronas em JavaScript

## Índice:
1. Promises → Objeto que representa a conclusão ou falha futura de uma operação assíncrona.
2. then / catch / finally → Métodos para tratar o resultado de Promises.
3. async → Define que uma função é assíncrona e retorna uma Promise.
4. await → Pausa a execução de uma função async até que a Promise seja resolvida.
5. Exemplo com try/catch → Tratamento de erros com await.
6. Funções assíncronas em cadeia → Combinação de múltiplas async/await ou then encadeados.

---
*/

/* 1️⃣ PROMISES */
// Uma Promise representa um valor que pode estar disponível agora, no futuro ou nunca.
const promessaSimples = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = true;
    if (sucesso) {
      resolve("✅ Sucesso!");
    } else {
      reject("❌ Falha!");
    }
  }, 1000);
});

/* 2️⃣ THEN / CATCH / FINALLY */
// then() lida com sucesso
// catch() lida com erros
// finally() sempre é executado ao final (sucesso ou erro)

promessaSimples
  .then((resultado) => console.log("then:", resultado))
  .catch((erro) => console.log("catch:", erro))
  .finally(() => console.log("finally: terminou"));

/* 3️⃣ ASYNC */
// Uma função marcada com `async` sempre retorna uma Promise
async function retornaMensagem() {
  return "📦 Esta mensagem está dentro de uma Promise.";
}

retornaMensagem().then((msg) => console.log("async:", msg));

/* 4️⃣ AWAIT */
// `await` espera a resolução de uma Promise antes de continuar
async function executarComAwait() {
  const resultado = await promessaSimples; // aguarda a resolução da promiseSimples
  console.log("await:", resultado);
}

executarComAwait(); // saída após ~1s

/* 5️⃣ TRY / CATCH com AWAIT */
// Melhor prática: tratar erros em funções async com try/catch

async function buscarDados() {
  try {
    const dados = await promessaSimples;
    console.log("try/await:", dados);
  } catch (erro) {
    console.error("catch/await:", erro);
  }
}

buscarDados();

/* 6️⃣ FUNÇÕES ASSÍNCRONAS EM CADEIA */
// Você pode encadear várias Promises ou usar await múltiplas vezes

async function processarFluxo() {
  const passo1 = await new Promise((res) =>
    setTimeout(() => res("🔹 Etapa 1"), 500)
  );
  console.log(passo1);

  const passo2 = await new Promise((res) =>
    setTimeout(() => res("🔹 Etapa 2"), 500)
  );
  console.log(passo2);

  const passo3 = await new Promise((res) =>
    setTimeout(() => res("🔹 Etapa 3"), 500)
  );
  console.log(passo3);
}

processarFluxo();

/*
🔚 CONSIDERAÇÕES FINAIS:
- Use `async/await` para escrever código assíncrono de forma mais legível e sequencial.
- Promises ainda são úteis, especialmente em operações paralelas.
- Sempre trate erros com try/catch ao usar await.
- Evite misturar `.then()` com `await` no mesmo contexto, para manter o código consistente.
*/
