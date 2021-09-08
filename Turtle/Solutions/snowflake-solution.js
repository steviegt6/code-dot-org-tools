drawSnowflake();

// Draws a snowflake
function drawSnowflake() {
  drawPair();
  drawPair();
  drawPair();
  drawPair();
}

// Draws a pair of long and short arms
function drawPair() {
  drawLongSegment();
  drawShortSegment();
}

// Draws a short arm
function drawShortSegment() {
  moveWithPen(25);
  drawV();
  moveWithPen(25);
  drawV();
  moveWithPen(25);
  moveBackward(75);
  turnRight(45);
}

// Draws a long arm
function drawLongSegment() {
  moveWithPen(125);
  moveBackward();
  drawV();
  moveBackward(100);
  turnRight(45);
}

// Safely lower and raise the pen while moving
function moveWithPen(pixels) {
  penDown();
  moveForward(pixels);
  penUp();
}

// Draw a "v" branching out from the sides.
function drawV() {
  turnLeft(-45);
  moveWithPen(25);
  moveBackward();
  turnLeft(90);
  moveWithPen(25);
  moveBackward();
  turnLeft(-45);
}
