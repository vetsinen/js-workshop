const arr = [9,5, 3, 8, 3]

let min = arr[0]
for (el of arr)
    if (el<min)
       min = el

console.log(min)