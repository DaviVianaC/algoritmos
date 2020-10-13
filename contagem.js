var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question('Informe um numero para a contagem: '));
for(var i=1; i<=n; i++){
    console.log(i);
}




