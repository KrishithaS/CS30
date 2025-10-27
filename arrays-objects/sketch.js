// Project Title
// Krishitha Saravanakumar
// 10 October, 2025
//
// Extra for Experts:
// - shuffle

//variables

//card width
let cWidth = 120;

//card height
let cHeight = 180;

//starting position
let x = 150; 
let y = 100;

let cards = []; //array
let firstCard = -1;
let secondCard = -1;

let flipTime = 0;
let standardTime = 600;

let gapX = 40;
let gapY = 30;

let canClick = true;

function setup() {
  createCanvas(900, 900);

  //create rectangles for cards
  createRects();
}

function draw() {
  background(200);

  //display cards
  showRects();

  //check if cards match
  isMatch();
}

function createRects(){

  // card colors
  let colors = ["red", "blue", "green", "yellow", "pink", "orange"];
  let allColors = [];

  for (let i = 0; i < colors.length; i++){
    allColors.push(colors[i]);
    allColors.push(colors[i]);
  }

  //Shuffle colors randomly
  shuffle(allColors, true);

  for(let i = 0; i < allColors.length; i ++){
    spawnObject(allColors[i]);
  }

// set cards in 3 x 4 grid
  let startX = 150;
  let startY = 100;

  for(let i = 0; i < cards.length; i++){
    cards[i].x = x;
    cards[i].y = y;
    cards[i].revealed = false;
    cards[i].matched = false;

    x += cWidth + gapX;

    if ((i + 1) % 4 === 0){
      x = startX;
      y += cHeight + gapY;
    }
  }
}

//create single rectangle/card
function spawnObject(cardColor){
  let rects = {
    x: x,
    y: y,
    w: cWidth,
    h: cHeight,
    color: cardColor,
    revealed: false,
    matched: false
  };

  //add card to array
  cards.push(rects);
}

//display cards on canvas
function showRects(){
  for (let rects of cards) {
    if (rects.revealed || rects.matched) {
      fill(rects.color);
    }
    else{
      fill(220);
    }
    rect(rects.x, rects.y, rects.w, rects.h);
  }
}

// check is mouse is over a card and if the card is clicked
function mousePressed(){
  if (canClick){
    for(let i = 0; i < cards.length; i++){
      let rects = cards[i];

      if (mouseX > rects.x && mouseX < rects.x + rects.w && mouseY > rects.y && mouseY < rects.y + rects.h){
        
        if(!rects.revealed && !rects.matched) {
          rects.revealed = true;

          if(firstCard === -1){
            firstCard = i;
          }
          else if(secondCard === -1){
            secondCard = i;
            canClick = false;
            flipTime = millis();
          }
        }
      }
    }
  }
}

// check if the color on the first card match the color on the second card
function isMatch(){
  if(firstCard !== -1 && secondCard !== -1){

    if(millis() - flipTime > standardTime){

      if(cards[firstCard].color === cards[secondCard].color){
        cards[firstCard].matched = true;
        cards[secondCard].matched = true;
      }
      else {
        cards[firstCard].revealed = false;
        cards[secondCard].revealed = false;
      }

      firstCard = -1;
      secondCard = -1;
      canClick = true;
    }
  }
}