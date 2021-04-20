const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new Paperball(225, 0, 80)
	side1 = new Dustbin(910, 465, 20, 150)
	side2 = new Dustbin(1090, 465, 20, 150)
	side3 = new Dustbin(1000, 550, 200, 20)
    ground = new Ground(600, 570, 1200, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  keyPressed()
  drawSprites()
  
  paperball.display()
  side1.display()
  side2.display()
  side3.display()
  ground.display()

 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperball.body, paperball.body.position, {x:85, y: -85})
	}
}



