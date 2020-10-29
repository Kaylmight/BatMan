const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var engine, world;
var bg, man, manAni;
var drop = []


function preload(){

    bg = loadImage("bg.jpg")
    manAni = loadAnimation("walking_8.png", "walking_7.png", "walking_6.png", "walking_5.png", "walking_4.png", "walking_3.png", "walking_2.png", "walking_1.png")
    thund = loadImage("1.png")
    thund2 = loadImage("2.png")
    thund3 = loadImage("3.png")
    thund4 = loadImage("4.png")
}

function setup(){
   createCanvas(displayWidth, displayHeight - 105)

  engine = Engine.create()
  world = engine.world

   man = createSprite(displayWidth/2,495);
   man.scale = 0.5
   man.addAnimation('one',manAni);
}

function draw(){
    
background(0)
Engine.update(engine);
image(bg, 0, 0, displayWidth, displayHeight - 105)

spawnThunder();

if(frameCount % 1 == 0)
{
  drop.push(new Drops(random(0,displayWidth), random(0, 20), 2, 5))
}
for(var i = 0; i<drop.length; i++)
{
  drop[i].display()
}

  drawSprites();
}   

function spawnThunder()
{
  if(frameCount % 80 == 0)
  {
  var thunder = createSprite(random(300, 600), 20);
  var rand = Math.round(random(1,4))
 
    thunder.lifetime = 5;

  switch(rand)
  {
    case 1 : thunder.addImage("thund1", thund)
     break;
    case 2 : thunder.addImage("thund2", thund2)
     break;
    case 3 : thunder.addImage("thund3", thund3)
     break;
    case 4 : thunder.addImage("thund4", thund4)
     break;
  }
}
}