const SEARCHED_CHAR = 'a';

function repeatedString(searchString, numberOfCharacters) {
  const substringOccurrence = Math.floor(numberOfCharacters / searchString.length);
  const substringRemainder = numberOfCharacters % searchString.length;
  let substringCount = 0;

  // Find out how many of the searched character exists in the string.
  // eslint-disable-next-line no-restricted-syntax
  for (const char of searchString) {
    if (char === SEARCHED_CHAR) {
      substringCount++;
    }
  }

  // Multiply by number of times the substring occurs
  substringCount *= substringOccurrence;

  // Tally remainder of searched character from the trimmed substring
  for (let i = 0; i < substringRemainder; i++) {
    if (searchString[i] === SEARCHED_CHAR) {
      substringCount++;
    }
  }

  return substringCount;
}

module.exports = repeatedString;
