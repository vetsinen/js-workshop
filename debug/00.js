
let arr1 = [7, 3, 2]
let arr2 = [1, 7, 9]

if (arr1.length===arr2.length){
    let l = arr1.length-1
    for (let i=0; i<arr1.length; i++){

        tmp = arr1[i]
        arr1[i] = arr2[l-i]
        arr2[l-i] = tmp
        let t = bar(i)
    }
}

function bar(num){
    return fibonacciI(num)+2
}

function fibonacciI(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}