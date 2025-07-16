/* 
Enunciado:
Vamos gerar uma password aleatória no terminal.
O script vai receber um argumento que define o tamanho da password.
O tamanho da password vai ser um número entre 8 e 64 caracteres.
A password vai conter caracteres alfanuméricos, em maiúsculas e minúsculas.


*/

function generatePassword(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQERSUVWXYZabcdefghijklmnopqersuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

const length = parseInt(process.argv[2], 10);
if (isNaN(length) || length < 8 || length > 64) {
  console.error("Por favor indique um comprimento entre 8 e 64 caracteres");
  process.exit(1);
}

console.log(generatePassword(length));
