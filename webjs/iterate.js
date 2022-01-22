const list = document.getElementsByTagName('ul')[0]

for (let i=0;i<list.children.length; i++){
    console.log(i, simple(i))
    if (simple(i)){
        list.children.item(i).style.color = 'green'
    }
}

function ord(i) {return i%2 ===0}

function simple (num){
    if (num<2) return false
    for (let i=2; i<num; i++)
        if (num%i===0) return false
    return true
}