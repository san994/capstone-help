class Ground{

  constructor(x,y){

    var options={

       isStatic : true

    }

    this.body = Bodies.rectangle(x,y,2000,50,options)
    World.add(world,this.body)

  }

 display(){

    var pos = this.body.position

    push()
    rectMode(CENTER)
    rect(pos.x,pos.y,2000,50);
    pop()

 }


}