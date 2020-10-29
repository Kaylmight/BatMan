class Drops {
    constructor(x, y,r) {

        var options ={
            restitution:0.4,
            isStatic : false
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, r,options);       
       // this.color = "Blue";
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        //noStroke();
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r,this.r);
        pop();
    }

};