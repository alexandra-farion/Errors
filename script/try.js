async function getResponse() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let content = await response.json()

    let list = document.querySelector('.posts')
    let key;
    for (key in content) {
        list.innerHTML += "<div>${key}</div>"
    }
    list.innerHTML = content
}

getResponse()