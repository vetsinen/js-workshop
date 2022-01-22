let matrix = [[1,2,3],[4,5,6],[7,8,9]]
const l = matrix.length

for (let i=0;i<l;i++){
    matrix[i][i] = matrix[i][l+i-1]
}
console.log(matrix)