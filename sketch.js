var r1;
var r2;

function setup() {
  createCanvas(800,400);
  r1 = createSprite(400,200,50,100);
  r1.shapeColor="green";
  r2 = createSprite(400,200,100,50);
  r2.shapeColor="yellow"
}

function draw() {
  background(255,255,255);  
    r2.x=World.mouseX;
    r2.y=World.mouseY;
    console.log(r2.x-r1.x);
     if(r2.x-r1.x < r2.width/2 + r1.width/2 && r1.x-r2.x < r2.width/2 + r1.width/2 &&
       r2.y-r1.y < r2.height/2 + r1.height/2 && r1.y-r2.y < r2.height/2 + r1.height/2)
      {r1.shapeColor="orange";
      r2.shapeColor="blue";
  }
      else{
        r2.shapeColor="yellow";
        r1.shapeColor="green";
  
      }  
  drawSprites();
}