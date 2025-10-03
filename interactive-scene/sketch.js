// Interactive Scene
// Krishitha Saravankumar
// 29 September, 2025
//
// Extra for Experts:
// - explore using the mouse wheel as input


let x = 0;
let y = 0;
let size = 50;

let colums;
let rows;

let foodX;
let foodY;
let score = 0;
let delayMove = 60;
let lastMove = 0;

let gameState = "start";


let colorChange = 0;
let isGreen = true;
let isRed = true;
let isBlue = true;
let isPink = true;

function setup() {
  createCanvas(500, 500);
  colums = width / size;
  rows = height / size;
  placeFood(); // place the first circle
}


// Background Pattern with mouseWheel color change
function drawBackground() {
  if (colorChange === 0) {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (isGreen) fill("lightgreen");
        else fill("white");
        square(x * size, y * size, size);
        noStroke();
        isGreen = !isGreen;
      }
      isGreen = !isGreen;
    }
  }

  if (colorChange === 1) {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (isRed) fill("red");
        else fill("white");
        square(x * size, y * size, size);
        noStroke();
        isRed = !isRed;
      }
      isRed = !isRed;
    }
  }

  if (colorChange === 2) {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (isBlue) fill("lightblue");
        else fill("white");
        square(x * size, y * size, size);
        noStroke();
        isBlue = !isBlue;
      }
      isBlue = !isBlue;
    }
  }

  if (colorChange >= 3) {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (isPink) fill("pink");
        else fill("white");
        square(x * size, y * size, size);
        noStroke();
        isPink = !isPink;
      }
      isPink = !isPink;
    }
  }
}

// Mouse Wheel background switch
function mouseWheel(event) {
  if (event.delta > 0) {
    colorChange += 1;
  } else {
    colorChange -= 1;
  }
}

// Place food/circle in Random grid
function placeFood() {
  foodX = floor(random(colums));
  foodY = floor(random(rows));
}

function draw() {
  drawBackground();

  if (gameState === "start") {
    // Start screen
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(25);
    text("Square Catch Game", width / 2, height / 2 - 50);
    textSize(20);
    text("Use arrow keys to move and catch the circle to score", width / 2, height / 2);
    text("Score 25 points to win!!", width/2, height/2 + 40);
    text("Avoid walls!", width / 2, height / 2 + 80);
    text("Scroll mouse wheel for colors", width / 2, height / 2 + 120);
    text("Press SPACE to start", width / 2, height / 2 + 160);
  }

  if (gameState === "playing") {
    moveSquare();

    // Draw square
    fill("black");
    square(x * size, y * size, size);

    // Draw circle (food)
    fill("purple");
    circle(foodX * size + size / 2, foodY * size + size / 2, size - 10);

    // if collided with food increse score
    if (x === foodX && y === foodY) {
      score++;
      if (score >= 25) {
        gameState = "gameover"; // if reached the winning score gameover
      } else {
        placeFood();
      }
    }

    // Check if collided with wall
    if (x < 0 || x >= colums || y < 0 || y >= rows) {
      gameState = "gameover";
    }
  }
  
  // To display weather won or lost with the final score
  if (gameState === "gameover") {
    // End screen
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(30);
    if (score >= 25) {
      text("YOU WIN!", width / 2, height / 2 - 20);
    } else {
      text("GAME OVER", width / 2, height / 2 - 20);
    }
    textSize(20);
    text("Final Score: " + score, width / 2, height / 2 + 20);
  }
}

// to start the game
function keyPressed() {
  if (gameState === "start" && keyCode === 32) {
    gameState = "playing";
    x = floor(colums / 2);
    y = floor(rows / 2);
    score = 0;
    placeFood();
  }
}

function moveSquare() {
  if (millis() - lastMove > delayMove){ // to slow the speed of the square with millis()
    if (keyIsDown(38)) {
      y --; // move one grid up
    }
    if (keyIsDown(40)) {
      y ++; // move one grid down
    }
    if (keyIsDown(37)) {
      x --; // move one grid left
    }
    if (keyIsDown(39)) {
      x ++; // move one grid right
    }
    lastMove = millis(); 
  }
}