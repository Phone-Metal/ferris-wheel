
// number of the background rectangles
const n = 200;
// initializing background rectangles the colors
let recs = [];

// image for the background
let img;
// optional color for the background
let bg;

function preload() {
  img = loadImage("./assets/bg.jpg");
}

function setup() {
  createCanvas(1300, 700);
  rectMode(CENTER);
  bg = color(0, 0, 10);
  background(bg);
  // the wheel object
  w = new Wheel(width / 3, height * 2 / 3, 700);
}

function draw() {
  background(img);
  // the background rectangles
  drawRecs();
  // updating and drawing the wheel
  w.update();
  w.render();
}

function drawRecs() {
  if (frameCount % 4 == 0) {
    recs = [];
    for (let i = 0; i < n; i++) {
      let rec = {
        x: random(width),
        y: random(height / 4, height),
        w: random(7, 15),
        h: random(7, 15) / 2,
        col: colorizeRnd()
      }
      recs.push(rec);
    }
  }
  for (let rec of recs) {
    fill(rec.col);
    rect(rec.x, rec.y, rec.w, rec.h, rec.h / 3);
  }
}

function colorize(i) {
  // a function to give color for the cabins according to the cabin's index
  let v = 220;
  let c = [
    color(v, 0, 0),
    color(0, v, 0),
    color(0, 0, v),
    color(v, v, 0),
    color(v, 0, v),
    color(0, v, v),
  ];
  let index = i % 6;
  return c[index];
}

function colorizeRnd() {
  // a function to generate a random color from a list of colors
  let v = 80;
  let c = [
    color(v, 0, 0),
    color(0, v, 0),
    color(0, 0, v),
    color(v, v, 0),
    color(v, 0, v),
    color(0, v, v),
  ];
  let index = floor(random(6));
  return c[index];
}
