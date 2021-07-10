function hourglassSum(inputArray) {
  // Get Boundaries of Hour Glass
  // Note: the 3 can be changed for dynamic sizing later
  const xBoundary = inputArray[0].length - 3;
  const yBoundary = inputArray.length - 3;

  // Record Highest Sum
  // Note: Negative Infinity is the lowest number possible.
  //  Usage of this depends on what is done later.
  //  Can be replaced with Number.MIN_SAFE_INT
  let highestSum = Number.NEGATIVE_INFINITY;

  // Note: This can be done with a single pass at the cost of space
  // Loop through Each X position
  for (let x = 0; x <= xBoundary; x++) {
    // Loop through Each y position
    for (let y = 0; y <= yBoundary; y++) {
      const sum = sumFromPosition(inputArray, x, y);

      // Update highest sum if needed
      if (sum > highestSum) {
        highestSum = sum;
      }
    }
  }

  return highestSum;
}

// Function for summing hourglass shape
// Note: Function can be used to define any shape
function sumFromPosition(inputArray, x, y) {
  return inputArray[y][x]
    + inputArray[y][x + 1]
    + inputArray[y][x + 2]
    + inputArray[y + 1][x + 1]
    + inputArray[y + 2][x]
    + inputArray[y + 2][x + 1]
    + inputArray[y + 2][x + 2];
}

module.exports = hourglassSum;
