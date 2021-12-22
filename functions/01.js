function add(a,b){
    console.log(a+b)
}

add(2,7)

function add2(a,b){
    return a+b
}

console.log(add2(3,7))
let v = add2(3,7)

function mult(a,b){
    return a*b
}

let c = mult( add2(1,3), add2(4,8))
// console.log(c)

function randomInRange(n){
    return Math.round(Math.random()*n)
}

console.log(randomInRange(5))
console.log(randomInRange(12))