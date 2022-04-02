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

    box = Bodies.rectangle(200,100, 30,30)
    World.add(wo, box)

    var options={
        isStatic : true
    }
    ground = Bodies.rectangle(200,350,400,10, options)
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

