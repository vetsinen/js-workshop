let obj1 = {color: "red", size: "XL"}
let obj2= {color: "yellow", size: "S"}
let obj3 = {color: "red", size: "XL"}

console.log(obj1===obj3)
console.log(JSON.stringify(obj1)===JSON.stringify(obj3))