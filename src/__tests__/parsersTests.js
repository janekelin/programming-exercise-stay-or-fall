// @ts-check

const {
  parseTableSize,
  parseStartPosition,
  parseCommands,
} = require('../utils/parsers');

describe('parsers', () => {
  it('should parse table size correctly', () => {
    // Arrange
    const input = '4,2';
    // Act
    const result = parseTableSize(input);
    const expected = {
      width: 3,
      height: 1,
    };
    // Assert
    expect(result).toStrictEqual(expected);
  });
  it('should parse start position correctly', () => {
    // Arrange
    const input = '1,1';
    // Act
    const result = parseStartPosition(input);
    const expected = {
      x: 1,
      y: 1,
    };
    // Assert
    expect(result).toStrictEqual(expected);
  });
  it('should parse command list correctly', () => {
    // Arrange
    const input = '1,2,3,0';
    // Act
    const result = parseCommands(input);
    const expected = [1, 2, 3, 0];
    // Assert
    expect(result).toStrictEqual(expected);
  });
});
