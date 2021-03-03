class Rope{
  constructor(body1,body2,offsetX,offsetY){
    this.offsetX=offsetX;
    this.offsetY=offsetY;
    var options ={
        bodyA: body1,
        bodyB: body2,
        pointB:{x:this.offsetX,y:this.offsetY}
    }
    
    this.rope=Matter.Constraint.create(options);
    World.add(world,this.rope);
  }
   display(){
       var point1=this.rope.bodyA.position;
       var point2=this.rope.bodyB.position;

       strokeWeight(5);
       
       var point1x = point1.x;
       var point1y = point1.y;

       var point2x = point2.x + this.offsetX;
       var point2y = point2.y + this.offsetY;

       line(point1x,point1y,point2x,point2y);
       
   }
}