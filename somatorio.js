var readline = require('readline');

var total = 0;

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const somatorio = () =>{
    leitor.question("Digite um numero para ser adicionado ao somatorio ou digite 'q' para finalizar o somatorio: ", function(answer) {
        if(answer == 'q'){
            console.log("total: " + total);
            leitor.close();     
        }else{
            total += parseInt(answer);
            somatorio();
        }
    });
}

somatorio();