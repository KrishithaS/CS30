// Interactive Scene
// Krishitha Saravankumar
// 29 September, 2025
//
// Extra for Experts:
// - explore using the mouse wheel as input


// let x;
// let y;
// let isGreen = true;
// let squareSize = 50;
// let isRed = true;
// let isBlue = true;
// let colorChange = 0;
// let isPink = true;
// let speed = 5;

// function setup() {
//   createCanvas(500, 500);
// }

// function draw() {
//   showSquare();
// }

// function mouseWheel(event){
//   if (event.delta > 0){
//     colorChange += 1;
//   }
//   else{
//     colorChange -= 1;
//   }
// }

// function showSquare(){
//   if(colorChange === 0){
//     for (let x = 0; x < 10;x ++){
//       for(let y = 0; y < 10;y ++){
//         if(isGreen){
//           fill("lightgreen");
//         }
//         else{
//           fill("white");
//         }
//         square(x*squareSize, y*squareSize, squareSize);
//         noStroke();
//         isGreen = !isGreen;
//       }
//       isGreen = !isGreen;
//     }
//     showCircle();
//   }
  
//   if(colorChange === 1){
//     for (let x = 0; x < 10;x ++){
//       for(let y = 0; y < 10;y ++){
//         if(isRed){ 
//           fill("red");
//         }
//         else{
//           fill("white");
//         }
//         square(x*squareSize, y*squareSize, squareSize);
//         noStroke();
//         isRed = !isRed;
//       }
//       isRed = !isRed;
//     }
//     showCircle();
//   }
  
//   if(colorChange === 2){
//     for (let x = 0; x < 10;x ++){
//       for(let y = 0; y < 10;y ++){
//         if(isBlue){
//           fill("blue");
//         }
//         else{
//           fill("white");
//         }
//         square(x*squareSize, y*squareSize, squareSize);
//         noStroke();
//         isBlue = !isBlue;
//       }
//       isBlue = !isBlue;
//     }
//     showCircle();
//   }
  
//   if(colorChange === 3){
//     for (let x = 0; x < 10;x ++){
//       for(let y = 0; y < 10;y ++){
//         if(isPink){
//           fill("pink");
//         }
//         else{
//           fill("white");
//         }
//         square(x*squareSize, y*squareSize, squareSize);
//         noStroke();
//         isPink = !isPink;
//       }
//       isPink = !isPink;
//     }
//     showCircle();
//   }
//   showCircle();
// }

// function moveCircle() {
//   if (keyIsDown(38)) { //up
//     y -= speed;
//   }
//   if (keyIsDown(40)) { //down
//     y += speed;
//   }
//   if (keyIsDown(39)) { //right
//     x += speed;
//   }
//   if (keyIsDown(37)) { //left
//     x -= speed;
//   }
// }

// function showCircle(){
//   fill("black");
//   circle(25, 25, 45);
//   moveCircle();
//   fill("purple");
//   circle(225, 225, 45);
// }

let x;
let y;
let size = 50;

let colums;
let rows;

let head;
let dying;
let snake;
let direction;
let food;
let score = 0;
let gameState = "start";
let baseSpeed = 2;

let colorChange = 0;
let isGreen = true;
let isRed = true;
let isBlue = true;
let isPink = true;

function setup() {
  createCanvas(500, 500);
  colums = width / size;
  rows = height / size;
}

function mouseWheel(event){
  if (event.delta > 0){
    colorChange += 1;
  }
  else{
    colorChange -= 1;
  }
}

function placeFood() {
  food.x = random(colums);
  food.y = random(rows);
}

function drawBackground() {
  if(colorChange === 0){
    for (let x = 0; x < 10;x ++){
      for(let y = 0; y < 10;y ++){
        if(isGreen){
          fill("lightgreen");
        }
        else{
          fill("white");
        }
        square(x*size, y*size, size);
        noStroke();
        isGreen = !isGreen;
      }
      isGreen = !isGreen;
    }
  }
  
  if(colorChange === 1){
    for (let x = 0; x < 10;x ++){
      for(let y = 0; y < 10;y ++){
        if(isRed){ 
          fill("red");
        }
        else{
          fill("white");
        }
        square(x*size, y*size, size);
        noStroke();
        isRed = !isRed;
      }
      isRed = !isRed;
    }
  }
  
  if(colorChange === 2){
    for (let x = 0; x < 10;x ++){
      for(let y = 0; y < 10;y ++){
        if(isBlue){
          fill("blue");
        }
        else{
          fill("white");
        }
        square(x*size, y*size, size);
        noStroke();
        isBlue = !isBlue;
      }
      isBlue = !isBlue;
    }
  }
  
  if(colorChange >= 3){
    for (let x = 0; x < 10;x ++){
      for(let y = 0; y < 10;y ++){
        if(isPink){
          fill("pink");
        }
        else{
          fill("white");
        }
        square(x*size, y*size, size);
        noStroke();
        isPink = !isPink;
      }
      isPink = !isPink;
    }
  }
}

function draw() {
//   background(220);
  drawBackground();

  if (gameState === 'start') {
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(25);
    text('Snake Game', width / 2, height / 2 - 80);
    textSize(20);
    text("Use up, down, left, right ARROW keys to move and eat", width / 2, height / 2);
    text("Avoid the walls and yourself", width / 2, height / 2 + 50);
    text("Scroll mouse wheel to change background color", width / 2, height / 2 + 100);
    text('Press SPACE to start', width / 2, height / 2 + 150);
    return;
  }
  if (gameState === 'playing') {
    updateSnake();

    // draw food as purple circle
    fill('purple');
    circle(food.x * size + size / 2, food.y * size + size / 2, size - 5);
  
    drawSnake();

    // show score
    fill(0);
    textSize(15);
    textAlign(LEFT, TOP);
    text('Score: ' + score, 10, 10);
  }

  if (gameState === 'gameover') {
    // fill(255, 0, 0, 180);
    // rect(0, 0, width, height);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(25);
    text('GAME OVER', width / 2, height / 2);
    textSize(20);
    text('Final Score: ' + score, width / 2, height / 2 + 50);
    noLoop();
  }
}
moveCircle();

function updateSnake() {
  let headX = snake[snake.length - 1].x + dirctionX;
  let headY = snake[snake.length - 1].y + dirctionY;

  // wrap around screen
  if (headX >= colums){
    headX = 0;
  }
  if (headX < 0){
    headX = colums - 1;
  }
  if (headY >= rows){
    headY = 0;
  }
  if (headY < 0){
    headY = rows - 1;
  }

  snake.push({ x: headX, y: headY });

  // eat food
  if (headX === food.x && headY === food.y) {
    score++;
    placeFood();
  }
  else {
    snake.shift();
  }

}

function drawSnake() {
  fill(0);
  for (let i = 0; i < snake.length; i++) {
    circle(snake[i].x * size + size / 2, size + size / 2, size - 5);
  }
}

function keyPressed() {
  if (keyCode === 32) {
    if (gameState === 'start') {
      gameState = 'playing';
    }
  }
}
  
function moveCircle() {
  if (keyIsDown(38)) { // up
    y -= speed;
  }
  if (keyIsDown(40)) { // down
    y += speed;
  }
  if (keyIsDown(39)) { // right
    x += speed;
  }
  if (keyIsDown(37)) { // left
    x -= speed;
  }
}