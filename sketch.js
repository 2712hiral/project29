const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;
var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;
var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;
var polygon1;

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world

  ground1 = new Ground(257, 318, 300, 10);

  //first level
  BlockBlue1 = new BoxBlue(300, 275, 30, 40);
  BlockBlue2 = new BoxBlue(330, 275, 30, 40);
  BlockBlue3 = new BoxBlue(360, 275, 30, 40);
  BlockBlue4 = new BoxBlue(390, 275, 30, 40);
  BlockBlue5 = new BoxBlue(420, 275, 30, 40);
  BlockBlue6 = new BoxBlue(450, 275, 30, 40);
  BlockBlue7 = new BoxBlue(480, 275, 30, 40);

  //second level
  BlockPink1 = new BoxPink(330, 235, 30, 40);
  BlockPink2 = new BoxPink(360, 235, 30, 40);
  BlockPink3 = new BoxPink(390, 235, 30, 40);
  BlockPink4 = new BoxPink(420, 235, 30, 40);
  BlockPink5 = new BoxPink(450, 235, 30, 40);

  //BlockPink7 = new BoxPink(320, 235, 30, 40);

  //third level
  BlockBlue8  = new BoxBlue(360, 195, 30, 40);
  BlockBlue9  = new BoxBlue(391, 195, 30, 40);
  BlockBlue10 = new BoxBlue(418, 195, 30, 40);
  //top
  BlockPinktop = new BoxPink(390, 155, 30, 40);

 // BlockBlue11 = new BoxBlue(260, 182, 20, 20);
 // BlockBlue12 = new BoxBlue(280, 182, 20, 20);
 // BlockBlue13 = new BoxBlue(300, 182, 20, 20);
  //BlockBlue14 = new BoxBlue(320, 182, 20, 20);

  polygon_1 = new poly(110, 100, 20, 20);
  World.add(world,polygon_1);

  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background("lightBlue");

  text(mouseX+","+mouseY,mouseX,mouseY);

  ground1.display();

  BlockBlue1.display();
  BlockBlue2.display();
  BlockBlue3.display();
  BlockBlue4.display();
  BlockBlue5.display();
  BlockBlue6.display();
  BlockBlue7.display();
  BlockBlue8.display ();
  BlockBlue9.display ();
  BlockBlue10.display();
  //BlockBlue11.display();
 // BlockBlue12.display();
 // BlockBlue13.display();
  //BlockBlue14.display();

  BlockPink1.display ();
  BlockPink2.display ();
  BlockPink3.display ();
  BlockPink4.display ();
  BlockPink5.display ();
  BlockPinktop.display ();
  //BlockPink7.display ();

  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}