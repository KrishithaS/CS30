//Grid Demo
//Learnuig 2D Arrays

//if you're going to hard code the grid, use this!
// let theGrid = [[1, 0, 1, 0],
//                [0, 0, 1, 1],
//                [1, 1, 0, 0],
//                [0, 1, 0, 1]];
// const SQUARE_DIMENSTIONS = 4;


//if you're going to randomize the grid, use this!
let theGrid;
const SQUARE_DIMENSTIONS = 4;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if(width < height){
    cellSize = width/SQUARE_DIMENSTIONS;
  }
  else{
    cellSize = height/SQUARE_DIMENSTIONS;
  }
  theGrid = generateRandomGrid(SQUARE_DIMENSTIONS, SQUARE_DIMENSTIONS);
}

function draw() {
  background(220);
  showGrid();
}

function showGrid() {
  for(let y = 0; y < SQUARE_DIMENSTIONS; y++){
    for(let x = 0; x < SQUARE_DIMENSTIONS; x++){
      if(theGrid[y][x] === 1){
        fill("black");
      }
      else if(theGrid[y][x] === 0){
        fill("white");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function mousePressed(){
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  toggleCell(x, y);
}

function toggleCell(x, y){
  if(theGrid[y][x] === 1){
    theGrid[y][x] = 0;
  }
  else if(theGrid[y][x] === 0){
    theGrid[y][x] = 1;
  }
}

function generateRandomGrid(cols, rows){
  let newGrid = [];
  for(let y = 0; y < rows; y ++){
    newGrid.push([]);
    for(let x = 0; x < cols; x++){
      if(random(100) < 50){
        newGrid[y].push(0);
      }
      else
    }
  }
}