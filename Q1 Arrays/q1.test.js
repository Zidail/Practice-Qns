import hourglassSum from './q1';

test('should return highest sum in example 1', () => {
  const inputArray = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ];
  const result = hourglassSum(inputArray);
  const expectedResult = 28;

  expect(result).toBe(expectedResult);
});

test('should return highest sum in example 2', () => {
  const inputArray = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ];
  const result = hourglassSum(inputArray);
  const expectedResult = 19;

  expect(result).toBe(expectedResult);
});

test('should return highest sum if all values are negative', () => {
  const inputArray = [
    [-1, -1, -1, -2, -2, -2],
    [-2, -1, -2, -2, -2, -2],
    [-1, -1, -1, -2, -2, -2],
    [-2, -2, -2, -2, -2, -2],
    [-2, -2, -2, -2, -2, -2],
    [-2, -2, -2, -2, -2, -2],
  ];
  const result = hourglassSum(inputArray);
  const expectedResult = -7;

  expect(result).toBe(expectedResult);
});
