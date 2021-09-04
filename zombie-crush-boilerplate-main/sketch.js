const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, wall1, wall2, bridge1,bridge2, link;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  wall2 = new Base(windowWidth, windowHeight, 1, windowHeight);
  wall1 = new Base(0, 0, 1, windowHeight);
  ground = new Base(0,windowHeight,windowWidth, 1);
  bridge1 = new Bridge(0,windowHeight/2,20,20);
  bridge2 = new Bridge(windowWidth, windowHeight/2,20,20);
}

function draw() {
  background(51);
  Engine.update(engine);

}
