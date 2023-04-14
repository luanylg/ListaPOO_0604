const entrada5 = require("readline-sync");

let vetor: number[] = [];
let a: number[] = [];
let i: number = 0

  for(i; i <20; i++){
     vetor[i]= parseFloat(entrada5.question("DIGITE UM NUMERO: "));
        if(vetor[i] % 4 == 0){
            a.push(vetor[i])

        }
    }

         console.log(a)