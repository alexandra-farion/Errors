resultElement = document.querySelector(".result");
main = document.querySelector(".content")

let reports_content = ""

const xhr = new XMLHttpRequest()
xhr.open("POST", "http://78.29.33.173:49144/get_mails", true)
xhr.onload = () => {
    const report = JSON.parse(xhr.responseText)
    for (const reportKey in report) {
        if (report[reportKey] !== "") {
            const body = report[reportKey].split("\n")
            let content = ""
            if ("--------- Stack Trace ---------" === body[0]) {
                for (const element in body) {
                    content += "<p class='errors_text'>" + body[element] + "</p>"
                }
            } else {
                reports_content += reportKey + "***" + report[reportKey] + "***"
                content += "<button class=\"report_content" + "\" id=\"" + reportKey + "\" onclick=\"click_btn(id);\" value='false'>Open</button>"
            }
            main.insertAdjacentHTML('beforeend', "<div class=\"errors\">" +
                "            <h3 class=\"header\">" + reportKey + "</h3>" + content + "</div>")

        }
    }
    return reports_content
}
xhr.send()
