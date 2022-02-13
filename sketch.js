var bgImg,bg;
var girlImg,girl;
var snow,snowImg;


function preload(){
  bgImg = loadImage("snow3.jpg");
  girlImg = loadImage("bg.png");
  snowImg = loadImage("snow4.webp");
  }


function setup() {
  createCanvas(1000,700);
  
  girl= createSprite(600, 500, 50, 50);
  girl.addImage(girlImg);
  girl.scale=0.90;

  snow = createSprite(200,70,50,50);
  snow.addImage(snowImg);
  snow.scale=0.20;

  snow = createSprite(450,190,50,50);
  snow.addImage(snowImg);
  snow.scale=0.20;
  
  snow = createSprite(100,250,50,50);
  snow.addImage(snowImg);
  snow.scale=0.25;

  snow = createSprite(600,300,50,50);
  snow.addImage(snowImg);
  snow.scale=0.20;

  snow = createSprite(650,70,50,50);
  snow.addImage(snowImg);
  snow.scale=0.25;

  snow = createSprite(850,250,50,50);
  snow.addImage(snowImg);
  snow.scale=0.25;
}

function draw() {
  background(bgImg);  
  drawSprites();
}