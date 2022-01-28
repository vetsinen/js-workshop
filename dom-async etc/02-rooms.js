const localUrl = 'http://10.10.150.75:5000/rooms/'
const webUrl = 'https://vetsinen.pythonanywhere.com/rooms/'
const rooms = document.getElementById("rooms")
const district = document.getElementById('district')

function addLiItem(item){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item.adress+' - '+item.price));
    rooms.appendChild(li);
}

async function getData(district='Оболонь'){
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
