
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, dustbinObjImage,groundObject, paper, paperImage;
var world;


function preaload(){

	  dustbinObjImage = ("dustbingreen.png", dustbinObj);
	  paperImage = ("paper.png",paper);
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1000,650);
	
    
	paper = createSprite(100,300,30,30);
    //dustbinObj = createSprite(1000,650);
    //dustbinObj.addImage("dustbinObjImage", dustbinObj);

   paper.velocityX = 2;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
   //paper.x = mouseX;
     paper.y = mouseY;



  groundObject.display();
  dustbinObj.display();

 // paper.dispaly();

  drawSprites();

}

