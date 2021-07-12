import sockMerchant from './q1';

test('should return number of pairs in example 1', () => {
  const inputArray = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  const result = sockMerchant(inputArray);
  const expectedResult = 3;

  expect(result).toBe(expectedResult);
});
