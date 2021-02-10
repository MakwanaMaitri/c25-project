class Paper {
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        } 

        this.body = Bodies.angle(x, y,  options);
       // this.width = width;
      //  this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        image("papaer.png",paper);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
      //  image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
    