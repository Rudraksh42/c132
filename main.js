img = "";
STATUS = "";

function preload(){
 img = loadImage('dog_cat.jpg');   
}

function setup(){

canvas = createCanvas(640,420);
canvas.center();

objectDetecter = ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML = "status: object detected"
}

function draw(){

image(img,0,0,640,420);
fill("#ff0000");
textSize(20)
text("dog",45,75);
noFill();
stroke("#ff0000");
rect(30,60,450,350);

fill("#00FF00")
textSize(20)
text("cat",320,85)
noFill();
stroke("#00FF00")
rect(300,70,300,325)

}

function modelLoaded(){
console.log("modelLoaded");
STATUS = true;
objectDetecter.detect(img ,gotResult)
}

function gotResult(error , results){
if(error){
console.log("error");
}
else{
console.log(results);
}

}



