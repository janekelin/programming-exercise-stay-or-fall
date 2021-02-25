// @ts-check

import interfaceBuilder from '../builders/interfaceBuilder';

describe('interfaceBuilder', () => {
  it('should return object with interface functionality for valid interface providers', () => {
    // Arrange
    // Act
    const result = interfaceBuilder.from('readline');
    const hasExpectedFunctionality = [
      Object.prototype.hasOwnProperty.call(result, 'inform'),
      Object.prototype.hasOwnProperty.call(result, 'prompt'),
    ].every(functionality => functionality);
    // Assert
    expect(hasExpectedFunctionality).toStrictEqual(true);
  });
  it('should throw an error if the requested interface provider is not supported', () => {
    // Arrange
    // Act
    const result = () => interfaceBuilder.from('unsupportedProvider');
    // Assert
    expect(result).toThrow();
  });
});
