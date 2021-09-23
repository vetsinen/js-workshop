const usersId = [ 12, 46, 64, 56, 22 ]
const users= ["taras","ivan","lesya","marko","ostap"]

console.log(usersId[0])
console.log(usersId.length)
console.log("\n")

for (let i=0;i<usersId.length;i++){
    console.log(users[i])
}
console.log("\n")

const winner = Math.floor(Math.random() * usersId.length)
console.log(winner)
console.log(usersId[winner])
console.log(users[winner])

console.log("\n")
console.log(users[10])