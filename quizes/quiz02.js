let arr1 = [7, 3, 2]
let arr2 = [1, 7, 9]

// console.log(2===2)
// // console.log(arr1===arr2)
// /**
//  *
//  * @param arr1 {array}
//  * @param arr2 {array}
//  * @returns {boolean}
//  */
// function func1(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (let i = 0; i < arr1.length; i++)
//         if (arr1[i] !== arr2[i]) return false
//     return true
// }
//
// console.log(func1(arr1, "dfsdf"))

// if (arr1.length===arr2.length){
//     let l = arr1.length-1
//     for (let i=0; i<arr1.length; i++){
//
//         tmp = arr1[i]
//         arr1[i] = arr2[l-i]
//         arr2[l-i] = tmp
//     }
// }
//
// console.log(arr1)
// console.log(arr2)

// let lns = []
// const size = 8
// for (let i = 0; i < size; i++){
//     lns[i]=''
//     for (let j = 0; j < size; j++)
//         if (i % 2 === j % 2) lns[i]+= '*'
//         else lns[i]+= ' '
// }
// console.log(lns)

// let matrix = [[1,2,3],[4,5,6],[7,8,9]]
// const l = matrix.length
//
// for (let i=0;i<l;i++){
//     matrix[i][i] = 99
//     matrix[i][l-i-1] = 42
// }
// console.log(matrix)

// function func2(arr) {
//     let flag = true
//     while (flag) {
//         flag = false
//         for (let i = 1; i < arr.length; i++)
//             if (arr[i] < arr[i - 1]) {
//                 flag = true
//
//                 let temp = arr[i - 1]
//                 arr[i - 1] = arr[i]
//                 arr[i] = temp
//             }
//     }
//     return arr
// }

let arr = [5, 4, 1, 14, 52, 8, 2]
console.log((arr))
console.log(func2(arr))
