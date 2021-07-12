import jumpingOnClouds from './q3';

test('should error if less than 2 clouds', () => {
  const inputArray = [0];
  const result = () => {
    jumpingOnClouds(inputArray);
  };

  expect(result).toThrowError('Not a valid input');
});

test('should error if more than 100 clouds', () => {
  const inputArray = new Array(101);
  const result = () => {
    jumpingOnClouds(inputArray);
  };

  expect(result).toThrowError('Not a valid input');
});

test('should error if first cloud is not safe', () => {
  const inputArray = [1, 0, 0, 0, 0];
  const result = () => {
    jumpingOnClouds(inputArray);
  };

  expect(result).toThrowError('Not a valid input');
});

test('should error if last cloud is not safe', () => {
  const inputArray = [0, 0, 0, 0, 1];
  const result = () => {
    jumpingOnClouds(inputArray);
  };

  expect(result).toThrowError('Not a valid input');
});

test('should return 3 steps for example 1', () => {
  const inputArray = [0, 1, 0, 0, 0, 1, 0];
  const result = jumpingOnClouds(inputArray);
  const expectedResult = 3;

  expect(result).toBe(expectedResult);
});

test('should return 4 steps for example 2', () => {
  const inputArray = [0, 0, 1, 0, 0, 1, 0];
  const result = jumpingOnClouds(inputArray);
  const expectedResult = 4;

  expect(result).toBe(expectedResult);
});

test('should return 3 steps for example 3', () => {
  const inputArray = [0, 0, 0, 0, 1, 0];
  const result = jumpingOnClouds(inputArray);
  const expectedResult = 3;

  expect(result).toBe(expectedResult);
});

test('should return 8 steps', () => {
  const inputArray = [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0];
  const result = jumpingOnClouds(inputArray);
  const expectedResult = 8;

  expect(result).toBe(expectedResult);
});
