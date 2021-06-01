var player, bg1, bg2, bg3, bgImage1, bgImage2, bgImage3, playerImage1, playerImage2, playerImage3;
var dots;
var count=0;
function setup() {
  createCanvas(displayWidth, displayHeight);
  player = createSprite(400, 200, 10, 10);
  player.scale = 0.10;
  player.addImage(playerImage1);
  //bg1.addImage(bgImage1);
  //bg2=addImage(bgImage2);
 
}

function preload() {
  bgImage1 = loadImage('./backgrounds/OIP.jpg');
  bgImage2 = loadImage('./backgrounds/forest.jpg');
  playerImage1 = loadImage('./sprites/bacteria.png');

}

function draw() {
  background(bgImage1);
  player.x = World.mouseX;
  player.y = World.mouseY;
  if(count<1000)
  {
    displayDots();
    
  }
  points();
  // console.log(player);
  // console.log(dots);
  // console.log(count);
  drawSprites();
}
function displayDots()
{
  if(frameCount%20===0)
  {
    dots=new Dots();
    count++;
  }
}
function points(){
 
   if(player.position.x===Dots.x && player.position.y===Dots.y)
   {
     console.log("i ate it");
     sprite.remove()
   }
}