btnElement = document.querySelector(".read");
resultElement = document.querySelector("#result");

btnElement.addEventListener("click", function(){
    if (btnElement.textContent === "Open") {
        resultElement.textContent = "here is the report";
        btnElement.innerHTML = "Close";
    } else {
        btnElement.innerHTML = "Open";
        resultElement.textContent = "";
    }
});