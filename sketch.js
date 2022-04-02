const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var en, wo
var box, ground

function setup() {
    createCanvas(400,400);

    en = Engine.create()
    console.log(en)

    wo = en.world
    console.log(wo)

    var ball_options ={
    restitution : 0.8
    }
    box = Bodies.rectangle(200,100, 30,30, ball_options)
    World.add(wo, box)

    var ground_options={
        isStatic : true
    }
    ground = Bodies.rectangle(200,350,400,10, ground_options)
    World.add(wo, ground)
   
}

function draw() 
{
  background("black")
  rectMode(CENTER)
  Engine.update(en)

  rect(box.position.x, box.position.y, 30,30)
  rect(ground.position.x, ground.position.y, 400,10)

}

