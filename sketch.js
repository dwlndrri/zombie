class Mover {
    constructor(x,y){
      this.location = createVector(x, y);
      this.velocity = createVector(random(-0,0), random(-0,0))
    }
    display(){
      noStroke();
      fill(255);
      rect(this.location.x, this.location.y, 20, 20);
    }
    update(){
      this.location.add(this.velocity);
      
      var mouse = createVector(mouseX, mouseY);
      var dir = mouse.sub(this.location);
      var topSpeed = 1
      dir.normalize();
      dir.mult(0.5);
      this.velocity.add(this.acceleration);
      this.velocity.add(dir);
      this.velocity.limit(topSpeed);
      this.location.add(this.velocity);
    }
    cekUjung(){
      if ( this.location.x > windowWidth ) {
        this.location.x = 0;
      }
      else if (this.location.x < 0){
        this.location.x = windowWidth;
      }
      if ( this.location.y > windowHeight ) {
        this.location.y = 0;
      }
      else if (this.location.y < 0){
        this.location.y = windowHeight;
      }
    }
  }

let zombie = [];  
  
function setup() {
    createCanvas(1320, 540);
    mover = new Mover(width/2,height/2);
}
  
function draw() {
    background(199,21,133);
    
    //stroke('blue')
    //center = createVector(width/2, height/2);
    //mouse = createVector(mouseX, mouseY);
    //var vec = p5.Vector.sub(mouse);
    //ellipse(mouse.x, mouse.y, 15,15)

    mover.cekUjung();
    mover.display();
    mover.update();

    //var mover = mouse.heading();
    //stroke('black')
    //Text("Zombie");

}