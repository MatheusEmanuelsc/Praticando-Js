/* 
Enunciado:
Converter uma temperatura em graus Celsius para Fahrenheit e vice-versa.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'

NOTA: A relação entre Celsius e Fahrenheit é:
Fahrenheit = (Celsius * 9/5) + 32
Celsius = (Fahrenheit - 32) * 5/9

A escala de temperatura Celsius é usada na maioria dos países, enquanto a escala Fahrenheit é mais comum nos Estados Unidos.
A escala Celsius é baseada no ponto de congelamento da água (0°C) e no ponto de ebulição da água (100°C) ao nível do mar.
*/

const temperatura = process.argv[2];
const escala = process.argv[3];
const exemplo = "Exemplo de uso: node ./script.js 25 c (para Celsius) ou node ./script.js 77 f (para Fahrenheit)";

// valida se a temperatura é correta
if(isNaN(temperatura)){
    console.error("Introduza uma temperatura válida.");
    console.error(exemplo);
    process.exit(1);
}

// validar se foi indicada uma escala válida
if(escala !== 'c' && escala !== 'f'){
    console.error("Introduza uma escala válida.");
    console.error(exemplo);
    process.exit(1);
}

// tratar a conversão
const temp = Number(temperatura);
if(escala === 'c'){
    const fahrenheit = (temp * 9/5) + 32;
    console.log(`${temp} graus Celsius é igual a ${fahrenheit.toFixed(2)} graus Fahrenheit.`);
} else if (escala === 'f'){
    const celsius = (temp - 32) * 5/9;
    console.log(`${temp} graus Fahrenheit é igual a ${celsius.toFixed(2)} graus Celsius.`);
}