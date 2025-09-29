// Interactive Scene
// Krishitha Saravankumar
// 29 September, 2025
//
// Extra for Experts:
// - explore using the mouse wheel as input


let x;
let y;
let isGreen = true;
let squareSize = 50;
let isRed = true;
let isBlue = true;
let colorChange = 0;

function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  showSquare();
  // showCircle();

}

function mouseWheel(event){
  if (event.delta > 0){
    colorChange += 1;
  }
  else{
    colorChange -= 1;
  }
  
}

function showSquare(){
  if(colorChange === 0){
    for (let x = 0; x < 10;x ++){
      for(let y = 0; y < 10;y ++){
        if(isGreen){
          fill("lightgreen");
        }
        else{
          fill("white");
        }
        square(x*squareSize, y*squareSize, squareSize);
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
        square(x*squareSize, y*squareSize, squareSize);
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
        square(x*squareSize, y*squareSize, squareSize);
        noStroke();
        isBlue = !isBlue;
      }
      isBlue = !isBlue;
    }
  }
}

function showCircle(){
  circle(25, 25, 50);
  fill("black");
}