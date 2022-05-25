class Tower{

constructor(x,y,width,height){
var options={
    isStatic:true
}
this.pri=loadImage("assets/tower.png")
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
World.add(world,this.body)

}

display(){


imageMode(CENTER)
image(this.pri,this.body.position.x,this.body.position.y,this.width,this.height)

}



}