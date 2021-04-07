
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

	var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
	var roofObject;
	var rope1,rope2,rope3,rope4,rope5;

function setup(){
	createCanvas(1200, 1000);

	engine = Engine.create();
	world = engine.world;

 //Create the Bodies Here
	bobObject1=new Bob(450,500,30);
	bobObject2=new Bob(509,500,30);
	bobObject3=new Bob(568,500,30);
	bobObject4=new Bob(627,500,30);
	bobObject5=new Bob(686,500,30);

    roofObject=new Roof(580,100,500,30);

	rope1 = new Rope(bobObject1.body, roofObject.body, -175, 20);
	rope2 = new Rope(bobObject2.body, roofObject.body, -90, 20);
	rope3 = new Rope(bobObject3.body, roofObject.body, -5, 20);
	rope4 = new Rope(bobObject4.body, roofObject.body, 80, 20);
	rope5 = new Rope(bobObject5.body, roofObject.body, 165, 20);
	
  Engine.run(engine);
  
}

function draw() {
  	rectMode(CENTER);
	background(rgb(120,mouseX,mouseY));

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-75,y:75});
  }
}


