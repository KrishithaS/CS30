// Project Title
// Krishitha Saravanakumar
// 10 October, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cWidth = 200;
let cHeight = 280;
let cards = [];

function setup() {
  createCanvas(900, 900);
  showRects();
}

function draw() {
  // background(220);
  showRects();
}

function showRects(){
  fill(random(255), random(255), random(255));
  for(let rects of cards){
    for (let i = 0; i < width; i ++){
      for (let o = 0; o < height; o ++){
        rect(rects.x*i, rects.y*o, rects.w, rects.h);
      }
    }
  }
}

function spawnObject(){
  let rects = {
    x: 230,
    y: 300,
    w: cWidth,
    h: cHeight,
    r: random(225),
    b: random(225),
    g: random(255),
  };
  cards.push(rects);
}


function mousePressed(){
  for(let rects of cards){
    if (mouseX > rects.x && mouseX < rects.x + rects.w && mouseY > rects.y && mouseY < rects.y + rects.h){

    }
  }
}
