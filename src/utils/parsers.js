// @ts-check

const { Point } = require('../components/Point');

/**

 */
exports.parseTableSize = input => {
  const values = input.split(',');
  return {
    width: values[0],
    height: values[1],
  };
};

exports.parseStartPosition = input => {
  const values = input.split(',');
  return Point(values[0], values[1]);
};

exports.parseCommands = input => input.split(',');
