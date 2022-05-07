
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var planeImg, plane;
var bombImg, bomb;
var b1Img, b1, b2Img, b2, b3, b3Img;
var groundImg, ground;
var explosionImg, explosion;
var score = 0;

function preload(){
  planeImg = loadImage('plane.png');
  bombImg = loadImage("nuke.jpg");
  b1Img = loadImage("city1.png");
  b2Img = loadImage("city2.png");
  b3Img = loadImage("city3.png");
  explosionImg = loadImage("explosion.png");
}

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;
  
  var plane = createSprite(200,40);
  plane.addImage(planeImg);

  // bombImg.addImage(bombImg);
  // b1.addImage(b1Img,"c1");
  // b2.addImage(b2Img,"c2");
  // b3.addImage(b3Img,"c3");
  // explosion.addImage(explosionImg,"exp");

}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  b1.x = Math.random(0,600);
  b2.x = Math.random(0,600);
  b3.x = Math.random(0,600);

  drawSprites();
  
  plane.x += 3;
  if(plane.x >= 580){
    plane.x = 0;
  }

  if(mouseClicked()){
    drop();
  }

  if(collide(bomb, b1, 40)){
    b1.visible = false;
    b1.changeImage("exp")
    score+= 5;
  }

  if(collide(bomb, b2, 40)){
    b2.visible = false;
    b2.changeImage("exp")
    score +=5;
  }

  if(collide(bomb, b3, 40)){
    b3.visible = false;
    b3.changeImage("exp")
    score += 5;
  }

  textSize(40);
  test("Score: " + score);

}

function drop(){
  Matter.Bodies.applyForce(bomb, {x:0,y:0}, {x:0, y:2});    
}

function collide(body,sprite, k)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=k)
            {
              return true; 
            }
            else{
              return false;
            }
         }
}