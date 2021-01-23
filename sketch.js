const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg
var hero, fly, ground;

function preload() {
//preload the images here
backgroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 2000);
  engine = Engine.create();
  world = engine.world
  // create sprites here
  hero = new Hero(380,330,400,150);
  
  fly = new Fly(hero.body,{x:400,y:10});
  
  ground = new Ground(600,600,1300,20);

}

function draw() {
  background(backgroundImg);
  
  ground.display();
  hero.display();
}


function mouseDragged(){
  Matter.Body.setPosition(hero.body ,{x:mouseX, y:mouseY});
}
