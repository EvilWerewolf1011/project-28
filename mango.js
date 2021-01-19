class Mango{
    constructor(x, y,width,height) {
        var options = {
            isStatic:true,
            'restitution':0.5,
            'friction':1.0,
        }
        this.body = Bodies.rectangle(x, y, width-10,height-10 , options);
        this.width = width;
        this.height = height;
        this.image = loadImage("rock1.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0,this.width, this.height);
        pop();
      }
}