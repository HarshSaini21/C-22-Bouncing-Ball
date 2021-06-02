const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground, ball;

var myEngine, myWorld;

function setup() {
  createCanvas(800,400);

myEngine = Engine.create();
myWorld = myEngine.world;

var options = {

  isStatic: true
}

ground = Bodies.rectangle(400,350,800,20, options);
World.add(myWorld, ground);

var ballOptions = {
 restitution: 1
}

ball = Bodies.circle(400,100,20, ballOptions);
World.add(myWorld, ball);

console.log(ball);
 
}

function draw() {
  background(0);  

  Engine.update(myEngine);

  var pos = ground.position;

  rectMode(CENTER);
  rect(pos.x,pos.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
 
}