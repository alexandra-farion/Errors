resultElement = document.querySelector(".result");
main = document.querySelector(".content")
const xhr = new XMLHttpRequest()
xhr.open("POST", "http://78.29.33.173:49144/get_mails", true)
xhr.onload = () => {
    const report = JSON.parse(xhr.responseText)
    // console.log(report)
    for (const reportKey in report) {
        if (report[reportKey] !== "") {
            const body = report[reportKey].split("\n")
            let content = ""
            if ("--------- Stack Trace ---------" === body[0]) {
                for (const element in body) {
                    content += "<p>" + body[element] + "</p>"
                }
            } else {
                for (const element in body) {
                    content += "<p>" + body[element] + "</p>"
                }
            }
            main.innerHTML += "<div class=\"errors\">" +
                "            <h3 class=\"header\">" + reportKey + "</h3>" + content + "</div>"
        }
    }
}
xhr.send()