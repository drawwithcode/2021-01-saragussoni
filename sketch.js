let textSwitch = true;
let rSlider, gSlider, bSlider, vSlider;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  rectMode(CENTER);
  angleMode(DEGREES);
  textSize(20);

  // create sliders
  rSlider = createSlider(0, 255, 200);
  rSlider.position(width / 12, height / 2.4);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(width / 12, height / 2);
  bSlider = createSlider(0, 255, 127);
  bSlider.position(width / 12, height / 1.7);
  vSlider = createSlider(-15, -11, -11);
  vSlider.position(width - width / 6, height / 2);
}

function draw() {
  background(0, 30);

  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  var v = vSlider.value();
  var angle = sin(frameCount) * 750;

  // toggle text
  if (textSwitch == true) {
    push();
    textSize(15);
    textFont("sans-serif");
    stroke(0);
    fill(255);
    text("Red", width / 12 + 4, height / 2.4);
    text("Green", width / 12 + 4, height / 2);
    text("Blue", width / 12 + 4, height / 1.7);
    text("Speed", width - width / 6, height / 2);
    push();
    textAlign(CENTER);
    text(
      "Press T to toggle text and S to save a picture",
      width / 2,
      height / 9
    );
    pop();
  }

  if (textSwitch == false) {
    push();
    background(0, 10);
    pop();
  }

  //shapes
  translate(width / 2, height / 2);
  for (let x = 530; x >= 30; x = x / (v * -0.1)) {
    rotate(frameCount / 3);
    noFill();
    strokeWeight(2);
    stroke(r, g, b, 50);
    rect(0, 0, x, x);
    ellipse(0, 0, angle);
  }
}

// save picture
function keyTyped() {
  if (key == "s" || key == "S") {
    save("Rect.png");
  }
  // toggle text
  if (key == "t" || key == "T") {
    if (textSwitch == true) {
      textSwitch = false;
    } else if (textSwitch == false) {
      textSwitch = true;
    }
  }
}
