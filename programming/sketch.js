let snowflakes = []; // array to hold snowflake objects


var r= 255;


var leaf;

function preload() {
    leaf = loadImage('leaf.png');
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(100);
    
      let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

    
    //stem
    stroke(89,193,85);
    strokeWeight(10);
    line(250,500,250,300);
    //leaf
    noStroke();
    fill(89,193,85)
    ellipse(200,400,100,50);
    //petals
    fill(r,50,100);
    ellipse(300,300,100,100);
    //petals
    ellipse(300,200,100,100);
    //petals
    ellipse(200,200,100,100);
    //petals
    ellipse(200,300,100,100);
    //center of flower
    ellipse(250,250,50,50);
}

function mousePressed(){
    r = random(0,255);
}


// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(15, 20);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
//    ellipse(this.posX, this.posY, this.size);
      
      image(leaf, this.posX, this.posY, this.size, this.size)
  }; 
}