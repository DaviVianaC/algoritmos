var readline = require('readline');

var isPrime = function(n){
	if(n<2) return false;
	for(let i=2; i <= Math.floor(Math.sqrt(n)); i++){
		if(n % i === 0) return false;
	}
	return true;
}

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("informe um numero: ", function(answer) {
    console.log(isPrime(parseInt(answer))? "É primo":"Não é primo");
    leitor.close();
});