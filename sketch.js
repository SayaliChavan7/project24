const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,sand,iron;

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,height,1200,15);

   hammer=new Hammer(200,200);

   stone=new Stone(800,400,80,100 );

   iron=new Iron(300,400,80,50);

   rubber=new Rubber(500,200,20,30);

   ball1=new Ball(280,460);
   ball2=new Ball(270,460);
   ball3=new Ball(390,460);
   ball4=new Ball(400,460);
   ball5=new Ball(410,460);
   ball6=new Ball(280,460);

   //Engine.run(engine);
  
}


function draw() {
 
  rectMode(CENTER);

  background("lightblue");

  Engine.update(engine);

  hammer.display();
  ground.display();
  stone.display();
  iron.display();
  rubber.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();

 
   
}


