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


function celsiusParaFahrenheit(celsiusTemperatura) {
    return (celsiusTemperatura * 9/5) +32;
}

function fahrenheitParaCelsius(fahrenheitTemperatura) {
    return (fahrenheitTemperatura - 32) * 5/9;
}

const temp = 54;

console.log(`celsius : ${fahrenheitParaCelsius(temp)}`);
console.log(`fahrenheit : ${celsiusParaFahrenheit(temp)}`);
