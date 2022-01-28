const fetch = require('node-fetch')

async function getData() {
    const query = `query RoomQuery {
      rooms {
        adress, price
      }
    }`;

    const resp = await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
        })
    })
    const rez = await resp.json()
    console.log(rez.data.rooms)
}

getData()