class Ground{
    constructor(x,y,width,height){
        var options = {
          'isStatic': true,
          'density' : 0.5
        }
        this.width = width;
        this.height = height;
        //this.position.x = x;
       // this.position.y =y;

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
     }

     display(){
         
         var pos = this.body.position;
         fill("white")
         stroke("white");
         strokeWeight(7)
         rectMode(CENTER);
         rect(pos.x,pos.y,this.width,this.height);
     }
}