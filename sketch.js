
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree,treeImg;
var groundImage,ground,surface;
var boy, boyImg;
var rock;
var mango1, mango2, mango3, mango4, mango5, mango6, maango7, mango8, mango9, mango10;

function preload(){

	groundImage = loadImage("ground.PNG")
	treeImg=loadImage("tree1.png");
	boyImg=loadImage("1.png");
	
}

function setup() {
	createCanvas(1350, 650);

	engine = Engine.create();
	world = engine.world;

	surface = new Ground(650,650,1400,10);
	rock=new Rock(100,460,30,30);
	mango1=new Mango(600,290,40,40);
	mango2=new Mango(855,325,42,42);
	mango3=new Mango(670,260,40,40);
	mango4=new Mango(730,200,40,40);
	mango5=new Mango(710,320,45,45);
	mango6=new Mango(780,250,40,40);
	mango7=new Mango(825,170,40,40);
	mango8=new Mango(880,260,50,50);
	mango9=new Mango(940,220,40,40);
	mango10=new Mango(980,305,40,40);

	attach=new Shoot(rock.body,{x:100,y:465});

	ground=createSprite(675,325);
	ground.addImage(groundImage);
	ground.scale=5;

	tree=createSprite(775,368);
	tree.addImage(treeImg);
	tree.scale=2;

	boy=createSprite(160,550);
	boy.addImage(boyImg);
	boy.scale=1;

	


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);


  detectCollision(rock,mango1);
  detectCollision(rock,mango2);
  detectCollision(rock,mango3);
  detectCollision(rock,mango4);
  detectCollision(rock,mango5);
  detectCollision(rock,mango6);
  detectCollision(rock,mango7);
  detectCollision(rock,mango8);
  detectCollision(rock,mango9);
  detectCollision(rock,mango10);

  drawSprites();

  ground.display();
  boy.display();
  tree.display();
  rock.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  surface.display();

  
  fill("black");
  textSize(18);
  text("- Press spacebar for more chances -",50,50);

}

function mouseDragged(){
	Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lrock,lmango){

	if(lrock.body.position.x- lmango.body.position.x <lmango.width/2 + lrock.width/2 
		&& lmango.body.position.x - lrock.body.position.x < lmango.width/2 + lrock.width/2 
		&&lrock.body.position.y -lmango.body.position.y < lmango.height/2 + lrock.height/2 
		&& lmango.body.position.y - lrock.body.position.y < lmango.height/2 + lrock.height/2)
		{ Matter.Body.setStatic(lmango.body,false); }

}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(rock.body,{x:100,y:465});
		attach.Launch(rock.body);
	}
}