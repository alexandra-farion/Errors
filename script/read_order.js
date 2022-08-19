
function click_btn (id) {
    document.getElementById(id).value = parseInt(document.getElementById(id).value) + parseInt('1')
    console.log(document.getElementById(id).value)
    read_report(id)
}

function read_report(id) {
    let btn = document.getElementById(id);
    if (parseInt(btn.value) === parseInt('1')) {
        // let order = reports[id].split("\n");
        let text = document.createElement('p');
        text.className = String(id) + "p";
        text.innerHTML = "<text>" + reports[id] + "</text>";
        btn.innerHTML = "<div class=\"triangle2\"></div><text class=\"read\">Close</text>";
        btn.after(text);
    }
    // if (parseInt(btn.value) === parseInt('2')) {
    //     document.getElementById(id).value = parseInt('0');
    //     btn.innerHTML = "<div class=\"triangle1\"></div><text class=\"read\">Open</text>";
    //     document.getElementsByClassName(String(id) + "p").visibility = 'hidden';
    // }
}
