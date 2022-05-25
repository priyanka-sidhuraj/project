const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



function setup(){
    canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    sim=new Tower(20,200,100,300)
    
}

function draw(){
    background(0);
    Engine.update(engine);
  sim.display()
}
