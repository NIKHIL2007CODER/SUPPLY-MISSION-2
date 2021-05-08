var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var red1,red2,red3,red1Body,red2body,red3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
var canvas = createCanvas(1365,624);

    engine = Engine.create();
    world = engine.world;

	rectMode(CENTER);
	

	packageSprite=createSprite(width/2,80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 130, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.9

	groundSprite=createSprite(width/2, height-10, width,30);
	groundSprite.shapeColor="limegreen";

    red1 = createSprite(width/2,height-20,200,30);
	red1.shapeColor="red";
   

	red2 = createSprite(580,height-60,20,120);
    red2.shapeColor='red';
    

	red3 = createSprite(780,height-60,20,120);
	red3.shapeColor="red";
    

	var ground_options ={
        isStatic: true
   }

   var packageBody_options ={
       isStatic : true
   }
   var red1Body_options={
	   isStactic:true
	 
   } 
    
	

	packageBody = Bodies. circle(width/2 , 130 , 5 ,packageBody_options);
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 30 ,ground_options );
 	World.add(world, ground);

	red1Body = Bodies.rectangle(width/2,height-20,200,50,red1Body_options,fill('red'));
    World.add(world, red1Body);
	
	red2Body = Bodies.rectangle(580,height-60,20,120);
	World.add(world, red2Body);

	red3Body = Bodies.rectangle(780,height-60,20,120);
	World.add(world, red3Body);

	
	
}


function draw() {
  rectMode(CENTER);
  background('skyblue');
  Engine.update(engine);
  
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

red1.x=red1Body.position.x;
red1.y=red1Body.position.y;

 
  if (red1.x<-50 || 
      red2.x<-90 ||
	  red3.x<-10)
	  {
	  red1.x=1265;
	  red2.x=1165;
	  red3.x=1365;
  }

  drawSprites();
 
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW || keyDown("SPACE")) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

   var packageBody_options ={
       restitution : 0.3,
	  
   }
	packageBody = Bodies.circle(width/2 , 130 , 5 , packageBody_options);
	World.add(world, packageBody);
    
  }
}



