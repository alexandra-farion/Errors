async function getResponse() {
    let response = await fetch("http://78.29.33.173:49144/get_mails", { mode: 'no-cors'})
    let content = await response
    console.log(content)
}

getResponse()