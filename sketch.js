var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
    for (var j = 50; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,100));
       plinkos.push(new Plinko(j,200));
       plinkos.push(new Plinko(j,300));
       plinkos.push(new Plinko(j,400));
    }

}
 
function draw() {
  background("black");
  textSize(20)
  fill(255);
  text("Plinko",20,30);
  Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   if(frameCount%60===0){
     particles.push(new particle(random(10,440), 10,10));
     score++;
   }
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
   for(var k = 0; k < divisions.length; k++){
     divisions[k].display();
   }
}