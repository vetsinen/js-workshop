const axios = require("axios")

async function getData(){
    let rez = await axios('https://vetsinen.pythonanywhere.com/')
    //console.log(rez.data)
    for (let car of rez.data.data) console.log(car)
}

getData()
console.log('request sended')