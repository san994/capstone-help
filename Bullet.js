class Bullet{

constructor(x,y){

    var option={
  
        isStatic : true,
        density : 0.05,
        friction : 0,
        restitution : 0
 
     }

 

 this.body = Bodies.rectangle(x,y,40,5,option)
 World.add(world,this.body)

}

display(){

 var pos = this.body.position 

 rectMode(CENTER)
 //imageMode(CENTER)
 rect(pos.x,pos.y,40,5)
 

}

}