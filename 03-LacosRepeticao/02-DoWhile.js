// ===== Estrutura do...while em JavaScript =====

// A estrutura do...while é parecida com o while,
// mas garante que o bloco será executado PELO MENOS UMA VEZ,
// mesmo que a condição seja falsa logo no início.

let numero = 1;

// O bloco dentro do "do" será executado primeiro,
// depois a condição será testada.
do {
  // Exibe o número atual
  console.log("Número atual:", numero);

  // Incrementa o número
  numero++;
} while (
  // A condição é testada APÓS a primeira execução do bloco
  numero <= 5
);

// -----------------------------------------------------

// Exemplo onde a condição começa falsa, mas o bloco ainda roda uma vez:
let valor = 10;

do {
  // Mesmo que a condição abaixo seja falsa (10 < 5), esse bloco será executado uma vez
  console.log("Executa pelo menos uma vez. Valor:", valor);
  valor++;
} while (valor < 5);

// -----------------------------------------------------

// RESUMO:
// - while: testa a condição ANTES de executar o bloco
// - do...while: executa o bloco PRIMEIRO e só depois testa a condição
