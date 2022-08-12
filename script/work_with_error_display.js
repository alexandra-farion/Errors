// let errors = {"10.08.2022 20:42:31:3466":"-----stack trace-----\nException\nbdbgjdjignjdigjidjgdfgdfjg\n-----end of stack trace------",
//     "10.09.2022 20:42:31:3466":"-----stack trace-----\nException\nbdbgjdjignjdigjidjgdfgdfjg\n-----end of stack trace------",
//     "10.10.2022 20:42:31:3466":"-----stack trace-----\nException\nbdbgjdjignjdigjidjgdfgdfjg\n-----end of stack trace------"}

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => document.getElementById('root').innerHTML = JSON.stringify(data))
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => document.getElementById('root').innerHTML = JSON.stringify(data))
console.log(res.json())