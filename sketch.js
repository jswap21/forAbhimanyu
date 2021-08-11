
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var Tree;
var ground;
var stone;
var boyImg;
var boy;
var mango1,mango2,mango3,ma4,ma5,ma6,ma7,ma8,ma9,ma10,ma11;
var Line;


function preload()
{
		
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

Tree=new tree(600,350,600,600)
ground=new Ground(400,650,1000,20);
stone=new Stone(250,485,20,20);
boy=new Boy(300,580,150,200);

mango1=new Mango(700,300);
mango2=new Mango(600,100);
mango3=new Mango(600,150);
ma4=new Mango(650,300);
ma5=new Mango(650,200);
ma6=new Mango(500,300);
ma7=new Mango(600,250);
ma8=new Mango(500,250);
ma9=new Mango(500,200);
ma10=new Mango(700,280);
Line=new rope(stone.body,{x:250,y:530});
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	Engine.run(engine);
  
}


function draw() {
  background("silver"); 
  Tree.display();
 ground.display();
 stone.display();
boy.display();
Line.display();

mango1.display();
//mango2.display();
//mango3.display();
//ma4.display();
//ma5.display();
//ma6.display();
//ma7.display();
//ma8.display();
//ma9.display();
//ma10.display();
//ma11.display();
 detectollision(stone,mango1);
// detectollision(stone,mango2);
// detectollision(stone,mango3);
 //detectollision(stone,ma4);
 //detectollision(stone,ma5);
 //detectollision(stone,ma6);
// detectollision(stone,ma7);
// detectollision(stone,ma8);
 //detectollision(stone,ma9);
 //detectollision(stone,ma10);
 //detectollision(stone,ma11)

 
 drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
    
}
function mouseReleased(){
	Line.fly();
}

function detectollision(lstone,lmango){
	// var collision = Matter.SAT.collides(lstone,lmango);
	//  if(collision.collided){ console.log("collided");
	  // Matter.Body.setStatic(lmango,false); }
	 
		stoneBodyPosition=lstone.body.position;
		mangoBodyPosition=lmango.body.position;
		
//	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		  //console.log(distance)
		   // console.log(lmango.r+lstone.r)
	//if(distance<=lmango.r+lstone.r) { 
		//console.log(distance);
	//	 Matter.Body.setStatic(lmango.body,false); 
	//	} 
	}


function keyPressed(){
	if(keyCode==="space"){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		Line.attach(stone.body);
	}
}

