objectDetector ="";

img = "";
objects = [];
status = "";

function preload(){
    img = loadImage("download.png");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Object Detecting";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(results, error){
    if (errror){
        console.error(error)
    }
    console.log(resutls);
    object = results;
}

function draw(){
    image(img, 0, 0, 640, 420)
    if(status != ""){
        for (var i=0; i < object.length; i++){
            document.getElementById("status").innnerHTML = "Status: Object Detected";

            fill(255, 0, 0);
            percent = floor(object[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            nofiil();
            stroke(255, 0, 0);
            rect(object[i].x, object[i].y, object[i].width, object[i].width);
        }
    }
}