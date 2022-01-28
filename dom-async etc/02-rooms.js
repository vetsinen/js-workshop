const rooms = document.getElementById("rooms")
const district = document.getElementById('district')

function addLiItem(item){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item.adress+' - '+item.price));
    rooms.appendChild(li);
}

async function getRestData(district='Оболонь'){
    const localUrl = 'http://192.168.0.5:5000/rooms/'
    const webUrl = 'https://vetsinen.pythonanywhere.com/rooms/'

    let response = await fetch(localUrl+district)
    if (response.ok) {
        return await response.json()
    }
}

async function getGraphQLData(){
    const query = `query RoomQuery {
      rooms {
        adress, price
      }
    }`

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
    return (rez.data.rooms)
}


document.getElementById('district').onchange = async ()=> {
    let dbrooms = await getRestData(district.value)

    rooms.textContent = ''
    for (let room of dbrooms) {
        console.log(room)
        addLiItem(room)
    }

}
