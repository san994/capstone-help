class Enemy{

    constructor(x,y){
  
      var options={
  
         isStatic : true
  
      }

      //this.image = loadImage("early man 2.png")
  
      this.body = Bodies.rectangle(x,y,50,50,options)
      World.add(world,this.body)
  
    }
  
   display(){
  
      var pos = this.body.position
  
      push()
      rectMode(CENTER)
      //imageMode(CENTER)
      fill("green")
      rect(pos.x,pos.y,50,50);
     // image(this.image,pos.x,pos.y,50,50)
      pop()
  
   }
  
  
  }