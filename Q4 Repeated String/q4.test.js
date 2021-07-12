import repeatedString from './q4';

test('should count 7 As for Example 1', () => {
  const result = repeatedString('aba', 10);
  const expectedResult = 7;

  expect(result).toBe(expectedResult);
});

test('should count 1000000000000 As for Example 2', () => {
  const result = repeatedString('a', 1000000000000);
  const expectedResult = 1000000000000;

  expect(result).toBe(expectedResult);
});
