/*Desenvolver um script que permita somar um array de números consecutivos, 
de forma que se some o primeiro número com o segundo e o imprima através do console. 
Depois, temos que pegar este resultado e somar o terceiro número, 
e assim por diante, até termos terminado de percorrer todo o array.
*/

var array = [1, 2, 3, 4]

var soma = 0
var media = 0

for (var i = 0; i < array.length; i++){
        soma += array[i];
        media = soma/4
}

for (var i = 0; i < array.length; i++){
        console.log("Parabéns pela conclusão do " + (i+1) + " bimestre. Sua nota foi: " + array[i])
}

console.log(media)

if( media >= 7){
        console.log("Aprovado")
} else {
        console.log("Reprovado")
}

