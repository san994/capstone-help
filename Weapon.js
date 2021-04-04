class Weapon{


constructor(x,y){

  var option={
  
    isStatic : false,
    density : 0.05,
    friction : 0,
    restitution : 0

 }

  this.body = Bodies.rectangle(x,y,50,10,option);

  this.image = loadImage("gun.png");
  World.add(world,this.body)

}

display(){

 var pos = this.body.position
 
 rectMode(CENTER)
 //fill("green")
 imageMode(CENTER)
 //rect(pos.x,pos.y,50,10);
 image(this.image,pos.x,pos.y,500,10)

}



}