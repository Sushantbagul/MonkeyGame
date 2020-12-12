
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,500);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1

  ground = createSprite(400,350,2100,10);
  ground.velocityX=-20;
  ground.x = ground.width /2;
  console.log(ground.x)
  
  FoodGroup = createGroup();
    obstaclesGroup = createGroup();
}
  

function draw() {
background("")
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+survivalTime,100,50);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  
      //add gravity
  monkey.velocityY=monkey.velocityY +0.8;
  
  monkey.collide(ground);
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
  }
      if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0; monkey.velocityY = 0;                  obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0); 
        obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1); }
  
  food();
  obstacles();
   drawSprites();
}
function food(){
   if (frameCount % 80 === 0){
     var food = createSprite(600,120,40,10);
     food.y = Math.round(random(200,220));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    food.lifetime = 200; 
    
     FoodGroup.add(food);
   }
} 
function obstacles(){
   if (frameCount % 100 === 0){
      var obstacle = createSprite(500,325,100,100);
    //var rand = Math.round(random(1,6));
      obstacle.addImage(obstaceImage);   
      obstacle.scale=0.1;
      obstacle.velocityX = -3;
     obstacle.lifetime = 300; 
            
   
    obstaclesGroup.add(obstacle);
   }
}


