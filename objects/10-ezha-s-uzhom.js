const hedgehog = {length: 9, belly: "grey", weight:700}
const adder = {length: 17, ears: "yellow", swimming: true}

const hybrid1 = {unicorn: true, ...hedgehog, ...adder}
console.log(hybrid1)

// const hybrid2 = {unicorn: true, ...adder, ...hedgehog}
// console.log(hybrid2)

const predator = {color: "grey", hedgehog, adder}
console.log(predator)
