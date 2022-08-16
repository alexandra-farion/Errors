// btnElement = document.querySelector(".open");
// resultElement = document.querySelector("#result");
//
// btnElement.addEventListener("click", function(){
//     if (btnElement.textContent === " Open") {
//         resultElement.textContent = "here is the report";
//         btnElement.innerHTML = "<div class=\"triangle2\"></div> <text class=\"read\">Close</text>";
//     } else {
//         btnElement.innerHTML = "<div class=\"triangle1\"></div> <text class=\"read\">Open</text>";
//         resultElement.textContent = "";
//     }
// });

btnElement = document.querySelector(".read");
resultElement = document.querySelector(".order");

btnElement.addEventListener("click", function(){
    console.log("click")
    if (btnElement.textContent === "Open") {
        resultElement.textContent = "here is the report";
        btnElement.innerHTML = "Close";
    } else {
        btnElement.innerHTML = "Open";
        resultElement.textContent = "";
    }
});