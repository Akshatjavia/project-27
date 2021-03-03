
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bob1,bob2,bob3,bob4,bob5;
var ground;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1510, 726);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 ground=new Roof(755,706,1510,20);
	 
	 roof=new Roof(760,60,500,20);
	 World.add(world,roof);

	 bob1=new Bob(560,450);
	 bob2=new Bob(660,450);
	 bob3=new Bob(760,450);
	 bob4=new Bob(860,450);
	 bob5=new Bob(960,450);

	 rope1 = new Rope(bob1.body,roof.body,-200,0);
	 World.add(world,rope1);

	 rope2 = new Rope(bob2.body,roof.body,-100,0);
	 World.add(world,rope2);

	 rope3 = new Rope(bob3.body,roof.body,0,0);
	 World.add(world,rope3);

	 rope4 = new Rope(bob4.body,roof.body,+100,0);
	 World.add(world,rope4);

	 rope5 = new Rope(bob5.body,roof.body,+200,0);
	 World.add(world,rope5);
	 
	Engine.run(engine);
  
}


function draw() {
  background("yellow");

  Engine.update(engine);
  
  ground.display();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-330,y:0});
	}
}

