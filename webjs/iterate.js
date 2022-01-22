const list = document.getElementsByTagName('ul')[0]
console.log(list)

for (let i=0;i<list.children.length; i++){
    console.log(i, ord(i))
    if (!ord(i)){
        list.children.item(i).style.color = 'green'
    }
}

function ord(i){return i%2 ===0}