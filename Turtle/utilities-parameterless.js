/* Utility methods that call turtle methods parameterless. Code.org does not allow you to
 * use the parameters in their functions in earlier lessons for some odd reason, meaning we
 * are forced to use scuffed and questionable methods for performing simple tasks. Loops-galore!
 */

/*
 * Turns a turtle 180 degrees.
 */
function turnAround() {
  // Parameter alternative:
  // turnLeft(180);
  
  turnLeft();
  turnLeft();
}

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
    // Draw a row.
    drawRowOfSquares(width);
    
    // Return to where we were previously.
    toOriginalPosition(width);
    
    // Move forward in order to continue to the next row in a grid.
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
  // Assuming forward-facing.
  
  // Turn left in order to move back.
  turnLeft();
  
  // Take the specified amount of steps back.
  while (offset-- > 0)
    moveForward();
  
  // Return to original rotation (typically north).
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
    
    // Return to original rotation to maintain purity and loop-safety.
    turnLeft();
  }
}

/*
 * Draws a square to the upper-right of the turtle.
 */
function drawUpperRightSquare()
{
  // Consider unnesting an allowing usage of rotation through parameters later?
  function drawAndTurn() {
    moveForward();
    slowTurnRight();
  }
  
  // TODO: Use a loop here.
  drawAndTurn();
  drawAndTurn();
  drawAndTurn();
  drawAndTurn();
}

/* Paramerless-only. */
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
