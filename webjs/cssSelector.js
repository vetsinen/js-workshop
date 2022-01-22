const p = document.querySelector('p')

p.onclick = function (){
    console.log(p.style.fontSize)//different from css
    let newFont = 2 + parseFloat(p.style.fontSize)
    p.style.fontSize = `${newFont}px`
}


