var fixedRect, movingRect,table1,table2,table3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  table1=createSprite(200,15,80,20)
table1.shapeColor="blue"
table2=createSprite(200,200,80,20)
table2.shapeColor="grey"
table3=createSprite(200,150,80,20)
table3.shapeColor="blue"



}

function draw() {
  background(0,0,0);  
  table1.x=mouseX
  table1.y=mouseY
if(isTouching(table1,table2))
{
  table1.shapeColor="red"
  table2.shapeColor="red"
}
else{
table1.shapeColor="blue"
table2.shapeColor="grey"
}
bounceOff(movingRect,fixedRect)
  drawSprites();
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y <object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
}
}
function isTouching(object1,object2)
{ 
  if (object1.x - object2.x < object2.width/2 + object1.width/2
     && object2.x - object1.x < object2.width/2 + object1.width/2 
     && object1.y - object2.y < object2.height/2 + object1.height/2 && 
     object2.y - object1.y < object2.height/2 + object1.height/2) 
     { 
       return true;
     } 
     else
      { 
        return false 
      }
     }


