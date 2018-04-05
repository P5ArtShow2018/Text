var lf = undefined;

function preload() {
  lf = loadFont('Double_Bubble_shadow_italic.otf');
}

function setup() {
  createCanvas(1000,1000)
}

function draw() {
  background(0);
  textFont(lf)
  textAlign(CENTER)
  textSize(100)
  fill(random(0, 255), random(0, 255), random(0, 255));
  text("SYDNEY MARX", mouseX, mouseY)
  text("AND OZAN MIRZA", mouseX, mouseY + 100)
  text("ARE PARTNERS", mouseX, mouseY + 200)
  text("IN CODING",mouseX, mouseY + 300)
  text("YEPPER PEPPER",mouseX, mouseY + 400)
  
  
 
}