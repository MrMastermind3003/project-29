const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box, ground;
var polygon, slingshot;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(750,height,1500,20);
    polygon = new Polygon(200,330);
    slingshot = new SlingShot(polygon.body,{x:200, y:300});

    stand1 = new Stand(600, 400, 250, 10);
    stand2 = new Stand(1000, 300, 200, 10);
  

    block1 = new Block(510, 275, 30, 40);
    block2 = new Block(540, 275, 30, 40);
    block3 = new Block(570, 275, 30, 40);
    block4 = new Block(600, 275, 30, 40);
    block5 = new Block(630, 275, 30, 40);
    block6 = new Block(660, 275, 30, 40);
    block7 = new Block(690, 275, 30, 40);

    block8 = new Block(540, 235, 30, 40);
    block9 = new Block(570, 235, 30, 40);
    block10 = new Block(600, 235, 30, 40);
    block11 = new Block(630, 235, 30, 40);
    block12 = new Block(660, 235, 30, 40);

    block13 = new Block(570, 195, 30, 40);
    block14 = new Block(600, 195, 30, 40);
    block15 = new Block(630, 195, 30, 40);

    block16 = new Block(600, 155, 30, 40);

    blocks1 = new Block(940, 175, 30, 40);
    blocks2 = new Block(970, 175, 30, 40);
    blocks3 = new Block(1000, 175, 30, 40);
    blocks4 = new Block(1030, 175, 30, 40);
    blocks5 = new Block(1060, 175, 30, 40);

    blocks6 = new Block(970, 135, 30, 40);
    blocks7 = new Block(1000, 135, 30, 40);
    blocks8 = new Block(1030, 135, 30, 40);

    blocks9 = new Block(1000, 95, 30, 40);

}

function draw(){
    background(200, 200, 200);
    Engine.update(engine);
    
    slingshot.display();
    strokeWeight(0.5);
    polygon.display();  
    
    fill(196, 240, 255);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(0.5);
  stroke(15);
  fill(193, 98, 252);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(227, 190, 250);
  block8.display();
  block9.display();
  block11.display();
  block12.display();
  block10.display();
  fill("white");
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  fill(255, 64, 89);
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill(255, 161, 173);
  blocks6.display();
  blocks8.display();
  blocks7.display();
  fill("white");
  blocks9.display();


}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 slingshot.fly();
}