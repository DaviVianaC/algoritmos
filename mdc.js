var readlineSync = require('readline-sync');

const primo = function(n){
    var primo;
    var num = 2;
    for(let i = 0; i<n;){
        var naoPrimo = 0;
	    for(let j=2; j <= Math.floor(Math.sqrt(num)); j++){
	    	if(num % j == 0){
                naoPrimo = 1;
                break;
            }
        }
        if(!naoPrimo){
            primo = num;
            i++
        }
        num++;
    }
    return primo;
}

const mdc = (a,b) => {
    var primosComuns = [];
    for(let i=1; a+b > 2; i++){
        primoAtual = primo(i);
        if(a%primoAtual == 0 && b%primoAtual == 0){
            primosComuns.push(primoAtual);
            a /= primoAtual;
            b /= primoAtual;
            i = 0;
        }else if(a>0 && a%primoAtual == 0){
            a /= primoAtual;
            i = 0;
            
        }else if(b>0 && b%primoAtual == 0){
            b /= primoAtual;
            i = 0;
        }
    }
    var total = 1;
    for(num of primosComuns){
        total *= num;
    }
    return total;
}

 
var a = parseInt(readlineSync.question('Informe A: '));

var b = parseInt(readlineSync.question('Informe B: '));

console.log(`O mdc de ${a} e ${b} é: ${mdc(a,b)}`);


