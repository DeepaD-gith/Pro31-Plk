var  name2 = "Mohit";
console.log("Name " +  name2)
console.log(typeof(name2))

var  Age = 14;
console.log("age " +  Age)
console.log(typeof(Age))

name2 = true;
console.log(typeof(name2))

var students = ["Om","Tara","Deepa"]
console.log((students))
students.push("Nikitha")

console.log((students))
students.pop();
console.log((students))
console.log(typeof(students))

var position = [[0,1],[2,1]];
console.log((position))


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var engine,world;

var divisions = [];
var plinko = [];
var Arrcount =0;
var balls = [];

function setup() {
  createCanvas(500,700);

  engine = Engine.create();
  world = engine.world

  ground = new StaticRect(width/2,height-10,width,height/20)

  for (var i=5;i<width;i+=95)
  {
    divisions[Arrcount] = new StaticRect(i,(height-128),10,200);
    Arrcount++;
  }
  Arrcount = 0;
  var rowCt = 1;
  for (var i=50;i<height-200;i+=95)
  {

    for (var j=0;j<width;j+=50)
    {
      plinko[Arrcount] = new Plinko((rowCt%2*25)+j,i,10);
      Arrcount++;
    } 
    rowCt ++;  
  }
  Arrcount = 0;

  Engine.run(engine);
}


function draw() {
  background(0);  
  ground.display();
  for (var i=0;i<divisions.length;i++)
  {
    divisions[i].display();
  }
  for (var i=0;i<plinko.length;i++)
  {
    plinko[i].display();
  }

  if(frameCount%30===0)
  {
  balls[Arrcount] = new Particles(random(50,width-100),0,15);
  Arrcount++;
  }
  for (var k=0;k<balls.length;k++)
  {
    balls[k].display();
  }
 
}