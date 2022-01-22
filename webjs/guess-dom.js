let a = 1 + Math.floor(Math.random()*10)
let guess
let guessStatus = document.getElementById('guessStatus')
let guessInp = document.getElementById('guess')

document.getElementById('guessSubmit').onclick = newGuess


function newGuess(){
    guess = parseFloat(guessInp.value)
    console.log(a, guess)
    if (guess === a){
        guessStatus.innerText = 'you are genius, my num is '+a
    }
    else if (guess > a ){
        guessStatus.innerText = 'your num is bigger'
    }
    else if (guess < a ){
        guessStatus.innerText = 'your num is smaller'
    }
    else if (guess > a ){
        guessStatus.innerText = 'strange guess'
    }
}