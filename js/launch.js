class launcher{
    constructor(BA,PB){
    var options={
    length:10,
    stiffness:0.002,
    bodyA:BA,
    pointB:PB
    }
    this.bodyA=BA;
    this.pointB=PB;
    this.launcher=Constraint.create(options);
    World.add(world,this.launcher);

    }
    fly(){
        this.launcher.bodyA=null;
   
    }
    attach(BA){
        this.launcher.bodyA=BA;
        
    }
    display(){
        if (this.launcher.bodyA){

        
    var BAP=this.bodyA.position;
    var PBP=this.pointB;
    strokeWeight(2);
    line(BAP.x,BAP.y,PBP.x,PBP.y);
        }
    }
    
}