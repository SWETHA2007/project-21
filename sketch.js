var car, wall;
var speed, weight;

function setup() {
createCanvas(windowWidth,windowHeight);

speed = random(55,90);
weight = random(400,1500);

car = createSprite(width/4 - 50,height/2,60,30);
car.shapeColor = "orange";
car.velocityX = speed;

wall = createSprite(width - 100,height/2,30,height/4);

}

function draw() {
  background("black");  
  
  if(wall.x - car.x < car.width/2 + wall.width/2){
     car.velocityX = 0;

     var deformation = (0.5 * weight * speed * speed)/22500;

     if(deformation > 180){
        car.shapeColor = "red";
     }

     if(deformation < 180 && deformation > 100){
        car.shapeColor  = "yellow";
     }

     if(deformation < 100){
        car.shapeColor = "green";
     }

  }
  
  drawSprites();
}