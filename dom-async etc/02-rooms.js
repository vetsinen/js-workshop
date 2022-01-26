const localUrl = 'http://127.0.0.1:5000/rooms/'
const webUrl = 'https://vetsinen.pythonanywhere.com/rooms/'
const rooms = document.getElementById("rooms")
const district = document.getElementById('district')

function addLiItem(item){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item.street+' - '+item.price));
    rooms.appendChild(li);
}

async function getData(district='pechersky'){
    let response = await fetch(localUrl+district)
    if (response.ok) {
        let rez = await response.json()
        rooms.textContent = '' //clearing list
        for (let room of rez) {
            console.log(room)
            addLiItem(room)
        }
    }
}

getData()
document.getElementById('district').onchange = ()=> {
    getData(district.value)
}
