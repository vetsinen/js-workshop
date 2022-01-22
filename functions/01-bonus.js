"use strict"

let a = 42
console.log(typeof a)

console.log(a(42))
a = function (arg){return arg}
console.log(a(42))

console.log(c(42))
function c(arg){return arg}

console.log(b(42))
const b = function (arg){return arg}

// console.log(e(42))
const e = (arg)=>arg
console.log(e(42))



