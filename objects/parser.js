const axios = require('axios')

async function parseData(){
    const res = await axios('https://jsonplaceholder.typicode.com/users')
    console.log(res.data)
}

parseData()

//and other data from https://documenter.getpostman.com/view/8854915/Szf7znEe