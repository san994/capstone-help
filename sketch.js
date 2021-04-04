const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var player;

var word = ""

var LEVEL1 = 0,LEVEL2 = 1,LEVEL3 = 2

var LEVEL4 = 3,LEVEL5 = 4,LEVEL = 5

var gameState = LEVEL1

var bullet = []

var bb = 0

var canvas
function preload(){

  jumpsound = loadSound("player jump.wav")
  shootsound = loadSound("shoot.wav")
  hitsound = loadSound("Hit_Hurt.wav")
  explosionsound = loadSound("Explosion.wav")
    
}

function setup(){
  canvas =  createCanvas(1500,600)  
   engine = Engine.create()
   world = engine.world

   player = new Player(100,100)
 
  

   
  
  
    keyPressed();
    
  
}

function draw(){
  background("lightBlue");

  Engine.update(engine);

  ground = new Ground(1000,500)

  platform = new Platform(200,450,600,300)

  platform2 = new Platform(1000,450,600,300)

  platform3 = new Platform(1500,450,600,500)

  if(gameState === LEVEL1){
 
   // keyPressed();

   
      weapon = new Weapon(player.body.position.x,player.body.position.y)


     // bullet = new Bullet(weapon.body.position.x,weapon.body.position.y)

      early = new Enemy(1000,200)

   ground.display();
   platform.display()
   platform2.display()

   platform3.display()
   early.display()
   player.display()
  
   weapon.display()
  

  

   if(keyDown("f")){

    

    bullet.push(new Bullet(player.body.position.x,player.body.position.y))

    

  }
  
  for(var i = 0;i<bullet.length;i++){
  
    bullet[i].display();

    bb+1
    bullet[i].body.position.x++

  }
     
  
    if(collider(player,early)){

       early.shapeColor = "red"
       player.shapeColor = "red"

    }
   
  
  }
}

 
  function keyPressed(){


  if( keyCode === 37){

     Matter.Body.applyForce(player.body,player.body.position,{x:-10,y:35})
     // player.body.position.x -=5

  }

  if( keyCode === 39){

    Matter.Body.applyForce(player.body,player.body.position,{x:10,y:35})
  // player.body.position.x +=5

 }

if( keyCode === 32){

 //  Matter.Body.applyForce(player.body,player.body.position,{x:-10,y:-10})
 Matter.Body.applyForce(player.body,player.body.position,{x:30,y:35})
 Matter.Body.applyForce(player.body,player.body.position,{x:30,y:35})
 // player.body.position.y -=10

  jumpsound.play()

}

if( keyCode === 40){

  //Matter.Body.applyForce(player.body,player.body.position,{x:30,y:-30})
 
  player.body.position.y +=5
 
  
 
 }



  }
 

 function collider(object1,object2){

  if((object2.x-object1.x) < (object2.width/2 + object1.width/2)
   && (object2.x-object1.x < object1.width/2 + object2.width/2)
  && (object1.y-object2.y < object2.height/2 + object1.height/2)
  && (object1.y-object2.y < object2.height/2 + object1.height/2)){

     return true

  }else{

      return false

  }
  }


