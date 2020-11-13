const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {

  bg1 = loadImage("bg.jpg")
  polygonImg = loadImage("polygon.png")

}

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400, 550, 350, 10);
  ground2 = new Ground(892, 342, 240, 10);
  
  //level 1 of blocks

  block1 = new Box(518, 514, 40, 60);
  block2 = new Box(478, 514, 40, 60);
  block3 = new Box(438, 514, 40, 60);
  block4 = new Box(398, 514, 40, 60);
  block5 = new Box(358, 514, 40, 60);
  block6 = new Box(318, 514, 40, 60);
  block7 = new Box(278, 514, 40, 60);

  //level 2 of blocks

  block8 = new Box(478, 454, 40, 60);
  block9 = new Box(438, 454, 40, 60);
  block10 = new Box(398, 454, 40, 60);
  block11 = new Box(358, 454, 40, 60);
  block12 = new Box(318, 454, 40, 60);
  
  //level 3 of blocks

  block13 = new Box(438, 394, 40, 60);
  block14 = new Box(398, 394, 40, 60);
  block15 = new Box(358, 394, 40, 60);

  //level 4 of blocks

  block16 = new Box(398, 334, 40, 60);

  //level 1 of blocks(2)

  block17 = new Box(972, 307, 40, 60);
  block18 = new Box(932, 307, 40, 60);
  block19 = new Box(892, 307, 40, 60);
  block20 = new Box(852, 307, 40, 60);
  block21 = new Box(812, 307, 40, 60);

  //level 2 of blocks(2)

  block22 = new Box(932, 247, 40, 60);
  block23 = new Box(892, 247, 40, 60);
  block24 = new Box(852, 247, 40, 60);

  //level 3 of blocks(2)

  block25 = new Box(892, 187, 40, 60);

  //polygon

  polygon = Bodies.circle(150, 200, 50);
  World.add(world, polygon);

  slingShot = new SlingShot(this.polygon, {x: 150, y: 200});

}

function draw() {
  background(bg1);  
  
  Engine.update(engine);
  
  ground1.display();
  ground2.display();

  fill (59, 229, 247)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill (240, 158, 222)
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill (134, 247, 223);
  block13.display();
  block14.display();
  block15.display();

  fill(250, 80, 125);
  block16.display();

  fill(242, 166, 34);
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill(237, 240, 65);
  block22.display();
  block23.display();
  block24.display();

  fill(167, 76, 237);
  block25.display();

  slingShot.display();
  imageMode (CENTER);
  image (polygonImg, polygon.position.x, polygon.position.y, 50, 50);

  fill("black");
  text(mouseX+ ","+mouseY,mouseX,mouseY);
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}
