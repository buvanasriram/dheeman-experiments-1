function preload() {
  trollImg = loadImage("images/rpgcharacter_18.png");
  beamImg = loadImage("images/gameplayobject_arrow_02.png");
  powerPadImg = loadImage("images/powerupBlue_bolt.png");
  watergirlImg = loadImage("images/gameplayadventure_04.png");
  exitImg = loadImage("images/exit.png");

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  troll=createSprite(270,160,10,10);
  troll.addImage(trollImg);
  troll.scale = 0.4;
  
  lava = createSprite(158,282,45,14);
  lava.shapeColor = "orange";
  
  lava2 = createSprite(249,293,100,15);
  lava2.shapeColor = "orange";
  
  lava3 = createSprite(200,236,300,10);
  lava3.shapeColor = "orange";
  lava3.velocityX = -6;
  
  button1=createSprite(200,354,30,10);
  button1.shapeColor = (rgb(0,0,128));
  
  beam = createSprite(108,185);
  beam.addImage(beamImg)
  beam.scale = 0.1;
  beam.visible = false;
  
  gate1=createSprite(250,330,20,70);
  gate1.shapeColor = (rgb(0,0,128));
  gate1.rotation = 45;
  gate1.rotationSpeed = 3;
  
  powerPad=createSprite(20,261);
  powerPad.addImage(powerPadImg);
  
  watergirl=createSprite(49,348,20,20);
  watergirl.shapeColor = "cyan";
  watergirl.bounce(gate1);
  watergirl.addImage(watergirlImg);
  watergirl.scale = 0.07;
  
  exit=createSprite(348,190,50,50);
  exit.addImage(exitImg);
  exit.scale = 0.3;
  
  
  b1=createSprite(152,360,500,10);
  b1.shapeColor ="black" ;

  b2=createSprite(100,284,400,10);
  b2.shapeColor = "black";
    
  b3=createSprite(250,225,300,10);
  b3.shapeColor = "black";

  edges = createEdgeSprites();
}

function draw() {
  background(rgb(178,34,34) );
  watergirl.setVelocity(0,0);
  drawSprites();
  
  watergirl.bounceOff(edges);

  watergirl.bounceOff(b1);
  watergirl.bounceOff(b2);
  watergirl.bounceOff(b3);
  watergirl.bounce(gate1);
  lava3.bounceOff(edges);

  if (keyDown("space")) {
    watergirl.velocityY = -12;
  }
  watergirl.velocityY += 1.5;
  watergirl.collide(b1)

  if (keyDown(UP_ARROW)) {
      watergirl.setVelocity(0,-6) 
  }
  if (keyDown(DOWN_ARROW)) {
    watergirl.setVelocity(0,6);
  }
  if (keyDown(LEFT_ARROW)) {
    watergirl.setVelocity(-6,0);
  }
  if (keyDown(RIGHT_ARROW)) {
    watergirl.setVelocity(6,0);
  }
 
  if (watergirl.isTouching(button1)){
    gate1.x = 1;
    gate1.y = 0;
    gate1.visible = false ;
  }
      
  if (watergirl.isTouching(lava) || watergirl.isTouching(lava2) ||
      watergirl.isTouching(lava3) || watergirl.isTouching(troll)){
      watergirl.x = 49;
      watergirl.y = 348;
  }
  
  if (watergirl.isTouching(powerPad)){
    powerPad.visible = false;
  }
  
  if (keyDown("f")){
    beam.visible = true;
    beam.velocityX = 5;
  }
  
  if (troll.isTouching(beam)){
    troll.visible = false;
    beam.visible = false;
    troll.x = 0;
    troll.y = 1;
  }
  
  if (watergirl.isTouching(exit)){
    watergirl.visible = false;
    troll.visible = false;
    gate1.visible = false;
    button1.visible = false;
    beam.visible = false;
    powerPad.visible = false;
    exit.visible = false;
    lava.visible = false;
    lava2.visible = false;
    lava3.visible = false;
    b1.visible = false;   
    b2.visible = false;  
    b3.visible = false;
    
    text("YOU WON LEVEL 1!CONGRATS",100,200,200,200);
  }
  
  
    
}
