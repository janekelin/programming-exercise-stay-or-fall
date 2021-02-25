module.exports = {
  roots: ['./src'],
  transform: {
    '\\.[jt]s?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
