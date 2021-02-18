
var fixedRect, movingRect;
var box1, box2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  box1=createSprite(200,200,100,100)
  box1.shapeColor="green"
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(box1,movingRect)){
    movingRect.shapeColor = "blue";
    box1.shapeColor = "blue";
  }
  else if (isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  fixedRect.shapeColor="green"
    box1.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(ob1,ob2){
  if (ob2.x -ob1.x <ob1.width/2 + ob2.width/2
    &&ob1.x - ob2.x <ob1.width/2 + ob2.width/2
    && ob2.y -ob1.y <ob1.height/2 + ob2.height/2
    &&ob1.y -ob2.y <ob1.height/2 + ob2.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}

