// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Declare variables here
let brushColor;

function setup() {
  //This function get run once at the start of the program
  createCanvas(400, 400);
  background(240);

  //initialize brushColor

}

function drawColorPicker(){
  // write code to draw the color picker here:

}

function draw() {
  //This loop gets run over and over again
  brushX = mouseX;
  brushY = mouseY;

  //call the drawColorPicker function
  drawColorPicker();

  if (mouseIsPressed) {
    stroke(150, 0, 0);
    strokeWeight(2);
    line(brushX, brushY, pmouseX, pmouseY);
  }
  // 	text(mouseX + ", " + mouseY, 350, 350);
}


