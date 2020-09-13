document.getElementById("clearButton").onclick = function(e) {
    document.getElementById("text").value = "";
}

document.getElementById("clearButton2").onclick = function(e) {
    document.getElementById("transformText").value = "";
}

function myFunction() {
    const x = document.getElementById("text").value;
    document.getElementById("transformText").innerHTML = x;
}

let menuElem = document.getElementById('list');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
    menuElem.classList.toggle('open');
};

function addBlue() {
    const resultEl = document.getElementById("transformText");
    resultEl.classList.add("blue");
    resultEl.classList.remove("red");
}

function addRed() {
    const resultEl = document.getElementById("transformText");
    resultEl.classList.add("red");
    resultEl.classList.remove("blue");
}