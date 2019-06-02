var isDrawing = false;

function start() {
    document.getElementById("canvas").addEventListener("mousedown", drawDot);
}
start();

var color = "black";

var setColor = document.getElementsByClassName("color");

for (var i = 0; i < setColor.length; i++) {
    setColor[i].addEventListener("click", (e) => color = e.target.id)
}

var brush = {
    width: 5,
    height: 5,
    borderRadius: "50%"
}

document.getElementById("plus").addEventListener("click", encreaseSize);
function encreaseSize() {
    brush.width += 2;
    brush.height += 2;
}

document.getElementById("minus").addEventListener("click", decreaseSize);
function decreaseSize() {
    brush.width -= 2;
    brush.height -= 2;
}

document.getElementById("round").addEventListener("click", shapeRound);
function shapeRound() {
    brush.borderRadius = 50;
}

document.getElementById("square").addEventListener("click", shapeSquare);
function shapeSquare() {
    brush.borderRadius = 0;
}

document.getElementById("clear").addEventListener("click", clearCanvas);
function clearCanvas() {
    canvas.innerHTML = "";
}

function draw(e){
    var canvasElement = document.getElementById("canvas");
    var dot = document.createElement("div");
    dot.style.height = brush.height + "px";
    dot.style.width = brush.width + "px";
    dot.style.borderRadius = brush.borderRadius + "%";
    dot.style.position = "absolute";
    dot.style.backgroundColor = color;
    dot.style.top = e.clientY + "px";
    dot.style.left = e.clientX + "px";
    canvasElement.appendChild(dot);
}

function drawDot(e) {
    console.log(e.clientY)
    if ((e.clientY < 583) && ((985 > e.clientX) && (e.clientX > 488))) {
       draw(e);
       isDrawing = true;
    } 
}

document.getElementById("canvas").addEventListener("mousemove", drawLine);
function drawLine(e) {
    if ((e.clientY < 583) && ((985 > e.clientX) && (e.clientX > 488))) {
    if (isDrawing === true) {
        draw(e);
    }}
}

document.getElementById("canvas").addEventListener("mouseup", stopDrawing);
function stopDrawing() {
    isDrawing = false;
}

document.getElementById("save").addEventListener("click", saveImage);
function saveImage() {
    var image = document.getElementById("canvas").innerHTML;
    localStorage.image = image;
    var output = localStorage.name;
}

document.getElementById("load").addEventListener("click", loadImage);
function loadImage() {
    canvas.innerHTML = localStorage.image;
}

