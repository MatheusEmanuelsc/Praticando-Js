// ========================================
// TUTORIAL COMPLETO: TIPO DATE EM JAVASCRIPT
// ========================================

// 1. CRIANDO OBJETOS DATE
// ========================================

// Criar uma data atual (agora)
let agora = new Date();
console.log("Data atual:", agora);

// Criar uma data específica usando string
let dataString = new Date("2024-03-15");
console.log("Data por string:", dataString);

// Criar uma data específica usando números (ano, mês, dia)
// ATENÇÃO: O mês começa em 0 (janeiro = 0, dezembro = 11)
let dataNumeros = new Date(2024, 2, 15); // 15 de março de 2024
console.log("Data por números:", dataNumeros);

// Criar uma data completa (ano, mês, dia, hora, minuto, segundo, milissegundo)
let dataCompleta = new Date(2024, 2, 15, 14, 30, 45, 500);
console.log("Data completa:", dataCompleta);

// Criar uma data usando timestamp (milissegundos desde 1º janeiro 1970)
let timestamp = 1710504645000;
let dataTimestamp = new Date(timestamp);
console.log("Data por timestamp:", dataTimestamp);

// ========================================
// 2. MÉTODOS PARA OBTER INFORMAÇÕES DA DATA
// ========================================

let minhaData = new Date(2024, 2, 15, 14, 30, 45);

// Obter componentes da data
console.log("Ano:", minhaData.getFullYear()); // 2024
console.log("Mês:", minhaData.getMonth()); // 2 (março, pois começa em 0)
console.log("Dia do mês:", minhaData.getDate()); // 15
console.log("Dia da semana:", minhaData.getDay()); // 0-6 (0=domingo, 6=sábado)

// Obter componentes do tempo
console.log("Horas:", minhaData.getHours()); // 14
console.log("Minutos:", minhaData.getMinutes()); // 30
console.log("Segundos:", minhaData.getSeconds()); // 45
console.log("Milissegundos:", minhaData.getMilliseconds()); // 0

// Obter timestamp
console.log("Timestamp:", minhaData.getTime()); // Milissegundos desde 1970

// ========================================
// 3. MÉTODOS PARA MODIFICAR DATAS
// ========================================

let dataModificavel = new Date(2024, 2, 15);

// Modificar componentes da data
dataModificavel.setFullYear(2025); // Alterar ano
dataModificavel.setMonth(5); // Alterar mês (junho)
dataModificavel.setDate(20); // Alterar dia
console.log("Data modificada:", dataModificavel);

// Modificar componentes do tempo
dataModificavel.setHours(16); // Alterar hora
dataModificavel.setMinutes(45); // Alterar minutos
dataModificavel.setSeconds(30); // Alterar segundos
console.log("Tempo modificado:", dataModificavel);

// ========================================
// 4. FORMATAÇÃO DE DATAS
// ========================================

let dataFormatacao = new Date(2024, 2, 15, 14, 30, 45);

// Métodos básicos de formatação
console.log("toString():", dataFormatacao.toString());
console.log("toDateString():", dataFormatacao.toDateString());
console.log("toTimeString():", dataFormatacao.toTimeString());
console.log("toISOString():", dataFormatacao.toISOString());

// Formatação localizada
console.log("toLocaleDateString():", dataFormatacao.toLocaleDateString());
console.log("toLocaleTimeString():", dataFormatacao.toLocaleTimeString());
console.log("toLocaleString():", dataFormatacao.toLocaleString());

// Formatação com opções específicas
let opcoes = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};
console.log(
  "Formatação personalizada:",
  dataFormatacao.toLocaleDateString("pt-BR", opcoes)
);

// ========================================
// 5. OPERAÇÕES COM DATAS
// ========================================

let data1 = new Date(2024, 2, 15);
let data2 = new Date(2024, 2, 20);

// Comparar datas
console.log("data1 < data2:", data1 < data2); // true
console.log("data1 > data2:", data1 > data2); // false
console.log("data1 === data2:", data1.getTime() === data2.getTime()); // false

// Calcular diferença entre datas (em milissegundos)
let diferenca = data2.getTime() - data1.getTime();
console.log("Diferença em milissegundos:", diferenca);

// Converter diferença para dias
let diferencaDias = diferenca / (1000 * 60 * 60 * 24);
console.log("Diferença em dias:", diferencaDias);

// ========================================
// 6. ADICIONANDO E SUBTRAINDO TEMPO
// ========================================

let dataBase = new Date(2024, 2, 15);

// Adicionar dias
let adicionarDias = new Date(dataBase);
adicionarDias.setDate(dataBase.getDate() + 7); // Adiciona 7 dias
console.log("Adicionando 7 dias:", adicionarDias);

// Adicionar meses
let adicionarMeses = new Date(dataBase);
adicionarMeses.setMonth(dataBase.getMonth() + 2); // Adiciona 2 meses
console.log("Adicionando 2 meses:", adicionarMeses);

// Adicionar anos
let adicionarAnos = new Date(dataBase);
adicionarAnos.setFullYear(dataBase.getFullYear() + 1); // Adiciona 1 ano
console.log("Adicionando 1 ano:", adicionarAnos);

// Subtrair tempo usando timestamp
let subtrairTempo = new Date(dataBase.getTime() - 24 * 60 * 60 * 1000); // Subtrai 1 dia
console.log("Subtraindo 1 dia:", subtrairTempo);

// ========================================
// 7. VALIDAÇÃO E TRATAMENTO DE ERROS
// ========================================

// Verificar se uma data é válida
function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}

let dataValida = new Date(2024, 2, 15);
let dataInvalida = new Date("data inválida");

console.log("Data válida:", isValidDate(dataValida)); // true
console.log("Data inválida:", isValidDate(dataInvalida)); // false

// Criar uma data segura
function criarDataSegura(ano, mes, dia) {
  let data = new Date(ano, mes - 1, dia); // mes - 1 porque Date usa 0-11
  if (isValidDate(data)) {
    return data;
  } else {
    console.error("Data inválida fornecida");
    return null;
  }
}

console.log("Data segura:", criarDataSegura(2024, 3, 15));

// ========================================
// 8. FUNÇÕES ÚTEIS PARA TRABALHAR COM DATAS
// ========================================

// Função para formatar data no padrão brasileiro
function formatarDataBR(data) {
  if (!isValidDate(data)) return "Data inválida";

  let dia = data.getDate().toString().padStart(2, "0");
  let mes = (data.getMonth() + 1).toString().padStart(2, "0");
  let ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

// Função para calcular idade
function calcularIdade(dataNascimento) {
  if (!isValidDate(dataNascimento)) return null;

  let hoje = new Date();
  let idade = hoje.getFullYear() - dataNascimento.getFullYear();
  let mesAtual = hoje.getMonth();
  let mesNascimento = dataNascimento.getMonth();

  // Ajustar se ainda não fez aniversário este ano
  if (
    mesAtual < mesNascimento ||
    (mesAtual === mesNascimento && hoje.getDate() < dataNascimento.getDate())
  ) {
    idade--;
  }

  return idade;
}

// Função para verificar se é fim de semana
function isFimDeSemana(data) {
  if (!isValidDate(data)) return false;
  let diaSemana = data.getDay();
  return diaSemana === 0 || diaSemana === 6; // 0=domingo, 6=sábado
}

// Função para obter o primeiro dia do mês
function primeiroDiaDoMes(data) {
  if (!isValidDate(data)) return null;
  return new Date(data.getFullYear(), data.getMonth(), 1);
}

// Função para obter o último dia do mês
function ultimoDiaDoMes(data) {
  if (!isValidDate(data)) return null;
  return new Date(data.getFullYear(), data.getMonth() + 1, 0);
}

// ========================================
// 9. EXEMPLOS PRÁTICOS
// ========================================

// Exemplo 1: Verificar se uma pessoa é maior de idade
let dataNascimento = new Date(2000, 5, 15); // 15 de junho de 2000
let idade = calcularIdade(dataNascimento);
console.log(`Idade: ${idade} anos`);
console.log(`É maior de idade: ${idade >= 18}`);

// Exemplo 2: Formatação personalizada
let evento = new Date(2024, 11, 25, 19, 30);
console.log(`Evento formatado: ${formatarDataBR(evento)}`);

// Exemplo 3: Verificar fim de semana
let hoje = new Date();
console.log(`Hoje é fim de semana: ${isFimDeSemana(hoje)}`);

// Exemplo 4: Trabalhar com período do mês
let dataQualquer = new Date(2024, 2, 15);
console.log(
  `Primeiro dia do mês: ${formatarDataBR(primeiroDiaDoMes(dataQualquer))}`
);
console.log(
  `Último dia do mês: ${formatarDataBR(ultimoDiaDoMes(dataQualquer))}`
);

// ========================================
// 10. DICAS IMPORTANTES E PEGADINHAS
// ========================================

// DICA 1: Meses começam em 0
console.log("Janeiro é mês:", new Date(2024, 0, 1).getMonth()); // 0
console.log("Dezembro é mês:", new Date(2024, 11, 1).getMonth()); // 11

// DICA 2: Cuidado com fusos horários
let dataUTC = new Date("2024-03-15T10:30:00Z"); // UTC
let dataLocal = new Date("2024-03-15T10:30:00"); // Local
console.log("Data UTC:", dataUTC);
console.log("Data Local:", dataLocal);

// DICA 3: Date é mutável
let dataOriginal = new Date(2024, 2, 15);
let dataCopia = dataOriginal; // CUIDADO: Referência, não cópia!
dataCopia.setDate(20);
console.log("Data original foi alterada:", dataOriginal); // Também foi alterada!

// Forma correta de copiar uma data
let dataCopiada = new Date(dataOriginal.getTime());
console.log("Data copiada corretamente:", dataCopiada);

// DICA 4: Parsing de strings pode ser inconsistente
console.log("Parsing consistente:", new Date(2024, 2, 15)); // Recomendado
console.log("Parsing de string:", new Date("2024-03-15")); // Pode variar por navegador

// ========================================
// RESUMO DOS PRINCIPAIS MÉTODOS
// ========================================

/*
CRIAÇÃO:
- new Date()                    // Data atual
- new Date(ano, mes, dia)       // Data específica
- new Date(timestamp)           // Por timestamp
- new Date(string)              // Por string

OBTER INFORMAÇÕES:
- getFullYear()                 // Ano
- getMonth()                    // Mês (0-11)
- getDate()                     // Dia do mês
- getDay()                      // Dia da semana (0-6)
- getHours(), getMinutes(), getSeconds() // Tempo
- getTime()                     // Timestamp

MODIFICAR:
- setFullYear(), setMonth(), setDate() // Alterar data
- setHours(), setMinutes(), setSeconds() // Alterar tempo

FORMATAÇÃO:
- toString(), toDateString(), toTimeString()
- toLocaleDateString(), toLocaleTimeString()
- toISOString()

OPERAÇÕES:
- Comparação: date1 < date2
- Diferença: date2.getTime() - date1.getTime()
- Validação: !isNaN(date.getTime())
*/
