// ÍNDICE
// 1. Introdução ao Objeto process no Node.js
// 2. Propriedades e Métodos do Objeto process
//    2.1. process.argv
//    2.2. process.env
//    2.3. process.cwd()
//    2.4. process.exit()
//    2.5. process.pid
//    2.6. process.version
//    2.7. process.on() (Eventos)
//    2.8. process.stdout, process.stderr, process.stdin
// 3. Tipos de Eventos do process
//    3.1. exit
//    3.2. uncaughtException
//    3.3. SIGINT
//    3.4. SIGTERM
//    3.5. beforeExit
// 4. Exemplo Prático com Todos os Conceitos
// 5. Configuração para Executar no Node.js

// 1. INTRODUÇÃO AO OBJETO PROCESS NO NODE.JS
// O objeto process é global no Node.js, fornecendo informações e controle sobre o processo atual.
// Permite acessar argumentos da linha de comando, variáveis de ambiente, diretório de trabalho, e gerenciar eventos do processo.
// Exclusivo do Node.js, não disponível em navegadores (neste exemplo, simulamos para demonstração no navegador).
// Útil para scripts CLI, configuração de ambiente e tratamento de erros.

// 2. PROPRIEDADES E MÉTODOS DO OBJETO PROCESS

// 2.1. process.argv
// - Array com argumentos da linha de comando passados ao executar o script.
// - Índice 0: caminho do Node.js; índice 1: caminho do script; índices 2+: argumentos do usuário.
// - Exemplo: node script.js --user John -> ['node', 'script.js', '--user', 'John']
const argvButton = document.createElement("button");
argvButton.textContent = "Simular process.argv";
argvButton.addEventListener("click", () => {
  // Simulação de process.argv no navegador
  const simulatedArgv = ["node", "script.js", "--user", "John"];
  const display = document.createElement("p");
  display.textContent = `process.argv: ${simulatedArgv.join(", ")}`;
  document.body.appendChild(display);
});
document.body.appendChild(argvButton);

// 2.2. process.env
// - Objeto com variáveis de ambiente do sistema (ex.: PATH, NODE_ENV).
// - Pode ser usado para configurar comportamento do aplicativo ou acessar segredos.
// - Exemplo: process.env.NODE_ENV pode ser 'development' ou 'production'.
const envButton = document.createElement("button");
envButton.textContent = "Simular process.env";
envButton.addEventListener("click", () => {
  // Simulação de process.env no navegador
  const simulatedEnv = { NODE_ENV: "development", USER: "John" };
  const display = document.createElement("p");
  display.textContent = `process.env: NODE_ENV=${simulatedEnv.NODE_ENV}, USER=${simulatedEnv.USER}`;
  document.body.appendChild(display);
});
document.body.appendChild(envButton);

// 2.3. process.cwd()
// - Retorna o diretório de trabalho atual do processo (onde o comando node foi executado).
// - Útil para caminhos relativos em scripts.
// - Exemplo: /home/user/project
const cwdButton = document.createElement("button");
cwdButton.textContent = "Simular process.cwd";
cwdButton.addEventListener("click", () => {
  // Simulação de process.cwd no navegador
  const simulatedCwd = "/home/user/project";
  const display = document.createElement("p");
  display.textContent = `process.cwd: ${simulatedCwd}`;
  document.body.appendChild(display);
});
document.body.appendChild(cwdButton);

// 2.4. process.exit()
// - Termina o processo Node.js com um código de saída (0 para sucesso, !=0 para erro).
// - Usado para finalizar scripts após conclusão ou erro.
// - Não simulado no navegador (pode travar a aba); comentado para referência.
const exitButton = document.createElement("button");
exitButton.textContent = "Simular process.exit";
exitButton.addEventListener("click", () => {
  const display = document.createElement("p");
  display.textContent =
    "process.exit: Simulação de saída com código 0 (sucesso)";
  document.body.appendChild(display);
  // No Node.js: process.exit(0);
});
document.body.appendChild(exitButton);

// 2.5. process.pid
// - Retorna o ID do processo (PID) do Node.js no sistema operacional.
// - Útil para monitoramento ou debugging.
const pidButton = document.createElement("button");
pidButton.textContent = "Simular process.pid";
pidButton.addEventListener("click", () => {
  // Simulação de process.pid no navegador
  const simulatedPid = 12345;
  const display = document.createElement("p");
  display.textContent = `process.pid: ${simulatedPid}`;
  document.body.appendChild(display);
});
document.body.appendChild(pidButton);

// 2.6. process.version
// - Retorna a versão do Node.js em execução (ex.: 'v16.13.0').
// - Útil para verificar compatibilidade.
const versionButton = document.createElement("button");
versionButton.textContent = "Simular process.version";
versionButton.addEventListener("click", () => {
  // Simulação de process.version no navegador
  const simulatedVersion = "v16.13.0";
  const display = document.createElement("p");
  display.textContent = `process.version: ${simulatedVersion}`;
  document.body.appendChild(display);
});
document.body.appendChild(versionButton);

// 2.7. process.on()
// - Registra manipuladores para eventos do processo (ex.: 'exit', 'uncaughtException').
// - Permite responder a eventos como término, erros ou sinais do sistema operacional.
// - Exemplo: process.on('exit', () => console.log('Saindo...')).
const onButton = document.createElement("button");
onButton.textContent = "Simular process.on";
onButton.addEventListener("click", () => {
  // Simulação de evento 'exit' no navegador
  const simulatedEvent = "exit";
  const display = document.createElement("p");
  display.textContent = `process.on: Simulação de evento '${simulatedEvent}' capturado`;
  document.body.appendChild(display);
});
document.body.appendChild(onButton);

// 2.8. process.stdout, process.stderr, process.stdin
// - Objetos de stream para saída padrão (stdout), erro padrão (stderr) e entrada padrão (stdin).
// - stdout/stderr: Usados para escrever no console (ex.: console.log usa stdout).
// - stdin: Lê entrada do usuário (ex.: prompts no terminal).
const streamButton = document.createElement("button");
streamButton.textContent = "Simular process.stdout";
streamButton.addEventListener("click", () => {
  // Simulação de process.stdout no navegador
  const simulatedOutput = "Saída simulada no console";
  const display = document.createElement("p");
  display.textContent = `process.stdout: ${simulatedOutput}`;
  document.body.appendChild(display);
  // No Node.js: process.stdout.write(simulatedOutput + '\n');
});
document.body.appendChild(streamButton);

// 3. TIPOS DE EVENTOS DO PROCESS
// 3.1. exit
// - Disparado quando o processo está prestes a terminar (ex.: após process.exit()).
// - Recebe o código de saída como argumento.
// - Não suporta operações assíncronas (já está finalizando).
const exitEventButton = document.createElement("button");
exitEventButton.textContent = "Simular evento exit";
exitEventButton.addEventListener("click", () => {
  const display = document.createElement("p");
  display.textContent = "Evento exit: Simulação de término com código 0";
  document.body.appendChild(display);
  // No Node.js: process.on('exit', (code) => console.log(`Saindo com código ${code}`));
});
document.body.appendChild(exitEventButton);

// 3.2. uncaughtException
// - Disparado quando uma exceção não tratada ocorre.
// - Útil para logging antes de o processo travar.
const uncaughtExceptionButton = document.createElement("button");
uncaughtExceptionButton.textContent = "Simular uncaughtException";
uncaughtExceptionButton.addEventListener("click", () => {
  try {
    throw new Error("Erro não tratado");
  } catch (error) {
    const display = document.createElement("p");
    display.textContent = `Evento uncaughtException: ${error.message}`;
    document.body.appendChild(display);
  }
  // No Node.js: process.on('uncaughtException', (err) => console.error('Erro:', err.message));
});
document.body.appendChild(uncaughtExceptionButton);

// 3.3. SIGINT
// - Disparado quando o processo recebe um sinal de interrupção (ex.: Ctrl+C no terminal).
// - Permite limpeza antes de encerrar.
const sigintButton = document.createElement("button");
sigintButton.textContent = "Simular SIGINT";
sigintButton.addEventListener("click", () => {
  const display = document.createElement("p");
  display.textContent = "Evento SIGINT: Simulação de interrupção (Ctrl+C)";
  document.body.appendChild(display);
  // No Node.js: process.on('SIGINT', () => console.log('Interrupção recebida'));
});
document.body.appendChild(sigintButton);

// 3.4. SIGTERM
// - Disparado quando o sistema solicita a terminação do processo (ex.: kill no Linux).
// - Similar a SIGINT, mas usado por sistemas operacionais.
const sigtermButton = document.createElement("button");
sigtermButton.textContent = "Simular SIGTERM";
sigtermButton.addEventListener("click", () => {
  const display = document.createElement("p");
  display.textContent = "Evento SIGTERM: Simulação de terminação do sistema";
  document.body.appendChild(display);
  // No Node.js: process.on('SIGTERM', () => console.log('Terminação solicitada'));
});
document.body.appendChild(sigtermButton);

// 3.5. beforeExit
// - Disparado antes de o processo encerrar, quando o event loop está vazio, mas ainda permite operações assíncronas.
// - Não disparado se process.exit() for chamado explicitamente.
const beforeExitButton = document.createElement("button");
beforeExitButton.textContent = "Simular beforeExit";
beforeExitButton.addEventListener("click", () => {
  const display = document.createElement("p");
  display.textContent = "Evento beforeExit: Simulação antes de sair";
  document.body.appendChild(display);
  // No Node.js: process.on('beforeExit', (code) => console.log(`Antes de sair com código ${code}`));
});
document.body.appendChild(beforeExitButton);

// 4. EXEMPLO PRÁTICO COM TODOS OS CONCEITOS
// Cria um contêiner para demonstrar todos os conceitos
const container = document.createElement("div");
container.style.border = "1px solid black";
container.style.padding = "10px";
container.style.margin = "10px";

// Simulação de process para o navegador
const simulatedProcess = {
  argv: ["node", "script.js", "--user", "John"],
  env: { NODE_ENV: "development", USER: "John" },
  cwd: () => "/home/user/project",
  pid: 12345,
  version: "v16.13.0",
  stdout: { write: (msg) => `Saída: ${msg}` },
};

// process.argv
const demoArgvButton = document.createElement("button");
demoArgvButton.textContent = "process.argv";
demoArgvButton.addEventListener("click", () => {
  const display =
    document.getElementById("argvDisplay") || document.createElement("p");
  display.id = "argvDisplay";
  display.textContent = `process.argv: ${simulatedProcess.argv.join(", ")}`;
  container.appendChild(display);
});
container.appendChild(demoArgvButton);

// process.env
const demoEnvButton = document.createElement("button");
demoEnvButton.textContent = "process.env";
demoEnvButton.addEventListener("click", () => {
  const display =
    document.getElementById("envDisplay") || document.createElement("p");
  display.id = "envDisplay";
  display.textContent = `process.env: NODE_ENV=${simulatedProcess.env.NODE_ENV}, USER=${simulatedProcess.env.USER}`;
  container.appendChild(display);
});
container.appendChild(demoEnvButton);

// process.cwd
const demoCwdButton = document.createElement("button");
demoCwdButton.textContent = "process.cwd";
demoCwdButton.addEventListener("click", () => {
  const display =
    document.getElementById("cwdDisplay") || document.createElement("p");
  display.id = "cwdDisplay";
  display.textContent = `process.cwd: ${simulatedProcess.cwd()}`;
  container.appendChild(display);
});
container.appendChild(demoCwdButton);

// process.exit
const demoExitButton = document.createElement("button");
demoExitButton.textContent = "process.exit";
demoExitButton.addEventListener("click", () => {
  const display =
    document.getElementById("exitDisplay") || document.createElement("p");
  display.id = "exitDisplay";
  display.textContent = "process.exit: Simulação de saída com código 0";
  container.appendChild(display);
});
container.appendChild(demoExitButton);

// process.pid
const demoPidButton = document.createElement("button");
demoPidButton.textContent = "process.pid";
demoPidButton.addEventListener("click", () => {
  const display =
    document.getElementById("pidDisplay") || document.createElement("p");
  display.id = "pidDisplay";
  display.textContent = `process.pid: ${simulatedProcess.pid}`;
  container.appendChild(display);
});
container.appendChild(demoPidButton);

// process.version
const demoVersionButton = document.createElement("button");
demoVersionButton.textContent = "process.version";
demoVersionButton.addEventListener("click", () => {
  const display =
    document.getElementById("versionDisplay") || document.createElement("p");
  display.id = "versionDisplay";
  display.textContent = `process.version: ${simulatedProcess.version}`;
  container.appendChild(display);
});
container.appendChild(demoVersionButton);

// process.on (exit)
const demoOnExitButton = document.createElement("button");
demoOnExitButton.textContent = "process.on exit";
demoOnExitButton.addEventListener("click", () => {
  const display =
    document.getElementById("onExitDisplay") || document.createElement("p");
  display.id = "onExitDisplay";
  display.textContent = "process.on: Simulação de evento exit";
  container.appendChild(display);
});
container.appendChild(demoOnExitButton);

// process.on (uncaughtException)
const demoUncaughtButton = document.createElement("button");
demoUncaughtButton.textContent = "process.on uncaughtException";
demoUncaughtButton.addEventListener("click", () => {
  try {
    throw new Error("Erro simulado");
  } catch (error) {
    const display =
      document.getElementById("uncaughtDisplay") || document.createElement("p");
    display.id = "uncaughtDisplay";
    display.textContent = `process.on uncaughtException: ${error.message}`;
    container.appendChild(display);
  }
});
container.appendChild(demoUncaughtButton);

// process.on (SIGINT)
const demoSigintButton = document.createElement("button");
demoSigintButton.textContent = "process.on SIGINT";
demoSigintButton.addEventListener("click", () => {
  const display =
    document.getElementById("sigintDisplay") || document.createElement("p");
  display.id = "sigintDisplay";
  display.textContent = "process.on SIGINT: Simulação de interrupção";
  container.appendChild(display);
});
container.appendChild(demoSigintButton);

// process.on (SIGTERM)
const demoSigtermButton = document.createElement("button");
demoSigtermButton.textContent = "process.on SIGTERM";
demoSigtermButton.addEventListener("click", () => {
  const display =
    document.getElementById("sigtermDisplay") || document.createElement("p");
  display.id = "sigtermDisplay";
  display.textContent = "process.on SIGTERM: Simulação de terminação";
  container.appendChild(display);
});
container.appendChild(demoSigtermButton);

// process.on (beforeExit)
const demoBeforeExitButton = document.createElement("button");
demoBeforeExitButton.textContent = "process.on beforeExit";
demoBeforeExitButton.addEventListener("click", () => {
  const display =
    document.getElementById("beforeExitDisplay") || document.createElement("p");
  display.id = "beforeExitDisplay";
  display.textContent = "process.on beforeExit: Simulação antes de sair";
  container.appendChild(display);
});
container.appendChild(demoBeforeExitButton);

// process.stdout
const demoStdoutButton = document.createElement("button");
demoStdoutButton.textContent = "process.stdout";
demoStdoutButton.addEventListener("click", () => {
  const display =
    document.getElementById("stdoutDisplay") || document.createElement("p");
  display.id = "stdoutDisplay";
  display.textContent = simulatedProcess.stdout.write("Saída simulada");
  container.appendChild(display);
});
container.appendChild(demoStdoutButton);

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

// 5. CONFIGURAÇÃO PARA EXECUTAR NO NODE.JS
// Para executar este código em um ambiente Node.js:
// 1. Salve como script.js.
// 2. Execute com: node script.js --user John
// 3. Exemplo de código real para Node.js:
/*
// script.js
console.log('process.argv:', process.argv);
console.log('process.env:', process.env.NODE_ENV);
console.log('process.cwd:', process.cwd());
console.log('process.pid:', process.pid);
console.log('process.version:', process.version);
process.stdout.write('Saída padrão\n');
process.on('exit', (code) => console.log(`Saindo com código ${code}`));
process.on('uncaughtException', (err) => console.error('Erro:', err.message));
process.on('SIGINT', () => console.log('Interrupção recebida'));
process.on('SIGTERM', () => console.log('Terminação solicitada'));
process.on('beforeExit', (code) => console.log(`Antes de sair com código ${code}`));
// Teste com erro: throw new Error('Erro de teste');
*/
// Observação: process.stdin requer entrada de terminal, não simulado aqui.
