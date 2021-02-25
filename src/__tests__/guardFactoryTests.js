// @ts-check

import { guard } from '../factories/guardFactory';

describe('guardFactory', () => {
  it('should return object with validation functionality for supported guard', () => {
    // Arrange
    // Act
    const result = guard('tableSize');
    const hasExpectedFunctionality = [
      Object.prototype.hasOwnProperty.call(result, 'limit'),
      Object.prototype.hasOwnProperty.call(result, 'limitMessage'),
    ].every(functionality => functionality);
    // Assert
    expect(hasExpectedFunctionality).toStrictEqual(true);
  });
  it('should throw an error if the requested interface provider is not supported', () => {
    // Arrange
    // Act
    const result = () => guard('unsupportedInput');
    // Assert
    expect(result).toThrow();
  });
});
