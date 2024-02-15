function changeHeader() {
    var header = document.getElementById("header");
    header.innerText = (Math.floor(Math.random() * (100 - 1 + 1)) + 1).toString();
}


var randButton = document.getElementById("numbutton");
randButton.addEventListener("click", function() {
    changeHeader();
});