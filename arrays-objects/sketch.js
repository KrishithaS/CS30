// Project Title
// Krishitha Saravanakumar
// 10 October, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 220;
let y = 300;
let allRects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  showRects();
}

function draw() {
  // background(220);
  // showRects();
}

function showRects(){
  fill(random(255), random(255), random(255));
  for (let i = 0; i < 8; i ++){
    for (let o = 0; o < 3; o ++){
      rect(100 + x*i, 10 + y*o, 190, 280);
    }
  }
}

function spawnObject(){
  let rects = {
    x: 220,
    y: 320,
    w: 190,
    h: 290,
  };
  allRects.push(rects);
}

function mousePressed(){
  if (mouse === x, y){
    return rect;
  }
}
