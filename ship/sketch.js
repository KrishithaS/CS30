// OOP Pair Programming Starter Code
// Jaden and Krishitha
// 26 November, 2025


// ------------------------------------------------------------------------- //
// You don't need to edit this section, but you should read it carefully to 
// understand what is required in the classes.

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  if (key === " "){
    enterprise.handleKeyPress();
  }
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.image = theImage;
    this.speed = 10;
  }

  update() {
    if(keyIsDown(87) === true){
      this.y -= this.speed;
    }

    if(keyIsDown(83) === true){
      this.y += this.speed;
    }

    if(keyIsDown(65) === true){
      this.x -= this.speed;
    }

    if(keyIsDown(68) === true){
      this.x += this.speed;
    }

    // if doing extra for experts, show bullet(s)
  }

  display() {
    image(this.image, this.x, this.y);
  }

  handleKeyPress() {
    // if you are, you should make a bullet if the space key was pressed
    let numberOfBullet = 0;
    if(keyIsDown(32) === true){
      numberOfBullet += 1;
    }

    for(let i = 0; i < numberOfBullet; i++) {
      image(this.image, this.x, this.y - 5);
    }
  }
}

let bullet = [];
// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 5;
    this.image = theImage;
  }

  update() {
    this.y -= this.dy;
    // what does the bullet need to do during each frame? how do we know if it is off screen?
  }

  display() {
    image(this.image, this.x, this.y);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
  }
}

