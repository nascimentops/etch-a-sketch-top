const container = document.querySelector(".container");
const div = document.querySelector("div");
const reset = document.querySelector("#reset");
const novo = document.querySelector("#new");
let size = 16;
function appendDiv (elem) {
    let pixelSize = 500 / size;
    let div = document.createElement("div");
    let divStyle = div.style;
    divStyle.border = "1px black solid"
    divStyle.height = pixelSize + "px";
    divStyle.flex = "0 1 " + pixelSize + "px";
    divStyle.boxSizing = "border-box";
    div.className = "pixel";
    elem.appendChild(div);
}

function createGrid(size) {
    for (let i = 0; i < size; i++){
        for (let x = 0; x < size; x++){
            appendDiv(container);
        }
    }
}

div.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
})

reset.addEventListener("click", (e) => {
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach((e) => {
        e.style.backgroundColor = "white";
    })
})

novo.addEventListener("click", (e) => {
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    size = Math.floor(prompt("qual tamanho de tela você quer? Max 100", "16"));
    while (size < 1 || size > 100 || !Number.isInteger(parseInt(size))) {
        size = Math.floor(prompt("qual tamanho de tela você quer? Max 100", "16"));
    }
    createGrid(size);
})

createGrid(size);