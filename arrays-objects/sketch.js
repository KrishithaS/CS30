// Project Title
// Krishitha Saravanakumar
// 10 October, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cWidth = 200;
let cHeight = 280;
let i = 0;
let o = 0;
let cards = [];

function setup() {
  createCanvas(900, 900);
  showRects();
}

function draw() {
  // background(220);
  // showRects();
}

function showRects(){
  for(let rects of cards){
    fill(rects.r, rects.b, rects.g);
    // for (let i = 0; i < width; i ++){
    //   for (let o = 0; o < height; o ++){
    rect(rects.x, rects.y, rects.w, rects.h);
  }
  //   }
  // }
}

function spawnObject(){
  let rects = {
    x: 100,
    y: 100,
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