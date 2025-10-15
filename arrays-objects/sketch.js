// Project Title
// Krishitha Saravanakumar
// 10 October, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 220;
let y = 320;

function setup() {
  createCanvas(windowWidth, windowHeight);
  showRects();
}

function draw() {
  // background(220);
  // showRects();
}

function showRects(){
  for (let i = 0; i < 7; i ++){
    for (let o = 0; o < 3; o ++){
      rect(x*i, y*o, 190, 290);
    }
  }
}
