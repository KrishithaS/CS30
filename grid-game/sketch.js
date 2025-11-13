// Grid Based Game
// Krishitha Saravanakumar
// 30 November, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Gobal Variables
let cellSize;
const NUMBER_OF_SQUARES = 4;
let rows;
let cols;
let grid;
let gameOn = false;
let score = 0;
let move = false;

function setup() {
  //creating the canvas
  createCanvas(windowWidth * 0.3, windowHeight);
  if(width < height){
    cellSize = Math.floor(width/NUMBER_OF_SQUARES);
  }
  else{
    cellSize = Math.floor(height/NUMBER_OF_SQUARES);
  }
  grid = generateEmptyGrid(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
  
  //Generating the first 2 ransom 2 or 4 blocks
  generateTwoOrFourSquare(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
  generateTwoOrFourSquare(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
}

function draw() {
  background(220);
  displayGrid();
  displayScore();
}


// Used WASD to move 
function keyPressed(){
  move = false;

  if(key === "w"){
    moveUp();
  }
  else if(key === "s"){
    moveDown();
  }
  else if(key === "a"){
    moveLeft();
  }
  else if(key === "d"){
    moveRight();
  }

  //To restart the game
  else if(key === "r"){
    grid = generateEmptyGrid(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
    generateTwoOrFourSquare(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
    generateTwoOrFourSquare(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
    score = 0;
  }

  if (move === true){
    generateTwoOrFourSquare(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
  }
}

//Creating a empty grid
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

//Random 2 or 4 in a random [y][x] location
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
    let randomPick = Math.floor(random(twoOrFourX.length));

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

//Moves blocks right
function moveRight(){
  move = false;

  for(let y = 0; y < NUMBER_OF_SQUARES; y ++){
    for(let x = NUMBER_OF_SQUARES - 2; x >= 0; x --){

      if(grid[y][x] !== 0){
        let nowPos = x;

        while(nowPos < NUMBER_OF_SQUARES - 1 && grid[y][nowPos + 1] === 0){
          grid[y][nowPos + 1] = grid[y][nowPos];
          grid[y][nowPos] = 0;
          nowPos = nowPos + 1;
          move = true;
        }

        if(nowPos < NUMBER_OF_SQUARES - 1 && grid[y][nowPos + 1] === grid[y][nowPos]){
          grid[y][nowPos + 1] = grid[y][nowPos + 1] + grid[y][nowPos];
          grid[y][nowPos] = 0;
          score = score + grid[y][nowPos + 1];
          move = true;
        }
      }
    }
  }
}

//moves blocks to left
function moveLeft(){
  move = false;
  for(let y = 0; y < NUMBER_OF_SQUARES; y ++){
    for(let x = 1; x < NUMBER_OF_SQUARES; x ++){

      if(grid[y][x] !== 0){
        let nowPos = x;

        while(nowPos > 0 && grid[y][nowPos - 1] === 0){
          grid[y][nowPos - 1] = grid[y][nowPos];
          grid[y][nowPos] = 0;
          nowPos = nowPos - 1;
          move = true;
        }

        if(nowPos > 0 && grid[y][nowPos - 1] === grid[y][nowPos]){
          grid[y][nowPos - 1] = grid[y][nowPos - 1] + grid[y][nowPos];
          grid[y][nowPos] = 0;
          score = score + grid[y][nowPos - 1];
          move = true;
        }
      }
    }
  }
}

// moves blocks up
function moveUp(){
  move = false;
  for(let x = 0; x < NUMBER_OF_SQUARES; x ++){
    for(let y = 1; y < NUMBER_OF_SQUARES; y ++){

      if(grid[y][x] !== 0){
        let nowPos = y;

        while(nowPos > 0 && grid[nowPos - 1][x] === 0){
          grid[nowPos - 1][x] = grid[nowPos][x];
          grid[nowPos][x] = 0;
          nowPos = nowPos - 1;
          move = true;
        }

        if(nowPos > 0 && grid[nowPos - 1][x] === grid[nowPos][x]){
          grid[nowPos - 1][x] = grid[nowPos - 1][x] + grid[nowPos][x];
          grid[nowPos][x] = 0;
          score = score +  grid[nowPos - 1][x];
          move = true;
        }
      }
    }
  }
}

//moves block down
function moveDown(){
  move = false;
  for(let x = 0; x < NUMBER_OF_SQUARES; x ++){
    for(let y = NUMBER_OF_SQUARES - 2; y >= 0; y --){

      if(grid[y][x] !== 0){
        let nowPos = y;

        while(nowPos < NUMBER_OF_SQUARES - 1 && grid[nowPos + 1][x] === 0){
          grid[nowPos + 1][x] = grid[nowPos][x];
          grid[nowPos][x] = 0;
          nowPos = nowPos + 1;
          move = true;
        }

        if(nowPos < NUMBER_OF_SQUARES - 1 && grid[nowPos + 1][x] === grid[nowPos][x]){
          grid[nowPos + 1][x] = grid[nowPos + 1][x] + grid[nowPos][x];
          grid[nowPos][x] = 0;
          score = score +  grid[nowPos + 1][x];
          move = true;
        }
      }
    }
  }
}

//Fills the colors and number in the empty grid
function displayGrid(){
  for(let y = 0; y < NUMBER_OF_SQUARES; y ++){
    for(let x = 0; x < NUMBER_OF_SQUARES; x ++){
      fill("#c9bfb5ff");
      stroke("#928271ff");
      strokeWeight(5);
      square(x*cellSize, height/3 + y*cellSize, cellSize);

      if(grid[y][x] !== 0){

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
        noStroke();
        stroke("#928271ff");
        square(x*cellSize, height/3 + y*cellSize, cellSize);

        if(grid[y][x] !== 0){
          textAlign(CENTER, CENTER);
          textSize(cellSize * 0.5);
          fill(0);
          text(grid[y][x], x*cellSize + cellSize/2, height/3 + y*cellSize + cellSize/2);
        }
      }
    }
  }
  gameOn = true;
}

//displays score on top
function displayScore(){
  textAlign(CENTER);
  textSize(40);
  text("Score: " + score, width/2, 100);
}