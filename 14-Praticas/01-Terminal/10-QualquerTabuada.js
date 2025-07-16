/* 
Enunciado:
O script deverá receber um argumento de valor numérico.
O output deverá ser a tabuada desse número, de 1 a 10.
O formato do output deverá ser o seguinte:
1 x [numero] = [resultado]
2 x [numero] = [resultado]
3 x [numero] = [resultado]
...
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

// buscar o argumento do terminal
if (process.argv.length < 3) {
  console.log("Por favor insira um número como argumento");
  process.exit(1);
}

let valor = process.argv.slice(2);

for (let i = 1; i <= 10; i++) {
  console.log(`${valor} x ${i} = ${valor * i}`);
}
