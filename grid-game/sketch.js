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

function setup() {
  createCanvas(windowWidth * 0.443, windowHeight *0.9);
  if(width < height){
    cellSize = Math.floor(width/NUMBER_OF_SQUARES);
  }
  else{
  }
  cellSize = Math.floor(height/NUMBER_OF_SQUARES);
  grid = generateEmptyGrid(NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
}

function draw() {
  background(220);
  displayGrid();
}

function gameStart(){
}



function keyPressed(){
  if(key === "w"){
    //move up
  }
  else if(key === "s"){
    //move down
  }
  else if(key === "a"){
    //move left
  }
  else if(key === "d"){
    //move right
  }
  else if(key === "r"){
    //reset / start a new game
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

function displayGrid(){
  for(let y = 0; y < NUMBER_OF_SQUARES; y ++){
    for(let x = 0; x < NUMBER_OF_SQUARES; x ++){
      if(grid[y][x] === 0){
        square(x*cellSize, y*cellSize, cellSize);
      }
    }
  }
}