var car,wall;
var speed,weight;
var car2,car3;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car2=createSprite(50,300,50,50);
  car3=createSprite(50,100,50,50);
  wall=createSprite(1500,200,60,height/2);
  car .velocityX=speed;
  car2 .velocityX=speed;
  car3 .velocityX=speed;
  car.shapeColor=("blue");
  car2.shapeColor=("green");
  car3.shapeColor=("purple");

   }



function draw() {
  background("black");  
  if(wall.x - car.x<(car.width+wall)/2){
    car.velocityX=0;
    var deformation=0.5 * weight* speed * speed/22509;
    if(deformation>180){
    car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
      }
      if(deformation<100){
        car.shapeColor=color(0,255,0);
      }
     
    }
    
  drawSprites();
}