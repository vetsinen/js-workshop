async function axios(url){
    let response = await fetch(url)
    if (response.ok) {
        return await response.json()
    }
}