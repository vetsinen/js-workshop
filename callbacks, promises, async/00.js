const axios = require("axios")

async function getData(){
    let rez = await axios('https://vetsinen.pythonanywhere.com/')
    for (let car of rez.data.data) console.log(car)
}

getData()
console.log('request sended')