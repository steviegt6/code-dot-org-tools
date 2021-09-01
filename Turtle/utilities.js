// Draw a 3x3 grid of squares, then return to the origin.
drawGridOfSquares(3, 3, true);

/*
 * Draws a grid on the screen.
 */
function drawGridOfSquares(height, width, returnToOrigin)
{
  // Preserve the height in order to reuse the value later.
  var preservedHeight = height;
  
  // Draw a row of squares, navigate to the original position, move forward, repeat.
  while (height-- > 0)
  {
    drawRowOfSquares(width);
    toOriginalPosition(width);
    moveForward();
  }
  
  if (!returnToOrigin)
    return;
    
  // Return to the starting position by turning around, moving back, and turning around to the original direction.
  // This is not context-safe and will not work if the turtle was not north-facing.
  turnLeft();
  turnLeft();
  
  while (preservedHeight-- > 0)
    moveForward(); // TODO: Change to use params once code.org allows it
  
  turnLeft();
  turnLeft();
}

/*
 * Returns to the expected original position given an offset on the x-axis.
 */
function toOriginalPosition(offset)
{
  turnLeft();
  
  while (offset-- > 0)
    moveForward();
  
  slowTurnRight();
}

/*
 * Draws a row of upper-right squares.
 */
function drawRowOfSquares(count) {
  while (count-- > 0) {
    drawUpperRightSquare();
    slowTurnRight();
    moveForward();
    turnLeft();
  }
}

/*
 * Draws a square to the upper-right of the turtle.
 */
function drawUpperRightSquare()
{
  function drawAndTurn() {
    moveForward();
    slowTurnRight();
  }
  
  drawAndTurn();
  drawAndTurn();
  drawAndTurn();
  drawAndTurn();
}

/*
 * Calls turnLeft with default parameters three times as per code.org's requirements.
 * An alternative way of turning right is turnLeft(-90), but they don't allow that early on.
 */
function slowTurnRight() {
  // Call turn left three times to replicate turning right at the end.
  // This is inefficient and trumpted by turnLeft(-90). One can only dream...
  turnLeft();
  turnLeft();
  turnLeft();
}
