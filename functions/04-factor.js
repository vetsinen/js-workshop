function fact1(n) {
    if (n < 2) {return 1}
    return n * fact1(n - 1)
}
console.log(fact1(4))

function fact2(n) {
    let rez = 1
    for (let i = 1; i <= n; i++) {
        rez *= i
    }
    return rez
}
console.log(fact2(4))

module.exports = fact2
