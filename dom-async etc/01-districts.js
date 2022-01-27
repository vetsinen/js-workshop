const localUrl = 'http://127.0.0.1:5000/districts'
const districts = document.getElementById("districts")

function addLiItem(item){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    districts.appendChild(li);
}

async function getData(){
    console.log('in get data')
    let response = await axios(localUrl)
    console.log()
        for (let district of response) {
            console.log(district)
            addLiItem(district)
        }
}

getData()
console.log('data sended')
//console.log(rez, typeof rez)
//for (let i=0;i<2000000000n;i++){}