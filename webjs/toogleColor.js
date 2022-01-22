const p = document.getElementsByTagName('p')[0]

function toogleRedGreen(element){
    if (element.style.backgroundColor === 'red'){ //different from css
        element.style.backgroundColor = 'green'
    }
    else {
        element.style.backgroundColor = 'red'
    }
}

p.onclick = function (){
    toogleRedGreen(p)
}