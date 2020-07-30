var fixedrect, movingrect;
function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.velocityX = -3
  fixedrect = createSprite(200,200,50,50)
  fixedrect.velocityX = 3
  movingrect.shapeColor = "blue";
  fixedrect.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  //movingrect.x = mouseX;
  //movingrect.y = mouseY;
  bounceOff(movingrect,fixedrect);
  if(isTouching(movingrect,fixedrect)){
    movingrect.shapeColor = "yellow";
    fixedrect.shapeColor = "yellow";
  }
  else{
    movingrect.shapeColor = "blue";
    fixedrect.shapeColor = "blue";
  }
  drawSprites();
}
