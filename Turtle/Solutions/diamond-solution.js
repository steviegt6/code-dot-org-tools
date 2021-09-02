drawDiamond();

function drawDiamond() { 
  drawSide(1); // These are called four times as opposed to being reasonable because of the reasons below.
  drawSide(1);
  drawSide(1);
  drawSide(1 /*4*/); // Normally you'd use parameters. Code.org hates parameters. Don't be like code.org.
}

function drawSide(count) {
  while (count-- > 0) {
    drawStep(3);
    moveForward();
    right();
  }
}

function drawStep(count){
  while (count-- > 0) {
    moveForward();
  turnLeft();
  moveForward();
  right();
  } 
}

function right(){
  turnLeft();
  turnLeft();
  turnLeft();
}
