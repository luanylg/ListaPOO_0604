const entrada = require("readline-sync");

let numeros: number[] = [];
let maior: number = 0;
let menor: number = 0;
for(let i = 0; i < 15; i++){
    numeros[i] = parseFloat(entrada.question(""));

    if(numeros[i] > maior){
        maior = numeros[i];
    }

    if(numeros[i] < menor){
        menor = numeros[i];
    }
}
console.log("O NÚMERO MAIOR É: " + maior);
console.log("O NÚMERO MENOR É: " + menor);