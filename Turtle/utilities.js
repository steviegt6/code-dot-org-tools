/* These utilities make use of turtle methods with parameters.
 * See utilities-parameterless.js for parameterless utilities.
 * These classes do not always contain alternatives for eachother.
 */

/*
 * Turns a turtle 180 degrees.
 */
function turnAround() {
  turnLeft(180);
  
  // Parameterless alternative:
  // turnLeft();
  // turnLeft();
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
  turnAround();
  
  while (preservedHeight-- > 0)
    moveForward(); // TODO: Change to use params.
  
  turnAround();
}

// Identical to parameterless, save for using turnRight() instead of slowTurnRight().
/*
 * Returns to the expected original position given an offset on the x-axis.
 */
/*function toOriginalPosition(offset)
{
  // Assuming forward-facing.
  
  // Turn left in order to move back.
  turnLeft();
  
  // Take the specified amount of steps back.
  while (offset-- > 0)
    moveForward();
  
  // Return to original rotation (typically north).
  turnRight();
}*/

// Identical to parameterless, save for using turnRight() instead of slowTurnRight().
/*
 * Draws a row of upper-right squares.
 */
/*function drawRowOfSquares(count) {
  while (count-- > 0) {
    drawUpperRightSquare();
    turnRight();
    moveForward();
    
    // Return to original rotation to maintain purity and loop-safety.
    turnLeft();
  }
}*?

// Identical to parameterless, save for using turnRight() instead of slowTurnRight().
/*
 * Draws a square to the upper-right of the turtle.
 */
/* function drawUpperRightSquare()
{
  // Consider unnesting an allowing usage of rotation through parameters later?
  function drawAndTurn() {
    moveForward();
    turnRight();
  }
  
  // TODO: Use a loop here.
  drawAndTurn();
  drawAndTurn();
  drawAndTurn();
  drawAndTurn();
}*/

/*
 * Calls turnLeft(-90).
 */
function turnRight() {
  turnLeft(-90); // Opposite direction.
}

/* Unused, see turnRight() above. */
// function slowTurnRight()
