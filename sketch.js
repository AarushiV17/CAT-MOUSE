var garden , gardenImg;
var cat , catImg , catImg2;
var mouse , mouseImg , mouseImg2;


function preload() {
    gardenImg = loadImage("garden.png");
    catImg = loadAnimation("cat1.png");
    mouseImg = loadAnimation("mouse1.png");
    cat2Img = loadAnimation("cat2.png","cat3.png");
    mouse2Img = loadAnimation("mouse2.png","mouse3.png");
}

function setup(){
    createCanvas(800,600);
   cat = createSprite(600,500);
   cat.addAnimation("catSit",catImg);
   cat.scale = 0.2;

   mouse = createSprite(200,500);
   mouse.addAnimation("mouseSit",mouseImg);
   mouse.scale = 0.1;
}

function draw() {

    background(gardenImg);           
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
   {
    cat.velocityX = 0;
    cat.x = 350;
    cat.scale = 0.2;
    cat.addAnimation("catRun",cat2Img);
    cat.changeAnimation("catRun",cat2Img);

    mouse.scale = 0.1;
    mouse.addAnimation("mouseTeasing",mouse2Img);
    mouse.changeAnimation("mouseTeasing",mouse2Img);
    } 

    keyPressed();

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW)
  {
    cat.velocityX = -5;
    cat.addAnimation("catRun",cat2Img);
    cat.changeAnimation("catRun");

    mouse.addAnimation("mouseTeasing",mouse2Img);
    mouse.changeAnimation("mouseTeasing");
  }

  if(keyCode === RIGHT_ARROW)
  {
      mouse.addAnimation("mouseTeasing",mouse2Img);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }
 
}
