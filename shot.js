class Shoot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.shoot = Constraint.create(options);
        World.add(world, this.shoot);
    }

    fly(){
        this.shoot.bodyA=null;
    }

    Launch(bodyA){
        this.shoot.bodyA=bodyA;
    }

    display(){

        strokeWeight(7);
       
    }
    
}