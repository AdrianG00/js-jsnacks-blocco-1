// jsnack4

let number = "";


do {
    number = prompt("inserisci un numero di 4 cifre");
    
} while (number.length != 4 || isNaN(parseInt(number)))


let numberSplit = number.split("");

let som = 0;


for (let i = 0; i < numberSplit.length; i++) {
    som += parseInt(numberSplit[i])
    
}

console.log(`il numero che hai scelto è ${number}. La somma delle sue cifre (${numberSplit}) è ${som}.`);