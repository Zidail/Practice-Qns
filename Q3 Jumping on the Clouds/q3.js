// Note: Constants so we don't have magic numbers floating around
const SAFE_CLOUD = 0;
const DANGER_CLOUD = 1;
const MAX_LENGTH = 100;
const MIN_LENGTH = 2;
const MAX_STEPS_PER_TURN = 2;

function jumpingOnClouds(cloudsArray) {
  // Guard Clause
  // Note: Skips execution of code if arguments are not valid.
  //   Ideally when really coding this out, you'll have a different error for each conditional
  //   When you lack time you can bundle them all together, but it makes debugging harder
  // Constraints: Length must be greater than 2.
  //   Length must be less than or equal to 100.
  //   Starting Cloud must be safe
  //   Ending Cloud must be safe
  if (
    cloudsArray.length < MIN_LENGTH
    || cloudsArray.length > MAX_LENGTH
    || cloudsArray[0] === DANGER_CLOUD
    || cloudsArray[cloudsArray.length - 1] === DANGER_CLOUD
  ) {
    throw new Error('Not a valid input');
  }

  let minSteps = 0;
  let index = 0;

  while (index < cloudsArray.length - 1) {
    // Check which of the next two clouds can be stepped on.
    // Pick the one that increments the index with a higher number.
    // Note: With just 2 steps, you can just use if/else.
    //   You can make it more robust by using a for loop instead.
    //   Time complexity for the loop is just the same as going through the if/else statement
    //     since we're breaking out of it once found.
    for (let step = MAX_STEPS_PER_TURN; step > 0; step--) {
      if (cloudsArray[index + step] === SAFE_CLOUD) {
        index += step;

        // Note: Break out of loop to save calculation cycles.
        break;
      }
    }

    minSteps++;
  }

  return minSteps;
}

module.exports = jumpingOnClouds;
