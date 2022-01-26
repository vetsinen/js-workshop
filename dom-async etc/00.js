function bar1(){console.log('bar1')}
async function bar2(){console.log('bar2')}
console.log(typeof bar1, typeof bar2)

let rez1 = bar1()
console.log(rez1, typeof rez1)

let rez2 = bar2()
console.log(rez2, typeof rez2)