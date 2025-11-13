// Grid Based Game
// Krishitha Saravanakumar
// 30 November, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cellSize;
const NUMBER_OF_SQUARES = 4;
let rows;
let cols;
let grid;
let gameOn = false;
let score = 0;
let move = false;
// let startPoint = height/2;
// let gameStart = false;

function setup() {
  createCanvas(windowWidth * 0.3, windowHeight);
  if(width < height){
    cellSize = Math.floor(width/NUMBER_OF_SQUARES);
  }
  else{
    cellSize = Math.floor(height/NUMBER_OF_SQUARES);
  }
  grid = generateEmptyGrid(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
}

function draw() {
  background(220);
  displayGrid();
  displayScore();
  if(gameOn){
    updateGrid();
  }
  // start();
}

// function start(){
//   if (gameStart === turn){
//     generateTwoOrFourSquare(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
//   }
// }



function keyPressed(){
  if(key === "w"){
    moveUp();
    generateTwoOrFourSquare(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
  }
  else if(key === "s"){
    moveDown();
    generateTwoOrFourSquare(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
  }
  else if(key === "a"){
    moveLeft();
    generateTwoOrFourSquare(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
  }
  else if(key === "d"){
    moveRight();
    generateTwoOrFourSquare(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
  }
  else if(key === "r"){
    generateTwoOrFourSquare(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
  }
}


function generateEmptyGrid(cols, rows){
  let newGrid = [];
  for(let y = 0; y < rows; y ++){
    newGrid.push([]);
    for(let x = 0; x < cols; x ++){
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function generateTwoOrFourSquare(cols, rows){
  let twoOrFourX = [];
  let twoOrFourY = [];
  for(let y = 0; y < rows; y ++){
    for(let x = 0; x < cols; x ++){
      if(grid[y][x] === 0){
        twoOrFourX.push(x);
        twoOrFourY.push(y);
      }
    }
  }
  if(twoOrFourX.length > 0){
    let randomPick = random(twoOrFourX.length);
    let x = twoOrFourX[randomPick];
    let y = twoOrFourY[randomPick];
    if(random(100) > 50){
      grid[y][x] = 2;
    }
    else{
      grid[y][x] = 4;
    }
  }
}

function moveRight(grid){
  for(let x = 0; x < NUMBER_OF_SQUARES; x++){
    while(x < NUMBER_OF_SQUARES && grid[y][x] === 0){
      x = x - 1;
    }
  }
}

function moveLeft(grid){
  let nowX; // current place of the block
  for(let y = 0; y < NUMBER_OF_SQUARES; y ++){
    for(let x = 1; x < NUMBER_OF_SQUARES; x ++){
      if(grid[y][x] !== 0){
        nowX = x;
      }
      while(nowX > 0 && grid[y][nowX - 1] === 0){
        grid[y][nowX - 1] = grid[y][nowX];
        grid[y][nowX] = 0;
        nowX = nowX - 1;
      }

      if(nowX > 0 && grid[y][nowX - 1] === grid[y][nowX]){
        grid[y][nowX - 1] = grid[y][nowX - 1] + grid[y][now];
      }
    }
  }
}

function moveUp(grid){
  for(let y = 0; y < NUMBER_OF_SQUARES; y ++){
    while(y > 0 && grid[y][x] === 0){
      y = y - 1;
    }
  }
}

function moveDown(grid){
  for(let y = 0; y < NUMBER_OF_SQUARES; y ++){
    while(y < NUMBER_OF_SQUARES && grid[y][x] === 0){
      y = y + 1;
    }
  }
}

function updateGrid(){
  for(let y = 0; y < NUMBER_OF_SQUARES; y++){
    for(let x = 0; x < NUMBER_OF_SQUARES; x++){
      if(grid[y][x] === 2){
        fill("#e7dbcfff");
      }
      else if(grid[y][x] === 4){
        fill("#e2d4baff");
      }
      else if(grid[y][x] === 8){
        fill("#F2B179");
      }
      else if(grid[y][x] === 16){
        fill("#F59563");
      }
      else if(grid[y][x] === 32){
        fill("#F67C5F");
      }
      else if(grid[y][x] === 64){
        fill("#F65E3B");
      }
      else if(grid[y][x] === 128){
        fill("#EDCF72");
      }
      else if(grid[y][x] === 256){
        fill("#EDCC61");
      }
      else if(grid[y][x] === 512){
        fill("#EDC850");
      }
      else if(grid[y][x] === 1024){
        fill("#EDC53F");
      }
      else if(grid[y][x] === 2048){
        fill("#EDC22E");
      }
      square(x*cellSize, height/3 + y*cellSize, cellSize);
    }
  }
}

function displayGrid(){
  for(let y = 0; y < NUMBER_OF_SQUARES; y ++){
    for(let x = 0; x < NUMBER_OF_SQUARES; x ++){
      if(grid[y][x] === 0){
        fill("#c9bfb5ff");
        stroke("#928271ff");
        strokeWeight(5);
        square(x*cellSize, height/3 + y*cellSize, cellSize);
      }
    }
  }
  gameOn = true;
}

function displayScore(){
  textAlign(CENTER);
  text("Score: ");
}