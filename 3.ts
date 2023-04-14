const entrada3 = require('readline-sync');

let nn: number = entrada3.question('!');

for (let i = nn - 1; 1 < i ; i--) {
               nn = nn*i;
}
 console.log(nn);