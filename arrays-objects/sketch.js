// Project Title
// Krishitha Saravanakumar
// 10 October, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 230;
let y = 300;
let allRects = [];

function setup() {
  createCanvas(900, 900);
  showRects();
}

function draw() {
  // background(220);
  // showRects();
}

function showRects(){
  fill(random(255), random(255), random(255));
  for (let i = 0; i < width; i ++){
    for (let o = 0; o < height; o ++){
      rect(20 + x*i, 10 + y*o, 200, 280);

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
//  function cardFlipped(){
  
//   }
//  }

function mousePressed(){
  if(mouseX >= 10 && mouseY >= 10){
    fill("black");
    showRects();
  }
}

