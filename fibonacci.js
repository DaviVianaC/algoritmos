var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite a quantidade de termos da sequencia fibonacci (n>1):", function(answer) {
    var n = parseInt(answer);
    if(n<=1){
        console.log("entrada invalida");
        leitor.close();
        return;
    }
    var a = 0;
    var b = 1;
    var c;
    console.log(0)
    console.log(1);
    for(let i=2; i<n; i++){
        var c = a+b;
        var a = b;
        var b = c;

        console.log(c);
    }
    leitor.close();
});
