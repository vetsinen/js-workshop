let readlineSync = require('readline-sync');

let a = 1+Math.round(10*Math.random())

let g
do {
    g = parseFloat(readlineSync.question('your guess is '))
    if (g>a) {console.log('my num is smaller')}
    else if (g<a) {console.log('my num is bigger')}
} while (g!==a)

console.log('congratulation! my num really was '+a)