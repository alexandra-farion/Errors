
function click_btn (id) {
    read_report(id)
}

function read_report(id) {
    let btnElements = document.querySelectorAll(".report_content");
    let content = reports_content.split("***")
    let flag = false;
    for (const element in content) {
        if (flag === true) {
            for (const btn in btnElements) {
                if (btnElements[btn].id === id && btnElements[btn].textContent === "Open") {
                    let text = document.createElement('p');
                    text.className = id
                    text.innerHTML = content[element];
                    btnElements[btn].innerHTML = "<div class=\"triangle2\"></div><text class=\"read\">Close</text>";
                    btnElements[btn].after(text);
                    flag = false;
                } else {
                    if (btnElements[btn].textContent === "Close") {
                        console.log("ok")
                        btnElements[btn].innerHTML = "<div class=\"triangle1\"></div><text class=\"read\">Open</text>";
                        // document.getElementsByClassName(id).hidden = true;
                    }
                }
            }
        }
        if (content[element] === id) {
            flag = true;
        }
    }
}
