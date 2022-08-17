// resultElement = document.querySelector(".result");
// main = document.querySelector(".content")
//
// let reports_content = ""
//
// const xhr = new XMLHttpRequest()
// xhr.open("POST", "http://78.29.33.173:49144/get_mails", true)
// xhr.onload = () => {
//     const report = JSON.parse(xhr.responseText)
//     // console.log(report)
//     for (const reportKey in report) {
//         if (report[reportKey] !== "") {
//             const body = report[reportKey].split("\n")
//             let content = ""
//             if ("--------- Stack Trace ---------" === body[0]) {
//                 for (const element in body) {
//                     content += "<p>" + body[element] + "</p>"
//                 }
//             } else {
//                 reports_content += reportKey + " " + report[reportKey] + " "
//                 // console.log(reports_content)
//                 content += "<button class=\"report_content" + "\" id=\"" + reportKey + "\" onclick=\"myFunction(" + reportKey + ");\">Open</button>"
//                 // for (const element in body) {
//                 //     content += "<p>" + body[element] + "</p>"
//                 // }
//             }
//             // main.innerHTML += "<div class=\"errors\">" +
//             //     "            <h3 class=\"header\">" + reportKey + "</h3>" + content + "</div>"
//             main.insertAdjacentHTML('beforeend', "<div class=\"errors\">" +
//                 "            <h3 class=\"header\">" + reportKey + "</h3>" + content + "</div>")
//
//         }
//     }
// }
// xhr.send()
//
// // btnElement = document.querySelector(".read");
// reportButtons = document.querySelectorAll(".report_content");
// // resultElement = document.querySelector(".order");
// // console.log(reportButtons)
//
// function myFunction(reportKey) {
//     console.log(reportKey);
// }
//
// // btnElement.addEventListener("click", function(){
// //     console.log("ok")
// //     console.log(reports_content.split(" "))
// //     if (btnElement.textContent === "Open") {
// //         resultElement.textContent = "here is the report";
// //         btnElement.innerHTML = "Close";
// //     } else {
// //         btnElement.innerHTML = "Open";
// //         resultElement.textContent = "";
// //     }
// // });
