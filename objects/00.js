// const party = "кайфотека"
// const fee = 100
// console.log(typeof party, typeof fee)

let sw = {name:"Swarm Learning", date:"2021-08-30", fee: 0}
console.log(sw, typeof sw)

const sw2 = {name:"Swarm Learning", date:"2021-08-30", fee: 0, fee:100}
// does it work?
console.log(sw2)

const visitor = {"name":"John","promocode":"A-level101"}
console.log(visitor)
// //
console.log(sw["name"])
console.log(sw.name)
//
sw.fee = 4
sw.minAge = 18
console.log(sw)
