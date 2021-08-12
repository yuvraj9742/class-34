const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground,rope,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10


function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(800,800,2000,20)
  ball=new Ball(200,200,200,200)
  rope=new Rope(ball.body,{x:500,y:50})
  box1= new Box(700,100,200,100)
  box2= new Box(700,100,200,100)
  box3= new Box(700,100,200,100)
  box4= new Box(700,100,200,100)
  box5= new Box(700,100,200,100)
  box6= new Box(700,100,200,100)
  box7= new Box(700,100,200,100)
  box8= new Box(700,100,200,100)
  box9= new Box(700,100,200,100)
  box10= new Box(700,100,200,100)

}

function draw() {
  background("skyblue");
  Engine.update(engine);
  ground.display()
  ball.display()
  rope.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
 



}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}




