class Player{

    constructor(x,y){
  
      var options={
  
         isStatic : false,
         
         density : 0.01,

         friction : 0.10

      }

      this.image = loadImage("hero 2.png")
  
      this.body = Bodies.circle(x,y,50,options)
      this.radius = 20
     
      World.add(world,this.body)
  
    }
  
   display(){
  
      var pos = this.body.position
  
      push()
      ellipseMode(RADIUS)
      imageMode(CENTER)
      fill("lightBlue")
      ellipse(pos.x,pos.y,this.radius,this.radius+20);
      image(this.image,pos.x+12,pos.y,200,200)
      
      pop()
  
   }
  
  
  }