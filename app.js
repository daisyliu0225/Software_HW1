const canvas = document.getElementById("myCanvas");
colorPicker = document.querySelector("#colorPicker"); //the setting for color
brushSize = document.querySelector("#slider");  //the slider for brush size
fontStyle = document.querySelector(".fontStyle");
fontSize = document.querySelector(".fontSize");
stroke = document.querySelector("#strokeText");
fillColor = document.querySelector("#fillColor"); //to fill the shape or not
cursorBtn = document.querySelector("#cursor");
toolBtns = document.querySelectorAll(".toolBtns");
textBtn = document.querySelector("#text");
stampBtn = document.querySelector("#stamp");
questionBtn = document.querySelector("#question");
stampType = document.querySelector(".typeStamp")
undoBtn = document.querySelector(".undo"); //button for undo
redoBtn = document.querySelector(".redo"); //button for undo
uploadBtn = document.querySelector("#upload");
uploadPic = document.querySelector("#uploadFile"); //btn for upload pics
downloadPic = document.querySelector("#download"); //btn for download pic
resetCanvas = document.querySelector("#reset"); //reset the whole canvas
const ctx = canvas.getContext("2d"); 
const ctx2 = canvas.getContext("2d");
const cursor = document.querySelector(".bodyCursor");
//the variables that monitors elements on the html

var font = "12px Arial", hasInput = "false", written = "false";
//handle font input

var stamped = "false";
var quest = "false";

//global variables with default values
let preMouseX, preMouseY, snapshot, isDrawing = false, selectedTool = "brush", brushWidth = 5, selectedColor = "#cc458faa";

//functions for default
const setCanvasBackground = () => {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 0 + canvas.width, 0 + canvas.height);
}

window.addEventListener("load", () => { 
    canvas.width = canvas.offsetWidth; 
    canvas.height = canvas.offsetHeight; 
    setCanvasBackground(); 
    cPush();
});

//function for drawing
const startDrawing = (e) => {

    isDrawing = true;
    preMouseX = e.offsetX;
    preMouseY = e.offsetY;
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
    ctx.fillStyle = colorPicker.value;
    ctx.strokeStyle = colorPicker.value;
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

const drawing = (e) =>{
    console.log("draw!");
    if(!isDrawing) return;
    console.log(written);
    ctx.putImageData(snapshot, 0, 0); // adding copied canvas data on to this canvas

    if(selectedTool === "brush") drawBrush(e);
    else if(selectedTool === "eraser") drawEraser(e);
    else if(selectedTool === "circle") drawCircle(e);
    else if(selectedTool === "square") drawSquare(e);
    else if(selectedTool === "triangle") drawTriangle(e);
    else if(selectedTool === "line") drawLine(e);
}

const stopDrawing = () =>{
    cPush();
    isDrawing = false;
}

toolBtns.forEach(Element => { 
    Element.addEventListener("click", () => { 
        written = false;
        stamped = false;
        quest = false;
        console.log("input " + written);
        const tag = document.querySelector(".active");
        console.log(tag);
        tag.classList.remove("active");
        Element.classList.add("active"); 
        selectedTool = Element.id; 
        console.log(selectedTool); 
    }); 
}); 

//functions for settings
brushSize.addEventListener("change", () => {
    brushWidth = brushSize.value;
})

colorPicker.addEventListener("input", () =>{
    const color = colorPicker.value;
    ctx.strokeStyle = color;
})

//functions for the brush
const drawBrush = (e) => {
    const x = e.offsetX - canvas.offsetLeft;
    const y = e.offsetY - canvas.offsetTop;
    ctx.lineTo(x + 10, y + 40);
    ctx.stroke();
    ctx.globalCompositeOperation = "source-over";
}

//functions for eraser
const drawEraser = (e) => {
    const x = e.offsetX - canvas.offsetLeft;
    const y = e.offsetY - canvas.offsetTop;
    ctx.lineTo(x + 10, y + 40);
    ctx.stroke();
    ctx.strokeStyle = "#FFFFFF";
    ctx.globalCompositeOperation = "source-over";
}

//functions for circle
const drawCircle = (e) => {
    ctx.beginPath();
    let rad = Math.sqrt(Math.pow(preMouseX - e.offsetX, 2) + Math.pow(preMouseY - e.offsetY, 2));
    ctx.arc(preMouseX, preMouseY, rad, 0, 2 * Math.PI);
    if(fillColor.checked == true){
        ctx.fillStyle = colorPicker.value;
        ctx.fill();
    }else ctx.stroke();
}

//functions for square
const drawSquare = (e) => { 
    const sideLength = Math.abs(preMouseX - e.offsetX); 
    ctx.beginPath(); 
    ctx.rect(preMouseX, preMouseY, sideLength, sideLength); 
    if(fillColor.checked == true){
        ctx.fillStyle = colorPicker.value;
        ctx.fill();
    }
    else ctx.stroke();
}

//functions for triangle
const drawTriangle = (e) => {
    ctx.beginPath();  
    ctx.moveTo(preMouseX, preMouseY); 
    ctx.lineTo(e.offsetX, e.offsetY);  
    ctx.lineTo(preMouseX * 2 - e.offsetX, e.offsetY);  
    ctx.closePath();  
    if(fillColor.checked == true){
        ctx.fillStyle = colorPicker.value;
        ctx.fill();
    }
    else ctx.stroke();
} 

//function for text
textBtn.addEventListener("click", function(){
    written = true;
    console.log("txtbtn clicked");
    canvas.onclick = function(e){
        console.log("input " + written);
        if(hasInput == true) return;
        if(written == true) addInput(e.clientX, e.clientY);
    }
})

function addInput(x, y){
    var input = document.createElement("input");
    input.type = "text";
    input.style.position = "fixed";
    input.style.left = (x-4) + "px";
    input.style.top = (y-4) + "px";

    input.onkeydown = handleEnter;
    document.body.appendChild(input);
    input.focus();
    hasInput = true;
}

function handleEnter(e){
    var keyCode = e.keyCode;
    console.log(keyCode);
    if(keyCode == 13){
        drawOnCanvas(this.value, parseInt(this.style.left, 10), parseInt(this.style.top, 10));
        document.body.removeChild(this);
        hasInput = false;
        cPush();
    }
}

function drawOnCanvas(txt, x, y){
    ctx.textBaseLine = "top";
    ctx.textAlign = "center";
    ctx.font = fontSize.value+ " " + fontStyle.value;
    if(stroke.checked) ctx.strokeText(txt, x-4, y-4);
    else ctx.fillText(txt, x-4, y-4);
}

//function for stamp
stampBtn.addEventListener("click", function(){
    stamped = true;
    canvas.onclick = function(e){
        if(stamped == true){
            if(stampType.value == "heart") drawHeart(e.offsetX, e.offsetY);
            else if(stampType.value == "smile") drawSmile(e.offsetX, e.offsetY);
            else if(stampType.value == "swirl") drawSwirl(e.offsetX, e.offsetY);
            else if(stampType.value == "raindrop") drawStar(e.offsetX, e.offsetY, 4);
            else if(stampType.value == "star") drawStar(e.offsetX, e.offsetY, 5);
        }
        cPush();
    }
})

function drawHeart(x, y){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y-3, x-5, y-15, x-25, y-15);
    ctx.bezierCurveTo(x-55, y-15, x-55, y+12.5, x-55, y+12.5);
    ctx.bezierCurveTo(x-55, y+40, x-35, y+62, x, y+80);
    ctx.bezierCurveTo(x+35, y+62, x+55, y+40, x+55, y+12.5);
    ctx.bezierCurveTo(x+55, y+12.5, x+55, y-15, x+25, y-15);
    ctx.bezierCurveTo(x+10, y-15, x, y-3, x, y);
    ctx.fill();
}

function drawSmile(x, y){
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2); // Outer circle
    ctx.moveTo(x+35, y);
    ctx.arc(x, y, 35, 0, Math.PI); // Mouth (clockwise)
    //ctx.moveTo(x-10, x-10);
    ctx.arc(x-15, y-10, 5, 0, Math.PI * 2); // Left eye
    //ctx.moveTo(x+20, x-10);
    ctx.arc(x+15, y-10, 5, 0, Math.PI * 2); // Right eye
    ctx.stroke();
}

function drawStar(cx, cy, spikes){
    var rot=Math.PI/2*3;
    var step=Math.PI/spikes;
    var x = cx;
    var y = cy;

      ctx.beginPath();
      ctx.moveTo(cx,cy-30);
      for(i=0;i<spikes;i++){
        x=cx+Math.cos(rot)*30;
        y=cy+Math.sin(rot)*30;
        ctx.lineTo(x,y);
        rot+=step;

        x=cx+Math.cos(rot)*15;
        y=cy+Math.sin(rot)*15;
        ctx.lineTo(x,y)
        rot+=step
      }
      ctx.lineTo(cx,cy-30);
      ctx.closePath();
      ctx.lineWidth=5;
      ctx.fill();
}

function drawSwirl(x, y){
    ctx.moveTo(x, y);
    var gap = 1.8;
    var stepsPerRotation = 60;
    var increment = 2*Math.PI/stepsPerRotation;
    var theta = increment;
    while(theta < 5*Math.PI){
        var newX = x + theta * Math.cos(theta) * gap; 
        var newY = y + theta * Math.sin(theta) * gap; 
        ctx.lineTo(newX, newY);
        theta = theta + increment;
    }
    ctx.stroke();
}

//functions for question
questionBtn.addEventListener("click", function(){
    quest = true;
    canvas.onclick = function(e){
        var ran = Math.floor(Math.random() * 1000) % 5;
        var qcolor = Math.floor(Math.random() * 10000) % 360;
        ctx.fillStyle = "hsl(" + qcolor + ", 100%, 75%)";
        if(quest == true){
            if(ran == 0) drawHeart(e.offsetX, e.offsetY);
            else if(ran == 1) drawStampCircle(e.offsetX, e.offsetY, qcolor);
            else if(ran == 2) drawStar(e.offsetX, e.offsetY, 5);
            else if(ran == 3) drawStampSquare(e.offsetX, e.offsetY, qcolor);
            else if(ran == 4) drawStampTriangle(e.offsetX, e.offsetY, qcolor);
        }
    }
})

function drawStampCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill();
}

function drawStampSquare(x, y){
    ctx.beginPath();
    ctx.rect(x, y, 25, 25);
    ctx.fill();
}

function drawStampTriangle(x, y){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+25, y+25);
    ctx.lineTo(x-25, y+25);
    ctx.fill();
}

//functions for draw line
const drawLine = (e) =>{
    ctx.beginPath(); 
    ctx.moveTo(preMouseX, preMouseY); 
    ctx.lineTo(e.offsetX, e.offsetY); 
    ctx.stroke(); 
}

//functions for undo and redo
var cPushArray = new Array();
var cStep = -1;

function cPush(){
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(document.getElementById('myCanvas').toDataURL());
}

undoBtn.addEventListener("click", function(){
    if (cStep > 0) {
        cStep--;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
    }
})

redoBtn.addEventListener("click", function(){
    if (cStep < cPushArray.length-1) {
        cStep++;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
    }
})

//functions for uploading files
uploadBtn.addEventListener("click", function(){
    selectedTool = "brush";
    ctx.globalCompositeOperation = "source-over";
    document.getElementById("uploadFile").click();
})

uploadPic.addEventListener("change", function(){
    const myFile = uploadPic.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(myFile);
    img.onload = function(){
        if(img.width > canvas.width || img.height > canvas.height){
            if(img.width > canvas.width){
                var ratio = canvas.width/img.width;
            }else ratio = canvas.height/img.height;
            var imgwidth2 = img.width * ratio;
            var imgheight2 = img.height * ratio;
            ctx.drawImage(img, 0, 0, imgwidth2, imgheight2);
        }else ctx.drawImage(img, 0, 0, img.width, img.height);
    }
    document.getElementById("uploadFile").value = "";
})

//functions for downloading files
downloadPic.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = 'save.png';
    link.href = document.getElementById("myCanvas").toDataURL();
    link.click();
})

//functions for resetting the canvas
resetCanvas.addEventListener("click", () => {
    if(confirm("Are you sure to reset?") == true){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setCanvasBackground();
        alert("Canvas cleared.")
    }else{
        alert("Process cancelled.")
    }
})

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", stopDrawing);