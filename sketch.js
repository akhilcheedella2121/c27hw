
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var top,right,left;
var Ball1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options ={
        bodyA: top.body,
        bodyB: Ball,
        stiffness: 0.04,
        lenght: 6
  
}
	

	Engine.run(engine);
	var options ={
        bodyA: top.body,
        bodyB: Ball1.body,
        stiffness: 0.04,
        lenght: 6
  
}
var options ={
	bodyA: top.body,
	bodyB: b2.body,
	stiffness: 0.04,
	lenght: 6

}
var options ={
	bodyA: top.body,
	bodyB: b3.body,
	stiffness: 0.04,
	lenght: 6

}
var options ={
	bodyA: top.body,
	bodyB: b4.body,
	stiffness: 0.04,
	lenght: 6

}
var chain = Constraint.create(options)
World.add(world,chain);

function draw() {
  rectMode(CENTER);
  background(0);
left.createSprite(200,0,10)
  
  drawSprites();
 
}


}
