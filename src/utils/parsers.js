// @ts-check

/** @ignore @typedef { import('../@types/globals.d').TableSizeType} TableSizeType */
/** @ignore @typedef { import('../@types/globals.d').PointType} PointType */

const { Point } = require('../components/Point');

/**
 * @module parsers
 * @name parseTableSize
 * @desc Parses table size
 * @param {string} input Input from cli prompt
 * @returns {TableSizeType} Object with width and hight of the table
 */
exports.parseTableSize = input => {
  const values = input.split(',');
  return {
    width: +values[0],
    height: +values[1],
  };
};

/**
 * @module parsers
 * @name parseStartPosition
 * @desc Parses table size
 * @param {string} input Input from cli prompt
 * @returns {PointType} A Point object
 */
exports.parseStartPosition = input => {
  const values = input.split(',');
  return Point(+values[0], +values[1]);
};

/**
 * @module parsers
 * @name parseCommands
 * @desc Parses table size
 * @param {string} input Input from cli prompt
 * @returns {number[]} A list of commands
 */
exports.parseCommands = input => input.split(',').map(value => +value);
