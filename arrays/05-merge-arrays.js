let arr1 = [4, 6, 3]
let arr2 = [1, 7, 3]

arr1 = [...arr1, 5, 9]
console.log(arr1)

let arr = [...arr1,3,2,1,5, 7,...arr2]
console.log(arr)

const matrix = [[1,5, 7], arr1, arr2]
console.log(matrix)