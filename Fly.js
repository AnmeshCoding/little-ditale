class Fly{
    constructor(bodyA,pointB){
        var options= {
            bodyA : bodyA,
            pointB: pointB,
            stiffness : 1,
            
    }
        this.pointB = pointB;
        this.Fly = Constraint.create(options);
        World.add(world,this.Fly);
    }

     display(){
         var pointA = this.Fly.bodyA.position;
         var pointB = this.pointB;
         line(pointA.x,pointA.y,pointB.x,pointB.y);
     }

}