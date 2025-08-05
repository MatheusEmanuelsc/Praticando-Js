/* 
Enunciado:
Vamos criar dois arrays: um com 10 valores e outro com 3 valores.
Pretendemos que a aplicação verifique se o segundo array está contido no primeiro,
independente da ordem dos valores.
------------------------------------------------------
Nota: execute o script no terminal com o comando 'node ./script.js'
*/

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [13, 15, 17];

// função para verificar se o array2 está contido no array1
function arrayContidoEmOutro(arr1, arr2){
    return arr2.every(valor => arr1.includes(valor));
}

if(arrayContidoEmOutro(array1, array2)){
    console.log('Array 2 existe no array 1');
} else {
    console.log('Array 2 não existe totalmente no array 1');
}