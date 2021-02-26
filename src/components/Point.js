// @ts-check

/** @ignore @typedef { import('../@types/globals.d').PointType} PointType */

/**
 * @module Point
 * @constructor
 * @desc Generates a Point object
 * @param {number} x - Coordinate on horizontal axis
 * @param {number} y - Coordinate on vertical axis
 * @returns {PointType} A point in the coordinate system
 */
exports.Point = (x, y) => {
  return {
    x,
    y,
  };
};

/**
 * @module Point
 * @name move
 * @desc Provides information about point's coordinates after the move
 * @param {PointType} param1 Initial point
 * @returns {object} All possible positions after moving
 */
exports.move = ({ x, y }) => {
  return {
    forward: {
      whenFacingNorth: {
        x,
        y: y - 1,
      },
      whenFacingEast: {
        x: x + 1,
        y,
      },
      whenFacingSouth: {
        x,
        y: y + 1,
      },
      whenFacingWest: {
        x: x - 1,
        y,
      },
    },
    backwards: {
      whenFacingNorth: {
        x,
        y: y + 1,
      },
      whenFacingEast: {
        x: x - 1,
        y,
      },
      whenFacingSouth: {
        x,
        y: y - 1,
      },
      whenFacingWest: {
        x: x + 1,
        y,
      },
    },
  };
};
