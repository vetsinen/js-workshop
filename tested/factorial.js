function factorial(n){
    if (n<2) return 1
    return n*factorial(n-1)
}

module.exports = factorial

console.assert(factorial(2)===2,"fact(2)!===2")