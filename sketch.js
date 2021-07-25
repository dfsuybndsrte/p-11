var path
var pathi
var r
var ri
function preload(){
  //pre-load images
  pathi = loadImage("path.png")
  ri = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,400,150)
  path.addImage(pathi)
  path.velocityY=3
  

  r=createSprite(200,200,100,150)
  r.addAnimation("running",ri)
  r.scale=0.10

  
}

function draw() {
  background(0);
  
  if(path.y>300){
  path.y=200
  }
  
  drawSprites();
}
