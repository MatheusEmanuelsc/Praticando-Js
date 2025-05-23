// ===== Estrutura switch =====

let fruta = "maçã";

switch (fruta) {
  case "banana":
    console.log("É uma banana.");
    break; // importante usar break para sair do switch após o caso ser executado
  case "maçã":
    console.log("É uma maçã.");
    break;
  case "laranja":
    console.log("É uma laranja.");
    break;
  default:
    // Caso nenhum dos cases acima seja verdadeiro, executa o default
    console.log("Fruta desconhecida.");
    break;
}

// -------------------------------------------

// Exemplo com números:

let diaSemana = 3;

switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
    break;
}
