import countingValleys from './q2';

test('should error if ends above sea level', () => {
  const inputArray = ['U', 'U', 'U', 'U'];
  const result = () => {
    countingValleys(inputArray);
  };

  expect(result).toThrowError('Does not end at sea level');
});

test('should error if ends below sea level', () => {
  const inputArray = ['D', 'D', 'D', 'D'];
  const result = () => {
    countingValleys(inputArray);
  };

  expect(result).toThrowError('Does not end at sea level');
});

test('should take more than 2 steps', () => {
  const inputArray = [];
  const result = () => {
    countingValleys(inputArray);
  };

  expect(result).toThrowError('Not a valid hike');
});

test('should only allow U and D', () => {
  const inputArray = ['X', 'Y', 'Z'];
  const result = () => {
    countingValleys(inputArray);
  };

  expect(result).toThrowError('Not a valid step');
});

test('should return 1 valley', () => {
  const inputArray = ['D', 'U'];
  const result = countingValleys(inputArray);
  const expectedResult = 1;

  expect(result).toBe(expectedResult);
});

test('should return 2 valley', () => {
  const inputArray = ['D', 'U', 'D', 'U'];
  const result = countingValleys(inputArray);
  const expectedResult = 2;

  expect(result).toBe(expectedResult);
});

test('should return 1 valley for example', () => {
  const inputArray = ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'];
  const result = countingValleys(inputArray);
  const expectedResult = 1;

  expect(result).toBe(expectedResult);
});
