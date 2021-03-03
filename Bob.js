class Bob{
     constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8,
        }
        this.body=Bodies.circle(x,y,50,options);
        World.add(world,this.body);
     }
     display(){
        push();
        var pos=this.body.position;
        ellipseMode(CENTER);
        fill("black");
        ellipse(pos.x,pos.y,100,100);
        pop();
     }
}