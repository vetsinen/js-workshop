const a = 1

let dorzero =  0 ?? d
let c = a + dorzero
console.log(c)

if (typeof d !== 'undefined') {
    let e = a + d
    console.log(e)
}