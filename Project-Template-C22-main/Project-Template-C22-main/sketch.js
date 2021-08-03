const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,rope1;
var bob2,rope2;
var bob3,rope3;
var bob4,rope4;
var bob5,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options = {
		restitution: 0.8
	  }

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bobl = Bodies.circle(100,50,10,ball_options);
    World.add(world,bob1);

    bob2 = Bodies.circle(150,50,10,ball_options);
    World.add(world,bob2);

	bob3 = Bodies.circle(200,50,10,ball_options);
    World.add(world,bob3);

    bob4 = Bodies.circle(250,50,10,ball_options);
    World.add(world,bob4);

	bobl = Bodies.circle(300,50,10,ball_options);
    World.add(world,bob1);
  
	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
		
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  ellipse(bob1.position.x,bob1.position.y,10);
  ellipse(bob2.position.x,bob2.position.y,10);
  ellipse(bob3.position.x,bob3.position.y,10);
  ellipse(bob4.position.x,bob4.position.y,10);
  ellipse(bob5.position.x,bob5.position.y,10);
 
}

function keyPressed(){
if(keyCode==RIGHT_ARROW){
 Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.05,y:0});
}
  }
