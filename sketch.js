
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var leftcontainer
var rightcontainer
var bottemcontainer

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Container(700,680,1400,20)
     leftcontainer=new Container(1100,600,30,120)
	 rightcontainer=new Container(1300,600,30,120)
	 bottemcontainer=new Container(1200,650,200,30)
	 var balloptions={
		 restitution:1
	 }
	 ball=Bodies.circle(300,600,30,balloptions)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  leftcontainer.display()
  rightcontainer.display()
  bottemcontainer.display()
  ground.display()
  push()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
  pop()
}

function keyPressed(){
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


