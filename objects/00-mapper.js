"use strict"

const prices = {
    clock: 24,
    smartphone: 100,
    bike: 299,
    cacao: 15,
    coffee: 20,
    tea: 8,
}

let cart = ["coffee", "smartphone", "cacao", "cacao", "bear"]

function calculateTotal (cart, prices){
    let total = 0
    for (let item of cart){
        if (item in prices) total+=prices[item]
        else console.log(`warning: item ${item} not found`)
    }
    return total
}

console.log(calculateTotal(cart, prices))