/* 
Enunciado:
Vamos criar dois arrays de números exatamente iguais (manualmente) e verificar se eles são iguais
através de código.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

let array1 = [1, 2, 4, 3, 5];
let array2 = [1, 2, 3, 4, 5];

// ideia errada de comparação
if(array1 === array2){
    console.log('Iguais');
} else {
    console.log('Diferentes');
}

console.log(`Resultado da comparação: ${compararArrays(array1, array2).toString() === 'true' ? 'são iguais' : 'são diferentes'}`);

function compararArrays(arr1, arr2){
    if(arr1.length !== arr2.length){
       return false; 
    }

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }

    return true;
}