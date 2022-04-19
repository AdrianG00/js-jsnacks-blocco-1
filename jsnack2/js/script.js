// jsnack2

const oddNumber = []

for (let i = 0; i < 6 ; i++) {
    let userNumber = parseInt(prompt("inserisci un numero"));
    if (userNumber % 2 === 1) {
        oddNumber.push(userNumber);
    }   
}

console.log(`${oddNumber.length} numeri dispari. I numeri sono: ${oddNumber}` );
