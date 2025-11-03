// Grid Based Game
// Krishitha Saravanakumar
// 30 November, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 50;
const NUMBER_OF_SQUARES = 4;
let rows;
let cols;
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
}

function draw() {
  background(220);
  displayGrid();
}


// function generateRandomGrid(cols, rows){
//   let newGrid = [];
//   for(let y = 0; y < rows; y ++){
//     newGrid.push([]);
//     for(let x = 0; x < cols; x ++){
//       if(random(100) < 50){
//         newGrid[y].push(0);
//       }
//       else{
//         newGrid[y].push(1);
//       }
//     }
//   }
//   return newGrid;
// }

function displayGrid(){
  for(let y = 0; y < NUMBER_OF_SQUARES; y ++){
    for(let x = 0; x < NUMBER_OF_SQUARES; x ++){
      fill("black");
      square(x*CELL_SIZE, y*CELL_SIZE, CELL_SIZE);
    }
  }
}