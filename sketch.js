var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 100, 50);
  movingRect=createSprite(600,200,40,50);
  movingRect.debug=true
  fixedRect.debug=true
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
}


function draw() {
  background(255,255,255);  
 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY
 console.log(movingRect.x - fixedRect.x)
 
 if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
&& fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
&& movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 
&& fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"

 }
else {fixedRect.shapeColor="red"
movingRect.shapeColor="red"}
 
  drawSprites();
}