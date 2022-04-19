// jsnack3

const firstNumber = 1
const maxNum = 10;

const numbers = [];
for (let i = firstNumber; i < maxNum+firstNumber; i++) {
    numbers.push(i);
}

let som = 0
for (let i = 0; i < numbers.length; i++) {
    som += numbers[i];
}

let media = som / numbers.length;
console.log(`I numeri dati sono: ${numbers}. Somma: ${som}. Media: ${media}.`);