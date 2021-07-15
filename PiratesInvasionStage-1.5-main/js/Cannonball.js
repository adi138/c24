class Cannonball {
    constructor(x, y,) {
      this.x = x;
      this.y = y;
      var options = {
          restitution:0.8,
          friction:1,
          density:1,
          isStatic:true,
      }
      this.r = 40;
      this.body = Bodies.circle(x,y,this.r,options)
      this.image = loadImage("assets/cannonball.png")
      World.add(world,this.body)

    
    }
    shoot() { var velocity = p5.Vector.fromAngle(cannon.angle);
         velocity.mult(20);
         Matter.Body.setStatic(this.body, false);
         Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y }); }
    
    display() {
     
  
      
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      imageMode(CENTER)
     image(this.image,0,0,this.r,this.r);
      pop();
      
    }
  }
  