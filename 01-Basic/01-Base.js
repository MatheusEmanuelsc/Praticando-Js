// Exibe uma mensagem no console do navegador (útil para depuração e testes)
console.log("Olá! Isso é um console.log");

// O método prompt exibe uma caixa de diálogo com um campo de entrada de texto
// Ele retorna o que o usuário digitou como uma string
let nome = prompt("Qual é o seu nome?");

// alert exibe uma mensagem em uma janela pop-up para o usuário
// Usamos para dar uma resposta visual rápida, mas não deve ser usado para mensagens complexas
alert("Olá, " + nome + "! Bem-vindo ao nosso site.");

// Também podemos exibir o valor da variável no console
console.log("Nome digitado pelo usuário: " + nome);

// Podemos usar console.log com vírgula para mostrar múltiplos valores separadamente
console.log("Exemplo com vírgula:", nome, typeof nome);

// Podemos usar template strings (crase `) para interpolar variáveis de forma mais elegante
console.log(`Olá, ${nome}! Esse é um exemplo de template string.`);

// Fim do exemplo introdutório com console.log, prompt e alert
