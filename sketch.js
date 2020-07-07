var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var dropZoneBase,dropZoneSide,dropZoneSide2;
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
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	dropZoneBase = createSprite(400,365,200,10);
	dropZoneBase.shapeColor = color(255,0,0);
	dropZoneBase.x = 400;
	dropZoneBase.y = 665;

	dropZoneSide = createSprite(350,625,20,65);
	dropZoneSide.shapeColor = color(255,0,0);
	dropZoneSide.x = 310;
	dropZoneSide.y = 626;

	dropZoneSide2 = createSprite(450,628,20,65);
	dropZoneSide2.shapeColor = color(255,0,0);
	dropZoneSide2.x = 490;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 

  dropZoneBase.x = dropZoneBase.position.x;
  dropZoneBase.y = dropZoneBase.position.y;

  dropZoneSide.x = dropZoneSide.position.x;
  dropZoneSide.y = dropZoneSide.position.y;
  
  dropZoneSide2.x = dropZoneSide2.position.x;
  dropZoneSide2.y = dropZoneSide2.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    Matter.Body.setStatic(packageBody,false);
    //packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
  }
}



