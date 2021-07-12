function countingValleys(stepsArray) {
  // Guard Clause
  // Note: Skips execution of code if arguments are not valid
  if (stepsArray.length < 2) {
    throw new Error('Not a valid hike');
  }

  let seaLevel = 0;
  let valleyCount = 0;

  for (let i = 0; i < stepsArray.length; i++) {
    if (stepsArray[i] === 'U') {
      seaLevel++;
    } else if (stepsArray[i] === 'D') {
      seaLevel--;
    } else {
      throw new Error('Not a valid step');
    }

    // Check if Valley then increment count
    // Note: To count as a valley the current step always must be a U
    //   and sea level must be 0. It is also only possible from the second
    //   step onwards.
    if (i > 0 && stepsArray[i] === 'U' && seaLevel === 0) {
      valleyCount++;
    }
  }

  if (seaLevel !== 0) {
    throw new Error('Does not end at sea level');
  }

  return valleyCount;
}

module.exports = countingValleys;
